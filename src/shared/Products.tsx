import * as React from "react";
import { View, Linking } from "react-native";
import Product from "./Product";
import Sound from "./Sound";

const products: Product[] = [
  { name: "AppCode", source: require("../../assets/images/appcode.png"), url: "http://www.jetbrains.com/objc/" },
  { name: "CLion", source: require("../../assets/images/clion.png"), url: "http://www.jetbrains.com/clion/" },
  { name: "DataGrip", source: require("../../assets/images/datagrip.png"), url: "http://www.jetbrains.com/datagrip/" },
  { name: "GoLand", source: require("../../assets/images/goland.png"), url: "http://www.jetbrains.com/go/" },
  { name: "IntelliJ IDEA", source: require("../../assets/images/intellij_idea.png"), url: "http://www.jetbrains.com/idea/" },
  { name: "PhpStorm", source: require("../../assets/images/phpstorm.png"), url: "http://www.jetbrains.com/phpstorm/" },
  { name: "PyCharm", source: require("../../assets/images/pycharm.png"), url: "http://www.jetbrains.com/pycharm/" },
  { name: "ReSharper C++", source: require("../../assets/images/resharper_cplusplus.png"), url: "http://www.jetbrains.com/resharper-cpp/" },
  { name: "ReSharper", source: require("../../assets/images/resharper.png"), url: "http://www.jetbrains.com/resharper/" },
  { name: "Rider", source: require("../../assets/images/rider.png"), url: "http://www.jetbrains.com/rider/" },
  { name: "RubyMine", source: require("../../assets/images/rubymine.png"), url: "http://www.jetbrains.com/ruby/" },
  { name: "WebStorm", source: require("../../assets/images/webstorm.png"), url: "http://www.jetbrains.com/webstorm/" },
];

interface Product {
  name: string;
  source: any;
  url: string;
}

export default class Products extends React.Component<any> {

  sound = new Sound();

  async onPress(product: Product) {
    await this.sound.play();
    await Linking.openURL(product.url);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
        { products.map( product => <Product key={product.name} title={product.name} source={product.source} onPress={() => this.onPress(product)} />) }
      </View>
    );
  }
}