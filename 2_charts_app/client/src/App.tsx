import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './components/views/MainView';
import RequestMethodsView from './components/views/RequestMethodsView';
import RequestTimesView from './components/views/RequestTimesView';
import ResponseCodesView from './components/views/ResponseCodesView';
import ResponseSizesView from './components/views/ResponseSizesView';
import EpaState from './context/Epa/EpaState';

const App: React.FC = (): JSX.Element =>  {
  	return (
    	<Fragment>
			<EpaState>
				<BrowserRouter>
					<Layout>		
						<Switch>
							<Route exact path="/" component={Main}/>
							<Route exact path="/request/time" component={RequestTimesView} />
							<Route exact path="/request/methods" component={RequestMethodsView} />
							<Route exact path="/response/codes" component={ResponseCodesView} />
							<Route exact path="/response/sizes" component={ResponseSizesView} />
						</Switch>
					</Layout>
				</BrowserRouter>
			</EpaState>
		</Fragment>
  	);
}

export default App;
