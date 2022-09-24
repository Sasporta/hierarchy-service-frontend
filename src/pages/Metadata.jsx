import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setEmployees } from '../redux/metadata';
import HOCSpinner from '../components/HOCSpinner';
import { useFetchData } from '../hooks/useFetchData';
import { setChosenCompany } from '../redux/companies';
import MetadataTable from '../components/MetadataTable';
import MetadataHeader from '../components/MetadataHeader';

const WrappedHierarchyTitle = HOCSpinner(MetadataHeader);

const WrappedMetadataTable = HOCSpinner(MetadataTable);

const Metadata = () => {
  const {
    metadata: { employees },
    companies: { chosenCompany },
  } = useSelector(state => state);

  const { companyUuid } = useParams();

  const fetchData = useFetchData();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompany = async () => {
      const fetchedCompany = await fetchData(`/companies/${companyUuid}`);

      dispatch(setChosenCompany(fetchedCompany));
    };

    !chosenCompany && fetchCompany();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      const promise1 = fetchData(
        `/employees?companyUuid=${chosenCompany.uuid}`,
      );

      const promise2 = fetchData(
        `/employeesMetadata/?companyUuid=${chosenCompany.uuid}`,
      );

      const [employees, employeesMetadata] = await Promise.all([
        promise1,
        promise2,
      ]);

      const metadataObj = employeesMetadata.reduce(
        (a, c) => ({ ...a, [c._id]: c.subordinatesCount }),
        {},
      );

      dispatch(
        setEmployees(
          employees.map(e => ({
            ...e,
            subordinatesCount: metadataObj[e.uuid],
          })),
        ),
      );
    };

    chosenCompany && fetchEmployees();
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
