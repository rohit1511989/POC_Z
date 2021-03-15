import React,{Fragment,useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {getPosts} from '../store/actions/paginateAction'
const useStyles = makeStyles(theme => ({
  root:{
      margin:'15px 0 15px 0',
      padding:'0',
      listStyle:'none',
      float:'right',
      '& li' :{
                display:'inline',
              '&.active a':{
                    color: '#fff',
                    cursor: 'default',
                    backgroundColor: '#6f7077f7',
                    borderColor:'#6f7077f7'
              },
              '&.disabled a':{
                  color: '#777',
                  cursor: 'not-allowed',
                  backgroundColor: '#fff',
                  borderColor:' #ddd',
                  textDecoration: 'line-through'
              },
              '&.first-item  a':{
                marginLeft:'0',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px'
              },
              '&.last-item  a':{
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px'
              }   
              },
      '& li a' :{
              position: 'relative',
              float: 'left',
              padding: '6px 12px',
              marginLeft: '-1px',
              lineHeight: '1.42857143',
              color: '#337ab7',
              textDecoration: 'none',
              backgroundColor: '#fff',
              border: '1px solid #ddd'
              },
      '& li a:hover' :{
              color: '#23527c',
              backgroundColor: '#eee',
              borderColor: '#ddd'
              }
      }
}));
function Pagination(){
    const page = useSelector(state => state.vehicleData);
    const { pager } = page.pageItems;
    const dispatch = useDispatch();
    const classes = useStyles();
    const params = new URLSearchParams(window.location.search);
    
    const pageIndex = parseInt(params.get('page')) || 1;
    
    useEffect(() => {
        
          dispatch(getPosts(pageIndex));
         
    }, [pageIndex]);
  
    
  
    return (
        <Fragment>
                  {pager.pages && pager.pages.length && <>
                      <ul className={classes.root}>
                        <li className={`first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                          <Link to={{ search: `?page=1` }} >First</Link>
                        </li>
                        <li className={`previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                          <Link to={{ search: `?page=${pager.currentPage - 1}` }} >Previous</Link>
                        </li>
                        {pager.pages.map((page,i) =>
                          <li key={i} className={`number-item ${pager.currentPage === page ? 'active' : ''}`}>
                            <Link to={{ search: `?page=${page}` }} >{page}</Link>
                          </li>
                        )}
                        <li className={`next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                          <Link to={{ search: `?page=${pager.currentPage + 1}` }} >Next</Link>
                        </li>
                        <li className={`last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                          <Link to={{ search: `?page=${pager.totalPages}` }} >Last</Link>
                        </li>
                      </ul> </>
                    }
                  
     </Fragment>
    )
  }
  export default Pagination;
  
  
  
  
 










// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             pager: {},
//             pageOfItems: []
//         };
//     }

//     componentDidMount() {
//         this.loadPage();
//     }

//     componentDidUpdate() {
//         this.loadPage();
//     }

//     loadPage() {
//         // get page of items from api
//         const params = new URLSearchParams(window.location.search);
//         const page = parseInt(params.get('page')) || 1;
//         if (page !== this.state.pager.currentPage) {
//             fetch(`http://localhost:3002/api/items?page=${page}`, { method: 'GET' })
//                 .then(response => response.json())
//                 .then(({pager, pageOfItems}) => {
//                     this.setState({ pager, pageOfItems });
//                 });
//         }
//     }

//     render() {
//         const { pager, pageOfItems } = this.state;
//         console.log(pageOfItems);
//         return (
//             <div className="card text-center m-3">
//                 <h3 className="card-header">React + Node - Server Side Pagination Example</h3>

//                     <TableBody>
//                         {pageOfItems
//                             .map((row, index) => {
//                             return (
//                                 <TableRow
//                                 key={index}
//                                 >
//                                 <TableCell>{row.vehicaleno}</TableCell>
//                                 <TableCell >{row.vehicaleregdate}</TableCell>
//                                 <TableCell>{row.vehicalestatus}</TableCell>
//                                 </TableRow>
//                             );
//                             })}
                        
//                     </TableBody>
        
//                 <div className="card-footer pb-0 pt-3">
//                     {pager.pages && pager.pages.length &&
//                         <ul className="pagination">
//                             <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
//                                 <Link to={{ search: `?page=1` }} className="page-link">First</Link>
//                             </li>
//                             <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
//                                 <Link to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link">Previous</Link>
//                             </li>
//                             {pager.pages.map(page =>
//                                 <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
//                                     <Link to={{ search: `?page=${page}` }} className="page-link">{page}</Link>
//                                 </li>
//                             )}
//                             <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
//                                 <Link to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link">Next</Link>
//                             </li>
//                             <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
//                                 <Link to={{ search: `?page=${pager.totalPages}` }} className="page-link">Last</Link>
//                             </li>
//                         </ul>
//                     }                    
//                 </div>
//             </div>
//         );
//     }
// }

// export { HomePage };