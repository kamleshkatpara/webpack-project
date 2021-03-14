import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/sword-32x32.png";
import swordSvg from "../images/sword.svg";

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <h1>Oh hai, ReactJs</h1>
      </main>
      <img src={sword} alt="sword" width="250" />
      <img src={swordSvg} alt="sword" width="250" />
      <Recipes />
    </>
  );
}

export default App;
