import "./SkillsAnalysis.css";

function SkillsAnalysis({ analysis }) {
  return (
    <div className="skills-analysis">

      <div className="matched-skills">

        <h2>✅ Matching Skills</h2>

        <div className="skills-container">

          {analysis.matchedSkills.map((skill, index) => (
            <span key={index} className="matched">
              {skill}
            </span>
          ))}

        </div>

      </div>

      <div className="missing-skills">

        <h2>❌ Missing Skills</h2>

        <div className="skills-container">

          {analysis.missingSkills.map((skill, index) => (
            <span key={index} className="missing">
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}

export default SkillsAnalysis;