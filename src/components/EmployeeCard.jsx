import styled from '@emotion/styled';
import { Paper } from '@mui/material';

const EmployeeCard = ({ uuid, name, age, isBigCard, onClick, chosen }) => {
	return (
		<CardContainer
			elevation={10}
			chosen={chosen ? 'display: none;' : ''}
			onClick={onClick}
			proportion={isBigCard ? '200px' : '100px'}
		>
			{!isBigCard && <CardCover />}
			<CardContent>
				<CardTitle isSmallCard={!isBigCard}>{name}</CardTitle>
				<CardLogo url={`https://robohash.org/${uuid}`}></CardLogo>
			</CardContent>
		</CardContainer>
	);
};

export default EmployeeCard;

const CardContainer = styled(Paper)`
	border-radius: 20px;
	font-weight: bold;
	margin: 15px;
	padding: 5px;
	${({ chosen }) => chosen && 'display: none;'}
	${({ proportion }) => `
		height: ${proportion};
		width: ${proportion};
		min-width: ${proportion};
	`}

	-webkit-transform: translateZ(0);
`;

const CardCover = styled.div`
	background: rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	text-align: center;
	z-index: 1;
`;

const CardContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const CardTitle = styled.div`
	text-align: center;
	${({ isSmallCard }) => isSmallCard && 'font-size: 13px;'};
`;

const CardLogo = styled.div`
	background-image: url(${({ url }) => url});
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
`;
