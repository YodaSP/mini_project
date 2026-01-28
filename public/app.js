(() => {
  const form = document.getElementById('interview-form');
  const nameInput = document.getElementById('name');
  const skillInput = document.getElementById('skill');
  const readyBtn = document.getElementById('ready-btn');

  const overlay = document.getElementById('celebration');
  const wishLine = document.getElementById('wish-line');
  const detailLine = document.getElementById('detail-line');
  const againBtn = document.getElementById('again-btn');

  const launchConfetti = () => {
    if (typeof confetti !== 'function') return;

    const duration = 2600;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors: ['#53d1ff', '#9cff6f', '#ffffff']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors: ['#53d1ff', '#9cff6f', '#ffffff']
      });

      if (Date.now() < end) requestAnimationFrame(frame);
      else confetti({ particleCount: 180, spread: 90, origin: { y: 0.6 } });
    })();
  };

  const toTitle = (s) => s.replace(/\s+/g, ' ').trim();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = toTitle(nameInput.value) || 'Champion';
    const skill = toTitle(skillInput.value) || 'DevOps';

    wishLine.textContent = `All the Best, ${name}!`;
    detailLine.textContent = `Go crush it with your ${skill} skills.`;

    try {
      if (document.documentElement.requestFullscreen) {
        // Best-effort fullscreen; some browsers may block it.
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch (_) {}

    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');

    launchConfetti();
  });

  againBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    setTimeout(() => {
      nameInput.focus();
    }, 100);
  });
})();
