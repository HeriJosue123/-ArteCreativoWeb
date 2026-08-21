import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Manifiesto } from "./components/Manifiesto";
import { Categorias } from "./components/Categorias";
import { ImpactoVisual } from "./components/ImpactoVisual";
import { CallToAction } from "./components/CallToAction";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Intro />
      <Navbar />
      <Hero />
      <Manifiesto />
      <Categorias />
      <ImpactoVisual />
      <CallToAction />
    </div>
  );
}

export default App;

