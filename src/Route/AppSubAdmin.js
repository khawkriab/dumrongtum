import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
const AppAdmin = lazy(() => import('../App-Admin'));
const SubAdminReport = lazy(() => import('../Page-SubAdmin/SubAdmin-Report'));
const SubAdminDepartComp = lazy(() => import('../Page-SubAdmin/SubAdmin-DepartComp'));
const SubAdminAddCompaint = lazy(() => import('../Page-SubAdmin/SubAdmin-AddCompaint'));
const SubAdminCentralGovernmentDetail = lazy(() => import('../Page-SubAdmin/SubAdmin-Central-Government-Detail'));

export default () => (
	<AppAdmin>
		<Switch>
			<Route path="/" exact component={SubAdminReport} />
			<Route path="/subadminreport" component={SubAdminReport} />
			<Route path="/subadmindepartcomp" component={SubAdminDepartComp} />
			<Route path="/subadmin_government_detail" component={SubAdminCentralGovernmentDetail} />
			<Route path="/subadminaddcompaint" component={SubAdminAddCompaint} />
		</Switch>
	</AppAdmin>
);
