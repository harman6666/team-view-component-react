/* Main file for navigating to the pages. Having router links as per there components*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import NoMatch from '../PageNotFound';
import NativeTeamView from '../TeamView/NativeTeamView';
import AdvanceTeamView from '../TeamView/AdvanceTeamView';


export default class Main extends React.Component {
	
	render() {
		return(
		  	<main>
		  		<Switch>
			    	<Route exact path='/' component={WelcomePage}/>
			    	<Route exact path='/native-view' component={NativeTeamView}/>
			    	<Route exact path='/advance-view' component={AdvanceTeamView}/>
			      	<Route component={NoMatch} />
			    </Switch>
		  	</main>
		)
	}
}
