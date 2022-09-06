import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
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

	const [searchParams] = useSearchParams();

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
		const query = searchParams.get('searchQuery') || '';
		console.log(query);
		dispatch(
			setFilteredCompanies(
				companies.filter(c =>
					c.name.toLowerCase().includes(query.toLowerCase()),
				),
			),
		);
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
