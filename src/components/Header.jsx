import styled from '@emotion/styled';

import ContentBox from './ContentBox';
const Header = () => (
	<HeaderLayout>
		<HeaderContainer>
			<ContentBox
				title={`
					Hierarchy Service Website : The best website to check for your
					favorite company hierarchy 😍🙌💯
				`}
				description={`This website's sacred goal: show the hierarchy of companies and organizations.\nTry clicking on one of the companies logos and see what's happening`}
				additional={'This website is free 🔥. FOR NOW. 🐸'}
			/>
		</HeaderContainer>
	</HeaderLayout>
);

export default Header;

const HeaderLayout = styled.div`
	display: flex;
	align-items: center;
	height: 360px;
	margin-top: 65px;
	padding: 60px 0 50px;
`;

const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 1380px;
	padding: 0 25px;
`;
