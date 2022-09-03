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
import {
	setLoadingChildren,
	setLoadingGrandparents,
	setLoadingParents,
} from '../redux/loading';

const ChosenGrandparent = () => {
	const { grandparents, parents, grandparent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	const dispatch = useDispatch();

	const onClick = async () => {
		dispatch(chooseParent(null));

		dispatch(chooseGrandparent(null));

		dispatch(setLoadingGrandparents(true));

		dispatch(setLoadingParents(true));

		dispatch(setLoadingChildren(true));

		const newGrandparent = await apiReq(
			`/employees/parent/${grandparent.uuid}`,
		);

		if (newGrandparent) {
			const newGrandparents = await apiReq(
				`/employees/parent-and-uncles/${grandparent.uuid}`,
			);

			dispatch(chooseGrandparent(newGrandparent));

			dispatch(setGrandparents(newGrandparents));

			dispatch(chooseParent(grandparent));

			dispatch(setParents(grandparents));

			dispatch(setChildren(parents));
		}

		dispatch(setLoadingGrandparents(false));

		dispatch(setLoadingParents(false));

		dispatch(setLoadingChildren(false));
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
