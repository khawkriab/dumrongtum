import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import user from '../mobx/user';
import { Observer } from 'mobx-react';
import Loader from '../Components/Load/Loader';
import Test from '../Test/Test';
const PageLogin = lazy(() => import('../Page/Page-Login'));
const PageRegister = lazy(() => import('../Page/Page-Register'));
const PageLookTracking = lazy(() => import('../Page/Page-LookTracking'));
const PageLookDetail = lazy(() => import('../Page/Page-LookDetail'));
const App = lazy(() => import('./App'));
const AppAdmin = lazy(() => import('./AppAdmin'));
const AppSubAdmin = lazy(() => import('./AppSubAdmin'));

// Observer ตรวจการทำงาน user
// 🛴😎  windows + .
export default () => (
	<Observer>
		{() => (
			<BrowserRouter forceRefresh={false}>
				<Suspense fallback={<Loader />}>
					<Switch>
						{/* {console.log('user.role', user.role)} */}
						<Route path="/login" component={PageLogin} />
						<Route path="/register" component={PageRegister} />
						<Route path="/looktracking" component={PageLookTracking} />
						<Route path="/lookdetail/:id" component={PageLookDetail} />
						<Route path="/Test" component={Loader} />

						{user.role && user.role.toLocaleLowerCase() === 'admin' ? (
							<AppAdmin />
						) : user.role && user.role.toLocaleLowerCase() === 'central' ? (
							<AppSubAdmin />
						) : user.role && user.role.toLocaleLowerCase() === 'user' ? (
							<App />
						) : (
							<PageLogin />
						)}
					</Switch>
				</Suspense>
			</BrowserRouter>
		)}
	</Observer>
);
