import SiblingScrollableList from './SiblingScrollableList';
import SiblingNonScrollableList from './SiblingNonScrollableList';

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
