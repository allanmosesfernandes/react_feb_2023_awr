import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FirstFold from './components/FirstFold/FirstFold';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<FirstFold />} />
      </Route>
    </Routes> 

  );
}

export default App;
