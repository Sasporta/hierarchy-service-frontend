import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import CompanyItem from './CompanyItem';

const CompaniesGrid = () => {
	const { filteredCompanies } = useSelector(({ companies }) => companies);

	return (
		<GridLayout>
			<GridContainer>
				<Grid container spacing={15}>
					{filteredCompanies.map(({ uuid, name, img_url }) => (
						<Grid item key={uuid} xs={3}>
							<CompanyItem uuid={uuid} name={name} imgUrl={img_url} />
						</Grid>
					))}
				</Grid>
			</GridContainer>
		</GridLayout>
	);
};

export default CompaniesGrid;

const GridLayout = styled.div`
	margin: 0 auto;
	max-width: 1380px;
	padding: 0 25px;
`;

const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
