
import { Chart } from "react-google-charts";

interface Props {
    totalProduct: number
}

export function Donut(props: Props) {
    const data = [
        ["Task", "Hours per Day"],
        ["Used", props.totalProduct],
        ["Potential", 3 - props.totalProduct],

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
