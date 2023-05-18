import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FirstFold from './components/FirstFold/FirstFold';
import Footer from './components/Footer/Footer';
import PageNotFound from './routes/404';
import BlogArticle from './components/BlogArticle/BlogArticle';
import Merchandiser from './components/Merchandiser/Merchandiser';
import About from './components/About/About';
import BlogListing from './components/BlogListing/BlogListing';
import { Helmet } from 'react-helmet';
function App() {
  
  return (
  <>
  <Helmet>
      <title>Ankan Chittalipi</title>
        <meta name="title" content="Ankan Chittalipi - Fashion Merchandiser and Buyer" />
        <meta name="description" property="og:description" content="Keep yourself updated on the Whats, Where & Whys in Fashion, Culture & Lifestyle with Ankan Chittalipi, a Fashion Merchandiser and Buyer." />
        <meta name="author" content="Ankan Chittalipi" />

    </Helmet>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<FirstFold />} />
        <Route path='fashion-merchandiser' element={<Merchandiser />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<BlogListing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="blog/:slug" element={<BlogArticle />} />
      </Route>
    </Routes> 
    <Footer />
</>


  );
}

export default App;
