tableau.extensions.initializeAsync().then(() => {
    const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

    worksheets.forEach(sheet => {
        sheet.getSummaryDataAsync().then(dataTable => {
            let insightsDiv = document.getElementById("insights");
            insightsDiv.innerHTML = "";

            const columns = dataTable.columns.map(c => c.fieldName);
            const rows = dataTable.data.slice(0, 5);

            rows.forEach(row => {
                const rowData = row.map(cell => cell.formattedValue).join(" | ");
                const p = document.createElement("p");
                p.textContent = rowData;
                insightsDiv.appendChild(p);
            });

            const metricColumnIndex = 1;
            let maxValue = Math.max(...dataTable.data.map(r => parseFloat(r[metricColumnIndex].formattedValue)));
            const insight = document.createElement("p");
            insight.style.fontWeight = "bold";
            insight.textContent = `Maximum value in column "${columns[metricColumnIndex]}": ${maxValue}`;
            insightsDiv.appendChild(insight);
        });
    });
});