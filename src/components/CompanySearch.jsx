import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredCompanies } from '../redux/companies';

const CompanySearch = () => {
	const { companies } = useSelector(({ companiesList }) => companiesList);

	const dispatch = useDispatch();

	let filterTimeout;

	const companiesFilterDebouncing = ({ target: { value: query } }) => {
		clearTimeout(filterTimeout);

		filterTimeout = setTimeout(() => {
			dispatch(
				setFilteredCompanies(
					companies.filter(c =>
						c.name.toLowerCase().includes(query.toLowerCase()),
					),
				),
			);
		}, 500);
	};

	return (
		<HeaderContainer>
			<Input
				placeholder="Search your company..."
				onChange={companiesFilterDebouncing}
			/>
		</HeaderContainer>
	);
};

export default CompanySearch;

const HeaderContainer = styled.div`
	display: flex;
	margin: 0 auto;
	max-width: 1380px;
	padding: 0 25px;
`;

const Input = styled.input`
	background-image: url('https://www.w3schools.com/css/searchicon.png');
	background-position: 10px;
	background-repeat: no-repeat;
	border: #2ab5d3 2px solid;
	border-radius: 5px;
	color: #424242;
	font-size: 18px;
	font-weight: 500;
	height: 45px;
	line-height: 28px;
	margin: 0 auto 120px;
	padding-left: 40px;
	width: 400px;

	&::placeholder {
		color: #9e9c9c;
	}
`;