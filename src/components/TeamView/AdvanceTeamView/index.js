import React from 'react';
import { teamData } from '../../../data/teamData';
import TeamItem from '../TeamItem';
import { NavLink } from 'react-router-dom';
import AdvanceSelectBox from '../AdvanceSelectBox';
import TeamViewHeader from '../TeamViewHeader';
import AddMemberView from '../AddMemberView';
import {teamViewLabels} from '../../../constant';

export default class AdvanceTeamView extends React.Component {
  /* Default method which fires first when this class is initialized.
    Storing the default array into new array and operating operations on new array so our default array not got 
    affected with these operations.
    - First operation, finding the 1st admin object from the array list for making the default view. 
    - Second operation, seprate out the admin from the array list to avoid duplicacy.
  */
  constructor(props) {
    super(props);
    const newTeamData = [...teamData];
    let teamAdmin = teamData.find(function( obj ) {
      let adminOjb;
      if(obj.role === 'Admin') {
        adminOjb = obj;
      }
      return adminOjb;
    });
    let newValIndex = teamData.findIndex(val => val.username === teamAdmin.username);
    newTeamData.splice(newValIndex, 1);
    this.state = {
      data: [teamAdmin],
      fullTeamData: newTeamData
    }
    this.handleNodeRemoval = this.handleNodeRemoval.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  /* Setting selectBox and teamSelectBox into the current state so we can use in the child component by
    passing as props. 
  */ 
  componentDidMount() {
    this.setState({
      selectBox: this.selectBox,
      teamSelectBox: this.teamSelectBox
    })
  }
  /* handling the removing part when user clicks on the cross icon. We get a removing object and 
    we will remove this object from the view and add to the list so admin can add again if they want to add.
  */ 
  handleNodeRemoval(listObj) {
    var data = this.state.data,
        fullTeamData = this.state.fullTeamData;
    data = data.filter((el) => {
      return el.id !== listObj.id;
    });
    fullTeamData = fullTeamData.concat([listObj]);
    this.setState({ 
      data: data,
      fullTeamData: fullTeamData 
    });
    return;
  }
  /* Handling the submit when user hit enter or click the client name from the dropdown then we are 
    checking if the total length of visible client is greater than or equal to 5. If it is greater 
    than 5 then we are setting the height so user can only see 5 at a time and the further client list 
    goes hidden until user clicks show all button.
  */
  handleSubmit(clientObj) {
    var data = this.state.data;
    if(data.length >= 5) {
      this.teamList.style.height = '230px';
      this.teamList.style.overflow = 'hidden';
      this.showAllBtn.classList.remove('d-none');
      this.showAllBtn.classList.add('d-block');   
    }
    data = data.concat([clientObj]);
    this.setState({ data: data });
  }
  /* For showing all available clients for the test */
  showAll() {
    this.teamList.style.height = 'auto';
    this.teamList.style.overflow = 'unset';
    this.showAllBtn.classList.remove('d-block');
    this.showAllBtn.classList.add('d-none');  
  }


  render() {
    var listNodes = this.state.data.map((listItem) => {
      return (
        <TeamItem
          key={"key"+listItem.id}
          listObj={listItem}
          username={listItem.username}
          removeNode={this.handleNodeRemoval}
        />
      );
    }, this);
    return (
      <div className="team-view-wrapper container">
          <div className="prev-page">
            <NavLink to='/' className="prev-button">&#8249;</NavLink>
          </div>
          <div className="advance-view team-view pl-3 pr-3 col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
            <TeamViewHeader/>
            <ul className="row team-list ml-1 mr-1" ref={ref=> this.teamList = ref}> 
              <li className="col-12 col-md-6 team-item add-client-wrapper pl-2">
                <AddMemberView selectBox={this.state.selectBox} teamSelectBox={this.state.teamSelectBox}/>
                <div className="select-box d-none" ref={ref => this.selectBox = ref}>
                  <AdvanceSelectBox onRef={ref => this.teamSelectBox = ref} onTaskSubmit={this.handleSubmit} fullTeam={this.state.fullTeamData} />
                </div>
              </li>
              {listNodes}
            </ul>
            <div className="show-all-btn d-none row" ref={ref=> this.showAllBtn = ref} onClick={this.showAll}>{teamViewLabels.showAllLabel}<i className="down ml-2 mb-1"></i>
            </div>
          </div>
      </div>
    );
  }
}