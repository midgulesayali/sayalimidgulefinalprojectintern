import {
Bar
} from "react-chartjs-2";

import {
Chart,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

Chart.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function DashboardChart(){

const data={
labels:["Resume","Skills","Interview","Jobs"],

datasets:[
{
label:"Progress",
data:[88,70,90,60]
}
]
};

return(

<div
style={{
background:"white",
padding:"20px",
borderRadius:"12px",
marginTop:"30px"
}}
>

<Bar data={data}/>

</div>

)

}

export default DashboardChart;