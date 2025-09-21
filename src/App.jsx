import { Canvas } from '@react-three/fiber'
import React, { useState, useEffect } from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { 
  S23Model, 
  BudsModel,  
  WatchModel, 
  TabModel,
} from "./DeviceModels"
import Cyl from "./Cyl"
import Marquee from './Marquee'
import Navbar from "./Navbar"
import FloatingButtons from "./FloatingButtons"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentView, setCurrentView] = useState('cylinder'); 
  const [currentProduct, setCurrentProduct] = useState('s23');
  const [cameraSettings, setCameraSettings] = useState({ 
    position: [0, 0, 5], 
    fov: 35 
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  
const products = [
  { 
    id: 's23', 
    name: 'Galaxy S22 Ultra', 
    component: S23Model, 
    camera: { position: [0, 0, 5], fov: 38 }
  },
  { 
    id: 'buds', 
    name: 'Samsung Buds Pro 3', 
    component: BudsModel, 
    camera: { position: [0, 0, 2.8], fov: 48 }
  },
  
  { 
    id: 'watch', 
    name: 'Galaxy Watch 5', 
    component: WatchModel, 
    camera: { position: [0, 1.5, 3.0], fov: 45 } 
  },
  { 
    id: 'tab', 
    name: 'Galaxy Tab S8 Ultra', 
    component: TabModel, 
    camera: { position: [0, -0.8, 5.5], fov: 34 } 
  },
  
];


  const currentIndex = products.findIndex(p => p.id === currentProduct);
  const CurrentProductComponent = products[currentIndex]?.component;
  const rotationSpeed = isMobile ? 0.3 : 0.5;

  const navigateProduct = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % products.length;
    } else {
      newIndex = (currentIndex - 1 + products.length) % products.length;
    }
    setCurrentProduct(products[newIndex].id);
    setCurrentView('product');
    setCameraSettings(products[newIndex].camera);
  };

  const showCylinder = () => {
    setCurrentView('cylinder');
    setCameraSettings({ position: [0, 0, 5], fov: 35 });
  };

  const handleProductSelect = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setCurrentProduct(productId);
      setCurrentView('product');
      setCameraSettings(product.camera);
    }
  };

  return (
    <>
    <Canvas flat camera={cameraSettings}>
  <OrbitControls 
    enableZoom={!isMobile} 
    enablePan={!isMobile}
    maxDistance={isMobile ? 10 : 12}
    minDistance={isMobile ? 3 : 6}
  />

  {/* ambient light */}
  <ambientLight intensity={2.0} />

  {/* Brighter lights */}
  <pointLight position={[10, 10, 10]} intensity={4.0} />
  <pointLight position={[-10, 5, -10]} intensity={3.5} />

  {/* directional lights */}
  <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00ffff" />
  <directionalLight position={[-5, -5, 5]} intensity={1.5} color="#ff00ff" />

  {/* Models or cylinder */}
  {currentView === 'cylinder' ? <Cyl /> : (
    CurrentProductComponent && (
      <CurrentProductComponent
        isMobile={isMobile}
        position={[0, 0, 0]}
        rotationSpeed={rotationSpeed}
      />
    )
  )}

  {/* Bloom effect */}
  <EffectComposer>
    <Bloom
      mipmapBlur
      intensity={isMobile ? 4.0 : 5.0}      
      luminanceThreshold={0.05}             
      luminanceSmoothing={0.9}
    />
  </EffectComposer>
</Canvas>



      {/* UI Elements */}
      <Navbar onProductSelect={handleProductSelect} />
      <FloatingButtons />

      {/* Navigation Arrows (show only when viewing products) */}
      {currentView === 'product' && (
        <>
          <div className="fixed left-0 right-0 bottom-1/2 transform translate-y-1/2 flex justify-between items-center px-8 z-40">
            <button
              onClick={() => navigateProduct('prev')}
              className="p-3 rounded-full bg-black/50 hover:bg-cyan-500/50 transition-colors text-white nav-arrow"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateProduct('next')}
              className="p-3 rounded-full bg-black/50 hover:bg-cyan-500/50 transition-colors text-white nav-arrow"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Product Info */}
          <div className="fixed top-20 left-6 z-40 flex flex-col items-start gap-4">
            {/* Back to Cylinder */}
            <button
              onClick={showCylinder}
              className="px-4 py-2 rounded-full bg-black/50 hover:bg-cyan-500/50 transition-colors text-white text-sm product-info-button"
            >
              Back to Overview
            </button>

            {/* Product Name Display */}
            <div className="text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded-full product-display">
              {products[currentIndex]?.name}
            </div>
          </div>
        </>
      )}

      {/* Marquee */}
      <div className="marquee-wrapper">
        <Marquee />
      </div>
    </>
  )
}

export default App