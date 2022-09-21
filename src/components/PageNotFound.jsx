import styled from '@emotion/styled';
import ContentBox from './ContentBox';

const PageNotFound = () => {
  return (
    <PageLayout>
      <PageContainer>
        <ImgContainer>
          <img src="https://i.imgur.com/Q2BAOd2.png" alt="cool pic" />
        </ImgContainer>
        <ContentBox title={'This page could not be found'} />
      </PageContainer>
    </PageLayout>
  );
};

export default PageNotFound;

const PageLayout = styled.div`
  margin: 65px auto 0;
  max-width: 1380px;
  padding: 0 25px;
`;

const PageContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const ImgContainer = styled.div`
  margin-bottom: 40px;
`;
