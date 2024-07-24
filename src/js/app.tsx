import React from 'react';

import Dates from './components/dates/dates';

import { data } from './data';

function App() {
  return (
    <>
      <Dates data={data} />
      <Dates data={data.slice(0, 3)} />
    </>
  );
}

export default App;
