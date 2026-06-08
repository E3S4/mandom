const { contextBridge } = require("electron");
const activeWin = require("active-win");

let currentApp = null;
let startTime = Date.now();
let timeline = [];

function getStand(app) {

    const a = (app || "").toLowerCase();

    if (a.includes("code")) return { name: "Star Compiler", type: "Focus Stand", color: "#7c5cff" };
    if (a.includes("chrome")) return { name: "Silver Scroll", type: "Distraction Stand", color: "#ff4d6d" };
    if (a.includes("discord")) return { name: "Echo Chamber", type: "Social Stand", color: "#4dabf7" };
    if (a.includes("spotify")) return { name: "Sound Garden", type: "Support Stand", color: "#51cf66" };

    return { name: "Unknown Stand", type: "???", color: "#adb5bd" };
}

async function track() {

    try {

        const win = await activeWin();
        if (!win) return;

        const app = win.owner?.name || "Unknown";

        if (app !== currentApp) {

            const now = Date.now();

            if (currentApp) {
                timeline.push({
                    app: currentApp,
                    start: startTime,
                    end: now
                });
            }

            currentApp = app;
            startTime = now;

            console.log("Detected:", app);
        }

    } catch (err) {
        console.log("active-win error:", err);
    }
}

setInterval(track, 2000);

contextBridge.exposeInMainWorld("mandom", {

    getCurrent: () => currentApp,

    getStand: () => getStand(currentApp),

    getTimeline: () => timeline
});