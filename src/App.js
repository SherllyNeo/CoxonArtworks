import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact.js'
import Gallery from './components/pages/Gallery.js'

import Gallery_Skeleton from './components/pages/galleryPages/gallery_Skeleton.js'
import Gallery_Muscle from './components/pages/galleryPages/gallery_Muscle.js'
import Gallery_Torso from './components/pages/galleryPages/gallery_Torso.js'
import Gallery_Hand from './components/pages/galleryPages/gallery_Hand.js'
import Gallery_Berry from './components/pages/galleryPages/gallery_Berry.js'
import Gallery_Plant from './components/pages/galleryPages/gallery_Plant.js'
import Gallery_Thistle from './components/pages/galleryPages/gallery_Thistle.js'
import Gallery_Distort from './components/pages/galleryPages/gallery_Distort.js'
import Gallery_HandBlue from './components/pages/galleryPages/gallery_HandBlue.js'
import Gallery_HandPink from './components/pages/galleryPages/gallery_HandPink.js'
import Gallery_HandYellow from './components/pages/galleryPages/gallery_HandYellow.js'
import Gallery_AllEyesOnYou from './components/pages/galleryPages/gallery_AllEyesOnYou.js'
import Gallery_AllInYourHead from './components/pages/galleryPages/gallery_AllInYourHead.js'
import Gallery_LostMyself from './components/pages/galleryPages/gallery_LostMyself.js'
import Gallery_Limbs from './components/pages/galleryPages/gallery_Limbs.js'
import Gallery_Blue from './components/pages/galleryPages/gallery_Blue.js'
import Gallery_BlueAndRed from './components/pages/galleryPages/gallery_BlueAndRed.js'
import Gallery_BlueAndOrange from './components/pages/galleryPages/gallery_BlueAndOrange.js'
import Gallery_OpenHearted from './components/pages/galleryPages/gallery_OpenHearted.js'
import Gallery_CityScape from './components/pages/galleryPages/gallery_CityScape.js'
import Gallery_WelcomeHome from './components/pages/galleryPages/gallery_WelcomeHome.js'
import Gallery_Slipped from './components/pages/galleryPages/gallery_Slipped.js'
import Gallery_ExperimentOne from './components/pages/galleryPages/gallery_ExperimentOne.js'
import Gallery_ExperimentTwo from './components/pages/galleryPages/gallery_ExperimentTwo.js'



import './App.css';

function App() {
  return (
      <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home />} /> 
            <Route path='/about' exact element={<About />} /> 
            <Route path='/contact' exact element={<Contact />} /> 
            <Route path='/gallery' exact element={<Gallery />} /> 

            <Route path='/gallery/skeleton' exact element={<Gallery_Skeleton />} /> 
            <Route path='gallery/muscle' exact element={<Gallery_Muscle />} />
            <Route path='gallery/torso' exact element={<Gallery_Torso />} />
            <Route path='gallery/hand' exact element={<Gallery_Hand  />} />
            <Route path='gallery/berry' exact element={<Gallery_Berry  />} />
            <Route path='gallery/plant' exact element={<Gallery_Plant  />} />
            <Route path='gallery/thistle' exact element={<Gallery_Thistle />} />
            <Route path='gallery/distort' exact element={<Gallery_Distort />} />
            <Route path='gallery/handprintblue' exact element={<Gallery_HandBlue />} />
            <Route path='gallery/handprintpink' exact element={<Gallery_HandPink />} />
            <Route path='gallery/handprintyellow' exact element={<Gallery_HandYellow />} />
            <Route path='gallery/alleyesonyou' exact element={<Gallery_AllEyesOnYou />} />
            <Route path='gallery/allinyourhead' exact element={<Gallery_AllInYourHead />} />
            <Route path='gallery/lostmyself' exact element={<Gallery_LostMyself />} />
            <Route path='gallery/limbs' exact element={<Gallery_Limbs />} />
            <Route path='gallery/blue' exact element={<Gallery_Blue />} />
            <Route path='gallery/blueandred' exact element={<Gallery_BlueAndRed />} />
            <Route path='gallery/blueandorange' exact element={<Gallery_BlueAndOrange />} />
            <Route path='gallery/openhearted' exact element={<Gallery_OpenHearted />} />
            <Route path='gallery/cityscape' exact element={<Gallery_CityScape  />} />
            <Route path='gallery/welcomehome' exact element={<Gallery_WelcomeHome  />} />
            <Route path='gallery/slipped' exact element={<Gallery_Slipped  />} />
            <Route path='gallery/experimentone' exact element={<Gallery_ExperimentOne  />} />
            <Route path='gallery/experimenttwo' exact element={<Gallery_ExperimentTwo  />} />

        </Routes>
      </Router>
      </>
  );
}

export default App;
