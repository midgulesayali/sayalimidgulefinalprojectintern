import "./ATSScore.css";

function ATSScore({ analysis }) {

return(

<div className="ats-card">

<h2>ATS Score</h2>

<div className="score">

{analysis.atsScore}%

</div>

</div>

)

}

export default ATSScore;