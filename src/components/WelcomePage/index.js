/*  Welcome page which is the deafult page of this webApp. 
	This page greets and having two buttons for both the Native and Advance view.
	User can clicks any button to go to there desired page.
*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import {welcomePageLabels} from '../../constant';

export default class WelcomePage extends React.Component {
	render() {
	    return (
			<div className="container">
				<div className="welcome-page">
					<h1> {welcomePageLabels.mainHeading} </h1>
					<div className="ref-text">{welcomePageLabels.primaryDesc} <div>{welcomePageLabels.secondaryDesc}</div></div>
					<div className="next-page">
						<NavLink to='/native-view' className="native-button button mr-3">{welcomePageLabels.nativeViewLabel}</NavLink>
						<NavLink to='/advance-view' className="advance-button button">{welcomePageLabels.advanceViewLabel}</NavLink>
					</div>
				</div>
			</div>
		)
	}
}
