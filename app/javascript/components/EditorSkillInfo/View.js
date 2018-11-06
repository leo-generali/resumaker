import React from 'react';

const View = (props) => {
  console.log(props);

  return (
    <form className="editor-skill-info">
      {props.skill_infos.map((skillInfo, skillInfoIndex) => {
        return (
          <label key={skillInfoIndex}>
            {skillInfo.category}:
            {skillInfo.skills.map((skill, skillIndex) => {
              return (
                <input
                  key={skillIndex}
                  value={skill}
                  onChange={props.updateSkillInfoSection(
                    skillInfoIndex,
                    skillIndex
                  )}
                  type="text"
                  name={`${skillInfo.category}: ${skill}`}
                />
              );
            })}
          </label>
        );
      })}
    </form>
  );
};

export default View;
