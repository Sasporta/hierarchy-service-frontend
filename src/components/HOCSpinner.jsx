import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

const HOCSpinner = Component => props => {
  return props.loading ? (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  ) : (
    <Component {...props} />
  );
};

export default HOCSpinner;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
`;
