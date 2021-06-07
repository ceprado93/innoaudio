import Routes from "./routes/Routes";
import "./App.css";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default App;
