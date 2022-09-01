import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import EmployeeCard from './EmployeeCard';
import {
	chooseGrandparent,
	chooseParent,
	setParents,
} from '../redux/hierarchy';

const ItemGrandparent = ({ uuid, name, age, isBigCard }) => {
	const { grandparent, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);
	const dispatch = useDispatch();

	const isChosen = () => grandparent?.uuid === uuid;

	const onClick = async () => {
		dispatch(chooseGrandparent({ uuid, name, age }));

		const employees = await apiReq(`/employees?managerUuid=${uuid}`);

		dispatch(setParents(employees));

		parent && dispatch(chooseParent(null));
	};

	return (
		<EmployeeCard
			age={age}
			uuid={uuid}
			name={name}
			onClick={onClick}
			chosen={isChosen()}
			isBigCard={isBigCard}
		/>
	);
};

export default ItemGrandparent;
