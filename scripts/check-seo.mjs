import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('../', import.meta.url).pathname);
const read = (file) => readFileSync(path.join(ROOT, file), 'utf8');
const fail = (message) => {
  throw new Error(message);
};
const assert = (condition, message) => condition || fail(message);

const html = read('index.html');
const robots = read('robots.txt');
const sitemap = read('sitemap.xml');
const llms = read('llms.txt');
const ai = read('ai.txt');

assert(/<html[^>]+lang=["']zh-CN["']/i.test(html), 'index.html 缺少 lang="zh-CN"');
assert(/<meta name=["']description["'][^>]+content=["'][^"']{40,}["']/i.test(html), 'description 过短或缺失');
assert(/<meta name=["']robots["'][^>]+index,follow/i.test(html), '缺少 index,follow robots 指令');
assert(/<link rel=["']canonical["'][^>]+https:\/\/tpgofighting\.top\//i.test(html), 'canonical 不正确');
assert(/application\/ld\+json/i.test(html), '缺少 JSON-LD');
const jsonLd = [...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
jsonLd.forEach((match) => JSON.parse(match[1]));

assert(/Sitemap:\s*https:\/\/tpgofighting\.top\/sitemap\.xml/i.test(robots), 'robots.txt 缺少 sitemap');
for (const crawler of ['GPTBot', 'Google-Extended', 'ClaudeBot', 'Bytespider']) {
  const block = robots.match(new RegExp(`User-agent: ${crawler}[\\s\\S]*?(?=User-agent:|Sitemap:|$)`));
  assert(block && /Allow:\s*\//.test(block[0]), `${crawler} 未允许抓取`);
}
assert(/<loc>https:\/\/tpgofighting\.top\/<\/loc>/.test(sitemap), 'sitemap 缺少规范首页');
for (const [file, content] of [['llms.txt', llms], ['ai.txt', ai]]) {
  assert(content.includes('https://tpgofighting.top/'), `${file} 缺少规范首页`);
  assert(content.includes('TPrompts'), `${file} 缺少核心项目事实`);
}
for (const file of ['robots.txt', 'sitemap.xml', 'llms.txt', 'ai.txt']) {
  assert(existsSync(path.join(ROOT, file)), `缺少 ${file}`);
}

console.log('SEO 检查通过：元数据、JSON-LD、robots、sitemap、llms.txt、ai.txt 均存在且可解析。');
