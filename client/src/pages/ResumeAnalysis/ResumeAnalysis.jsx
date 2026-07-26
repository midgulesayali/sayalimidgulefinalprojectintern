import { useState } from "react";
import ResumeUpload from "../../components/ResumeAnalysis/ResumeUpload";
import ATSScore from "../../components/ResumeAnalysis/ATSScore";
import SkillsAnalysis from "../../components/ResumeAnalysis/SkillsAnalysis";
import KeywordAnalysis from "../../components/ResumeAnalysis/KeywordAnalysis";
import "./ResumeAnalysis.css";

function ResumeAnalysis() {

  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="analysis-page">

      <h1>AI Resume Analysis</h1>

      <ResumeUpload setAnalysis={setAnalysis} />

      {analysis && (
        <>
          <ATSScore analysis={analysis} />
          <SkillsAnalysis analysis={analysis} />
          <KeywordAnalysis analysis={analysis} />
        </>
      )}

    </div>
  );
}

export default ResumeAnalysis;