import React from 'react';

import {
  Container,
  Photo,
  ContainerSubTitle,
  SubititleTitle,
  SubititleDescription,
} from './styles';

export default function Card({item}) {
  return (
    <Container>
      <Photo source={{uri: item.photo}} />
      <ContainerSubTitle>
        <SubititleTitle>{item.subtitle.title}</SubititleTitle>
        <SubititleDescription>{item.subtitle.description}</SubititleDescription>
      </ContainerSubTitle>
    </Container>
  );
}
