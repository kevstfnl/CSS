document.addEventListener("pointerdown", processWave);
document.addEventListener("keydown", processWaveFromKeyboard);

function processWave(e) {
    if (e.button !== undefined && e.button !== 0) return;

    const target = e.target;
    if (!(target instanceof Element)) return;

    const host = target.closest("button.btn");
    if (!(host instanceof HTMLElement)) return;

    const rect = host.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    createRipple(host, x, y);
}

function processWaveFromKeyboard(e) {
    if (e.repeat || (e.key !== "Enter" && e.key !== " ")) return;

    const target = e.target;
    if (!(target instanceof Element)) return;

    const host = target.closest("button.btn");
    if (!(host instanceof HTMLElement)) return;

    const rect = host.getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;

    createRipple(host, x, y);
}

function createRipple(host, x, y) {
    const rect = host.getBoundingClientRect();
    const distanceX = Math.max(x, rect.width - x);
    const distanceY = Math.max(y, rect.height - y);
    const maxRadius = Math.hypot(distanceX, distanceY);
    const scale = Math.max(8, maxRadius / 8);

    const ripple = document.createElement("span");
    ripple.className = "waves-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.setProperty("--wave-scale", `${scale}`);

    host.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}
