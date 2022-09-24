import { useDispatch, useSelector } from 'react-redux';

import { saveResult } from '../redux/apiResults';

const getResFromApi = async (dispatch, query) => {
  const res = await fetch(query);

  const result = await res.json();

  result !== undefined && dispatch(saveResult({ query, result }));

  return result;
};

const fetchData = (dispatch, apiResults) => async path => {
  const query = process.env.REACT_APP_URL + path;

  try {
    return apiResults[query] || getResFromApi(dispatch, query);
  } catch (error) {
    console.log(error);
  }
};

export const useFetchData = () => {
  const apiResults = useSelector(({ apiResults }) => apiResults);

  const dispatch = useDispatch();

  return fetchData(dispatch, apiResults);
};
