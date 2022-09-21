import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { useSelector } from 'react-redux';
import TableContainer from '@mui/material/TableContainer';

const MetadataTable = () => {
  const { chosenCompany } = useSelector(({ companies }) => companies);

  const { employees } = useSelector(({ metadata }) => metadata);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{chosenCompany.name} Employees</TableCell>
            <TableCell align="center">Subordinates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(({ uuid, name, subordinatesCount }) => (
            <TableRow
              key={uuid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="center">{subordinatesCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MetadataTable;
