import "./DashboardCard.css";

const cards = [
  {
    title: "Resume Score",
    value: "88%"
  },
  {
    title: "Applied Jobs",
    value: 24
  },
  {
    title: "Interview Score",
    value: "91%"
  },
  {
    title: "Skill Match",
    value: "84%"
  }
];

function DashboardCards() {
  return (
    <div className="cards">

      {cards.map((card) => (

        <div className="card" key={card.title}>

          <h2>{card.value}</h2>

          <p>{card.title}</p>

        </div>

      ))}

    </div>
  );
}

export default DashboardCards;