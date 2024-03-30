import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact.js'
import Gallery from './components/pages/Gallery.js'

import Gallery_Skeleton from './components/pages/galleryPages/gallery_Skeleton.js'


import './App.css';

function App() {
  return (
      <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/CoxonArtworks' exact element={<Home />} /> 
            <Route path='/CoxonArtworks/about' exact element={<About />} /> 
            <Route path='/CoxonArtworks/contact' exact element={<Contact />} /> 
            <Route path='/CoxonArtworks/gallery' exact element={<Gallery />} /> 
            <Route path='/CoxonArtworks/gallery/skeleton' exact element={<Gallery_Skeleton />} /> 
        </Routes>
      </Router>
      </>
  );
}

export default App;
