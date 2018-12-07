import React from 'react';

// Local Component
import Button from '../Button';

const View = (props) => {
  return (
    <form className="editor-skill-info">
      <Button
        className="editor-skill-info-button editor-skill-info-button--remove"
        onClick={props.addSkillCategory}
      >
        Add Skill Category
      </Button>
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
            <div className="editor-skill-info-button-container">
              <Button
                className="editor-skill-info-button editor-skill-info-button--add"
                onClick={props.addSkill(skillInfoIndex, skillInfo.id)}
              >
                Add Skill
              </Button>
              <Button
                className="editor-skill-info-button editor-skill-info-button--remove"
                onClick={props.removeSkill(skillInfoIndex, skillInfo.id)}
              >
                Remove Skill
              </Button>
            </div>
            <Button
              className="editor-skill-info-button editor-skill-info-button--remove"
              onClick={props.removeSkillCategory(skillInfo.id)}
            >
              Remove Skill Category
            </Button>
          </div>
        );
      })}
    </form>
  );
};

export default View;
