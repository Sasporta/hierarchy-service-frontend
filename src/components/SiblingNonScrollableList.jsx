import styled from '@emotion/styled';

import { EmployeeList } from './HOCEmployeeList';

const SiblingNonScrollableList = props => {
	return (
		<EmployeesContainer>
			<EmployeeList {...props} />
		</EmployeesContainer>
	);
};

export default SiblingNonScrollableList;

const EmployeesContainer = styled.div`
	transition: 3s;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 25px;
	scroll-behavior: smooth;
`;
