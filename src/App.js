import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import ExchangeComponent from './components/exchangeComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <main 
        style={{
          
          backgroundImage: "url(currencyBG.jpg)",
          minHeight: "600px",
          backgroundRepeat: "no-repeat",
        }}>
        <ExchangeComponent/>
      </main>
      <FooterComponent/>
    </div>
  );
}

export default App;
