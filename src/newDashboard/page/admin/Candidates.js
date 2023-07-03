import { filter } from 'lodash';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
// material
import {
  Avatar,
  Card,
  CircularProgress,
  Container,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
// components

import { useDispatch, useSelector } from 'react-redux';

import ButtonCustomize from 'assets/theme/components/button/ButtonCustomize';
import Iconify from 'assets/theme/components/icon/Iconify';
import Page from 'components/Layout/Page';
import SearchNotFound from 'components/Layout/SearchNotFound';
import { Authen } from 'context/authenToken/AuthenToken';
import { callAPIgetListCandidates } from 'context/redux/action/action';
import Campaignlistoolbar from 'layouts/sections/Campaignlistoolbar';
import UserListHead from 'layouts/sections/UserListHead';
import { useContext } from 'react';
// Icon
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

// Dialog
import AlertDialog from '../../components/alertDialog';
import { makeStyles } from '@mui/styles';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'avatarUrl', name: 'Hình', alignRight: false },
  { id: 'fullName', label: 'Tên', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'gender', label: 'Giới tính', alignRight: false },
  { id: 'phone', label: 'Số điện thoại', alignRight: false },
  { id: 'description', label: 'Tham gia chiến dịch', alignRight: false },
  { id: 'Action', label: 'Action', alignRight: true },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (candidate) => candidate.fullName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis?.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: 'red',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      maxHeight: '150px' /* set the maximum height of the track */,
      minHeight: '50px' /* set the minimum height of the track */,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '10px',
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
}));

export default function Candidates({ history }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const refDialog = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const { token } = useContext(Authen);

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const candidate = useSelector(({ candidate }) => candidate) || [];

  useEffect(() => {
    callAPI();
  }, [token]);

  const callAPI = async () => {
    await dispatch(callAPIgetListCandidates(token));
  };

  const getOptions = () => [
    { id: 'active', title: 'Đang bán' },
    { id: 'inActive', title: 'Ngưng bán' },
    { id: 'All', title: 'Tất cả' },
  ];

  //========================================================
  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = candidate.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => setFilterName(event.target.value);

  const filterCandidate = applySortFilter(candidate, getComparator(order, orderBy), filterName);

  const handleDate = (time) => {
    const a = new Date(time).toLocaleDateString().split('/');
    if (a[0] < 10) {
      return `${a[2]}-${a[1]}-0${a[0]}`;
    } else return `${a[2]}-${a[1]}-${a[0]}`;
  };

  // Xử lí khi ấn xóa, hàm bên dưới dùng ref để gán tiêu đề và nội dung cho ref (có thể xem logic tại AlertDialog.js)
  const onClickDelete = (candidateId) => {
    refDialog.current?.show(
      'Bạn có muốn xóa ứng cử viên này?',
      'Sau khi xóa, ứng cử viên sẽ không thể khôi phục, hãy chắc chắn rằng bạn muôn xóa trước khi ấn "Đồng ý"'
    );
  };

  // Xử lí khi ấn sửa
  const onClickEdit = (candidate) => {
    navigate(`/admin/candidates/${candidate?.candidateId}/edit`, { state: { candidate } });
  };

  // Xử lí khi ấn xóa
  const _onConfirmDelete = () => {};

  // Tắt dialog khi ấn "Hủy"
  const _onCancelDelete = () => refDialog.current?.hide();

  const isUserNotFound = filterCandidate?.length === 0;

  return (
    <Page title="Danh sách ứng cử viên">
      <AlertDialog ref={refDialog} onConfirm={_onConfirmDelete} onCancel={_onCancelDelete} />

      <Container maxWidth={false}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Ứng cử viên
          </Typography>
          <ButtonCustomize
            variant="contained"
            component={RouterLink}
            to="/admin/candidates/add"
            nameButton="Thêm ứng cử viên"
          />
        </Stack>

        <Card>
          <Campaignlistoolbar
            numSelected={selected?.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            options={getOptions()}
          />
          {/* <Scrollbar> */}
          <TableContainer>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={candidate?.length}
                numSelected={selected?.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filterCandidate?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  const { candidateId, fullName, email, gender, description, avatarUrl, phone } = row;
                  const handleClickDelete = () => onClickDelete(candidateId);
                  const handleClickEdit = () => onClickEdit(row);

                  return (
                    <TableRow hover key={candidateId} tabIndex={-1} role="checkbox">
                      <TableCell>
                        <Avatar alt={avatarUrl} src={avatarUrl} />
                      </TableCell>
                      <TableCell align="left">{fullName}</TableCell>
                      <TableCell align="left">{email}</TableCell>
                      <TableCell align="left">{gender}</TableCell>
                      <TableCell align="left">{phone}</TableCell>
                      <TableCell align="left">{description}</TableCell>
                      <TableCell align="left" sx={{ width: '13%' }}>
                        <IconButton aria-label="delete" color="secondary" onClick={handleClickDelete}>
                          <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton aria-label="edit" color="primary" onClick={handleClickEdit}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <SearchNotFound searchQuery={filterName} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
          {/* </Scrollbar> */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={candidate?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            // fix languge in footer tables
            labelRowsPerPage={'Số hàng trên một trang'}
            labelDisplayedRows={({ from, to, count }) => {
              return '' + from + '-' + to + ' của ' + count;
            }}
          />
        </Card>
      </Container>
    </Page>
  );
}
