import styled from '@emotion/styled';

import Header from '../components/Header';
import CompaniesGrid from '../components/CompaniesGrid';
import CompanySearch from '../components/CompanySearch';

const Home = () => (
		<>
			<Header />
			<ContentBuffer>Uuuuuuh look at those shiny companies ✨ ⬇️</ContentBuffer>
			<CompanySearch />
			<CompaniesGrid />
		</>
	);

export default Home;

const ContentBuffer = styled.div`
	background: #222;
	color: #eee;
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 80px;
	padding: 5px;
`;
