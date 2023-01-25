import { useState } from "react";
import styled from "styled-components";

import { InputComponent } from "../components/layout";

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  isMember: true,
};

const RegisterPage = () => {
  const [userRegisterPage, setUserRegisterPage] = useState(initialState);

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = target.value;
    setUserRegisterPage({ ...userRegisterPage, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = userRegisterPage;
  };

  const handleIsMember = () =>
    setUserRegisterPage({
      ...userRegisterPage,
      isMember: !userRegisterPage.isMember,
    });

  return (
    <Wrapper className="section-center">
      <div className="register-form-container">
        <h2>{userRegisterPage.isMember ? "Login" : "Registrarse"}</h2>
        <form onSubmit={handleSubmit}>
          {!userRegisterPage.isMember && (
            <InputComponent
              labelText="nombre"
              name="name"
              type="text"
              value={userRegisterPage.name}
              onChange={handleChange}
              placeholder="Tu nombre aqui..."
            />
          )}
          {!userRegisterPage.isMember && (
            <InputComponent
              labelText="nombre de usuario"
              name="username"
              type="text"
              value={userRegisterPage.username}
              onChange={handleChange}
              placeholder="Elige un nombre de usuario..."
            />
          )}
          <InputComponent
            name="email"
            type="email"
            value={userRegisterPage.email}
            onChange={handleChange}
            placeholder="Tu email aqui..."
          />
          <InputComponent
            labelText="contraseña"
            name="password"
            type="password"
            value={userRegisterPage.password}
            onChange={handleChange}
            placeholder="********"
          />
          <button type="submit" className="btn">
            { userRegisterPage.isMember? 'Login':'Registrate'}
          </button>
          <p>
            {userRegisterPage.isMember
              ? "  ¿No tienes ninguna cuenta creada?"
              : "¿Ya tienes una cuenta?"}
            &nbsp; &nbsp;
            <span onClick={handleIsMember} className="toggle-option-register">
              {userRegisterPage.isMember ? "Registrate" : "Inicia sesion"}
            </span>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;

const Wrapper = styled.section`
  height: 80vh;
  .register-form-container {
    h2 {
      font-size: 2.5rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      .btn {
        width: 30%;
        cursor: pointer;
      }
    }
  }

  .toggle-option-register {
    color: var(--btn-bg-color);
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: var(--headers-color);
    }
  }

  @media (min-width: 800px) {
    .register-form-container {
      h2 {
        font-size: 3.125rem;
      }
      width: 60%;
      margin: 0 auto;
    }
  }

  @media (min-width: 800px) {
    .register-form-container {
      width: 40%;
      margin: 0 auto;
      div {
        label {
          font-size: 1.125rem;
        }
      }
      form {
        p,
        .btn {
          font-size: 1.125rem;
        }
      }
    }
  }
`;
