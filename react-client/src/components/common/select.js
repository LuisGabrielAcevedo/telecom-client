import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

function Select({ searchData }) {
  const options = [
    { label: "Madrid", value: "Madrid" },
    { label: "Paris", value: "Paris" },
    { label: "Praga", value: "Praga" },
    { label: "Sao Paulo", value: "Sao Paulo" },
    { label: "Lima", value: "Lima" },
  ];

  const tl = {
    selectSomeItems: "Seleccione...",
    allItemsAreSelected: "Todos las cuidades estan seleccionados",
    selectAll: "Seleccione todas las ciudades",
    search: "Buscar",
  };

  const [selected, setSelected] = useState([]);

  const change = (values) => {
    setSelected(values);
    searchData(values);
  };

  return (
    <div style={{ width: "800px" }}>
      <h1>Seleccione las ciudades para buscar el clima:</h1>
      <MultiSelect
        options={options}
        value={selected}
        onChange={change}
        labelledBy={"Ciudades"}
        overrideStrings={tl}
      />
    </div>
  );
}

export default Select;