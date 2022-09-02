import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import EmployeeCard from './EmployeeCard';
import {
	chooseGrandparent,
	chooseParent,
	setParents,
} from '../redux/hierarchy';

const ItemGrandparent = ({ uuid, isBigCard, ...props }) => {
	const { grandparent, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);
	const dispatch = useDispatch();

	const isChosen = () => grandparent?.uuid === uuid;

	const onClick = async () => {
		dispatch(chooseGrandparent({ uuid, ...props }));

		const employees = await apiReq(`/employees?managerUuid=${uuid}`);

		dispatch(setParents(employees));

		parent && dispatch(chooseParent(null));
	};

	return (
		<EmployeeCard
			uuid={uuid}
			onClick={onClick}
			chosen={isChosen()}
			isBigCard={isBigCard}
			{...props}
		/>
	);
};

export default ItemGrandparent;
