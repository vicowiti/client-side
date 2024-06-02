
import { Chart } from "react-google-charts";
import { Product, School } from "../../types/global";
import { useEffect, useState } from "react";
import { getAllSchools } from "../../services/schools/data";



interface Props {
    product: Product

}
export function Pie(props: Props) {
    const [schools, setSchools] = useState<School[]>([])

    useEffect(() => {
        async function fetchStats() {


            const myschools = await getAllSchools()
            setSchools(myschools)




        }
        fetchStats()
    }, [])

    const withProduct = schools.filter(item => item.products.includes(props.product.id))

    const data = [
        ["Targets", "Acquired vs Deficits"],
        ["Deficit", props.product.target - withProduct.length],
        ["Acquisitions", withProduct.length],

    ];

    const options = {
        title: props.product.name,
        legend: "bottom",
        pieSliceText: "label",
        slices: {
            4: { offset: 0.2 },
            12: { offset: 0.3 },
            14: { offset: 0.4 },
            15: { offset: 0.5 },
        },
    };
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
}
