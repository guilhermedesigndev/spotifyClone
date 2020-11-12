import React from 'react';

import {Container, Title, SlideScroll} from './styles';

import Card from '../Card';

export default function SlideCard({slide}) {
  return (
    <Container>
      <Title>{slide.title}</Title>
      <SlideScroll>
        {slide?.itens?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </SlideScroll>
    </Container>
  );
}
