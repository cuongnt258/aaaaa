import { filter } from "lodash";
import { useState } from "react";
import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  IconButton,
} from "@mui/material";
// components

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import UserListHead from "layouts/sections/UserListHead";
import Campaignlistoolbar from "layouts/sections/Campaignlistoolbar";
import Page from "components/Layout/Page";
import SearchNotFound from "components/Layout/SearchNotFound";
import { useContext } from "react";
import { Authen } from "context/authenToken/AuthenToken";
import Button from "components/Control/Button";
import { callAPIgetListCandidates } from "context/redux/action/action";
import Iconify from "assets/theme/components/icon/Iconify";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "avatarUrl", name: "Hình", alignRight: false },
  { id: "fullName", label: "Tên", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "gender", label: "Giới tính", alignRight: false },
  { id: "phone", label: "Số điện thoại", alignRight: false },
  { id: "description", label: "Tham gia chiến dịch", alignRight: false },
  { id: "Action", label: "Action", alignRight: true },
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
  return order === "desc"
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
    return filter(
      array,
      (candidate) => candidate.fullName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis?.map((el) => el[0]);
}
//getICon

export default function CandidiateAccountList() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const handleClickOpen = React.useCallback((item) => {
    setOpen(true);
    setValue(item);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { token } = useContext(Authen);

  React.useEffect(() => {
    const callAPI = async () => {
      await dispatch(callAPIgetListCandidates(token));
    };
    callAPI();
  }, [dispatch, token]);

  //useSelect lấy data từ store =>
  const candidate = useSelector((state) => {
    return state.candidate;
  });

  const getOptions = () => [
    { id: "active", title: "Đang bán" },
    { id: "inActive", title: "Ngưng bán" },
    { id: "All", title: "Tất cả" },
  ];
  const getIcon = (name) => <Iconify icon={name} width={20} />;

  const handleDelete = async (id) => {};

  //========================================================
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filterCandidate = applySortFilter(candidate, getComparator(order, orderBy), filterName);

  const handleDate = (time) => {
    const a = new Date(time).toLocaleDateString().split("/");
    if (a[0] < 10) {
      return `${a[2]}-${a[1]}-0${a[0]}`;
    } else return `${a[2]}-${a[1]}-${a[0]}`;
  };

  const isUserNotFound = filterCandidate?.length === 0;
  return (
    <Page title="Admin">
      <Container maxWidth={false}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {/* <Icon icon="emojione-monotone:pot-of-form" fontSize={100} /> */}
          </Typography>
          <ButtonCustomize
            variant="contained"
            component={RouterLink}
            to="/dashboard/admin/newfood"
            nameButton="Tạo tài khoản"
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
                {/* nhớ khởi tạo đúng tên file trong database */}
                {filterCandidate
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const { candidateId, fullName, email, gender, description, avatarUrl, phone } =
                      row;

                    const isItemSelected = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={candidateId}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell>
                          <Avatar alt={avatarUrl} />
                        </TableCell>
                        <TableCell align="left">{fullName}</TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="left">{gender}</TableCell>
                        <TableCell align="left">{phone}</TableCell>
                        <TableCell align="left">{description}</TableCell>
                        <TableCell align="left" sx={{ width: "13%" }}>
                          <IconButton aria-label="delete" color="secondary">
                            <DeleteOutlineIcon />
                          </IconButton>
                          <IconButton aria-label="edit" color="primary">
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
            labelRowsPerPage={"Số hàng trên một trang"}
            labelDisplayedRows={({ from, to, count }) => {
              return "" + from + "-" + to + " của " + count;
            }}
          />
        </Card>
      </Container>
    </Page>
    // <Page title="Admin">
    //   <Container maxWidth={false}>
    //     <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    //       <Typography variant="h4" gutterBottom>
    //         {/* <Icon icon="emojione-monotone:pot-of-form" fontSize={100} /> */}
    //       </Typography>
    //       <ButtonCustomize
    //         variant="contained"
    //         component={RouterLink}
    //         to="/user/newfood"
    //         nameButton=" Tạo Tài Khoản"
    //       />
    //     </Stack>

    //     <Card>
    //       <Campaignlistoolbar
    //         numSelected={selected?.length}
    //         filterName={filterName}
    //         onFilterName={handleFilterByName}
    //         options={getOptions()}
    //       />
    //       <Scrollbar>
    //         <TableContainer>
    //           <Table>
    //             <UserListHead
    //               order={order}
    //               orderBy={orderBy}
    //               headLabel={TABLE_HEAD}
    //               rowCount={candidate?.length}
    //               numSelected={selected?.length}
    //               onRequestSort={handleRequestSort}
    //               onSelectAllClick={handleSelectAllClick}
    //             />
    //             <TableBody>
    //               {/* nhớ khởi tạo đúng tên file trong database */}
    //               {filterCandidate
    //                 ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //                 .map((row) => {
    //                   const { candidateId, fullName, email, gender, description, avatarUrl } = row;

    //                   const isItemSelected = selected.indexOf(name) !== -1;

    //                   return (
    //                     <TableRow
    //                       hover
    //                       key={candidateId}
    //                       tabIndex={-1}
    //                       role="checkbox"
    //                       selected={isItemSelected}
    //                       aria-checked={isItemSelected}
    //                     >
    //                       <TableCell>
    //                         <Avatar alt={avatarUrl} />
    //                       </TableCell>

    //                       <TableCell align="left">{fullName}</TableCell>
    //                       <TableCell align="left">{email}</TableCell>
    //                       <TableCell align="left">{gender}</TableCell>
    //                       <TableCell align="left">{description}</TableCell>
    //                       <TableCell align="left">
    //                         <Button>Update</Button>
    //                         <Button>Ban</Button>
    //                       </TableCell>
    //                     </TableRow>
    //                   );
    //                 })}
    //             </TableBody>
    //             {isUserNotFound && (
    //               <TableBody>
    //                 <TableRow>
    //                   <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
    //                     <SearchNotFound searchQuery={filterName} />
    //                   </TableCell>
    //                 </TableRow>
    //               </TableBody>
    //             )}
    //           </Table>
    //         </TableContainer>
    //       </Scrollbar>
    //       <TablePagination
    //         rowsPerPageOptions={[5, 10, 20]}
    //         component="div"
    //         count={candidate?.length}
    //         rowsPerPage={rowsPerPage}
    //         page={page}
    //         onPageChange={handleChangePage}
    //         onRowsPerPageChange={handleChangeRowsPerPage}
    //         // fix languge in footer tables
    //         labelRowsPerPage={"Số hàng trên một trang"}
    //         labelDisplayedRows={({ from, to, count }) => {
    //           return "" + from + "-" + to + " của " + count;
    //         }}
    //       />
    //     </Card>
    //   </Container>
    // </Page>
  );
}
