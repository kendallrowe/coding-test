import logo from './logo.svg';
// import './App.css';

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
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
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
