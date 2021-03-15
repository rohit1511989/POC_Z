import React, {Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchData} from '../store/actions/vehicleActions'
import { TableBody, TableCell, TableRow,makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useListTable from '../components/sharedComponents/useListTable';
import BasicDateRangePicker from '../components/sharedComponents/DatePicker';
import Pagination from '../components/Pagination';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  typography: {
    textAlign: "center",
    color: '#797c84'
  }

}))
const headCells = [
  {id:'vehicaleno',numeric: true,label:'Vehicle Number'},
  {id:'vehicaleregdate',label:'Registraton Date'},
  {id:'state',label:'State'},
  {id:'vehicalestatus',label:'Status',disableSorting: true}
]
function Vehicle() {

  const page = useSelector(state => state.vehicleData);
  const {loading,showData}=page;
  const {pageOfItems } = page.pageItems;
  //console.log(pageOfItems);
  const clearData = useSelector(state => state.clearData); 
  const dispach = useDispatch();
  const classes = useStyles();
  
   
  const {
    TblContainer,
    TblHead,
    recordsAfterSorting

  } = useListTable(pageOfItems,headCells)
 
  useEffect(() => {
    dispach(fetchData()); 
  }, [dispach]);
  
  
  return (
    <Container className={classes.root}>
      
      { showData && <>
        <Typography className={classes.typography} variant="h4" >Vehicle List Table</Typography>
        <TblContainer>
          <TblHead/>
          <TableBody>
                {recordsAfterSorting()
                  .map((row, index) => {
                    return (
                      <TableRow
                        key={index}
                      >
                        <TableCell>{row.vehicaleno}</TableCell>
                        <TableCell >{row.vehicaleregdate}</TableCell>
                        <TableCell >{row.state}</TableCell>
                        <TableCell>{row.vehicalestatus}</TableCell>
                      </TableRow>
                    );
                  })}
                
          </TableBody>
          
          </TblContainer>
          <Pagination/>
        </>
      
      }
      
    </Container>  
  );
  
}

export default Vehicle;
