import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';

const NavBar = () => (
	<NavBarLayout>
		<HeaderContainer>
			<ButtonsContainer>
				{['home', 'about'].map(page => (
					<CustomLink key={page} to={'/' + page}>
						<CustomButton>{page}</CustomButton>
					</CustomLink>
				))}
			</ButtonsContainer>
		</HeaderContainer>
	</NavBarLayout>
);
export default NavBar;

const NavBarLayout = styled(AppBar)`
	background: linear-gradient(-45deg, #57cfb0, #2ab5d3);
	display: block;
`;

const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 1380px;
	padding: 0 25px;
`;

const ButtonsContainer = styled.div`
	/* padding: 0 25px; */
`;

const CustomLink = styled(Link)`
	text-decoration: none;
`;

const CustomButton = styled(Button)`
	color: white;
	font-size: 18px;
	height: 65px;
	padding: 0 30px;
`;
