import SiblingNonScrollableList from './SiblingNonScrollableList';
import SiblingScrollableList from './SiblingScrollableList';

const HOCSiblingList = (ScrollableList, NonScrollableList) => props => {
	return props.overFlow ? (
		<ScrollableList {...props} />
	) : (
		<NonScrollableList {...props} />
	);
};

export const WrappedSiblingList = HOCSiblingList(
	SiblingScrollableList,
	SiblingNonScrollableList,
);
