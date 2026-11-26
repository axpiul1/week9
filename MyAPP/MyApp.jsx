import { Routes, Route, Link } from "react-router-dom";

import AddEmployee from "./AddEmp";
import EmployeeList from "./EmpList";
import UpdateEmployees from "./EmpUpdate";

function MyApp() {

    return (

        <div>

            <h1>Employee Management System</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Employee List</Link>
                    </li>

                    <li>
                        <Link to="/add">Add Employee</Link>
                    </li>

                    <li>
                        <Link to="/update">Update Employee</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Routes>

                <Route
                    path="/"
                    element={<EmployeeList />}
                />

                <Route
                    path="/add"
                    element={<AddEmployee />}
                />

                <Route
                    path="/update"
                    element={<UpdateEmployees />}
                />

            </Routes>

        </div>

    );

}

export default MyApp;