import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
