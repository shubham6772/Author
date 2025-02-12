import { useEffect } from "react";
import { Loader } from "./components";
import AppRoutes from "./router/router";

const App = () => {

  useEffect(()=>{
    
  },[]);

  return (
    <div className="app-container">
      <Loader />
      <div className="router-container">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
