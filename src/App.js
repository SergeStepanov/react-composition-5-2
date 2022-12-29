import './App.css';
import NewsBlock from './components/NewsBlock';
import Banner from './components/Banner/Banner';
import SearchWidget from './components/SearchWidget/SearchWidget';
import BlockOfRecommendations from './components/BlockOfRecommendations';

import data from './data';
const { newsWidget, currencyWidget, inputTop, program, visited, broadcast } =
  data;

function App() {
  return (
    <div className='container'>
      <NewsBlock newsWidget={newsWidget} currencyWidget={currencyWidget} />
      <SearchWidget inputTop={inputTop} />
      <Banner />
      <BlockOfRecommendations
        program={program}
        visited={visited}
        broadcast={broadcast}
      />
    </div>
  );
}

export default App;
