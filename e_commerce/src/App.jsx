import tailwindConfig from "../tailwind.config";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banner/Banner";
const App = () => {
  return (
    <main className="overflow-x-hidden">
    <Navbar></Navbar>
    <Hero></Hero>
    <Menus></Menus>
    <Banner></Banner>

   

    </main>
  
  )}

export default App;