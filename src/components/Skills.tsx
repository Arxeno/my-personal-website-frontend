import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import CONFIG from '../config';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkillsData = () => {
    fetch(`${CONFIG.BACKEND_URL}/skills`)
      .then((res) => res.json())
      .then((resJson) => setSkills(resJson))
      .catch((err) => alert(err));
  };

  useEffect(() => fetchSkillsData(), []);

  return (
    <div id="skills" className="container">
      <h1 className="border-effect head-of-each-section">Skills</h1>
      <div id="skills-subcontainer">
        {skills.length > 0
          ? skills.map((data, index) => {
              return <Skill key={index} skillData={data} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Skills;
