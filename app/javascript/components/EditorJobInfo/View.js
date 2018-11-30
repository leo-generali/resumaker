import React from 'react';

// Local Component
import Button from '../Button';

const View = (props) => {
  return (
    <form className="editor-job-info">
      {props.job_infos.map((jobInfo, index) => {
        console.log(jobInfo);
        return (
          <React.Fragment>
            <div class="editor-job-info__form-group">
              <label for="company" />
              <input value={jobInfo.company} type="text" name="company" />
            </div>
            <div class="editor-job-info__form-group">
              <label for="date" />
              <input value={jobInfo.date} type="text" name="date" />
            </div>
            <div class="editor-job-info__form-group">
              <label for="position" />
              <input value={jobInfo.position} type="text" name="position" />
            </div>
            <div class="editor-job-info__form-group">
              <label for="location" />
              <input value={jobInfo.location} type="text" name="location" />
            </div>
            <div class="editor-job-info__highlights-form-group">
              {jobInfo.highlights.map((highlight, index) => {
                return (
                  <React.Fragment>
                    <label for={`hightlight-${index}`} />
                    <textarea name={`hightlight-${index}`}>
                      {highlight}
                    </textarea>
                  </React.Fragment>
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
