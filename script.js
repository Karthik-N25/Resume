function barChart(){

    var xValues = ["C#", "PML", "HTML", "CSS", "JavaScript"];
    var yValues = [70, 80, 30, 20, 30, 0];
    var barColors = ["#f19874", "#f19874", "#f19874", "#f19874", "#f19874"];

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Expertise level in Languages"
            }
        }
    });
}