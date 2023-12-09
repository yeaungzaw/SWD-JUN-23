import Chart from "chart.js/auto";
import "./index.css";


const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', "Blue", "Green", "Yellow", "Orange", "Purple"],
        datasets: [
            {
                label: '# of A',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 3,
            },            
            {
                label: '# of B',
                data: [4, 22, 2, 10, 0, 25],
                borderWidth: 3,
            },            
            {
                label: '# of C',
                data: [30, 20, 18, 12, 2, 0],
                borderWidth: 3,
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})