import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ContentBox from './ContentBox';
import { setCompany } from '../redux/hierarchy';
import { apiReq } from '../utils/api';

const HierarchyTitle = props => {
	const { company } = useSelector(({ hierarchyList }) => hierarchyList);

	const { companyUuid } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCompany = async () => {
			const fetchedCompany = await apiReq(`/companies/${companyUuid}`);

			dispatch(setCompany(fetchedCompany));
		};

		if (!company) {
			fetchCompany();
		}
	}, []);

	return (
		<>
			{company && (
				<HierarchyTitleContainer>
					<ContentBox
						title={`Welcome to ${company.name} hierarchy`}
						description={
							'Click on the employees in order to go down the hierarchy'
						}
					/>
				</HierarchyTitleContainer>
			)}
		</>
	);
};

export default HierarchyTitle;

const HierarchyTitleContainer = styled.div`
	position: relative;
	top: 5vh;
`;
