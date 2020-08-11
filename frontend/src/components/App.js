// React & Tools
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routes
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Events from './pages/Events';

// Components
import Header from './static/Header';
import Hero from './Hero';

// Styles
//import '../sass/App.css';

// Component
function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' children={<Hero />} />
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/blog' component={Blog} />
					<Route path='/events' component={Events} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
