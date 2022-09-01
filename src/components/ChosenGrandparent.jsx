import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import EmployeeCard from './EmployeeCard';
import {
	chooseGrandparent,
	chooseParent,
	setChildren,
	setGrandparents,
	setParents,
} from '../redux/hierarchy';

const ChosenGrandparent = () => {
	const { grandparents, parents, grandparent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	const dispatch = useDispatch();

	const onClick = async () => {
		const newGrandparent = await apiReq(
			`/employees/parent/${grandparent.uuid}`,
		);

		if (newGrandparent) {
			const newGrandparents = await apiReq(
				`/employees/parent-and-uncles/${grandparent.uuid}`,
			);

			dispatch(setChildren(parents));

			dispatch(chooseParent(grandparent));

			dispatch(setParents(grandparents));

			dispatch(chooseGrandparent(newGrandparent));

			dispatch(setGrandparents(newGrandparents));
		}
	};

	return (
		<EmployeeContainer onClick={onClick}>
			<EmployeeCard {...grandparent} isBigCard={true} onClick={onClick} />
		</EmployeeContainer>
	);
};

export default ChosenGrandparent;

const EmployeeContainer = styled.div`
	display: flex;
	justify-content: center;
`;
