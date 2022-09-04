import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import EmployeeCard from './EmployeeCard';
import { setLoadingParents } from '../redux/loading';
import { setGrandparent, setParent, setParents } from '../redux/hierarchy';

const ItemGrandparent = ({ uuid, isBigCard, ...props }) => {
	const { grandparent, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);
	const dispatch = useDispatch();

	const isChosen = () => grandparent?.uuid === uuid;

	const onClick = async () => {
		parent && dispatch(setParent(null));

		dispatch(setLoadingParents(true));

		dispatch(setGrandparent({ uuid, ...props }));

		const employees = await apiReq(`/employees?managerUuid=${uuid}`);

		dispatch(setParents(employees));

		dispatch(setLoadingParents(false));
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
