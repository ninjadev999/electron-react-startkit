import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SideBar from '../sidebars/SideBar';

function createData(id, name, email, attended, country, registrationDate) {
  return { id, name, email, attended, country, registrationDate };
}

const rows = [
  createData(
    0,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    1,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    2,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    3,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    4,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    5,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    6,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    7,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    8,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    9,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  ),
  createData(
    10,
    'Tesha B.',
    'lateshaburroughs@gmail.com',
    false,
    'USA',
    'Thursday, May 23rd 2019 - 6:02 (EEST)'
  )
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'NAME' },
  { id: 'email', numeric: true, disablePadding: false, label: 'EMAIL' },
  { id: 'attended', numeric: true, disablePadding: false, label: 'ATTENDED' },
  { id: 'country', numeric: true, disablePadding: false, label: 'COUNTRY' },
  {
    id: 'registrationDate',
    numeric: true,
    disablePadding: false,
    label: 'RESITRATION DATE'
  }
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          ''
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  cellText: {
    color: '#272C5E',
    fontWeight: '500',
    fontSize: 18
  },
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#7F88B2',
    fontSize: 15,
    width: 30,
    height: 30,
    borderRadius: '33%'
  },
  nameWrapper: {
    display: 'inline',
    whiteSpace: 'nowrap'
  },
  inline: {
    display: 'inline'
  }
}));

export default function ContactsTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [selectedContactId, setSelectedContactId] = React.useState(0);

  const handleRequestSort = (event, property) => {
    console.log(event);
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = name => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickContact = contactId => {
    console.log('==== handleClickContact: contactId: ', contactId);
    setSelectedContactId(contactId);
    setOpen(true);
  };

  const onCloseCallback = () => setOpen(false);

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={() => handleClick(row.name)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <ListItem
                          button
                          onClick={() => handleClickContact(row.id)}
                        >
                          <ListItemAvatar>
                            <Avatar className={classes.purpleAvatar}>AT</Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={row.name} />
                        </ListItem>
                      </TableCell>
                      <TableCell align="right">
                        <div className={classes.cellText}>{row.email}</div>
                      </TableCell>
                      <TableCell align="right">
                        <div className={classes.cellText}>{row.attended}</div>
                      </TableCell>
                      <TableCell align="right">
                        <div className={classes.cellText}>{row.country}</div>
                      </TableCell>
                      <TableCell align="right">
                        <div className={classes.cellText}>
                          {row.registrationDate}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page'
          }}
          nextIconButtonProps={{
            'aria-label': 'next page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <SideBar
        open={open}
        contactId={selectedContactId}
        onClose={onCloseCallback}
      />
    </div>
  );
}
