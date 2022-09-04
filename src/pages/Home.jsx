import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import Header from '../components/Header';
import HOCSpinner from '../components/HOCSpinner';
import { setLoadingCompanies } from '../redux/loading';
import CompaniesGrid from '../components/CompaniesGrid';
import CompanySearch from '../components/CompanySearch';
import { setCompanies, setFilteredCompanies } from '../redux/companies';

const WrappedCompaniesGrid = HOCSpinner(CompaniesGrid);

const Home = () => {
	const { companies } = useSelector(({ companiesList }) => companiesList);

	const { loadingCompanies } = useSelector(
		({ loadingProcess }) => loadingProcess,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCompanies = async () => {
			const fetchedCompanies = await apiReq('/companies');

			dispatch(setCompanies(fetchedCompanies));

			dispatch(setLoadingCompanies(false));
		};

		fetchCompanies();
	}, []);

	useEffect(() => {
		dispatch(setFilteredCompanies(companies));
	}, [companies]);

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
