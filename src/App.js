import About from "./pages/About";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-zinc-950" style={{ overflowX: "hidden" }}>
      <Header />
      <About />
    </div>
  );
}

export default App;
