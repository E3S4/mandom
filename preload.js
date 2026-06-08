const { contextBridge } = require("electron");
const activeWin = require("active-win");

let currentApp = null;
let startTime = Date.now();
let timeline = [];

function getStand(app) {

    const a = (app || "").toLowerCase();

    // 💻 DEV STANDS
    if (a.includes("code")) return {
        name: "Star Compiler",
        type: "Focus Stand",
        color: "#7c5cff"
    };

    if (a.includes("visual studio")) return {
        name: "Binary Apostle",
        type: "Logic Stand",
        color: "#845ef7"
    };

    if (a.includes("intellij")) return {
        name: "Jet Brainstorm",
        type: "Algorithm Stand",
        color: "#cc5de8"
    };

    if (a.includes("github")) return {
        name: "Code Graveyard",
        type: "Archive Stand",
        color: "#adb5bd"
    };

    // 🌐 BROWSERS
    if (a.includes("chrome")) return {
        name: "Silver Scroll",
        type: "Distraction Stand",
        color: "#ff4d6d"
    };

    if (a.includes("msedge") || a.includes("edge")) return {
        name: "Azure Rift",
        type: "Balanced Stand",
        color: "#4dabf7"
    };

    if (a.includes("firefox")) return {
        name: "Flame Oracle",
        type: "Knowledge Stand",
        color: "#ff922b"
    };

    if (a.includes("brave")) return {
        name: "Lion Firewall",
        type: "Defensive Stand",
        color: "#f59f00"
    };

    // 💬 SOCIAL
    if (a.includes("discord")) return {
        name: "Echo Chamber",
        type: "Social Stand",
        color: "#4dabf7"
    };

    if (a.includes("telegram")) return {
        name: "Ghost Signal",
        type: "Encrypted Stand",
        color: "#339af0"
    };

    if (a.includes("whatsapp")) return {
        name: "Green Signal",
        type: "Communication Stand",
        color: "#51cf66"
    };

    if (a.includes("instagram")) return {
        name: "Mirror Scroll",
        type: "Attention Stand",
        color: "#f06595"
    };

    // 🎵 MUSIC
    if (a.includes("spotify")) return {
        name: "Sound Garden",
        type: "Support Stand",
        color: "#51cf66"
    };

    if (a.includes("youtube music")) return {
        name: "Video Sonata",
        type: "Rhythm Stand",
        color: "#ff6b6b"
    };

    if (a.includes("apple music")) return {
        name: "Ethereal Beat",
        type: "Harmony Stand",
        color: "#ff8787"
    };

    // 🎮 GAMING
    if (a.includes("steam")) return {
        name: "Game Vault",
        type: "Entertainment Stand",
        color: "#1e90ff"
    };

    if (a.includes("epic games")) return {
        name: "Fortress Launcher",
        type: "Battle Stand",
        color: "#495057"
    };

    if (a.includes("minecraft")) return {
        name: "Block Reality",
        type: "Creation Stand",
        color: "#2b8a3e"
    };

    if (a.includes("valorant")) return {
        name: "Aim Phantom",
        type: "Precision Stand",
        color: "#ff4655"
    };

    // 📚 PRODUCTIVITY
    if (a.includes("notion")) return {
        name: "Memory Archive",
        type: "Organization Stand",
        color: "#adb5bd"
    };

    if (a.includes("obsidian")) return {
        name: "Black Grimoire",
        type: "Knowledge Stand",
        color: "#495057"
    };

    if (a.includes("excel")) return {
        name: "Data Engine",
        type: "Calculation Stand",
        color: "#2f9e44"
    };

    if (a.includes("word")) return {
        name: "Script Weaver",
        type: "Writing Stand",
        color: "#228be6"
    };

    // 🎬 MEDIA
    if (a.includes("vlc")) return {
        name: "Frame Runner",
        type: "Playback Stand",
        color: "#ff922b"
    };

    if (a.includes("netflix")) return {
        name: "Dream Stream",
        type: "Illusion Stand",
        color: "#e03131"
    };

    // 💻 SYSTEM
    if (a.includes("file explorer")) return {
        name: "Directory Walker",
        type: "Navigation Stand",
        color: "#868e96"
    };

    if (a.includes("settings")) return {
        name: "Control Core",
        type: "System Stand",
        color: "#ced4da"
    };

    // fallback
    return {
        name: "Unknown Stand",
        type: "???",
        color: "#adb5bd"
    };
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