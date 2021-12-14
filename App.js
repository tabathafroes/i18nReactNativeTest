/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, Image } from "react-native";
import { useTranslation } from 'react-i18next';


const App = () => {

  const {t} = useTranslation()
  

  return (

    <View>
      <Text>{t("greeting")}</Text>
    </View>


  );
  };

export default App;
