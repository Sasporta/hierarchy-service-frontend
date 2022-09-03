import styled from '@emotion/styled';
import { Paper } from '@mui/material';

const EmployeeCard = ({ uuid, name, title, isBigCard, onClick, chosen }) => {
	return (
		<CardContainer
			elevation={10}
			chosen={chosen}
			onClick={() => !chosen && onClick && onClick()}
			proportion={isBigCard ? '200px' : '100px'}
		>
			{!isBigCard && !chosen && <CardCover />}
			<CardContent>
				<CardLogo url={`https://robohash.org/${uuid}`}></CardLogo>
				<EmployeeName isSmallCard={!isBigCard}>{name}</EmployeeName>
				<EmployeeTitle isSmallCard={!isBigCard}>{title}</EmployeeTitle>
			</CardContent>
		</CardContainer>
	);
};

export default EmployeeCard;

const CardContainer = styled(Paper)`
	border-radius: 20px;
	margin: 15px;
	padding: 5px;
	${({ proportion }) => `
		height: ${proportion};
		width: ${proportion};
		min-width: ${proportion};
	`}

	-webkit-transform: translateZ(0);

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		transition: 0.5s;
	}
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

const CardLogo = styled.div`
	background-image: url(${({ url }) => url});
	background-position: center;
	background-size: cover;
	border: 1px #2ab5d3 solid;
	border-radius: 15px;
	height: 100%;
	margin-bottom: 5px;
	width: 100%;
`;

const EmployeeName = styled.div`
	font-size: 15px;
	margin-bottom: 5px;
	overflow: hidden;
	text-align: center;
	text-overflow: ellipsis;
	min-height: ${({ isSmallCard }) => (isSmallCard ? '14px' : '18px')};
	white-space: nowrap;
	width: 100%;
	${({ isSmallCard }) => isSmallCard && 'font-size: 12px;'}
`;

const EmployeeTitle = styled.div`
	color: #818181;
	font-size: 14px;
	overflow: hidden;
	text-align: center;
	text-overflow: ellipsis;
	min-height: ${({ isSmallCard }) => (isSmallCard ? '13px' : '16px')};
	padding: 0 10px;
	white-space: nowrap;
	width: 100%;
	${({ isSmallCard }) => isSmallCard && 'font-size: 11px;'};
`;
