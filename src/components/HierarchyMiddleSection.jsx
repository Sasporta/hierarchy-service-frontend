import { useSelector } from 'react-redux';

import HOCSpinner from './HOCSpinner';
import SiblingList from './SiblingList';
import ChosenParent from './ChosenParent';

const WrappedSiblingList = HOCSpinner(SiblingList);

const HierarchyMiddleSection = () => {
	const { parents, grandparent, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	const { loadingParents } = useSelector(
		({ loadingProcess }) => loadingProcess,
	);

	return (
		<>
			{parent && <ChosenParent />}
			{grandparent && (
				<WrappedSiblingList
					level={2}
					loading={loadingParents}
					employees={parents}
					isBigCards={!parent}
				/>
			)}
		</>
	);
};

export default HierarchyMiddleSection;
