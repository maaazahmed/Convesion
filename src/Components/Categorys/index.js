import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from "react-redux"
import { formulaList, routeKey, backtoSoveKey } from "../../store/action/action"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


class Categorry extends Component {
  constructor() {
    super()

  }
  selectConversationn(key) {
    if (key === "Length") {
      const formulas1 = [
        "Centimeter to Milimeter",
        "Meter to Yard",
        "Meter to Foot",
        "Meter to Inch",
        "Meter to Kilometer",
        "Meter to Centimeter",
        "Meter to Milimeter",
        "Meter to Micrometer",
        "Meter to Nanometer",
        "Inch to Foot",
        "Kilometer to Miles",
        "Nauticalmile to Miles",
        "Cubicfoot to Cubicinch",
      ]
      this.props.formulaList(formulas1)
      this.props.routeKey("Lenths")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Mass") {
      const formulas2 = [
        "Gram to Kilogram",
        "Gram to Miligram",
        "Gram to Microgram",
        "Gram to Nanogram",
        "Gram to Pound",
        "Gram to Stone",
        "Gram to Ounce",
        "Miligram to Microgram",
        "Kilogram to Tonne",
        "Kilogram to Imperial-Tonne",
        "Kilogram to US-Tonne",
        "Kilogram to Metrictone",
        "Kilogram to a.m.u",
      ]
      this.props.formulaList(formulas2)
      this.props.routeKey("Mass")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Temperature") {
      const formulas3 = [
        "Centigrade to Kelvin",
        "Centigrade to Fahrenheit",
        "Kelvin to Fahrenheit",
      ]
      this.props.formulaList(formulas3)
      this.props.routeKey("Temperature")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Time") {
      const formulas4 = [
        "Day to Minute",
        "Hour to Minute",
        "Minute to Second",
        "Hour to Second",
        "Year to Second",
        "Year to Minute",
        "Year to Hour",
        "Year to Week",
        "Century to Day",
      ]
      this.props.formulaList(formulas4)
      this.props.routeKey("Time")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Energy") {
      const formulas5 = [
        "Joule to Kilojoule",
        "Joule to Erg",
        "Joule to Electronvolt",
        "Joule to Calorie",
        "Joule to Kilocalorie",
        "Joule to Watt-Hour",
        "Joule to Kilowatt-Hour",
        "Joule to B.T.U",
        "Joule to U.S-Therm",
        "Joule to Foot-pound",
        "a.m.u to Mev",
        "Kilogram to Mev",
        "Electronvolt to Mev",
      ]
      this.props.formulaList(formulas5)
      this.props.routeKey("Energy")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Volume") {
      const formulas6 = [
        "Liter to Mili-liter",
        "Decimetercube to Centimetercube",
        "Metercube to Centimetercube",
        "US-tablespoon to US-teaspoon",
        "Imperial-tablespoon to Imperial-teaspoon",
        "US-Liquid-Lallon to US-Liquid-Quart",
        "Imperial-Gallon to Liter",
        "Imperial-fluid-ounce to Liter",
        "US-Legal-Cup to Litre"
      ]
      this.props.formulaList(formulas6)
      this.props.routeKey("Volume")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Power") {
      const formulas7 = [
        "Watt to Horsepower",
        "Kilowatt to Horsepower",
        "Kwh to Megajoule",
        "(ft*lb)/sec to Horsepower",
        "Watt to Joule",
      ];
      this.props.formulaList(formulas7)
      this.props.routeKey("Power")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Angle") {
      const formulas7 = [
        "Degree to Radian",
        "Degree to Gradian",
        "Degree to Miliradian",
        "Degree to Minute",
        "Degree to Second",
        "Radian to Gradian",
      ];
      this.props.formulaList(formulas7)
      this.props.routeKey("Angle")
      this.props.navigation.navigate("Formulas")
    }

    else if (key === "Velocity") {
      const formulas7 = [
        "Kilometer/Hour to Kilometer/Minute",
        "Kilometer/Hour to Kilometer/Second",
        "Kilometer/Minute to Kilometer/Second",
        "Kilometer/Hour to Meter/Minute",
        "Kilometer/Hour to Meter/Second",
        "Kilometer/Minute to Meter/Second",
      ];
      this.props.formulaList(formulas7)
      this.props.routeKey("Velocity")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Pressure") {
      const formulas8 = [
        "Pascal to Atmosphere",
        "Pascal to Bar",
        "Pascal to Torr",
        "Pascal to Pound-force-per-quare-inch",
        "Atmosphere to Bar",
        "Torr to Atmosphere",
      ];
      this.props.formulaList(formulas8)
      this.props.routeKey("Pressure")
      this.props.navigation.navigate("Formulas")
    }
    else if (key === "Force") {
      const formulas9 = [
        "Newton to Kilo-Newton",
        "Newton to Poundals",
        "Newton to Ounces",
        "Newton to Dyne",
        "Newton to Gram-force(Pond)",
        "Newton to Kilogram-force(Kilo Pond)",
        "Newton to Ton-force",
      ];
      this.props.formulaList(formulas9)
      this.props.routeKey("Force")
      this.props.navigation.navigate("Formulas")
    }
    this.props.backtoSoveKey("Categorry")
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.gategoryContainer}>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Length")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/measure.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}>
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Length")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Length</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Mass")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/balance.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Mass")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Mass</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Temperature")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/thermometer.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Temperature")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Temperature</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Time")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/passage-of-time.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Time")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Time</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Energy")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/green-energy.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Energy")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Energy</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Volume")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/graduated-cylinder.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Volume")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Volume</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Power")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/innovation.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Power")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Power</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Angle")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/protractor.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}   >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Angle")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Angle</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Velocity")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/speedometer.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Velocity")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Velocity</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Pressure")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/gauge.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Pressure")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Pressure</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categorryButn} >
            <TouchableOpacity onPress={this.selectConversationn.bind(this, "Force")}
              activeOpacity={0.5} style={styles.categorryIconView}  >
              <Image source={require("./images/force-meter.png")}
                style={styles.categorryIcon} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.categorryTextView}  >
              <TouchableOpacity onPress={this.selectConversationn.bind(this, "Force")}
                activeOpacity={0.5}
                style={styles.categorryButnTouchableOpacity} >
                <Text style={styles.categorryText} >Force</Text>
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
    backgroundColor: "#312e3f",
    alignContent: "center"
  },
  categorryButn: {
    width: wp('30%'),
    height: hp('17%'),
    margin: 6,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 2,
    justifyContent: "center"
  },
  categorryIconView: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  categorryIcon: {
    height: "50%",
    width: "50%"
  },
  categorryTextView: {
    height: hp('4%'),
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categorryText: {
    color: "#312e3f",
    fontSize: 16
  },
  categorryButnTouchableOpacity: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});


const mapStateToProp = (state) => {
  return ({
  });
};
const mapDispatchToProp = (dispatch) => {
  return {
    formulaList: (data) => {
      dispatch(formulaList(data))
    },
    routeKey: (data) => {
      dispatch(routeKey(data))
    },
    backtoSoveKey: (data) => {
      dispatch(backtoSoveKey(data))
    },
  };
};



export default connect(mapStateToProp, mapDispatchToProp)(Categorry)
