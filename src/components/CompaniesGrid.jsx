import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import CompanyItem from './CompanyItem';
import { setCompanies } from '../redux/companies';

const CompaniesGrid = () => {
	const { companies } = useSelector(({ companiesList }) => companiesList);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCompanies = async () => {
			const companies = await apiReq('/companies');

			dispatch(setCompanies(companies));
		};

		fetchCompanies();
	}, []);

	return (
		<GridContainer>
			<Grid container spacing={15}>
				{companies.map(({ uuid, name, img_url }) => (
					<Grid item key={uuid} xs={3}>
						<CompanyItem uuid={uuid} title={name} imgUrl={img_url} />
					</Grid>
				))}
			</Grid>
		</GridContainer>
	);
};

export default CompaniesGrid;

const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1380px;
	padding: 0 25px;
`;
