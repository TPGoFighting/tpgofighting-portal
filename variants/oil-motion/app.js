(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const loader = document.getElementById('site-loader');
  const progressBar = document.getElementById('scroll-progress-bar');
  const progressValue = document.getElementById('scroll-progress-value');
  let scrollRaf = 0;

  const finishLoader = () => {
    if (!loader) return;
    loader.classList.add('is-exiting');
    window.setTimeout(() => loader.remove(), 760);
  };

  if (reducedMotion.matches) finishLoader();
  else window.setTimeout(finishLoader, 900);

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.rev, .stagger-card').forEach((element) => revealObserver.observe(element));

  document.querySelectorAll('.motion-card, .contact-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
    }, { passive: true });
  });

  const renderScroll = () => {
    scrollRaf = 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 0;
    if (progressBar) progressBar.style.transform = `scaleY(${progress})`;
    if (progressValue) progressValue.textContent = String(Math.round(progress * 100)).padStart(2, '0');
  };

  const scheduleScroll = () => {
    if (!scrollRaf) scrollRaf = requestAnimationFrame(renderScroll);
  };
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  scheduleScroll();

  const panels = [...document.querySelectorAll('.panel')];
  const tabs = [...document.querySelectorAll('.tab')];
  const selectPanel = (panelName, updateHash = true) => {
    const tab = tabs.find((item) => item.dataset.panel === panelName) || tabs[0];
    const selectedName = tab.dataset.panel;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      const selected = panel.id === `panel-${selectedName}`;
      panel.hidden = !selected;
      panel.classList.toggle('active', selected);
      if (selected) panel.querySelectorAll('.rev, .stagger-card').forEach((element) => element.classList.add('on'));
    });
    if (updateHash) history.replaceState(null, '', `#${selectedName}`);
  };
  tabs.forEach((tab) => tab.addEventListener('click', () => selectPanel(tab.dataset.panel)));
  window.addEventListener('hashchange', () => selectPanel(window.location.hash.slice(1), false));
  selectPanel(window.location.hash.slice(1) || 'products', false);

  const track = document.getElementById('vibe-track');
  const vibeSlides = [...document.querySelectorAll('.vibe-slide')];
  const vibeDots = [...document.querySelectorAll('.vibe-dots button')];
  const vibeIndex = document.getElementById('vibe-index');
  let currentVibe = 0;
  const selectVibe = (index) => {
    currentVibe = (index + vibeSlides.length) % vibeSlides.length;
    if (track) track.style.transform = `translateX(-${currentVibe * 100}%)`;
    vibeSlides.forEach((slide, i) => slide.classList.toggle('active', i === currentVibe));
    vibeDots.forEach((dot, i) => dot.classList.toggle('active', i === currentVibe));
    if (vibeIndex) vibeIndex.textContent = `${String(currentVibe + 1).padStart(2, '0')} / 03`;
  };
  document.getElementById('vibe-prev')?.addEventListener('click', () => selectVibe(currentVibe - 1));
  document.getElementById('vibe-next')?.addEventListener('click', () => selectVibe(currentVibe + 1));
  vibeDots.forEach((dot) => dot.addEventListener('click', () => selectVibe(Number(dot.dataset.vibeIndex))));

  const springBall = document.querySelector('.spring-ball');
  const replaySpring = () => {
    if (!springBall || reducedMotion.matches) return;
    springBall.classList.remove('is-replaying');
    void springBall.offsetWidth;
    springBall.classList.add('is-replaying');
  };
  document.getElementById('replay-spring')?.addEventListener('click', replaySpring);
  document.getElementById('spring-track')?.addEventListener('click', replaySpring);
  document.getElementById('spring-track')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); replaySpring(); }
  });

  const glass = document.querySelector('.glass-backdrop');
  const glassToggle = document.getElementById('toggle-glass');
  glassToggle?.addEventListener('click', () => {
    const enabled = !glass?.classList.toggle('is-off');
    glassToggle.textContent = `blur: ${enabled ? 'on' : 'off'}`;
    glassToggle.setAttribute('aria-pressed', String(enabled));
  });

  const counter = document.getElementById('counter-value');
  const dashboard = document.querySelector('.stage--dashboard');
  if (counter && dashboard && !reducedMotion.matches) {
    const counterObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / 900);
        counter.textContent = String(Math.round(progress * 86));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.disconnect();
    }, { threshold: .45 });
    counterObserver.observe(dashboard);
  }

  const contactModal = document.getElementById('contact-modal');
  const contactDialogTitle = contactModal?.querySelector('[data-dialog-title]');
  const contactDialogSummary = contactModal?.querySelector('[data-dialog-summary]');
  const contactDialogMeta = contactModal?.querySelector('[data-dialog-meta]');
  const contactDialogAction = contactModal?.querySelector('#contact-dialog-action');
  let previousBodyOverflow = '';

  const closeContactModal = () => {
    if (!contactModal) return;
    contactModal.hidden = true;
    document.body.style.overflow = previousBodyOverflow;
  };

  const openContactModal = (card) => {
    if (!contactModal) return;
    previousBodyOverflow = document.body.style.overflow;
    if (contactDialogTitle) contactDialogTitle.textContent = card.dataset.contactTitle || '';
    if (contactDialogSummary) contactDialogSummary.textContent = card.dataset.contactSummary || '';
    if (contactDialogMeta) contactDialogMeta.textContent = card.dataset.contactMeta || '';
    if (contactDialogAction) contactDialogAction.href = card.dataset.contactHref || '#works';
    contactModal.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => contactModal.querySelector('.contact-modal-close')?.focus());
  };

  document.querySelectorAll('.contact-card').forEach((card) => {
    card.querySelector('.contact-open')?.addEventListener('click', (event) => {
      event.stopPropagation();
      openContactModal(card);
    });
    card.addEventListener('click', (event) => {
      if (event.target.closest('button, a')) return;
      openContactModal(card);
    });
  });

  contactModal?.querySelector('#close-contact-modal')?.addEventListener('click', closeContactModal);
  contactModal?.querySelector('#contact-dialog-cancel')?.addEventListener('click', closeContactModal);
  contactDialogAction?.addEventListener('click', closeContactModal);
  contactModal?.addEventListener('click', (event) => {
    if (event.target === contactModal) closeContactModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && contactModal && !contactModal.hidden) closeContactModal();
  });
})();
