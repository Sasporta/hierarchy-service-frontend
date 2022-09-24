import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useFetchData } from '../hooks/useFetchData';
import {
  setHierarchy,
  setHierarchyLevel,
  setNoSubordinatesList,
} from '../redux/hierarchy';

const HierarchyItem = ({ uuid, name, title, level, chosen }) => {
  const { hierarchy, noSubordinatesList } = useSelector(
    ({ hierarchy }) => hierarchy,
  );

  const fetchData = useFetchData();

  const dispatch = useDispatch();

  const onClick = async () => {
    dispatch(
      setHierarchy({
        level,
        employees: hierarchy[level].map(e =>
          e.uuid === uuid ? { ...e, chosen: true } : { ...e, chosen: false },
        ),
      }),
    );

    if (!noSubordinatesList[uuid]) {
      dispatch(setHierarchyLevel(level + 1));

      const employees = await fetchData(`/employees?managerUuid=${uuid}`);

      employees.length === 0 && dispatch(setNoSubordinatesList(uuid));

      dispatch(
        setHierarchy({
          level: level + 1,
          employees: employees.map(e => ({
            level: level + 1,
            chosen: true,
            ...e,
          })),
        }),
      );
    }
  };

  return (
    <CardContainer
      elevation={10}
      onClick={onClick}
      lowest={!!noSubordinatesList[uuid]}
    >
      {!chosen && <CardCover />}
      <CardContent>
        <CardLogo url={`https://robohash.org/${uuid}`}></CardLogo>
        <EmployeeName>{name}</EmployeeName>
        <EmployeeTitle>{title}</EmployeeTitle>
      </CardContent>
    </CardContainer>
  );
};

export default HierarchyItem;

const CardContainer = styled(Paper)`
  border-radius: 20px;
  margin: 15px;
  padding: 5px;
  height: 200px;
  width: 200px;
  min-width: 200px;
  ${({ lowest }) => lowest && 'border: 2px red solid;'}

  -webkit-transform: translateZ(0);

  &:hover {
    ${({ lowest }) => !lowest && 'border: 2px #1bb4d6 solid;'}
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s;
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
  min-height: 18px;
  white-space: nowrap;
  width: 100%;
`;

const EmployeeTitle = styled.div`
  color: #818181;
  font-size: 14px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  min-height: 16px;
  padding: 0 10px;
  white-space: nowrap;
  width: 100%;
`;
