import { fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";

test("form render test", () => {
  
  const textBox_test_speciesName = {
    id: "speciesName",
    title: "Species Name",
    min: "3",
    max: "23",
    pattern: "^[a-zA-Z ]+$",
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter only alphabets, at least 3 characters and maximum 17 characters!",
  };
  const textBox_test_planetName = {
    id: "planetName",
    title: "Planet Name",
    min: "2",
    max: "49",
    pattern: "^[a-zA-Z0-9 ]+$",
    displayError: false,
    errMessage:
      "Error - Please follow the rules : Enter only alphabets or numbers, atleast 2 characters and maximum 49 characters!",
  };
