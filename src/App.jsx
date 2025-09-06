
import './App.css'
import BeautyRoutineFinder from './components/beautiroutenfinder/beautifinder'
import CandleSection from './components/candlecomponent/Candlecomponent'
import CertificationSection from './components/certification/certification'
import Footer from './components/footer/footer'
import ImageContainer1 from './components/imagecontainer/imagecontainer1'
import ImageTemplate from './components/imagetemp/ImageTemplate'
import CategorySection from './components/ourcategory/outcategory'
import OurProducts from './components/ourProducts/OurProducts'
import ProductReusebleCard from './components/productcardreusble/ProductReusebleCard'
import Testimonials from './components/reviewcomponenr/Testimonials'
import ProductHighlight from './components/secondgallerycomponent/ProductHighlight'
import Newsletter from './components/subscription/Subcription'
import SubscribeSection from './components/subscription/Subcription'
import VideoContainer from './components/videoContainer/VideoContainer'
import ImageSlider from './pages/crosel/imageSlider'
import Header from './pages/header/Header'
import Header2 from './pages/header2/Header2'
import Headerbottom from './pages/headerbottom/Headerbottom'
import ProductsCard from './pages/productsCard/ProductsCard'

function App() {
  

  return (
    <>
  
    {/**<Header/>   <VideoContainer/> */}
    <Header2/>
    <Headerbottom/>
     <ImageSlider/>
     <CandleSection/>
     <ProductsCard/>
     <CertificationSection/>
     <CategorySection/>
     <BeautyRoutineFinder/>
     <ProductHighlight/>
     <Testimonials/>
     <Newsletter/>
     <Footer/>
    
    </>
  )
}

export default App
