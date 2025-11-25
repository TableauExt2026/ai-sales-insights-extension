document.getElementById('generate-insights').addEventListener('click', function() {
    var outputDiv = document.getElementById('insights-output');
    outputDiv.innerHTML = "<p>Generating insights... (demo)</p>";
    setTimeout(function() {
        outputDiv.innerHTML = "<p>Sales insights generated! (demo)</p>";
    }, 1000);
});
