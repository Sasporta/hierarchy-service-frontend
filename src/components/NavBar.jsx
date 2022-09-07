import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';

const NavBar = () => (
	<NavBarBase>
		<ButtonsLayout>
			{['home', 'about'].map(page => (
				<ButtonContainer key={page} to={'/' + page}>
					<NavbarButton>{page}</NavbarButton>
				</ButtonContainer>
			))}
		</ButtonsLayout>
	</NavBarBase>
);
export default NavBar;

const NavBarBase = styled(AppBar)`
	background: linear-gradient(-45deg, #57cfb0, #2ab5d3);
	display: block;
`;

const ButtonsLayout = styled.div`
	margin: 0 auto;
	max-width: 1380px;
	padding: 0 25px;
`;

const ButtonContainer = styled(Link)`
	text-decoration: none;
`;

const NavbarButton = styled(Button)`
	color: white;
	font-size: 18px;
	height: 65px;
	padding: 0 30px;
`;
