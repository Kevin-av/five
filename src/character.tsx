import React, { ChangeEvent, useState } from "react";
import "./App.css";

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: "Name",
    strength: 20,
    intelligence: 20,
    charisma: 15,
  });

  const [formValues, setFormValues] = useState({
    name: "",
    strength: 0,
    intelligence: 0,
    charisma: 0,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.type === "number" ? +e.target.value : e.target.value,
    });
  }

  function handleSave() {
    setCharacter(formValues);
    localStorage.setItem("character", JSON.stringify(formValues));
  }

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Strength:
          <input
            name="strength"
            type="number"
            value={formValues.strength}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Intelligence:
          <input
            name="intelligence"
            type="number"
            value={formValues.intelligence}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Charisma:
          <input
            name="charisma"
            type="number"
            value={formValues.charisma}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}