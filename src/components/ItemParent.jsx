import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import EmployeeCard from './EmployeeCard';
import { chooseParent, setChildren } from '../redux/hierarchy';

const ItemParent = ({ uuid, name, age, isBigCard }) => {
	const { parent } = useSelector(({ hierarchyList }) => hierarchyList);
	const dispatch = useDispatch();

	const isChosen = () => parent?.uuid === uuid;

	const onClick = async () => {
		const employees = await apiReq(`/employees?managerUuid=${uuid}`);

		dispatch(setChildren(employees));

		dispatch(chooseParent({ uuid, name, age }));
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

export default ItemParent;
