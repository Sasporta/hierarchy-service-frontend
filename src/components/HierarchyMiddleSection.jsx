import { useSelector } from 'react-redux';

import SiblingList from './SiblingList';
import ChosenParent from './ChosenParent';

const HierarchyMiddleSection = () => {
	const { parents, grandparent, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	return (
		<>
			{parent && <ChosenParent />}
			{grandparent && (
				<SiblingList
					level={2}
					employees={parents}
					isBigCards={!parent}
				/>
			)}
		</>
	);
};

export default HierarchyMiddleSection;
