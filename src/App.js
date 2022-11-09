import Header from "./components/header/Header.jsx";
import Slidingcontainer from "./components/slidingcontainer/Slidingcontainer.jsx";
import Footer from "./components/footer/Footer.jsx";
import Creator from "./components/trendingcreators/Creator.jsx";
function App() {
  return (
    <div className="App">
      <Header /> 
      <Slidingcontainer/>
      <Creator/>
      <Footer/>

    </div>
  );
}

export default App;
