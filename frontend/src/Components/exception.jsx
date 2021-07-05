import React, { Component } from 'react';
import exception from '../Data/exception';

class Exception extends Component {
    constructor(props) {
        super(props);
        this.state = {exception};
    };
    Count() {
      return exception.length;
    }
    render() { 
        return ( 
            <main className="content">
            <div className="row">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <h3>Exception Data</h3>
                  <h4>{this.Count()}</h4>
                  <ul className="list-group list-group-flush">
                  {this.state.exception.map(item => (
                  <div>
                    
                    <h5>{item.exception_name}</h5>
                    <span>{item.exception_desc}</span>   
                  </div>
                  ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
         );
    }
}
 
export default Exception;