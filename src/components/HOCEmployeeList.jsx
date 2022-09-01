import ItemChild from './ItemChild';
import ItemParent from './ItemParent';
import ItemGrandparent from './ItemGrandparent';

const returnList =
	({ employees, isBigCards }) =>
	Item => {
		return employees.map(e => (
			<Item key={e.uuid} {...e} isBigCard={isBigCards} />
		));
	};

const HOCEmployeeList =
	(Grandparent, Parent, Child) =>
	({ level, ...props }) => {
		const listOf = returnList(props);

		return level === 1
			? listOf(Grandparent)
			: level === 2
			? listOf(Parent)
			: listOf(Child);
	};

export const EmployeeList = HOCEmployeeList(
	ItemGrandparent,
	ItemParent,
	ItemChild,
);
