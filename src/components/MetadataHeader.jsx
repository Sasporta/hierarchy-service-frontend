import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ContentBox from './ContentBox';

const MetadataHeader = () => {
  const { chosenCompany } = useSelector(({ companies }) => companies);

  return (
    <HeaderContainer>
      <ContentBox title={`${chosenCompany.name} employees metadata`} />
      <ButtonContainer to={`/hierarchy/${chosenCompany.uuid}`}>
        <Button variant="contained">
          back to {chosenCompany.name} hierarchy
        </Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default MetadataHeader;

const HeaderContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const ButtonContainer = styled(Link)`
  text-decoration: none;
`;
