import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import ButtonAsLink from './ButtonAsLink';

import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';

const FavoriteNote = props => {
  const [count, setCount] = useState(props.favoriteCount);
  const [favorited, setFavorited] = useState(
    props.me.favorites.filter(favorite => favorite.id === props.noteId).length > 0
  );
  const [toggleFavorite, { loading, error }] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: props.noteId
    },
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.code}</p>;
  return (
    <>
      {favorited ? (
        <ButtonAsLink onClick={() => {
          toggleFavorite();
          setFavorited(false);
          setCount(count - 1);
        }}>Remove Favorite</ButtonAsLink>
      ) : (
          <ButtonAsLink onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}>Add Favorite</ButtonAsLink>
        )

      }
  : {count}
    </>
  )
}

export default FavoriteNote;
