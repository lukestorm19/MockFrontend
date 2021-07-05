import React, { Component } from 'react';
// import exception from '../Data/exception';
 /*Returning Exception Data to the dashboard*/
class Exception extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/getProcessedRecords')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      });
  }
  
    /*Count total number of exceptions
    Count() {   
      return exception.length;
    }*/
    render() { 
      const { items } = this.state;
        return ( 
            <main className="content">
            <div className="row">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  {/*Displaying Number of Exceptions
                  <h3>Exception Data</h3>
                  <h4>{this.Count()}</h4>*/}
                  <ul className="list-group list-group-flush">
                    {/*Displaying Exception Details*/}
                    {items.map(item => (
                    <li key={item.id}>
                    <h3>{item.record_ID}</h3>
                    <p>{item.record_id}</p>
                    <p>{item.exception_layer}</p>
                    <p>{item.exception_name}</p>
                    </li>
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