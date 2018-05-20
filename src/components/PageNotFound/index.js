/* 404 error page which will display only when React not able 
	to find a particular component attached to the router.
*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import {pageNotFoundLabels} from '../../constant'

const PageNotFound = () => (
  <div>
    <div className="page-not-found">
    	<div className="not-found-info">
			<h2>{pageNotFoundLabels.errorCode}</h2>
			<h3>{pageNotFoundLabels.msgLabel}</h3>
			<p>{pageNotFoundLabels.mainHeading}</p>
			<button>
				<NavLink exact activeClassName="current" to='/'>{pageNotFoundLabels.navigateMsg}</NavLink>
			</button>
		</div>
    </div>
  </div>
)

export default PageNotFound;	
