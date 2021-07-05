import React from 'react';
import filtered from '../Data/filtered';
import { Table,  Card,  CardTitle, CardText, Col } from 'reactstrap';

function count(){
    return filtered.length;
}
function Filter(props){
//   return(<main className="content">
//   <div className="row">
//     <div className="col-md-6 col-sm-10 mx-auto p-0">
//       <div className="card p-3">
//           <h2>Filtered data</h2>
//           <h1>{count()}</h1>
//         <ul className="list-group list-group-flush">
//         {filtered.map(item => (
//         <div>
//           <h3>{item.filter_name}</h3>
//           <span>{item.filter_layer}</span>   
//         </div>
//         ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// </main>);
// }
return (
    <div>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Filtered</CardTitle>
          <CardText>{count()}</CardText>
        </Card>
      </Col>

     <Table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>Filter Description</th>
        </tr>
      </thead>
      <tbody>
            {filtered.map(item => (
                <tr>
                <td>{item.filter_layer}</td>
                <td>{item.filter_name}</td>               
        </tr>         
         ) )}
      </tbody>
    </Table>

    </div>
   
  );
}

 
export default Filter;