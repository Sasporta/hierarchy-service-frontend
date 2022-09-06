import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Hierarchy from './pages/Hierarchy';
import PageNotFound from './components/PageNotFound';

const App = () => (
	<AppLayout>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/hierarchy/:companyUuid" element={<Hierarchy />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	</AppLayout>
);

export default App;

const AppLayout = styled.div`
	background-color: rgb(246, 250, 251);
	height: 100%;
	min-height: 95vh;
	padding-bottom: 70px;
`;
