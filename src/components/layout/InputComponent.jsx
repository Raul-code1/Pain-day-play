import styled from "styled-components";

const InputComponent = ({
  name,
  labelText,
  type,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <Wrapper className="form-input-container">
      <label htmlFor={name}>{labelText ? labelText : name}</label> <br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="on"
      />
    </Wrapper>
  );
};

export default InputComponent;

const Wrapper = styled.div`
  
  label {
    font-weight: bold;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }

  input {
    border: none;
    outline: none;
    background-color: var(--bg-grey-color);
    color: var(--headers-color);
    width: 90%;
    padding: .625rem;
    border-radius: var(--radius-helper);
    font-family: var(--generals-font);
  }
`;
