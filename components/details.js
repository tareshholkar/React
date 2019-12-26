import React from 'react';

const Details = () =>{
    return(
        <div className="container">
            
                <table className="table table-striped">
                <thead>
                                <tr>
                                    <th>Employee ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>007</td>
                                    <td>James</td>
                                    <td>Bond</td>
                                    <td>7000</td>
                                </tr>
                            </tbody>
                </table>
            
        </div>
    );
};

export default Details;