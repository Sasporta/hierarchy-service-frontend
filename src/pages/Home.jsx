import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HOCSpinner from '../components/HOCSpinner';
import { useFetchData } from '../hooks/useFetchData';
import CompaniesGrid from '../components/CompaniesGrid';
import CompanySearch from '../components/CompanySearch';
import CompaniesHeader from '../components/CompaniesHeader';
import { setCompanies, setFilteredCompanies } from '../redux/companies';

const WrappedCompaniesGrid = HOCSpinner(CompaniesGrid);

const Home = () => {
  const { companies } = useSelector(({ companies }) => companies);

  const [searchParams] = useSearchParams();

  const fetchData = useFetchData();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      const fetchedCompanies = await fetchData('/companies');

      fetchedCompanies && dispatch(setCompanies(fetchedCompanies));
    };

    fetchCompanies();
  }, []);

  useEffect(() => {
    const query = searchParams.get('searchQuery') || '';

    dispatch(
      setFilteredCompanies(
        companies.filter(c =>
          c.name.toLowerCase().includes(query.toLowerCase()),
        ),
      ),
    );
  }, [companies]);

  return (
    <>
      <CompaniesHeader />
      <ContentBuffer>Uuuuuuh look at those shiny companies ✨ ⬇️</ContentBuffer>
      <CompanySearch />
      <WrappedCompaniesGrid loading={!companies.length} />
    </>
  );
};

export default Home;

const ContentBuffer = styled.div`
  background: #222;
  color: #eee;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 80px;
  padding: 5px;
`;
