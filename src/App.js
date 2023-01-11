import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products/ProductsList";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductsList />
    </>
  );
}

export default App;
