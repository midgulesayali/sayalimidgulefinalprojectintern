import React from 'react';

export default function TemplateSelector({ templates = [], onSelect = () => {} }) {
  return (
    <div className="template-selector">
      <h3>Choose a Template</h3>
      <div className="templates">
        {templates.length === 0 && <p>No templates available.</p>}
        {templates.map((t, i) => (
          <button key={i} onClick={() => onSelect(t)}>{t.name || `Template ${i+1}`}</button>
        ))}
      </div>
    </div>
  );
}
