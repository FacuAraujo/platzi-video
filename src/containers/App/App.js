/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import Footer from '../../components/Footer/Footer';
import PageLoading from '../../components/PageLoading/PageLoading';
import useInitialState from '../../hooks/useInitialState';

import './App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const { videos, isLoading } = useInitialState(API);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="App">
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {videos.originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
