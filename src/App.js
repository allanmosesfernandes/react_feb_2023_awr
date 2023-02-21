import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FirstFold from './components/FirstFold/FirstFold';
import Footer from './components/Footer/Footer';
import PageNotFound from './routes/404';
import BlogArticle from './components/BlogArticle/BlogArticle';
function App() {
  return (
<>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<FirstFold />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="blog/:slug" element={<BlogArticle />} />
      </Route>
    </Routes> 
    <Footer />
</>


  );
}

export default App;
