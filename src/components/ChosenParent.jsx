import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import EmployeeCard from './EmployeeCard';

const ChosenParent = () => {
	const { parent } = useSelector(({ hierarchyList }) => hierarchyList);

	return (
		<EmployeeContainer>
			<EmployeeCard {...parent} isBigCard={true} />
		</EmployeeContainer>
	);
};
export default ChosenParent;

const EmployeeContainer = styled.div`
	display: flex;
	justify-content: center;
`;
