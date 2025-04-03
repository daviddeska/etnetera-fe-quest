const attendanceGraph = document.getElementById("attendance-graph");

function generateHourLabels(startHour = 8, endHour = 22, halfHours = true) {
    const labels = [];
    for (let h = startHour; h <= endHour; h++) {
        labels.push(`${h}:00`);
        if (halfHours && h !== endHour) labels.push(`${h}:30`);
    }
    return labels;
}



function getRandomHeight() {
    return Math.floor(Math.random() * (66 - 12 + 1)) + 12;
}

function getColorByHeight(height) {
    if (height <= 29) return '#ffc59b';
    if (height <= 49) return '#f88c6c';
    return '#e64e21';
}



function renderGraph() {
    attendanceGraph.innerHTML = "";

    const isMobile = window.innerWidth <= 699;
    const hours = generateHourLabels(8, 22, !isMobile); // ← funguje perfektně

    hours.forEach(hour => {
        const height = getRandomHeight();
        const color = getColorByHeight(height);

        const barGroup = document.createElement("div");
        barGroup.classList.add("bar-group");

        const label = document.createElement("div");
        label.classList.add("bar-label");

        const isFullHour = hour.endsWith(":00");

        if (isMobile || isFullHour) {
            label.textContent = hour;
        } else {
            label.textContent = "";
        }

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.dataset.hour = hour;
        bar.style.backgroundColor = color;

            bar.style.height = `${height}px`;
            bar.style.width = "17px";
            bar.style.borderRadius = "25px 25px 0 0";
            barGroup.appendChild(bar);
            barGroup.appendChild(label);


        attendanceGraph.appendChild(barGroup);
    });
}


window.addEventListener("resize", renderGraph);
renderGraph();
setInterval(() => {
    renderGraph();
}, 30000);