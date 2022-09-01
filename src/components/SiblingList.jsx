import { WrappedSiblingList } from './HOCSiblingList';

const SiblingList = ({ level, employees, isBigCards }) => {
	const listOverFlow =
		(isBigCards && employees.length > 5) ||
		(!isBigCards && employees.length > 7);

	return (
		<WrappedSiblingList
			overFlow={listOverFlow}
			level={level}
			employees={employees}
			isBigCards={isBigCards}
		/>
	);
};

export default SiblingList;
