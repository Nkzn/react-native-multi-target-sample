import * as React from "react";
import { View, Text, Image, ImageRequireSource } from "react-native";

export interface Props {
  source: ImageRequireSource;
  title: string;
}

export default (props: Props) => (
  <View style={{ alignItems: "center" }}>
    <View style={{ alignItems: "center", borderRadius: 4, borderWidth: 0.5, borderColor: "#AAA", marginVertical: 4, width: 200, paddingVertical: 8 }}>
      <Image source={props.source} style={{ width: 100, height: 100 }} />
      <Text>{props.title}</Text>
    </View>
  </View>
);