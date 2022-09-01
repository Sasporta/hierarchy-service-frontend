import styled from '@emotion/styled';

const ContentBox = ({ title, description, additional }) => (
	<ContentContainer>
		<Title>{title}</Title>
		<Description>{description}</Description>
		<Additional>{additional}</Additional>
	</ContentContainer>
);

export default ContentBox;

const ContentContainer = styled.div`
	text-align: center;
`;

const Title = styled.h1`
	color: #111;
	font-size: 36px;
	font-weight: 700;
	letter-spacing: -1px;
	line-height: 42px;
	margin: 0 auto 17px;
	max-width: 1000px;
`;

const Description = styled.p`
	color: #424242;
	font-size: 20px;
	font-weight: 500;
	line-height: 28px;
	margin: 0 auto;
	max-width: 850px;
	padding-bottom: 20px;
`;

const Additional = styled.p`
	color: #424242;
	font-size: 16px;
	line-height: 25px;
	padding-bottom: 16px;
`;
