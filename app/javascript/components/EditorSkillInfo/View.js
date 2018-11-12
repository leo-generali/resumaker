import React from 'react';

const View = (props) => {
  console.log(props);

  return (
    <form className="editor-skill-info">
      {props.skill_infos.map((skillInfo, skillInfoIndex) => {
        return (
          <div key={skillInfoIndex}>
            <label>{skillInfo.category}:</label>
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
            <button onClick={props.addSkill(skillInfoIndex, skillInfo.id)}>
              Add Skill
            </button>
            <button onClick={props.removeSkill(skillInfoIndex, skillInfo.id)}>
              Remove Skill
            </button>
          </div>
        );
      })}
    </form>
  );
};

export default View;
