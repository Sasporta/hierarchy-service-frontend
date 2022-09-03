import { useSelector } from 'react-redux';
import HOCSpinner from './HOCSpinner';

import SiblingList from './SiblingList';

const WrappedSiblingList = HOCSpinner(SiblingList);

const HierarchyLowerSection = () => {
	const { children, parent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	const { loadingChildren } = useSelector(
		({ loadingProcess }) => loadingProcess,
	);

	return (
		<>
			{parent && (
				<WrappedSiblingList
					loading={loadingChildren}
					employees={children}
					isBigCards={true}
				/>
			)}
		</>
	);
};

export default HierarchyLowerSection;
