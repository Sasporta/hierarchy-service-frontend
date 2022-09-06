import styled from '@emotion/styled';
import HierarchyItem from './HierarchyItem';

const HierarchyLevel = ({ employees }) => {
	return (
		<EmployeesContainer>
			{employees.map(({ uuid, ...employee }) => (
				<HierarchyItem key={uuid} uuid={uuid} {...employee} />
			))}
		</EmployeesContainer>
	);
};

export default HierarchyLevel;

const EmployeesContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 25px;
`;
