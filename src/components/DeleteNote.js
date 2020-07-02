import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import ButtonAsLink from './ButtonAsLink';

import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

const DeleteNote = props => {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId
    },
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: () => {
      props.history.push(`/mynotes`);
    }
  });
  return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>;
}

export default withRouter(DeleteNote);
