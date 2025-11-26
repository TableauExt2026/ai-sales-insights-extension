tableau.extensions.initializeAsync().then(() => {
    const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
    let output = "Top 5 rows and columns info:\n";

    worksheets.forEach(ws => {
        ws.getSummaryDataAsync().then(dataTable => {
            const cols = dataTable.columns.map(c => c.fieldName).join(", ");
            output += `Worksheet: ${ws.name}\nColumns: ${cols}\n\n`;
            document.getElementById("insights").innerText = output;
        });
    });
});