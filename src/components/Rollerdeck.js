import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from "@emotion/styled"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

const Rollerdeck = ({ barnImages }) => {
  return (
    <Container>
      {barnImages.map(image => (
        <Img
          key={image.node.image.src.childImageSharp.fluid.src}
          fluid={image.node.image.src.childImageSharp.fluid}
        />
      ))}
    </Container>
  );
}

export default Rollerdeck
