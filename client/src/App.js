import Carousel from "./components/Carousel";

import { useApplicationData } from "./hooks/useApplicationData";

function App() {

  const { state, changeCarouselSelection, changeCategory } = useApplicationData();

  const categoryHeadingDict = {
    "cats": "Cats Rule!",
    "sharks": "Sharks are... fine.",
    "both": "Let's look at some cats and sharks!"
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{categoryHeadingDict[state.category]} Also, Hire Kendall!</h1>
      </header>
      <Carousel
        carouselImageURL={state.carouselImages.length > 0 ? state.carouselImages[state.carouselSelectedIndex] : ""}
        changeCategory={changeCategory}
        changeCarouselSelection={changeCarouselSelection}
      />
    </div>
  );
}

export default App;
