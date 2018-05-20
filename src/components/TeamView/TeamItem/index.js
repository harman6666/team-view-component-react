/* Making the list individually as per the array list */
import React from "react";

export default class TeamItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeNode = this.removeNode.bind(this);
  }
  /* Helps in removing the node from the view. When user clicks on the cross icon we get deleting 
    object into this function and this function fires the parent function for further delete the object
    from the array list to avoid duplication.
  */
  removeNode(e) {
    e.preventDefault();
    this.props.removeNode(this.props.listObj);
    return;
  }

  render() {
    var classes = "col-12 col-md-6 team-item pl-2";
    return (
      <li className={classes}>
        <div className="client-avatar d-inline-block pl-1">
          <img
            className="rounded-circle"
            src={require("../../../img/avatar-default.png")}
            alt={this.props.username}
          />
        </div>
        <div className="client-info d-inline-block">
          <div className="client-role">{this.props.listObj.role}</div>
          <div className="client-name">{this.props.username}</div>
        </div>
        <button
          type="button"
          className="close-btn rounded-circle"
          onClick={this.removeNode}>
          &#10005;
        </button>
      </li>
    );
  }
}
