import React from 'react';
import Add from '../addDetails';

addRow = () =>{ 
    var empid = document.getElementById('empid').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var balance = document.getElementById('balance').value;

    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(0); 

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(0);
    var cel3 = newRow.insertCell(0);
    var cel4 = newRow.insertCell(0);

    cel1.innerHTML = empid;
    cel2.innerHTML = fname;
    cel3.innerHTML = lname;
    cel4.innerHTML = balance;

}

const Register = () =>{
    return(        
        <div class="container">   
            <div class="row">
                    <form className="col-md-3">
                        <div className="form-group">
                            <input type="number" className="form-control" name="empid" id="empid" placeholder="Employee ID"></input>
                            <input type="text" className="form-control" name="fname" id="fname" placeholder="First Name"></input>
                            <input type="text" className="form-control" name="lname" id="lname" placeholder="Last Name"></input>
                            <input type="number" className="form-control" name="balance" id="balance" placeholder="Balance"></input>                        
                        </div>                
                        <button class="btn btn-primary" onClick={this.addRow}>Register</button>
                    </form> 
            </div>  

            <div class="table-responsive">
                    <table className="table table-striped">
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Balance</th>
                        </tr>
                        <tr>
                            <td>007</td>
                            <td>James</td>
                            <td>Bond</td>
                            <td>7000</td>
                        </tr>
                    </table>   
            </div>             
        </div>
    );
};

export default Register;