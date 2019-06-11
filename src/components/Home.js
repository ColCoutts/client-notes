import React from 'react';
import CreateNote from '../containers/CreateNote';
import AllNotes from '../containers/AllNotes';

export default function Home() {
  return (
    <>
      <CreateNote />
      <AllNotes />
    </>
  );
}
