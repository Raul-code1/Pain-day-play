import { Link } from "react-router-dom";
import styled from "styled-components";

const adminNavLinks = [
  { id: 0, text: "Instalaciones", path: "/admin/dashboard" },
  {
    id: 1,
    text: "Crear o editar instalacion",
    path: "/admin/dashboard/create-update",
  },
];

const AdminNavBar = () => {
  return (
    <Wrapper>
      <div className="admin-links-container">
        {adminNavLinks.map((l, i) => {
          return (
            <Link to={l.path} key={l.id} className="link">
              {l.text}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default AdminNavBar;

const Wrapper = styled.nav`
  .admin-links-container {
    display: flex;
    gap: 1.875rem;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1100px) {
    width: 180px;
    padding-top: 1.25rem;
    .admin-links-container {
      flex-direction: column;
      text-align: center;
    }
  }
`;
