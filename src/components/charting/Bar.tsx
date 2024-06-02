import { Chart } from "react-google-charts";
import { School } from "../../types/global";
import { getNumbers } from "../../utils/global";




interface Props {
    schools: School[];

}


export function Bar(props: Props) {

    const analytics = props.schools.filter(school => school.products.includes("1"));
    const finance = props.schools.filter(school => school.products.includes("2"));
    const timetable = props.schools.filter(school => school.products.includes("3"));

    console.log(analytics, finance, timetable);


    const data = [
        ["Type", "Primary", "Secondary", "IGCSE"],
        ["Zeraki Analytics", getNumbers(analytics, "primary"), getNumbers(analytics, "secondary"), getNumbers(analytics, "igcse")],
        ["Zeraki Finance", getNumbers(finance, "primary"), getNumbers(finance, "secondary"), getNumbers(finance, "igcse")],
        ["Zeraki Analytics", getNumbers(timetable, "primary"), getNumbers(timetable, "secondary"), getNumbers(timetable, "igcse")],


    ];

    const options = {
        chart: {
            title: `SignUps Across Client Types`,
            subtitle: "Performance of product uptake.",


        },


    };
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}


        />
    );
}
