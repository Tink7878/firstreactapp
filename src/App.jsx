import HeaderText from "./components/headerText/HeaderText.jsx";
import GeneralText from "./components/generalText/GeneralText.jsx";
import InputField from "./components/inputfield/InputField.jsx";

import "./App.css";

function App() {
  const schoolName = "TINko corparation";
  let age = 18;
  const style = {
    backgroundColor: "green",
  };

  return (
    <>
      <HeaderText />
      <GeneralText />
      <InputField />
    </>
  );
}

export default App;
