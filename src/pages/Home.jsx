import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import Header from '../components/Header';
import HOCSpinner from '../components/HOCSpinner';
import { setCompanies } from '../redux/companies';
import { setLoadingCompanies } from '../redux/loading';
import CompaniesGrid from '../components/CompaniesGrid';
import CompanySearch from '../components/CompanySearch';

const WrappedCompaniesGrid = HOCSpinner(CompaniesGrid);

const Home = () => {
	const { loadingCompanies } = useSelector(
		({ loadingProcess }) => loadingProcess,
	);

		const dispatch = useDispatch();

		useEffect(() => {
			const fetchCompanies = async () => {
				const companies = await apiReq('/companies');

				dispatch(setCompanies(companies));

				dispatch(setLoadingCompanies(false));
			};

			fetchCompanies();
		}, []);

	return (
		<>
			<Header />
			<ContentBuffer>Uuuuuuh look at those shiny companies ✨ ⬇️</ContentBuffer>
			<CompanySearch />
			<WrappedCompaniesGrid loading={loadingCompanies} />
		</>
	);
};

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
