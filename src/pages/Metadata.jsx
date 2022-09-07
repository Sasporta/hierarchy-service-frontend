import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import { setEmployees } from '../redux/metadata';
import HOCSpinner from '../components/HOCSpinner';
import { setChosenCompany } from '../redux/companies';
import MetadataTable from '../components/MetadataTable';
import MetadataHeader from '../components/MetadataHeader';

const WrappedHierarchyTitle = HOCSpinner(MetadataHeader);

const WrappedMetadataTable = HOCSpinner(MetadataTable);

const Metadata = () => {
	const { chosenCompany } = useSelector(({ companies }) => companies);

	const { employees } = useSelector(({ metadata }) => metadata);

	const { companyUuid } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCompany = async () => {
			const fetchedCompany = await apiReq(`/companies/${companyUuid}`);

			dispatch(setChosenCompany(fetchedCompany));
		};

		!chosenCompany && fetchCompany();
	}, []);

	useEffect(() => {
		const fetchEmployees = async () => {
			const promise1 = apiReq(`/employees?companyUuid=${chosenCompany.uuid}`);

			const promise2 = apiReq(`/companiesMetadata/${chosenCompany.uuid}`);

			const [employees, companyMetadata] = await Promise.all([
				promise1,
				promise2,
			]);

			dispatch(
				setEmployees(
					employees.map(e => ({
						...e,
						subordinates:
							companyMetadata.employeesMetadata[e.uuid]?.subordinates,
					})),
				),
			);
		};

		if (chosenCompany) {
			fetchEmployees();
		}
	}, [chosenCompany]);

	return (
		<MetadataLayout>
			<WrappedHierarchyTitle loading={!chosenCompany} />
			<WrappedMetadataTable loading={!employees.length} />
		</MetadataLayout>
	);
};

export default Metadata;

const MetadataLayout = styled.div`
	margin: 65px auto 0;
	max-width: 1380px;
	padding: 0 25px;
`;
