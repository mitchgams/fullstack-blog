import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Blogs from './components/view/Blogs';
import Add from './components/view/Add';
import Blog from './components/view/Blog';
import Edit from './components/view/Edit';

const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Header />
			<main className="container">
				<Switch>
					<Route exact path="/blogs/add"><Add /></Route>
					<Route exact path="/blogs/:title/:id"><Blog /></Route>
					<Route exact path="/edit/:title/:id"><Edit /></Route>
					<Route path="/"><Blogs /></Route>
				</Switch>
			</main>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
