import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

import { EmployeeList } from './HOCEmployeeList';
import SiblingListArrow from './SiblingListArrow';

const SiblingScrollableList = props => {
	const containerRef = useRef(null);

	useEffect(() => {
		const fullScrollRange = containerRef.current.scrollWidth;

		const scrollbarWidth = containerRef.current.offsetWidth;

		containerRef.current.scrollLeft = (fullScrollRange - scrollbarWidth) / 2;
	}, []);

	return (
		<ScrollableListContainer>
			<SiblingListArrow right={false} containerScroll={containerRef} />
			<EmployeesContainer ref={containerRef}>
				<EmployeeList {...props} />
			</EmployeesContainer>
			<SiblingListArrow right={true} containerScroll={containerRef} />
		</ScrollableListContainer>
	);
};

export default SiblingScrollableList;

const ScrollableListContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;
`;

const EmployeesContainer = styled.div`
	display: flex;
	flex-direction: row;
	overflow: auto;
	scroll-behavior: smooth;
`;
