import React from 'react';
import { View } from 'react-native'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Product from "../src/shared/Product";

storiesOf('Product', module)
  .add('image with text', () => (
    <View>
      <Product
        title="IntelliJ IDEA"
        source={require("../assets/images/intellij_idea.png")}
        onPress={action("onPress")} />
    </View>
  ));