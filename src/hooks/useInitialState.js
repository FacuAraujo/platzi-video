/* eslint-disable arrow-parens */
import { useState, useEffect } from 'react';

const useInitialState = API => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setVideos(data);
        setIsLoading(false);
      });
  }, []);
  return { videos, isLoading };
};

export default useInitialState;
