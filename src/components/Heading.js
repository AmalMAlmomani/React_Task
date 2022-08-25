import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;


export const Heading = () => {
  return (
    <Header>
      <H1>React Task</H1>
      <p>Build a simple React app that allows viewing and interacting with a grid of curated photos from Unsplash</p>
    </Header>

  )
}

