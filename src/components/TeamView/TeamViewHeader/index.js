import React from 'react';
import {teamViewLabels} from '../../../constant';

const TeamViewHeader = () => (
  <div className="component-header row">
    <div className="col-9 col-md-6 heading pl-0"> {teamViewLabels.mainHeading} </div>
    <div className="col-3 col-md-6 team-page">
      <div>
        <span className="pr-1 d-none"> {teamViewLabels.teamPageLabel} </span>
        <img src={require("../../../img/people.png")} alt="people-icon" />
      </div>
    </div>
  </div>
);
export default TeamViewHeader;
