const attendanceGraph = document.getElementById("attendance-graph");

function generateHalfHourLabels(startHour = 8, endHour = 22) {
    const labels = [];
    for (let h = startHour; h <= endHour; h++) {
        labels.push(`${h}:00`);
        if (h !== endHour) labels.push(`${h}:30`);
    }
    return labels;
}

const hours = generateHalfHourLabels();

// Výška od 12 do 66 px
function getRandomHeight() {
    return Math.floor(Math.random() * (66 - 12 + 1)) + 12;
}

// Barva podle výšky
function getColorByHeight(height) {
    if (height <= 29) return '#ffc59b';  // light orange
    if (height <= 49) return '#f88c6c';  // orange
    return '#e64e21';                    // red
}

function renderGraph() {
    attendanceGraph.innerHTML = "";

    hours.forEach(hour => {
        const height = getRandomHeight();
        const color = getColorByHeight(height);

        const barGroup = document.createElement("div");
        barGroup.classList.add("bar-group");

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.dataset.hour = hour;
        bar.style.height = `${height}px`;
        bar.style.backgroundColor = color;

        const label = document.createElement("div");
        label.classList.add("bar-label");
        if (hour.endsWith(":00")) {
            label.textContent = hour;
        }

        barGroup.appendChild(bar);
        barGroup.appendChild(label);
        attendanceGraph.appendChild(barGroup);
    });
}

renderGraph();
setInterval(() => {
    renderGraph();
}, 30000);