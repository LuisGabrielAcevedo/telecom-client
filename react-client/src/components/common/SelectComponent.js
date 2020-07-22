import React from "react";
import MultiSelect from "react-multi-select-component";
import { countries, selectLabels } from "../../constants";

function Select({ setSelected, selected }) {
  const options = countries;
  const labels = selectLabels;

  return (
    <div style={{ width: "800px" }}>
      <h1>Seleccione las ciudades para buscar el clima:</h1>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Ciudades"}
        overrideStrings={labels}
      />
    </div>
  );
}

export default Select;
