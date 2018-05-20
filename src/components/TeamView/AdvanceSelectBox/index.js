/* Advance select form component view. Used react power select box library for this completion.*/
import React from "react";
import { TypeAhead } from "react-power-select";
import {toggleClass} from "../../../util";

/* For making the custom view as per the requirement that we should have one img on the left and 
  client/teamMember name on the right */ 
const CustomDropdownView = ({ option }) => (
  <div>
    <img
      className="client-avatar rounded-circle"
      src={require("../../../img/avatar-default.png")}
      alt={option.username}
    />
    {option.username}
  </div>
);

export default class AdvanceSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClient: null,
      teamData: this.props.fullTeam
    };
    this.onSearchFn = this.onSearchFn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps !== state) {
      return {
        teamData: nextProps.fullTeam
      };
    }
  }
  /* Passing current context i.e. AdvanceSelectBox to the parent component */
  componentDidMount() {
    this.props.onRef(this);
  }
  /* Finding the current select value object from the array list and sending it to the parent 
    for further handling. Here, we get option as a selected object by power-select-box. 
  */
  handleChange = ({ option }) => {
  	if(!option) {
  		return;
  	}
    this.setState({ selectedClient: option });
    let newValIndex = this.state.teamData.findIndex(
      val => val.username === option.username
    );
    this.state.teamData.splice(newValIndex, 1);
    var clientObj = option;
    this.setState({
      selectedClient: ""
    });
    this.props.onTaskSubmit(clientObj);
  };

  /* Fires when user searches anything in the search field. If nothing found from the list then 
    we are checking if PowerSelect__Menu is available in DOM or not. PowerSelect__Menu generated 
    dynamically when we have selectable options in the dropdown.(performing this step to minimize the 
    looping in component otherwise we have to add loop for checking the
    current typed value, is available in the array list or not? Which is a costly opration).
  */
  onSearchFn(e) {
    setTimeout(() => {
      let isDropdownValue = document.querySelector(
        ".PowerSelect__Tether .PowerSelect__Menu"
      );
      if (!isDropdownValue) {
      	this.noDataContainer.classList.add('active');
      } else {
      	this.noDataContainer.classList.remove('active');
      }
    }, 10);
  }
  /* Fires when user clicks on the dropdown and checks if fullTeam length is having any value or not.
    If not then toggling the no data container with every click.
  */
  onClick(e) {
    if (!this.props.fullTeam.length) {
    	toggleClass(this.noDataContainer, 'active'); // this is a custom method available in the util file.
    }
  }
  render() {
    return (
      <div className="selectbox-typeahead">
        <TypeAhead
        	ref={ref=> this.TypeAhead = ref}
          options={this.state.teamData}
          selected={this.state.selectedClient}
          optionLabelPath="username"
          optionComponent={<CustomDropdownView />}
          onChange={this.handleChange}
          onSearch={this.onSearchFn}
          onClick={this.onClick}
        />
        <div className="no-data" ref={ref=> this.noDataContainer = ref}>
        	<div className="not-found-text">Team member not found.</div>
        	<div className="desc">Maybe she/he is not yet in your team?</div>
        </div>
      </div>
    );
  }
}
