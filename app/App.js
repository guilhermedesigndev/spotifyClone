import React from 'react';
import {StatusBar} from 'react-native';

import Main from './pages/Main';
import Album from './pages/Album';
import TabBar from './components/TabBar';

export default function App() {
  return (
    <>
      {/* <Main /> */}
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Album />
      <TabBar />
    </>
  );
}
