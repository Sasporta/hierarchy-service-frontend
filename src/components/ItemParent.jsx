import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import EmployeeCard from './EmployeeCard';
import { setLoadingChildren } from '../redux/loading';
import { setParent, setChildren } from '../redux/hierarchy';

const ItemParent = ({ uuid, isBigCard, ...props }) => {
	const { parent } = useSelector(({ hierarchyList }) => hierarchyList);
	const dispatch = useDispatch();

	const isChosen = () => parent?.uuid === uuid;

	const onClick = async () => {
		dispatch(setLoadingChildren(true));

		dispatch(setParent({ uuid, ...props }));

		const employees = await apiReq(`/employees?managerUuid=${uuid}`);

		dispatch(setChildren(employees));

		dispatch(setLoadingChildren(false));
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

export default ItemParent;
