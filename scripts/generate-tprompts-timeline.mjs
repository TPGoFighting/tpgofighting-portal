import { mkdir, writeFile } from "node:fs/promises";

const fps = 60;
const frameDuration = 1 / fps;
const segmentFrames = [24, 24];
const states = [
  { id: "idle", holdFrame: 0 },
  { id: "linking", holdFrame: segmentFrames[0] },
  { id: "prompt-ready", holdFrame: segmentFrames[0] + segmentFrames[1] },
];

const segments = states.slice(1).map((state, index) => {
  const startFrame = states[index].holdFrame;
  const holdFrame = state.holdFrame;
  return {
    id: index === 0 ? "tprompts-link" : "tprompts-confirm",
    from: states[index].id,
    to: state.id,
    start: startFrame * frameDuration,
    hold: holdFrame * frameDuration,
    endExclusive: (holdFrame + 1) * frameDuration,
    curve: { type: "constant", rate: 1 },
  };
});

const timeline = {
  schemaVersion: 1,
  fps,
  frameDuration,
  initialState: "idle",
  states: states.map((state) => ({
    id: state.id,
    hold: state.holdFrame * frameDuration,
  })),
  segments,
};

await mkdir("build", { recursive: true });
await writeFile("build/timeline.json", `${JSON.stringify(timeline, null, 2)}\n`);
