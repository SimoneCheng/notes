import React from 'react';
import { Redirect } from '@docusaurus/router';

function Home(): JSX.Element {
  return <Redirect to='/notes/docs/notes/intro' />;
}

export default Home;
