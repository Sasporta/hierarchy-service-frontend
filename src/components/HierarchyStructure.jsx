import styled from '@emotion/styled';

import HierarchyUpperSection from '../components/HierarchyUpperSection';
import HierarchyLowerSection from '../components/HierarchyLowerSection';
import HierarchyMiddleSection from '../components/HierarchyMiddleSection';

const HierarchyStructure = () => {
	return (
		<HierarchySection>
			<HierarchyUpperSection />
			<HierarchyMiddleSection />
			<HierarchyLowerSection />
		</HierarchySection>
	);
};

export default HierarchyStructure;

const HierarchySection = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	top: calc(20vh - 165px);
`;
