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
import { lazy, Suspense } from 'react';
// Initialize Google Analytics

function App() {
  
  const Lazy404 = lazy(() => import("./routes/404"));
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<FirstFold />} />
          <Route path="fashion-merchandiser" element={<Merchandiser />} />
          <Route path="about" element={<About />}/>
          <Route path="blog" element={<BlogListing />} />
          <Route path="*" element={
            <Suspense fallback={<h2>Loading......</h2>}>
              <Lazy404 />
            </Suspense>
          } />
          <Route path="blog/:slug" element={<BlogArticle />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
