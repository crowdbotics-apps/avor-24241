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
      <View style={styles.View_0_286}>
        <View style={styles.View_I0_286_0_1241}>
          <View style={styles.View_I0_286_0_1242} />
          <View style={styles.View_I0_286_0_1243}>
            <Text style={styles.Text_I0_286_0_1243}>Login</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_287}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_288}
        />
        <View style={styles.View_0_289}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/075e/0b53/58f0379fd727189f31d01b6d73a71e5e"
            }}
            style={styles.ImageBackground_I0_289_0_1259}
          />
        </View>
        <View style={styles.View_0_290}>
          <Text style={styles.Text_0_290}>Username</Text>
        </View>
      </View>
      <View style={styles.View_0_291}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_292}
        />
        <View style={styles.View_0_293}>
          <View style={styles.View_I0_293_0_1245}>
            <View style={styles.View_I0_293_0_1252}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c394/6550/4886c95483183bcbd558c3c1af3a8792"
                }}
                style={styles.ImageBackground_I0_293_0_1248}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561f/9a4f/db65b2ebcfc325283b6d18330d12299e"
                }}
                style={styles.ImageBackground_I0_293_0_1251}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/130e/13f2/8a8c958c734c8b5f3821271ff994ab12"
              }}
              style={styles.ImageBackground_I0_293_0_1255}
            />
          </View>
        </View>
        <View style={styles.View_0_294}>
          <Text style={styles.Text_0_294}>Password</Text>
        </View>
      </View>
      <View style={styles.View_0_295}>
        <Text style={styles.Text_0_295}>Login</Text>
      </View>
      <View style={styles.View_0_296}>
        <View style={styles.View_I0_296_0_1261}>
          <View style={styles.View_I0_296_0_1262} />
          <View style={styles.View_I0_296_0_1263}>
            <View style={styles.View_I0_296_0_1264}>
              <View style={styles.View_I0_296_0_1265} />
              <View style={styles.View_I0_296_0_1266} />
              <View style={styles.View_I0_296_0_1267} />
              <View style={styles.View_I0_296_0_1268} />
              <View style={styles.View_I0_296_0_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_296_0_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_296_0_1271}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_286: {
    width: 324,
    minWidth: 324,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 790,
    backgroundColor: "rgba(52, 62, 223, 1)"
  },
  View_I0_286_0_1241: {
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
  View_I0_286_0_1242: {
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
  View_I0_286_0_1243: {
    width: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 22
  },
  Text_I0_286_0_1243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_287: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 380,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_288: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_289: {
    width: 16,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_289_0_1259: {
    flexGrow: 1,
    width: 15.02734375,
    height: 20.141597747802734,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_290: {
    width: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_290: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_291: {
    width: 369,
    minWidth: 369,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 472,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_292: {
    width: 369,
    height: 1,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_293: {
    width: 18,
    height: 22,
    top: 0.499267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_293_0_1245: {
    flexGrow: 1,
    width: 18,
    height: 21.50067138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_293_0_1252: {
    width: 18,
    height: 21.50067138671875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_293_0_1248: {
    width: 18,
    height: 14,
    top: 7.500732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_293_0_1251: {
    width: 10,
    height: 9,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  ImageBackground_I0_293_0_1255: {
    width: 3,
    height: 5.044278144836426,
    top: 11.500732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.5
  },
  View_0_294: {
    width: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_0_294: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_295: {
    width: 88,
    minWidth: 88,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 202
  },
  Text_0_295: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_296: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 127,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_296_0_1261: {
    flexGrow: 1,
    width: 50,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_296_0_1262: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_296_0_1263: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_296_0_1264: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_296_0_1265: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_296_0_1266: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 12.77783203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_296_0_1267: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 12.77783203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_296_0_1268: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 26.66650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_296_0_1269: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 26.66650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  ImageBackground_I0_296_0_1270: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  ImageBackground_I0_296_0_1271: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375
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
