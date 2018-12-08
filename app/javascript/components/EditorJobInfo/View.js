import React from 'react';

// Local Component
import Button from '../Button';

const View = (props) => {
  console.log(props);
  return (
    <form className="editor-job-info">
      {props.job_infos.map((jobInfo, index) => {
        return (
          <React.Fragment>
            <div className="editor-job-info__form-group">
              <label htmlFor="company">Company:</label>
              <input
                value={jobInfo.company}
                type="text"
                name="company"
                onChange={props.updateJobInfoSection(index)}
              />
            </div>
            <div className="editor-job-info__form-group">
              <label htmlFor="date">Date:</label>
              <input
                value={jobInfo.date}
                type="text"
                name="date"
                onChange={props.updateJobInfoSection(index)}
              />
            </div>
            <div className="editor-job-info__form-group">
              <label htmlFor="position">Position:</label>
              <input
                value={jobInfo.position}
                type="text"
                name="position"
                onChange={props.updateJobInfoSection(index)}
              />
            </div>
            <div className="editor-job-info__form-group">
              <label htmlFor="location">Location:</label>
              <input
                value={jobInfo.location}
                type="text"
                name="location"
                onChange={props.updateJobInfoSection(index)}
              />
            </div>
            <div className="editor-job-info__highlights-form-group">
              {jobInfo.highlights.map((highlight, index) => {
                return (
                  <div>
                    <label htmlFor={`hightlight-${index}`} />
                    <textarea value={highlight} name={`hightlight-${index}`} />
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </form>
  );
};

export default View;
