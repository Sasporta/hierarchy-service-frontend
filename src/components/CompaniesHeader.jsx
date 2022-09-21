import styled from '@emotion/styled';

import ContentBox from './ContentBox';
const CompaniesHeader = () => (
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

export default CompaniesHeader;

const HeaderContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const HeaderLayout = styled.div`
  margin: 65px auto 0;
  max-width: 1380px;
  padding: 0 25px;
`;
