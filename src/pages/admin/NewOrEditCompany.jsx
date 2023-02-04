import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";

import { InputComponent } from "../../components/layout";
import {
  handleChangeActiveCompany,
  handleChangePricing,
  addPricing,
  clearActiveAdminCompany,
} from "../../feautres/userAdmin/userAdminSlice";
import { UploadImageForm } from "../../components/companies";
import {
  createCompanyAdminThunk,
  updateCompanyAdminThunk,
} from "../../feautres/userAdmin/userAdminThunk";

const NewOrEditCompany = () => {
  const { activeAdminCompany, isEditingCompany } = useSelector(
    (store) => store.userAdmin
  );
  const dispatch = useDispatch();

  const onChangeFields = ({ target }) => {
    const name = target.name;
    const value = target.value;
    dispatch(handleChangeActiveCompany({ name, value }));
  };

  const onChangePricing = (e, i) => {
    const index = i;
    const name = e.target.name;
    const value = e.target.value;
    if (name === "price" && value < 0) {
      return toast.error("No se puede poner numeros negativos");
    }
    dispatch(handleChangePricing({ index, name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pricing } = activeAdminCompany;
    let tempActiveCompany = Object.keys(activeAdminCompany);
    let validateField = false;

    tempActiveCompany.some((keyOption, i) => {
      if (!activeAdminCompany[keyOption] && !validateField) {
        validateField = true;
        return toast.error(`Por favor rellena todo los campos`);
      }
    });

    if (pricing.length === 0) {
      return toast.error("Por favor ingresa al menos 1 plan y precio");
    }

    pricing.forEach((objectPricing, i) => {
      if (!objectPricing.planName || objectPricing.price === 0) {
        return toast.error("Por favor completa bien los campos");
      }
    });

    const company = { ...activeAdminCompany };

    if (isEditingCompany) {
      dispatch(updateCompanyAdminThunk(company));
    } else {
      dispatch(createCompanyAdminThunk(company));
    }

    dispatch(clearActiveAdminCompany());
  };

  return (
    <Wrapper className="">
      <h3>
        {isEditingCompany
          ? "Editar la  instalacion"
          : "Crear una nueva instalacion"}
      </h3>
      <form onSubmit={handleSubmit}>
        <InputComponent
          name="name"
          labelText="Nombre de la instalacion"
          type="text"
          value={activeAdminCompany.name}
          onChange={onChangeFields}
        />
        <InputComponent
          name="location"
          labelText="Localización"
          type="text"
          value={activeAdminCompany.location}
          onChange={onChangeFields}
        />
        <InputComponent
          name="description"
          labelText="Descripcion"
          type="text"
          value={activeAdminCompany.description}
          onChange={onChangeFields}
        />
        <InputComponent
          name="category"
          labelText="Categoria"
          type="text"
          value={activeAdminCompany.category}
          onChange={onChangeFields}
        />

        {activeAdminCompany.pricing.map((ob, i) => {
          return (
            <div className="pricing-field" key={i}>
              <InputComponent
                name="planName"
                labelText="Plan"
                type="text"
                value={ob.planName}
                onChange={(e) => onChangePricing(e, i)}
              />
              <InputComponent
                name="price"
                labelText="Precio"
                type="number"
                value={ob.price}
                onChange={(e) => onChangePricing(e, i)}
              />
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => dispatch(addPricing())}
          className="btn"
        >
          Añadir plan
        </button>
        <InputComponent
          name="image"
          labelText="Imagen"
          type="text"
          value={activeAdminCompany.image}
          onChange={onChangeFields}
        />
        <InputComponent
          name="contactPhone"
          labelText="Telefono de contacto"
          type="text"
          value={activeAdminCompany.contactPhone}
          onChange={onChangeFields}
        />
        <InputComponent
          name="website"
          labelText="Sitio web"
          type="text"
          value={activeAdminCompany.website}
          onChange={onChangeFields}
        />
        <button type="submit" className="btn">
          {isEditingCompany ? "Editar" : "Crear instalacion"}
        </button>
      </form>
      <UploadImageForm />
    </Wrapper>
  );
};

export default NewOrEditCompany;

const Wrapper = styled.section`
  background-color: var(--bg-darker-color);
  min-height: 100vh;
  padding: 3.125rem 0.625rem;
  .pricing-field {
    padding-top: 2.5rem;
  }

  form {
    .btn {
      margin: 10px 0px;
    }
  }

  @media (min-width: 1100px) {
    padding-top: 0rem;

    form {
      width: 50%;
    }

    .pricing-field {
      display: flex;
      .btn {
        height: 40px;
        margin-top: 20px;
      }
    }
  }
`;
