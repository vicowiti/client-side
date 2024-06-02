
import { Chart } from "react-google-charts";



export function Donut() {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7], // CSS-style declaration
    ];

    const options = {
        title: "Acquisition vs Potential",
        pieHole: 0.4,
        is3D: false,
    };
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
        />
    );
}
