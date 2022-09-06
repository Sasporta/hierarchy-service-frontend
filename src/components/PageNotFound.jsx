import styled from '@emotion/styled';
import ContentBox from './ContentBox';

const PageNotFound = () => {
	return (
		<PageContainer>
			<PageContentContainer>
				<ImgContainer>
					<img src="https://i.imgur.com/Q2BAOd2.png" alt="cool pic" />
				</ImgContainer>
				<ContentBox title={'This page could not be found'} />
			</PageContentContainer>
		</PageContainer>
	);
};

export default PageNotFound;

const PageContainer = styled.div`
	margin: 65px auto 0;
	max-width: 1380px;
	padding: 0 25px;
`;

const PageContentContainer = styled.div`
	padding-top: 30px;
`;

const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
`;
