import "./Testimonials.css";

function Testimonials() {

const reviews = [

{
name:"Rahul",
text:"The AI Resume Builder helped me create a professional resume."
},

{
name:"Priya",
text:"Interview Practice improved my confidence."
},

{
name:"Amit",
text:"Career recommendations were accurate and useful."
}

];

return(

<section className="testimonials">

<h2>What Students Say</h2>

<div className="review-grid">

{reviews.map((review,index)=>(

<div className="review-card" key={index}>

<h3>{review.name}</h3>

<p>{review.text}</p>

</div>

))}

</div>

</section>

)

}

export default Testimonials;