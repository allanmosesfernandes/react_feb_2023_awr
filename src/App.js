import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FirstFold from './components/FirstFold/FirstFold';
import Footer from './components/Footer/Footer';
function App() {
  return (
<>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<FirstFold />} />
      </Route>
    </Routes> 
    <Footer />
</>


  );
}

export default App;
