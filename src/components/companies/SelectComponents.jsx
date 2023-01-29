import Select from "react-select";

const SelectComponents = ({options,onChange}) => {
  return (
    <>
      <Select
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#242629",
            border: "1px solid gray",
            borderRadius: 4,
            padding: 6,
          }),
          indicator: (base, state) => ({
            ...base,
            color: "white",
          }),
          option: (base, state) => ({
            ...base,
            color: state.isSelected ? "white" : "black",
            backgroundColor: state.isSelected ? "#242629" : "white",
          }),
          singleValue: (base, state) => ({
            ...base,
            color: "white",
          }),
        }}
        options={options}
        onChange={onChange}
      />
    </>
  );
};

export default SelectComponents;
