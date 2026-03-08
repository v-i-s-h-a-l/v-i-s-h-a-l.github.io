/*
 * QR Code drawing utility — uses qrcode-generator (proven CDN library).
 * Renders themed QR codes to canvas with rounded modules.
 */
(function(global) {
    'use strict';

    let qrLib = null;
    let libReady = false;
    const pending = [];

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
    script.onload = function() {
        qrLib = qrcode;
        libReady = true;
        pending.forEach(fn => fn());
        pending.length = 0;
    };
    document.head.appendChild(script);

    function drawQR(canvasId, url) {
        function render() {
            const canvas = document.getElementById(canvasId);
            if (!canvas || !qrLib) return;

            const qr = qrLib(0, 'L');
            qr.addData(url);
            qr.make();

            const ctx = canvas.getContext('2d');
            const moduleCount = qr.getModuleCount();
            const canvasSize = canvas.width;
            const scale = Math.floor(canvasSize / (moduleCount + 8));
            const offset = Math.floor((canvasSize - moduleCount * scale) / 2);

            ctx.clearRect(0, 0, canvasSize, canvasSize);

            const isDark = document.documentElement.dataset.theme === 'dark';
            const fg = isDark ? '#ececf1' : '#1a1a2e';
            const accent = isDark ? '#d4a053' : '#9a6b34';

            for (let r = 0; r < moduleCount; r++) {
                for (let c = 0; c < moduleCount; c++) {
                    if (qr.isDark(r, c)) {
                        const inFinder = (r < 7 && c < 7) ||
                            (r < 7 && c >= moduleCount - 7) ||
                            (r >= moduleCount - 7 && c < 7);
                        ctx.fillStyle = inFinder ? accent : fg;
                        const x = offset + c * scale;
                        const y = offset + r * scale;
                        const s = scale - 1;
                        const rad = s * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(x + rad, y);
                        ctx.lineTo(x + s - rad, y);
                        ctx.quadraticCurveTo(x + s, y, x + s, y + rad);
                        ctx.lineTo(x + s, y + s - rad);
                        ctx.quadraticCurveTo(x + s, y + s, x + s - rad, y + s);
                        ctx.lineTo(x + rad, y + s);
                        ctx.quadraticCurveTo(x, y + s, x, y + s - rad);
                        ctx.lineTo(x, y + rad);
                        ctx.quadraticCurveTo(x, y, x + rad, y);
                        ctx.fill();
                    }
                }
            }
        }

        if (libReady) render();
        else pending.push(render);
    }

    global.QRCode = { draw: drawQR };
})(window);
