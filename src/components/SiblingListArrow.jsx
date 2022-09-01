import styled from '@emotion/styled';

const SiblingListArrow = ({ right, containerScroll }) => {
	let intervalId;

	const keepMovingScroll = right => {
		intervalId = setInterval(
			() =>
				right
					? (containerScroll.current.scrollLeft += 100)
					: (containerScroll.current.scrollLeft -= 100),
			100,
		);
	};

	const stopMovingScroll = () => {
		clearInterval(intervalId);
	};

	return (
		<Arrow
			onClick={() =>
				right
					? (containerScroll.current.scrollLeft += 100)
					: (containerScroll.current.scrollLeft -= 100)
			}
			onMouseDown={() => keepMovingScroll(right)}
			onMouseUp={() => stopMovingScroll()}
		>
			{right ? '=>' : '<='}
		</Arrow>
	);
};

export default SiblingListArrow;

const Arrow = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
`;
