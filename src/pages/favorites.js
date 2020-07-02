import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { GET_MY_FAVORITES } from '../gql/query';
import NoteFeed from '../components/NoteFeed';

const Favorites = () => {
  useEffect(() => { document.title = 'Favorites - Notedly' });
  const { loading, error, data } = useQuery(GET_MY_FAVORITES);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data.me.favorites.length !== 0) {
    return <NoteFeed notes={data.me.favorites} />
  } else {
    return 'No favorites yet.';
  }
}

export default Favorites;
