/* Native select form component (<select>) view */
import React from "react";

export default class NativeSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClient: null,
      teamData: this.props.fullTeam
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /* updating the team data in the selectbox when it got removed in the array list from the parent.
    This function will listen to the props changes. */
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps !== state) {
      return {
        teamData: nextProps.fullTeam
      };
    }
  }
  /* Finding the current select value object from the array list and sending it to the parent 
    for further handling 
  */
  handleChange = (event) => {
    var teamData = this.state.teamData;
    var memObj = teamData.find(function( obj ) {
      let memObj;
      if(obj.username === event.target.value) {
        memObj = obj;
      }
      return memObj;
    });
    this.setState({ selectedClient: memObj });
    let newValIndex = this.state.teamData.findIndex(
      val => val.username === memObj.username
    );
    this.state.teamData.splice(newValIndex, 1);
    var clientObj = memObj;
    this.setState({
      selectedClient: ""
    });
    this.props.onTaskSubmit(clientObj);
  };

  render() {

      var optionNodes = this.state.teamData.map((optionItem) => {
      return (
        <option
          key={"key"+optionItem.id}
          label={optionItem.username}
        >{optionItem.username}</option>
      );
    }, this);
    return <select className="native-select-box" onChange={this.handleChange}> <option> select </option>{optionNodes} </select>;
  }
}
