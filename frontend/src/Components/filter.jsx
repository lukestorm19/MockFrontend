import React from 'react';
import filtered from '../Data/filtered';

function count(){
    return filtered.length;
}
function Filter(props){
  return(<main className="content">
  <div className="row">
    <div className="col-md-6 col-sm-10 mx-auto p-0">
      <div className="card p-3">
          <h3>Filtered data</h3>
          <h4>{count()}</h4>
        <ul className="list-group list-group-flush">
        {filtered.map(item => (
        <div>
          <span>{item.filter_layer}</span>   
        </div>
        ))}
        </ul>
      </div>
    </div>
  </div>
</main>);

}
 
export default Filter;