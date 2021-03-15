import React, {useState} from 'react';
import {makeStyles, Table, TableCell, TableHead, TableRow, TableSortLabel} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    table:{
        marginTop:theme.spacing(3),
        '& thead th':{
            fontWeight:'600',
            color:'#6a7979',
            backgroundColor:'#d9dbe6'
        },
        '& thead td' :{
            fontWeight: '300'
        },
        '& tbody tr:hover':{
            backgroundColor: 'rgb(169 171 181 / 7%)',
            cursor: 'pointer'
        },
    },

}))


export default function useListTable(vehiclaList,headCells) {
    const dataRows=[] ;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');

    function createData(vehicaleno, vehicaleregdate,vehicalestatus,state) {
      return { vehicaleno, vehicaleregdate, vehicalestatus, state };
    }
   
    vehiclaList && vehiclaList.map((item) => (
      
      dataRows.push(createData(item.vehicleNo,item.dateOfReg,item.statusOfReg,item.state))

    ))
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
    
    function stableSort(array, comparator) {
      const stabilizedThis = array.map((el, index) => [el, index]);
      stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
      });
      return stabilizedThis.map((el) => el[0]);
    }
    
      
    const classes = useStyles();

    const TblContainer = props => (
        <Table className={classes.table} >
            {props.children}
        </Table>
    )

    const TblHead =  props => {
   
        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId)
        }
       

        return (
        
            <TableHead>
                <TableRow>
                {
                    headCells.map(headCell => (
                        <TableCell key={headCell.id}
                            sortDirection={orderBy === headCell.id ? order : false}>
                            {headCell.disableSorting ? headCell.label :
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => { handleSortRequest(headCell.id) }}>
                                    {headCell.label}
                                </TableSortLabel>
                            }
                        </TableCell>))
                }
            </TableRow>
            </TableHead>

        )
    }

    const recordsAfterSorting = () => {
      return stableSort(dataRows, getComparator(order, orderBy));
  }
    
    return {
        TblContainer,
        TblHead,
        recordsAfterSorting
        
    }

}