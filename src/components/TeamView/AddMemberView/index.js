/* Adding new member in the team list. */
import React from "react";
import {teamViewLabels} from '../../../constant';

export default class AddMemberView extends React.Component {
   constructor(props) {
      super(props);
      this.showHide = this.showHide.bind(this);
      this.myHandler = this.myHandler.bind(this);
   }
   /* Attaching the click event on the app so that when the user clicks on anywhere on the page 
      except the few elements the dropsown should close and the add new member button will be 
      visible.
   */
   componentDidMount() {
      document
         .querySelector(".team-view-app")
         .addEventListener("click", this.myHandler);
   }
   componentWillUnmount() {
      document
         .querySelector(".team-view-app")
         .removeEventListener("click", this.myHandler);
   }
   /* Handles the click event and enables the default add member button when event target is not these 
      classes ".PowerSelect__TriggerInput, .native-select-box, .PowerSelect__Clear, .PowerSelect__TriggerStatus, .add-btn'". */
   myHandler(evt) {
      let classes = '.PowerSelect__TriggerInput, .native-select-box, .PowerSelect__Clear, .PowerSelect__TriggerStatus, .add-btn';
      if (!evt.target.matches(classes)) {
         (this.props.teamSelectBox) ? this.props.teamSelectBox.noDataContainer.classList.remove("active") : console.log('empty');
         this.props.selectBox.classList.remove("d-block");
         this.props.selectBox.classList.add("d-none");
         this.addBtnWrapper.classList.remove("d-none");
         this.addBtnWrapper.classList.add("d-block");
      }
   }
   /* showing/hiding the add member button */
   showHide(evt) {
      evt.stopPropagation();
      this.addBtnWrapper.classList.remove("d-block");
      this.addBtnWrapper.classList.add("d-none");
      this.props.selectBox.classList.remove("d-none");
      this.props.selectBox.classList.add("d-block");
   }
   render() {
      return (
         <div className="add-member pl-1"
            ref={ref => (this.addBtnWrapper = ref)}>
            <div className="add-btn d-inline-block rounded-circle"
               onClick={this.showHide}/>
            <div className="add-label d-inline-block">
               <div>{teamViewLabels.addMemberLabel}</div>
            </div>
         </div>
      );
   }
}
