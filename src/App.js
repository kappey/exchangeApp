import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import ExchangeComponentApp from './components/exchangeComponentApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <main>
        <ExchangeComponentApp/>
      </main>
      <FooterComponent/>
    </div>
  );
}

export default App;
