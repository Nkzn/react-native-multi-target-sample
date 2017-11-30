import * as React from "react";
import { View } from "react-native";
import Product from "./Product";

const products = [
  { name: "AppCode", source: require("../../assets/images/appcode.png") },
  { name: "CLion", source: require("../../assets/images/clion.png") },
  { name: "DataGrip", source: require("../../assets/images/datagrip.png") },
  { name: "GoLand", source: require("../../assets/images/goland.png") },
  { name: "IntelliJ IDEA", source: require("../../assets/images/intellij_idea.png") },
  { name: "PhpStorm", source: require("../../assets/images/phpstorm.png") },
  { name: "PyCharm", source: require("../../assets/images/pycharm.png") },
  { name: "ReSharper C++", source: require("../../assets/images/resharper_cplusplus.png") },
  { name: "ReSharper", source: require("../../assets/images/resharper.png") },
  { name: "Rider", source: require("../../assets/images/rider.png") },
  { name: "RubyMine", source: require("../../assets/images/rubymine.png") },
  { name: "WebStorm", source: require("../../assets/images/webstorm.png") },
];

export default () => (
  <View>
    { products.map( product => <Product key={product.name} title={product.name} source={product.source} />) }
  </View>
);