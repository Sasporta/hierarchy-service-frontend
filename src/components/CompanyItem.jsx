import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setChosenCompany } from '../redux/companies';

// temp camponies images until we implement media storage
import { faker } from '@faker-js/faker';
const imagesCollection = {
  1: 'https://www.drupal.org/files/styles/grid-4-2x/public/datadog-logo-purple.png?itok=1gen8ZoL',
  2: 'https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg',
  3: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png',
  4: 'https://static.datadoghq.com/static/images/logos/amazon-web-services_large.svg?auto=format',
  5: 'https://www.designevo.com/images/blog/blue-logos/intel-logo-blue.jpg',
  6: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRjzHIOImmmC60fs62WG4wdwnNU7tJXBwze17PXTkKja49o9QfGNAKJc_x56oITIKmS4&usqp=CAU',
};

const CompanyItem = ({ uuid, name }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/hierarchy/${uuid}`}
      onClick={() => dispatch(setChosenCompany({ uuid, name }))}
    >
      <CompanyContainer elevation={24}>
        <CompanyCover>
          <CompanyTitle>{name}</CompanyTitle>
        </CompanyCover>
        <CompanyLogo
          url={imagesCollection[faker.datatype.number({ min: 1, max: 6 })]}
        />
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 10px);
  opacity: 0;
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  z-index: 1;
`;

const CompanyTitle = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 600;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  padding: 0 10px;
`;
