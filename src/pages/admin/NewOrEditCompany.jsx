import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";

import { InputComponent } from "../../components/layout";
import {
  handleChangeActiveCompany,
  handleChangePricing,
  addPricing,
} from "../../feautres/userAdmin/userAdminSlice";

const NewOrEditCompany = () => {
  const { activeAdminCompany } = useSelector((store) => store.userAdmin);
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

    //todo: toggle edit, and dispatch of  create/update
  };

  return (
    <Wrapper className="">
      <h3>Crear una nueva instalacion</h3>
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
          Crear instalacion
        </button>
      </form>
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

/* import React, { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    category: '',
    pricing: [{ value: '' }],
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handlePricingChange = (index, event) => {
    const values = [...formData.pricing];
    values[index].value = event.target.value;
    setFormData({
      ...formData,
      pricing: values,
    });
  };

  const handleAddPricing = () => {
    setFormData({
      ...formData,
      pricing: [...formData.pricing, { value: '' }],
    });
  };

  const handleDeletePricing = (index) => {
    setFormData({
      ...formData,
      pricing: formData.pricing.filter((price, i) => i !== index),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </label>
      <br />
      <br />
      <fieldset>
        <legend>Pricing</legend>
        {formData.pricing.map((price, index) => (
          <div key={index}>
            <input
              type="number"
              value={price.value}
              onChange={(event) => handlePricingChange(index, event)}
            />
            <button type="button" onClick={() => handleDeletePricing(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddPricing}>
          Add
        </button>
      </fieldset>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  ); */
