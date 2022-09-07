import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ContentBox from './ContentBox';

const HierarchyHeader = () => {
	const { chosenCompany } = useSelector(({ companies }) => companies);

	return (
		<HeaderContainer>
			<ContentBox
				title={`Welcome to ${chosenCompany.name} hierarchy`}
				description={'Click on the employees in order to go down the hierarchy'}
				additional={'or, see metadata'}
			/>
			<ButtonContainer to={`/metadata/${chosenCompany.uuid}`}>
				<Button variant="contained">{chosenCompany.name} Metadata</Button>
			</ButtonContainer>
		</HeaderContainer>
	);
};

export default HierarchyHeader;

const HeaderContainer = styled.div`
	padding: 50px;
	text-align: center;
`;

const ButtonContainer = styled(Link)`
	text-decoration: none;
`;
