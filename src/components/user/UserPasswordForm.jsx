import { useState } from "react";
import styled from "styled-components";

import InputComponent from "../layout/InputComponent";

const UserPasswordForm = () => {
  const [updatePassword, setUpdatePassword] = useState({
    password: "",
    newPassword: "",
  });

  const handlePasswordChange = ({ targer }) => {
    let name = targer.name;
    let value = targer.value;
    setUpdatePassword({ ...updatePassword, [name]: value });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <p>Actualiza tu contraseña </p>
      <form onSubmit={handlePasswordSubmit} className="password-user-form">
        <InputComponent
          labelText="Contraseña actual"
          type="text"
          name="password"
          value={updatePassword.password}
          onChange={handlePasswordChange}
          placeholder="*********"
        />
        <InputComponent
          labelText="Contraseña nueva"
          type="text"
          name="newPassword"
          value={updatePassword.newPassword}
          onChange={handlePasswordChange}
          placeholder="*********"
        />
        <button type="submit" className="btn">
          Actualizar contraseña
        </button>
      </form>
    </Wrapper>
  );
};

export default UserPasswordForm;

const Wrapper = styled.div`
  margin-top: 1.25rem;
    p{
      font-size: 1.25rem;
    }
  .btn {
    margin-top: 0.9375rem;
  }

  @media (min-width: 800px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    .password-user-form {
      .form-input-container,
      .form-input-container input {
        font-size: 20px;
      }
    }
  }
`;
