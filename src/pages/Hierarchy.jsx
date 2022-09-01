import styled from '@emotion/styled';

import HierarchyUpperSection from '../components/HierarchyUpperSection';
import HierarchyLowerSection from '../components/HierarchyLowerSection';
import HierarchyMiddleSection from '../components/HierarchyMiddleSection';

const Hierarchy = () => {
	return (
		<HierarchyContainer>
			<HierarchyStructure>
				<HierarchyUpperSection />
				<HierarchyMiddleSection />
				<HierarchyLowerSection />
			</HierarchyStructure>
		</HierarchyContainer>
	);
};

export default Hierarchy;

const HierarchyContainer = styled.div`
	margin: 65px auto 0;
	max-width: 1380px;
	padding: 0 25px;
`;

const HierarchyStructure = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	top: calc(20vh - 165px);
`;
