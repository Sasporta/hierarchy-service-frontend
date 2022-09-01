import styled from '@emotion/styled';

import ContentBox from '../components/ContentBox';

const About = () => (
	<AboutLayout>
		<AboutContainer>
			<ContentBox title={'About Hierarchy Service Project...'} />
		</AboutContainer>
	</AboutLayout>
);

export default About;

const AboutLayout = styled.div`
	margin-top: 65px;
	padding: 80px 0;
`;

const AboutContainer = styled.div`
	margin: 0 auto;
	max-width: 1380px;
	padding: 0 25px;
`;
