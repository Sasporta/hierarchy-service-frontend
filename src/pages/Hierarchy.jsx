import { useEffect } from 'react';
import styled from '@emotion/styled';

import HierarchyTitle from '../components/HierarchyTitle';
import HierarchyStructure from '../components/HierarchyStructure';

const Hierarchy = () => {
	useEffect(() => {
		return () => {
			window.scroll(0, 0);
		};
	}, []);

	return (
		<HierarchyContainer>
			<HierarchyTitle />
			<HierarchyStructure />
		</HierarchyContainer>
	);
};

export default Hierarchy;

const HierarchyContainer = styled.div`
	margin: 65px auto 0;
	max-width: 1380px;
	padding: 0 25px;
`;
