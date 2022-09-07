import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import HOCSpinner from '../components/HOCSpinner';
import HierarchyHeader from '../components/HierarchyHeader';
import HierarchyStructure from '../components/HierarchyStructure';
import { setChosenCompany } from '../redux/companies';
import { setHierarchy, setHierarchyLevel } from '../redux/hierarchy';

const WrappedHierarchyTitle = HOCSpinner(HierarchyHeader);

const Hierarchy = () => {
	const { hierarchyLevel } = useSelector(({ hierarchy }) => hierarchy);

	const { chosenCompany } = useSelector(({ companies }) => companies);

	const { companyUuid } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			window.scroll(0, 0);
		};
	}, []);

	useEffect(() => {
		window.scrollTo({
			top: window.pageYOffset + 230,
			behavior: 'smooth',
		});
	}, [hierarchyLevel]);

	useEffect(() => {
		const fetchCompany = async () => {
			const fetchedCompany = await apiReq(`/companies/${companyUuid}`);

			dispatch(setChosenCompany(fetchedCompany));
		};

		!chosenCompany && fetchCompany();
	}, []);

	useEffect(() => {
		const fetchHierarchy = async () => {
			dispatch(setHierarchyLevel(1));

			dispatch(setHierarchy({ level: 1, employees: null }));

			const employees = await apiReq(
				`/employees?companyUuid=${chosenCompany.uuid}&managerUuid=null`,
			);

			dispatch(
				setHierarchy({
					level: 1,
					employees: employees.map(e => ({ level: 1, chosen: true, ...e })),
				}),
			);
		};

		chosenCompany && fetchHierarchy();
	}, [chosenCompany]);

	return (
		<HierarchyLayout>
			<WrappedHierarchyTitle loading={!chosenCompany} />
			<HierarchyStructure />
		</HierarchyLayout>
	);
};

export default Hierarchy;

const HierarchyLayout = styled.div`
	margin: 65px auto 0;
	max-width: 1380px;
	padding: 0 25px;
`;
