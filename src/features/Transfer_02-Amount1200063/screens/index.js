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
      <View style={styles.View_0_48}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/005f/43a6/a260da71257364f6da9b4229d082bead"
          }}
          style={styles.ImageBackground_0_51}
        />
        <View style={styles.View_0_52}>
          <Text style={styles.Text_0_52}>$250.00</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b64/b2a9/3cb4d289b79ef5fcf9918f14d154efb7"
        }}
        style={styles.ImageBackground_0_53}
      />
      <View style={styles.View_0_54}>
        <Text style={styles.Text_0_54}>Jennieyourbae@gmail.com</Text>
      </View>
      <View style={styles.View_0_55}>
        <View style={styles.View_I0_55_0_1241}>
          <View style={styles.View_I0_55_0_1242} />
          <View style={styles.View_I0_55_0_1243}>
            <Text style={styles.Text_I0_55_0_1243}>Review</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_56}>
        <View style={styles.View_I0_56_0_1716}>
          <View style={styles.View_I0_56_0_1717} />
          <View style={styles.View_I0_56_0_1718}>
            <Text style={styles.Text_I0_56_0_1718}>Add note</Text>
          </View>
          <View style={styles.View_I0_56_0_1719} />
          <View style={styles.View_I0_56_0_1720}>
            <Text style={styles.Text_I0_56_0_1720}></Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_57}>
        <View style={styles.View_I0_57_0_1576}>
          <View style={styles.View_I0_57_0_1577}>
            <View style={styles.View_I0_57_0_1578} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b123/a151/b1907580fa397483f94b871242a335e0"
              }}
              style={styles.ImageBackground_I0_57_0_1579}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_58}>
        <Text style={styles.Text_0_58}>Transfer</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_48: {
    width: 369,
    minWidth: 369,
    height: 763,
    minHeight: 763,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 133,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_51: {
    width: 369.0000305175781,
    height: 763,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.000030517578125
  },
  View_0_52: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 145,
    top: 64
  },
  Text_0_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9375,
    textTransform: "none"
  },
  ImageBackground_0_53: {
    width: 299.4986572265625,
    minWidth: 299.4986572265625,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 255
  },
  View_0_54: {
    width: 188,
    minWidth: 188,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.5,
    top: 282
  },
  Text_0_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.49999991059303284,
    textTransform: "none"
  },
  View_0_55: {
    width: 324,
    minWidth: 324,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 790,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_55_0_1241: {
    flexGrow: 1,
    width: 324,
    height: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_55_0_1242: {
    width: 324,
    height: 65,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_55_0_1243: {
    width: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 22
  },
  Text_I0_55_0_1243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_56: {
    width: 324,
    minWidth: 324,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 354,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_56_0_1716: {
    flexGrow: 1,
    width: 324,
    height: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_56_0_1717: {
    width: 324,
    height: 65,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 110, 31, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_56_0_1718: {
    width: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 22
  },
  Text_I0_56_0_1718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_56_0_1719: {
    width: 30,
    height: 30,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_56_0_1720: {
    width: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 26
  },
  Text_I0_56_0_1720: {
    color: "rgba(255, 110, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_57: {
    width: 44,
    minWidth: 44,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 59,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_57_0_1576: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_57_0_1577: {
    width: 44,
    minWidth: 44,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_57_0_1578: {
    width: 44,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(238, 239, 250, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_57_0_1579: {
    width: 16,
    height: 10,
    top: 17.48046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.25
  },
  View_0_58: {
    width: 98,
    minWidth: 98,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 158,
    top: 67
  },
  Text_0_58: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
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
