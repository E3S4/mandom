const status = document.getElementById("status");
const standName = document.getElementById("standName");
const timelineBox = document.getElementById("timeline");

// MAIN UI LOOP
function updateUI() {

    const app = window.mandom?.getCurrent?.();
    const stand = window.mandom?.getStand?.();
    const timeline = window.mandom?.getTimeline?.();

    // 💀 
    if (!app) {
        status.innerText = "Stand Dormant...";
        standName.innerText = "Waiting for host...";
        return;
    }

    // 🧠 
    status.innerText = `🧠 ${app}`;

    // 🌀 
    standName.innerHTML = `
        ${stand.name}<br>
        <span style="font-size:0.8rem;opacity:0.7">
            ${stand.type} | Power ${stand.power}
        </span>
    `;

    // 📜(LAST 5)
    if (timeline && timeline.length > 0) {

        timelineBox.innerHTML = timeline
            .slice(-5)
            .reverse()
            .map(t => {
                return `<div class="item">⏳ ${t.app}</div>`;
            })
            .join("");
    } else {
        timelineBox.innerHTML = `<div class="item">No timeline yet...</div>`;
    }
}

// 
setInterval(updateUI, 1000);