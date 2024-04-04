import Banner from "./Components/Banner";
import BlogSection from "./Components/BlogSection";
import Card from "./Components/Card";
import Category from "./Components/Category";
import Feature from "./Components/Feature";
import FeatureSectionBreakfast from "./Components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./Components/FeatureSectionFruits";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MobNavBar from "./Components/MobNavBar";
import Navbar from "./Components/Navbar";
import NewsLetter from "./Components/NewsLetter";
import { CartContextProvider } from "./Context/CartContext";
import { useState } from "react";

const App = () => {
  const [ShowCart, setShowCart] = useState(false);
  return (
    <>
      <CartContextProvider>
        <Navbar setShowCart={setShowCart} />
        <MobNavBar setShowCart={setShowCart} />
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionBreakfast />
        <Banner />
        <BlogSection />
        <NewsLetter />
        <Feature />
        <Footer />
        {ShowCart && <Card ShowCart={ShowCart} setShowCart={setShowCart} />}
      </CartContextProvider>
    </>
  );
};

export default App;
