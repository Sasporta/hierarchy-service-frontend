import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import CompanyItem from './CompanyItem';

const CompaniesGrid = () => {
	const { filteredCompanies } = useSelector(
		({ companiesList }) => companiesList,
	);

	return (
		<GridContainer>
			<Grid container spacing={15}>
				{filteredCompanies.map(({ uuid, name, img_url }) => (
					<Grid item key={uuid} xs={3}>
						<CompanyItem uuid={uuid} name={name} imgUrl={img_url} />
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
