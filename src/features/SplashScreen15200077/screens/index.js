import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_502}>
        <View style={styles.View_I0_502_0_1231}>
          <View style={styles.View_I0_502_0_1232}>
            <View style={styles.View_I0_502_0_1233} />
            <View style={styles.View_I0_502_0_1234} />
            <View style={styles.View_I0_502_0_1235} />
            <View style={styles.View_I0_502_0_1236} />
            <View style={styles.View_I0_502_0_1237} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a8/bf14/2c3ef69a8c049ca15ff938662a783f2c"
              }}
              style={styles.ImageBackground_I0_502_0_1238}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a8/bf14/2c3ef69a8c049ca15ff938662a783f2c"
              }}
              style={styles.ImageBackground_I0_502_0_1239}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_503}>
        <Text style={styles.Text_0_503}>OraPay</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_502: {
    width: 90,
    minWidth: 90,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 264,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_502_0_1231: {
    flexGrow: 1,
    width: 90,
    height: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_502_0_1232: {
    width: 90,
    minWidth: 90,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_502_0_1233: {
    width: 90,
    height: 90,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_502_0_1234: {
    width: 21,
    height: 21,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_502_0_1235: {
    width: 21,
    height: 21,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_502_0_1236: {
    width: 21,
    height: 21,
    top: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_502_0_1237: {
    width: 21,
    height: 21,
    top: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  ImageBackground_I0_502_0_1238: {
    width: 4,
    height: 4,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63
  },
  ImageBackground_I0_502_0_1239: {
    width: 4,
    height: 4,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20
  },
  View_0_503: {
    width: 100,
    minWidth: 100,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 157,
    top: 403
  },
  Text_0_503: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
