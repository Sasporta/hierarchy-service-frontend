import { useSelector } from 'react-redux';

import HOCSpinner from './HOCSpinner';
import SiblingList from './SiblingList';
import ChosenGrandparent from './ChosenGrandparent';

const WrappedSiblingList = HOCSpinner(SiblingList);

const HierarchyUpperSection = () => {
	const { grandparents, grandparent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	const { loadingGrandparents } = useSelector(
		({ loadingProcess }) => loadingProcess,
	);

	return (
		<>
			{grandparent && <ChosenGrandparent />}
			<WrappedSiblingList
				level={1}
				loading={loadingGrandparents}
				employees={grandparents}
				isBigCards={!grandparent}
			/>
		</>
	);
};

export default HierarchyUpperSection;
