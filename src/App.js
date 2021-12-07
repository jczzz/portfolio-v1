
import { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';



function App() {
  //const [theme, setTheme] = useState('dark-theme');

  useEffect(()=>{
    document.documentElement.className = 'dark-theme';
  }, []);

 
  return (
    <div className="App">
        <HomePage />
        <PortfoliosPage />
        <AboutPage />
        <ContactPage />
    </div>
  );
}

export default App;
