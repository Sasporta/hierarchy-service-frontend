import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { apiReq } from '../utils/api';
import { setGrandparents } from '../redux/hierarchy';

const CompanyItem = ({ uuid, title, imgUrl }) => {
	const dispatch = useDispatch();

	const onClick = async () => {
		const employees = await apiReq(
			`/employees?companyUuid=${uuid}&managerUuid=null`,
		);

		dispatch(setGrandparents(employees));
	};

	return (
		<Link to={'/hierarchy'}>
			<CompanyContainer elevation={24} onClick={onClick}>
				<CompanyCover>{title}</CompanyCover>
				<CompanyLogo url={imgUrl} />
			</CompanyContainer>
		</Link>
	);
};

export default CompanyItem;

const CompanyContainer = styled(Paper)`
	border: 1px solid #ddd;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 240px;

	-webkit-transform: translateZ(0);

	&:hover {
		cursor: pointer;

		& > div:first-of-type {
			background: rgba(0, 0, 0, 0.8);
			opacity: 0.9;
			transition: opacity 0.3s;
		}
	}
`;

const CompanyLogo = styled.div`
	border-radius: 10px;
	background-image: url(${({ url }) => url});
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
`;

const CompanyCover = styled.div`
	border-radius: 10px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	font-weight: 600;
	height: calc(100% - 10px);
	opacity: 0;
	position: absolute;
	top: 5px;
	right: 5px;
	bottom: 5px;
	left: 5px;
	text-align: center;
	z-index: 1;
`;
