import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      {/* //todo:navbar with all companies add/update company,  */}
      <div>Aqui el navbar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminHome;
