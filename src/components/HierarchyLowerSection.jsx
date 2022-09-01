import { useSelector } from 'react-redux';

import SiblingList from './SiblingList';

const HierarchyLowerSection = () => {
	const { children, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	return <>{parent && <SiblingList employees={children} isBigCards={true} />}</>;
};

export default HierarchyLowerSection;
