import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import "./Dashboard.scss";
// import { useAppSelector } from "../../redux/hooks/hook";
const Dashboard = () => {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="dashboard-main-container">
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
