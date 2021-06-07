import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Clientes from "../pages/Clientes";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/servicios" exact render={() => <Servicios />} />
      <Route path="/clientes" exact render={() => <Clientes />} />
    </Switch>
  );
};

export default Routes;
