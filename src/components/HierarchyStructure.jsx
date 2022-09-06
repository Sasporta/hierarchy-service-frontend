import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import HOCSpinner from './HOCSpinner';
import HierarchyLevel from './HierarchyLevel';

const WrappedHierarchyLevel = HOCSpinner(HierarchyLevel);

const HierarchyStructure = () => {
	const { hierarchy, hierarchyLevel } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	useEffect(() => {
		window.scrollTo({
			top: window.pageYOffset + 230,
			behavior: 'smooth',
		});
	}, [hierarchyLevel]);

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
	position: relative;
	top: calc(20vh - 165px);
`;
