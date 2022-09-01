import { useSelector } from 'react-redux';

import ChosenGrandparent from './ChosenGrandparent';
import SiblingList from './SiblingList';

const HierarchyUpperSection = () => {
	const { grandparents, grandparent } = useSelector(
		({ hierarchyList }) => hierarchyList,
	);

	return (
		<>
			{grandparent && <ChosenGrandparent />}
			<SiblingList
				level={1}
				employees={grandparents}
				isBigCards={!grandparent}
			/>
		</>
	);
};

export default HierarchyUpperSection;
