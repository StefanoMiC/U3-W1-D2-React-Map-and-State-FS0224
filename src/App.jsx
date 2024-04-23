// QUESTO E' FONDAMENTALE altrimenti ogni componente react-bootstrap utilizzato non si visualizzerà correttamente!
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";

// Un componente React è una funzione che ritorna del JSX, deve ritornare un singolo elemento.
function App() {
  return (
    <div className="App">
      <MyNavbar brandName="EpicStaurant" />
      <Home />
    </div>
  );
}

// e dovrà necessariamente essere esportato per essere visibile e utilizzato all'esterno (vedi index.js)
export default App;
