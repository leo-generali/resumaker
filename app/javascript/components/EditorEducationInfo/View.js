import React from 'react';

const View = (props) => {
  console.log(props);
  return (
    <form className="editor-education-info">
      {props.education_infos.map((educationInfo, index) => {
        return (
          <React.Fragment key={index}>
            <label>
              School:
              <input
                value={educationInfo.institution}
                type="text"
                name="institution"
                onChange={props.updateEducationInfoSection(index)}
              />
            </label>
            <label>
              Degree:
              <input
                value={educationInfo.area}
                type="text"
                name="area"
                onChange={props.updateEducationInfoSection(index)}
              />
            </label>
            <label>
              Major:
              <input
                value={educationInfo.study_type}
                type="text"
                name="study_type"
                onChange={props.updateEducationInfoSection(index)}
              />
            </label>
            <label>
              Start Date:
              <input
                value={educationInfo.start_date}
                type="text"
                name="start_date"
                onChange={props.updateEducationInfoSection(index)}
              />
            </label>
            <label>
              End Date:
              <input
                value={educationInfo.end_date}
                type="text"
                name="end_date"
                onChange={props.updateEducationInfoSection(index)}
              />
            </label>
            <label>
              Location:
              <input
                value={educationInfo.location}
                type="text"
                name="location"
                onChange={props.updateEducationInfoSection(index)}
              />
            </label>
            <label>
              GPA:
              <input
                value={educationInfo.gpa}
                type="text"
                name="gpa"
                onChange={props.updateEducationInfoSection(index)}
              />
            </label>
          </React.Fragment>
        );
      })}
    </form>
  );
};

export default View;
