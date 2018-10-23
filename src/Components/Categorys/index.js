/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';


const { width, height } = Dimensions.get("window")
export default class Categorry extends Component {
  render() {
    return (
        <View style={[styles.container]}>
          <View style={styles.gategoryContainer}>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/measure.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}>
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Length</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/thermometer.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Temperature</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/balance.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Mass</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/passage-of-time.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Time</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/green-energy.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Energy</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/graduated-cylinder.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Volume</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/innovation.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Power</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/protractor.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Angle</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/speedometer.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Velocity</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/gauge.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Pressure</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/force-meter.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={styles.categorryButnTouchableOpacity} >
                  <Text style={styles.categorryText} >Force</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categorryButn} >
              <TouchableOpacity activeOpacity={0.7} style={styles.categorryIconView}  >
                <Image source={require("./images/measure.png")}
                  style={styles.categorryIcon} resizeMode="contain" />
              </TouchableOpacity>
              <View style={styles.categorryTextView}  >
                <TouchableOpacity activeOpacity={0.7}
                  style={[styles.categorryButnTouchableOpacity, {}]} >
                  <Text style={styles.categorryText} >Length</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderTopColor: "#312e3f",

  },
  gategoryContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    // backgroundColor: "#312e3f",
    alignContent: "center"
  },
  categorryButn: {
    width: "30%",
    height: "18%",
    // height: "18%",
    height: 150,
    margin: 6,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 2
  },
  categorryIconView: {
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  categorryIcon: {
    height: "70%",
    width: "70%"
  },
  categorryTextView: {
    height: "25%",
    borderTopColor: "#312e3f",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  categorryText: {
    color: "#312e3f",
    fontSize: 15
  },
  categorryButnTouchableOpacity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
