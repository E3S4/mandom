const { contextBridge } = require("electron");
const activeWin = require("active-win");

let currentApp = null;
let startTime = Date.now();
let timeline = [];

// Stando
function getStand(app) {

    const a = (app || "").toLowerCase();

    if (a.includes("code")) return { name: "Star Compiler", type: "Focus Stand", power: "A", color: "#7c5cff" };
    if (a.includes("chrome")) return { name: "Silver Scroll", type: "Distraction Stand", power: "C", color: "#ff4d6d" };
    if (a.includes("discord")) return { name: "Echo Chamber", type: "Social Stand", power: "B", color: "#4dabf7" };
    if (a.includes("spotify")) return { name: "Sound Garden", type: "Support Stand", power: "B", color: "#51cf66" };

    return { name: "Unknown Stand", type: "???", power: "C", color: "#adb5bd" };
}

//ACTIVE WINDOW TRACKER
async function track() {
    try {

        const win = await activeWin();

        if (!win) return;

        const app = win.owner?.name || "Unknown";

        // debug 
        console.log("Detected:", app);

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
        }

    } catch (err) {
        console.log("active-win error:", err);
    }
}

setInterval(track, 2000);

// EXPOSE TO RENDERER SAFELY
contextBridge.exposeInMainWorld("mandom", {

    getCurrent: () => currentApp,

    getStand: () => getStand(currentApp),

    getTimeline: () => timeline
});