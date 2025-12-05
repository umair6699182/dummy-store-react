import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProductCard from "./ProductCard";
import SampleCard from "./SampleCard";
import Payment from "./Payment";

function App() {
  return (
    <main>
      <ProductCard />
      <SampleCard />
      <Dashboard />
      <Login />
      <Payment />
    </main>
  );
}

export default App;
