import styled from '@emotion/styled';

const HierarchyTitle = () => {
	return (
		<HierarchyTitleContainer>
			Click on the employees in order to go up and down the hierarchy
		</HierarchyTitleContainer>
	);
};

export default HierarchyTitle;

const HierarchyTitleContainer = styled.div`
	color: #111;
	font-size: 30px;
	font-weight: 700;
	letter-spacing: -1px;
	position: relative;
	top: 5vh;
	text-align: center;
`;
