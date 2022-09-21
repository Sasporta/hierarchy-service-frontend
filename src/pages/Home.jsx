import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { apiReq } from '../utils/api';
import CompaniesHeader from '../components/CompaniesHeader';
import HOCSpinner from '../components/HOCSpinner';
import CompaniesGrid from '../components/CompaniesGrid';
import CompanySearch from '../components/CompanySearch';
import { setCompanies, setFilteredCompanies } from '../redux/companies';

const WrappedCompaniesGrid = HOCSpinner(CompaniesGrid);

const Home = () => {
  const { companies } = useSelector(({ companies }) => companies);

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      const fetchedCompanies = await apiReq('/companies');

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
