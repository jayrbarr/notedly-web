import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

import DeleteNote from './DeleteNote';

import { GET_ME } from '../gql/query';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.data}</p>

  return (
    <>
      Favorites: {props.note.favoritesCount}<br />
      {data.me.id === props.note.author.id &&
        <>
          <Link to={`/edit/${props.note.id}`}>Edit</Link><br />
          <DeleteNote noteId={props.note.id} />
        </>
      }
    </>
  )
};

export default NoteUser;
