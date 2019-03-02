import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";

import LoginForm from "../src/components/LoginForm";
import EmployeeList from "../src/components/EmployeeList";
import EmployeeCreate from "../src/components/EmployeeCreate";
import EmployeeEdit from "../src/components/EmployeeEdit";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            leftTitle="Log Out"
            onLeft={() => Actions.pop()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
          />
          <Scene
            key="employeeEdit"
            title="Edit Employee"
            component={EmployeeEdit}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
