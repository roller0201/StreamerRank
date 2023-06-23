import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';

const data = [
  {
    id: 0,
    icon: 'test',
    name: 'test',
    platform: 'test',
    description: 'Krótki opis',
    addedDate: '23.06.2023',
    votes: 100,
  },
];

const RankingList = ({ reload, setOpenRankingForm }) => {
  const [streamers, setStreamers] = useState(data);
  const [tableInfo, setTableInfo] = useState({ page: 0, rowsPerPage: 20 });
  const [filter, setFilter] = useState('');

  const handleChangePage = (event, newPage) => {
    setTableInfo({ ...tableInfo, page: newPage });
  };
  const handleChangeRowsPerPage = (event) => {
    setTableInfo({ ...tableInfo, page: 0, rowsPerPage: +event.target.value });
  };

  return (
    <Box>
      <TableContainer>
        <Button onClick={() => setOpenRankingForm(true)}>Open form</Button>{' '}
        {streamers
          ?.slice(
            tableInfo.page * tableInfo.rowsPerPage,
            tableInfo.page * tableInfo.rowsPerPage + tableInfo.rowsPerPage
          )
          .map((streamer) => (
            <List key={streamer.id}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ cursor: 'context-menu' }}
                  onClick={() => {}}
                >
                  <Typography
                    sx={{
                      alignItems: 'center',
                      minWidth: '50px',
                      marginRight: '10px',
                    }}
                  >
                    {'NR'}
                  </Typography>
                  <Typography>{streamer.icon}</Typography>
                  <Typography>{streamer.name}</Typography>
                  <Typography>{streamer.platform}</Typography>
                  <Typography>{streamer.description}</Typography>
                  <Typography>{streamer.addedDate}</Typography>
                  <Typography>{streamer.votes}</Typography>
                  <Button>Dodanie głosu</Button>
                </ListItemButton>
              </ListItem>
              <Divider />
            </List>
          ))}
        <Pagination
          rowsPerPageOptions={[5, 8, 10, 20]}
          component='div'
          count={streamers.length}
          rowsPerPage={tableInfo.rowsPerPage}
          page={tableInfo.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};

export default RankingList;
