import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
const AppAdmin = lazy(() => import('../App-Admin'));
const AdminReport = lazy(() => import('../Page-Admin/Admin-Report'));
const AdminReportDetail = lazy(() => import('../Page-Admin/Admin-Report-Detail'));
const AdminReportCreate = lazy(() => import('../Page-Admin/Admin-Report-Create'));
const AdminReportSummary = lazy(() => import('../Page-Admin/Admin-Report-Summary'));
const AdminForward = lazy(() => import('../Page-Admin/Admin-Forward'));
const AdminRating = lazy(() => import('../Page-Admin/Admin-Rating'));
const AdminNews = lazy(() => import('../Page-Admin/Admin-News'));
const AdminNewsPreview = lazy(() => import('../Page-Admin/Admin-News-Preview'));
const AdminNewsEdit = lazy(() => import('../Page-Admin/Admin-News-Edit'));
const AdminHotline = lazy(() => import('../Page-Admin/Admin-Hotline'));
const AdminDepartment = lazy(() => import('../Page-Admin/Admin-Department'));
const AdminQuestion = lazy(() => import('../Page-Admin/Admin-Question'));
const AdminQuestionCreate = lazy(() => import('../Page-Admin/Admin-Question-Create'));
const AdminIPAddress = lazy(() => import('../Page-Admin/Admin-ipaddress'));
const AdminDepartComp = lazy(() => import('../Page-Admin/Admin-DepartComp'));
const AdminQuestionEdit = lazy(() => import('../Page-Admin/Admin-Question-Edit'));
const AdminContact = lazy(() => import('../Page-Admin/AdminContact'));

const AdminAddCompaint = lazy(() => import('../Page-Admin/Admin-AddCompaint'));
const AdminCentral = lazy(() => import('../Page-Admin/Admin-Central'));
const AdminCentralGovernment = lazy(() => import('../Page-Admin/Admin-Central-Government'));
const AdminCentralGovernmentDetail = lazy(() => import('../Page-Admin/Admin-Central-Government-Detail'));

export default () => (
	<AppAdmin>
		<Switch>
			<Route path="/" exact component={AdminReport} />
			<Route path="/adminreport" component={AdminReport} />
			<Route path="/report/:id" component={AdminReportDetail} />
			<Route path="/admin/reportdetail" component={AdminReportDetail} />
			<Route path="/admin/reportcreate" component={AdminReportCreate} />
			<Route path="/admin/reportsummary" component={AdminReportSummary} />
			<Route path="/admin/forward" component={AdminForward} />
			<Route path="/admin/rating" component={AdminRating} />
			<Route path="/admin/news" component={AdminNews} />
			<Route path="/admin/newspreview" component={AdminNewsPreview} />
			<Route path="/admin/hotline" component={AdminHotline} />
			<Route path="/admin/department" component={AdminDepartment} />
			<Route path="/admin/question" component={AdminQuestion} />
			<Route path="/admin/ipaddress" component={AdminIPAddress} />
			<Route path="/admin/central" component={AdminCentral} />
			<Route path="/admin/government" component={AdminCentralGovernment} />

			<Route path="/admin/question_create" component={AdminQuestionCreate} />

			<Route path="/admindepartcompaint" component={AdminDepartComp} />

			<Route path="/admin/question_edit/:id" component={AdminQuestionEdit} />

			<Route path="/admin/news_edit/:id" component={AdminNewsEdit} />

			<Route path="/admin/government_detail/:id" component={AdminCentralGovernmentDetail} />

			<Route path="/admincontact" component={AdminContact} />

			<Route path="/adminaddcompaint" component={AdminAddCompaint} />
		</Switch>
	</AppAdmin>
);
