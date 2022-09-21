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
  margin: 65px auto 0;
  max-width: 1380px;
  padding: 0 25px;
`;

const AboutContainer = styled.div`
  padding: 50px;
`;
