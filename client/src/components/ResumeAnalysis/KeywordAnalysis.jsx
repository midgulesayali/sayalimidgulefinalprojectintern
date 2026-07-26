import "./KeywordAnalysis.css";

function KeywordAnalysis({ analysis }) {

  return (

    <div className="keyword-card">

      <h2>🔑 Missing Keywords</h2>

      <div className="keyword-list">

        {analysis.missingKeywords.map((keyword, index) => (

          <span key={index}>
            {keyword}
          </span>

        ))}

      </div>

      <div className="suggestions">

        <h2>💡 AI Suggestions</h2>

        <ul>

          <li>Add measurable achievements to your experience.</li>

          <li>Include relevant technical skills.</li>

          <li>Optimize your resume using job-description keywords.</li>

          <li>Keep your resume to one page if you're a fresher.</li>

          <li>Use strong action verbs like Developed, Built, Designed, Implemented.</li>

        </ul>

      </div>

    </div>

  );

}

export default KeywordAnalysis;