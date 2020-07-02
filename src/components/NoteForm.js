import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.div`
  height: 100%;
`;

const TextArea = styled.textarea`
  height: 90%;
  width: 100%;
`;

const NoteForm = props => {
  const [value, setValue] = useState({ content: props.content || '' });

  const onChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }

  const onSubmit = (event, type) => {
    event.preventDefault();
    console.log("newnote here");
    type({
      variables: {
        ...values
      }
    });
  }

  return (
    <Wrapper>
      <Form
        onSubmit={e => onSubmit(e, props.action)}>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
}

export default NoteForm;
