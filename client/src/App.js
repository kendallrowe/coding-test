import "./app.scss";
import "./styles/media.scss";

import Carousel from "./components/Carousel";

import { useApplicationData } from "./hooks/useApplicationData";

const classNames = require("classnames");

function App() {

  const { state, changeCarouselSelection, changeCategory } = useApplicationData();

  const categoryHeadingDict = {
    "cats": "Cats Rule!",
    "sharks": "Sharks are... fine.",
    "both": "Let's look at some cats and sharks!"
  }

  const headerClasses = classNames("card-container", "card-header");
  const carouselBodyClasses = classNames("card-container", "card-body");

  return (
    <div className="App">
      <section className="body">
        <header className={headerClasses}>
          <h1>{categoryHeadingDict[state.category]}</h1>
        </header>
        <div className={carouselBodyClasses}>
          <Carousel
            category={state.category}
            carouselImageURL={state.carouselImages.length > 0 ? state.carouselImages[state.carouselSelectedIndex] : ""}
            changeCategory={changeCategory}
            changeCarouselSelection={changeCarouselSelection}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
