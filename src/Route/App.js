import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
const App = lazy(() => import('../App'));

const PageHotline = lazy(() => import('../Page/Page-Hotline'))
const PageTracking = lazy(() => import('../Page/Page-Tracking'))
const PageNews = lazy(() => import('../Page/Page-News'))
const PageQuestion = lazy(() => import('../Page/Page-Question'))

const PageRate = lazy(() => import('../Page/Page-Rate'))
const NewsDetial = lazy(() => import('../Components/News/NewsDetial'))
const PageLookComplaint = lazy(() => import('../Page/Page-LookComplaint'))
const PageReportComplaint = lazy(() => import('../Page/Page-Report-Complaint'))


export default () => <App>
    <Switch>
        <Route path='/' exact component={PageReportComplaint} />
        <Route path='/tracking' component={PageTracking} />
        <Route path='/news' component={PageNews} />
        <Route path='/newsdetial/:id' component={NewsDetial} />
        <Route path='/hotline' component={PageHotline} />
        <Route path='/question' component={PageQuestion} />
        <Route path='/rate' component={PageRate} />
        <Route path='/lookcomplaint/:id' component={PageLookComplaint} />
    </Switch>
</App>
