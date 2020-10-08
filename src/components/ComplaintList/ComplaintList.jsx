import React, { useState, useEffect } from 'react';

import './complaintList.scss';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

///////////////
const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500
  }
});

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
////////////////

const ComplaintList = props => {
  // const { info } = useSelector(state => state.productNames);

  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [complaintList, setComplaintList] = useState([]);

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, complaintList.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    var a = [];
    props.complaints.map(complaint => {
      const complaintJSX = (
        <div className={'complaint-info-row'}>
          <div className={'complaint-info-col'}>
            <p className={'complaint-product-name'}>
              {complaint.maker_name} {complaint.complainDetail.model_name}
            </p>
            <p className={'complaint-product-purchase'}>
              Purchased {complaint.complainDetail.purchase_mode}
            </p>
            <p className={'complaint-product-price'}>
              <b>INR {complaint.complainDetail.phone_price}</b>
            </p>
          </div>
          <div className={'complaint-info-col'}>
            {complaint.orderDetails.order_no}
          </div>
          <div className={'complaint-info-col'}>
            {complaint.serviceCenterActivityDetails.lastActivityType.replaceAll(
              '_',
              ' '
            )}
          </div>
          {complaint.serviceCenterOrderDetails.phone_warranty ? (
            <div className={'complaint-info-col'}>
              {complaint.serviceCenterOrderDetails.phone_warranty ===
              'in_warranty' ? (
                <div className={'complaint-info-col'}>In Warranty</div>
              ) : complaint.serviceCenterOrderDetails.phone_warranty ===
                'non_warranty' ? (
                <div className={'complaint-info-col'}>Non Warranty</div>
              ) : (
                <div className={'complaint-info-col'}>Out Of Warranty</div>
              )}
            </div>
          ) : (
            <div className={'complaint-info-col'}>
              {complaint.complainDetail.under_warranty === 'no' ? (
                <div className={'complaint-info-col'}>Out of Warranty</div>
              ) : (
                <div className={'complaint-info-col'}>In Warranty</div>
              )}
            </div>
          )}
          <div className={'complaint-info-col'}>
            <Button
              variant="contained"
              className={'button btn-open-complaint'}
              onClick={() => props.openComplaint(complaint)}
            >
              Complete complaint
            </Button>
          </div>
        </div>
      );

      a.push(complaintJSX);
    });

    setComplaintList(a);
  }, []);
  return (
    <>
      <div className={'complaint-info-row complaint-info-row-header'}>
        <div className={'complaint-info-col complaint-info-col-header'}>
          DEVICE DETAILS
        </div>
        <div className={'complaint-info-col complaint-info-col-header'}>
          ORDER NO
        </div>
        <div className={'complaint-info-col complaint-info-col-header'}>
          ORDER STATUS
        </div>
        <div className={'complaint-info-col complaint-info-col-header'}>
          WARRANTY CONSIDERATION
        </div>
        <div className={'complaint-info-col complaint-info-col-header'}>
          VIEW DETAILS
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? complaintList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : complaintList
            ).map(row => (
              <TableRow>{row}</TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={complaintList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>{' '}
    </>
  );
};

export default ComplaintList;
