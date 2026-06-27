document.addEventListener("DOMContentLoaded", () => {
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");
    const btnFire = document.getElementById("btn-fire");

    let leftInterval = null;
    let rightInterval = null;

    // Helper to dispatch keydown event to window
    function dispatchKey(code) {
        const event = new KeyboardEvent("keydown", {
            keyCode: code,
            bubbles: true,
            cancelable: true
        });
        window.dispatchEvent(event);
    }

    // Touch controls for Left button
    if (btnLeft) {
        btnLeft.addEventListener("touchstart", (e) => {
            e.preventDefault();
            dispatchKey(37); // Move Left
            if (leftInterval) clearInterval(leftInterval);
            leftInterval = setInterval(() => {
                dispatchKey(37);
            }, 50); // Move every 50ms (20vw/sec)
        }, { passive: false });

        btnLeft.addEventListener("touchend", (e) => {
            e.preventDefault();
            if (leftInterval) {
                clearInterval(leftInterval);
                leftInterval = null;
            }
        }, { passive: false });

        btnLeft.addEventListener("touchcancel", (e) => {
            e.preventDefault();
            if (leftInterval) {
                clearInterval(leftInterval);
                leftInterval = null;
            }
        }, { passive: false });

        // Mouse controls (for desktop testing / mobile emulation in devtools)
        btnLeft.addEventListener("mousedown", (e) => {
            e.preventDefault();
            dispatchKey(37);
            if (leftInterval) clearInterval(leftInterval);
            leftInterval = setInterval(() => {
                dispatchKey(37);
            }, 50);
        });

        btnLeft.addEventListener("mouseup", () => {
            if (leftInterval) {
                clearInterval(leftInterval);
                leftInterval = null;
            }
        });

        btnLeft.addEventListener("mouseleave", () => {
            if (leftInterval) {
                clearInterval(leftInterval);
                leftInterval = null;
            }
        });
    }

    // Touch controls for Right button
    if (btnRight) {
        btnRight.addEventListener("touchstart", (e) => {
            e.preventDefault();
            dispatchKey(39); // Move Right
            if (rightInterval) clearInterval(rightInterval);
            rightInterval = setInterval(() => {
                dispatchKey(39);
            }, 50);
        }, { passive: false });

        btnRight.addEventListener("touchend", (e) => {
            e.preventDefault();
            if (rightInterval) {
                clearInterval(rightInterval);
                rightInterval = null;
            }
        }, { passive: false });

        btnRight.addEventListener("touchcancel", (e) => {
            e.preventDefault();
            if (rightInterval) {
                clearInterval(rightInterval);
                rightInterval = null;
            }
        }, { passive: false });

        // Mouse controls
        btnRight.addEventListener("mousedown", (e) => {
            e.preventDefault();
            dispatchKey(39);
            if (rightInterval) clearInterval(rightInterval);
            rightInterval = setInterval(() => {
                dispatchKey(39);
            }, 50);
        });

        btnRight.addEventListener("mouseup", () => {
            if (rightInterval) {
                clearInterval(rightInterval);
                rightInterval = null;
            }
        });

        btnRight.addEventListener("mouseleave", () => {
            if (rightInterval) {
                clearInterval(rightInterval);
                rightInterval = null;
            }
        });
    }

    // Touch and mouse controls for Fire button
    if (btnFire) {
        btnFire.addEventListener("touchstart", (e) => {
            e.preventDefault();
            dispatchKey(70); // Fire (F key)
        }, { passive: false });

        btnFire.addEventListener("mousedown", (e) => {
            e.preventDefault();
            dispatchKey(70);
        });
    }
});
