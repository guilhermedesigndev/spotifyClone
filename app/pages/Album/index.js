import React, {useState} from 'react';

import {
  Container,
  ContainerHeader,
  Photo,
  ContainerNavBar,
  GroupItemNavBar,
  ButtonFollow,
  ContainerInfoBand,
  BandName,
  BandFooter,
  Content,
  ButtonRandomOrder,
  ButtonRandomOrderText,
  InfoCategory,
  ContainerMusic,
  Music,
  MusicGroupAllItens,
  MusicNumber,
  MusicGroupItens,
  MusicName,
  MusicListening,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

import musics from './musics.json';

const Musics = () => {
  return musics.map((music, index) => (
    <Music key={index++}>
      <MusicGroupAllItens>
        <MusicNumber>{index++}</MusicNumber>
        <MusicGroupItens>
          <MusicName>{music.name}</MusicName>
          <MusicListening>{music.listening}</MusicListening>
        </MusicGroupItens>
      </MusicGroupAllItens>
      <Icon name="ellipsis-v" color="#aaa" size={16} style={{padding: 30}} />
    </Music>
  ));
};

export default function Album() {
  const [iconConfigure] = useState({
    size: 20,
    color: '#fff',
  });

  return (
    <Container>
      <Photo
        source={{
          uri:
            'https://static.billboard.com/files/media/skillet-press-2016-billboard-1548-compressed.jpg',
          // 'https://lh3.googleusercontent.com/proxy/CRRmcI0ZJ87v7g7kHhC9v3gWzby_zptGXvya5Hwwl0gjee-rjQRhxUYdeiEq0aXkeqb6o1K0w5OqgsMPi_Yi-74nCjSigqvG4_Dwl6ANOdSHSGVIFoeGywY-QA',
        }}
      />
      <ContainerHeader>
        <ContainerNavBar>
          <Icon name="arrow-left" {...iconConfigure} />
          <GroupItemNavBar>
            <ButtonFollow>Seguindo</ButtonFollow>
            <Icon name="ellipsis-v" {...iconConfigure} />
          </GroupItemNavBar>
        </ContainerNavBar>

        <ContainerInfoBand>
          <BandName>Mötley Crüe</BandName>
          <BandFooter>8.500.752 Ouvintes mensais</BandFooter>
        </ContainerInfoBand>
      </ContainerHeader>

      <Content>
        <ButtonRandomOrder>
          <ButtonRandomOrderText>ORDEM ALEATÓRIA</ButtonRandomOrderText>
        </ButtonRandomOrder>
        <InfoCategory>Popular</InfoCategory>

        <ContainerMusic>
          <Musics />
        </ContainerMusic>
      </Content>
    </Container>
  );
}
