// React
import * as React from 'react';

// Gatsby
import { Router } from '@reach/router';

// Components
import Home from '../components/Home/Home';

// Pages
import About from './about';
import Resume from './resume';
import Blog from './blog';
import NotFoundPage from './404';

// Styles
import '../styles/styles.scss';

const IndexPage = () => {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Resume path="/resume" />
			<Blog path="/blog" />
			<NotFoundPage default />
		</Router>
	);
};

export default IndexPage;
