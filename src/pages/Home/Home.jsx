import React, { useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import SingleSeater from '../../components/SingleSeater/SingleSeater';
import SideTable from '../../components/SideTable/SideTable';
import AsgaardSofa from '../../components/AsgaardSofa/AsgaardSofa';
import OurInstagram from '../../components/OurInstagram/OurInstagram';
import OurBlog from '../../components/OurBlog/OurBlog';
import Catalog from '../../components/Catalog/Catalog';
import { ShopContext } from '../../logic/context/ShopContext';

function Home() {
  const context = useContext(ShopContext);

  const topProducts = context.currentState.productList.slice(0, 4);
  return (
    <>
      <NavBar backgroundColor="#FBEBB5" />
      <SingleSeater />
      <SideTable />
      <Catalog
        title="Top Picks For You "
        description="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
        productList={topProducts}
      />
      <AsgaardSofa />
      <OurBlog />
      <OurInstagram />
      <Footer />
    </>
  );
}

export default Home;
