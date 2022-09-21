import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import HOCSpinner from './HOCSpinner';
import HierarchyLevel from './HierarchyLevel';

const WrappedHierarchyLevel = HOCSpinner(HierarchyLevel);

const HierarchyStructure = () => {
  const { hierarchy, hierarchyLevel } = useSelector(
    ({ hierarchy }) => hierarchy,
  );

  return (
    <HierarchyContainer>
      {Array.from({ length: hierarchyLevel }).map((v, i) => (
        <WrappedHierarchyLevel
          key={i}
          employees={hierarchy[i + 1]}
          loading={!hierarchy[i + 1]}
        />
      ))}
    </HierarchyContainer>
  );
};

export default HierarchyStructure;

const HierarchyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
