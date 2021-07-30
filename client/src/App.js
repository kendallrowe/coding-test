import logo from './logo.svg';
// import './App.css';

import Carousel from "./components/Carousel";

import { useApplicationData } from "./hooks/useApplicationData";

function App() {

  const { state, changeCarouselSelection, fetchBothCategories, fetchImageCategory } = useApplicationData();

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
        <h1>Cats Rule! Also, Hire Kendall!</h1>
      </header>
      <Carousel
        carouselImage={state.carouselImages[state.carouselSelectedIndex]}
        changeCarouselSelection={changeCarouselSelection}
        fetchBothCategories={fetchBothCategories}
        fetchImageCategory={fetchImageCategory}
      />
    </div>
  );
}

export default App;
