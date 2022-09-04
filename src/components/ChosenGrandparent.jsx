import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import EmployeeCard from './EmployeeCard';
import { setLoadingGrandparents } from '../redux/loading';
import {
	setGrandparent,
	setParent,
	setChildren,
	setGrandparents,
	setParents,
} from '../redux/hierarchy';

const ChosenGrandparent = () => {
	const { grandparents, parents, grandparent, topHierarchy } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	const dispatch = useDispatch();

	const onClick = async () => {
		dispatch(setGrandparent(null));

		dispatch(setParent(null));

		dispatch(setLoadingGrandparents(true));

		if (!topHierarchy.includes(grandparent.uuid)) {
			const [newGrandparent, newGrandparents] = await Promise.all([
				apiReq(`/employees/parent/${grandparent.uuid}`),
				apiReq(`/employees/parent-and-uncles/${grandparent.uuid}`),
			]);

			dispatch(setGrandparent(newGrandparent));

			dispatch(setGrandparents(newGrandparents));

			dispatch(setParent(grandparent));

			dispatch(setParents(grandparents));

			dispatch(setChildren(parents));
		}

		dispatch(setLoadingGrandparents(false));
	};

	return (
		<EmployeeContainer onClick={onClick}>
			<EmployeeCard {...grandparent} isBigCard={true} />
		</EmployeeContainer>
	);
};

export default ChosenGrandparent;

const EmployeeContainer = styled.div`
	display: flex;
	justify-content: center;
`;
