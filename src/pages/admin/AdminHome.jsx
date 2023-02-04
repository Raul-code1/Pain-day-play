import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { AdminNavBar } from "../../components/user";

const AdminHome = () => {
  //todo:admin dashboard link on mobile

  return (
    <Wrapper>
      <AdminNavBar />
      <div className="admin-content">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default AdminHome;

const Wrapper = styled.div`
  min-height: 100vh;

  .admin-content {
    background-color: var(--paragraphs-secondary-color);
    min-height: 100vh;
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;
