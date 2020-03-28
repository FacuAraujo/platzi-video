import React from 'react';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import Footer from '../../components/Footer/Footer';

import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi Lista">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
