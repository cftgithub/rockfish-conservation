// import React from "react";
// import "./style.css";
// import {  } from 'react-bootstrap';
// import DeleteBtn from "../DeleteBtn";
// import EditBtn from "../EditBtn";
// import { List, ListItem } from '../List';
// import API from "../../utils/API";

// function CatchHistory() {

//     loadCatches = () => {
//         API.getCreels()
//           .then((res) => this.setState({ catches: res.data }))
//           .catch((err) => console.log(err));
//     };
    
//     deleteCreel = (id) => {
//         API.deleteCreel(id)
//           .then((res) => this.loadCatches())
//           .catch((err) => console.log(err));
//     };

//     return (
//         <>
//             <div className='card-body creel-history text-center'>
//               <h5 className='card-title creel text-center '>Catch History</h5>
//               <List>
//                 {this.state.catches.map((caught) => {
//                   return (
//                     <ListItem key={caught._id}>
//                       <a href={"/creels/" + caught._id}>
//                         <strong>
//                           {caught.species} Length: {caught.length}
//                         </strong>
//                       </a>
//                       <br></br>
//                       <DeleteBtn onClick={() => this.deleteCreel(caught._id)} />
//                       <EditBtn onClick={() => this.updateCreel(caught._id)} />

//                     </ListItem>
//                   );
//                 })}
//               </List>
//             </div>
//         </>
//     );
// }

// export default CatchHistory;