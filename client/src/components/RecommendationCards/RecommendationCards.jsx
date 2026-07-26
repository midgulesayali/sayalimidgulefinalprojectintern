import "./RecommendationCards.css";

const recommendations=[
"Improve React",
"Learn Docker",
"Practice DSA",
"Build Portfolio"
];

function RecommendationCards(){

return(

<div className="recommendation">

<h2>AI Recommendations</h2>

{recommendations.map((item,index)=>(

<div className="recommend-card" key={index}>

{item}

</div>

))}

</div>

)

}

export default RecommendationCards;