let rr = 0, tier = 0, sub = 1;

const ranks = [
    ["Bronze", 3, "🛖"],
    ["Silver", 3, "🪩"],
    ["Gold", 4, "🪙"],
    ["Platinum", 5, "💎"],
    ["Ascendant", 5, "❇️"],
    ["Legend", 5, "👑"],
    ["Honor", 5, "⚡"],
    ["Immortal", 6, "🔥"],
    ["Radiant", 1, "🌟"]
];

let players = [];

// --- System Functions ---

function saveData() {
    localStorage.setItem("rankData", JSON.stringify({ rr, tier, sub }));
}

function loadData() {
    let data = JSON.parse(localStorage.getItem("rankData"));
    if (data) {
        rr = data.rr;
        tier = data.tier;
        sub = data.sub;
    }
}

function calcWin() {
    let k = +document.getElementById("kill").value || 0;
    let d = +document.getElementById("death").value || 0;
    let a = +document.getElementById("assist").value || 0;
    let baseGain = 15;
    let performance = (k * 1.2) + (a * 0.4) - (d * 0.5);
    let totalGain = baseGain + performance;

    if (tier <= 4) {
        totalGain *= 2.0;
        if (totalGain < 35) totalGain = 35;
    } else if (tier >= 5 && tier <= 6) {
        if (totalGain < 15) totalGain = 15;
        if (totalGain > 28) totalGain = 28;
    } else {
        totalGain = 8 + (performance * 0.3);
        if (totalGain < 5) totalGain = 5;
        if (totalGain > 15) totalGain = 15;
    }
    return Math.floor(totalGain);
}

function calcLose() {
    let k = +document.getElementById("kill").value || 0;
    let d = +document.getElementById("death").value || 0;
    let baseLoss = 15;
    let performance = (k * 0.5) - (d * 0.3);
    let totalLoss = baseLoss - performance;

    if (tier <= 4) {
        totalLoss *= 0.6;
        if (totalLoss > 12) totalLoss = 12;
    } else {
        if (totalLoss < 12) totalLoss = 12;
        if (totalLoss > 25) totalLoss = 25;
    }
    return -Math.floor(totalLoss);
}

// --- Action Functions ---

function win() {
    let res = document.getElementById("result");
    let add = calcWin();
    rr += add;
    res.innerText = "VICTORY +" + add + " RR";
    res.style.color = "#22c55e";
    rankUp();
    saveData();
    updateUI();
}

function lose() {
    let res = document.getElementById("result");
    let m = calcLose();
    rr += m;
    res.innerText = "DEFEAT " + m + " RR";
    res.style.color = "#ef4444";
    if (rr < 0) rankDown();
    saveData();
    updateUI();
}

function triggerRankUpAnim() {
    const box = document.getElementById("rankBox");
    box.classList.remove("animate-rank-up");
    void box.offsetWidth; // Force reflow
    box.classList.add("animate-rank-up");
}

function rankUp() {
    let didRankUp = false;
    while (rr >= 100) {
        if (tier === ranks.length - 1) break;
        rr -= 100;
        sub++;
        didRankUp = true;
        if (sub > ranks[tier][1]) {
            sub = 1;
            tier++;
        }
    }
    if (didRankUp) triggerRankUpAnim();
}

function rankDown() {
    while (rr < 0) {
        if (sub > 1) {
            sub--;
            rr += 100;
        } else if (tier > 0) {
            tier--;
            sub = ranks[tier][1];
            rr += 100;
        } else {
            rr = 0;
            break;
        }
    }
}

function updateUI() {
    let rankTitle = document.getElementById("rank");
    let icon = document.getElementById("icon");
    let bar = document.getElementById("bar");
    let rrText = document.getElementById("rrText");

    let rankName = ranks[tier][0];
    icon.innerText = ranks[tier][2];

    if (rankName === "Radiant") {
        bar.style.width = "100%";
        rrText.innerText = rr + " POINT";
        rankTitle.innerText = rankName + " (" + rr + ")";
    } else {
        bar.style.width = rr + "%";
        rrText.innerText = rr + " / 100 RR";
        rankTitle.innerText = rankName + " " + sub;
    }
}

function generateLeaderboard() {
    const board = document.getElementById("board");
    const fixedNames = [
        "ShadowXNika", "IronWill", "VoidWalker", "RadiantStar", "AceXTakapedia",
        "LunarEcho", "SkyHigh", "FrostByte", "CrimsonViper", "Blitz"
    ];

    players = [];
    for (let i = 0; i < 10; i++) {
        players.push({
            name: fixedNames[i],
            pts: Math.floor(Math.random() * 5000) + 1000
        });
    }

    players.sort((a, b) => b.pts - a.pts);
    let html = "";
    players.forEach((p, i) => {
        let style = "";
        if (i === 0) style = "color: #fbbf24; font-weight: bold;";
        if (i === 1) style = "color: #94a3b8;";
        if (i === 2) style = "color: #d97706;";
        html += `<div class="player" style="${style}">#${i + 1} ${p.name} - ${p.pts} RR</div>`;
    });
    board.innerHTML = html;
}

// --- Initialize ---
loadData();
generateLeaderboard();
updateUI();