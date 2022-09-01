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

const ItemChild = ({ uuid, name, age, isBigCard }) => {
	const { parents, children, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);
	const dispatch = useDispatch();

	const onClick = async () => {
		dispatch(chooseGrandparent(parent));
		dispatch(setGrandparents(parents));

		dispatch(chooseParent({ uuid, name, age }));
		dispatch(setParents(children));

		const employees = await apiReq(`/employees?managerUuid=${uuid}`);

		dispatch(setChildren(employees));
	};

	return (
		<EmployeeCard
			age={age}
			uuid={uuid}
			name={name}
			onClick={onClick}
			isBigCard={isBigCard}
		/>
	);
};

export default ItemChild;
