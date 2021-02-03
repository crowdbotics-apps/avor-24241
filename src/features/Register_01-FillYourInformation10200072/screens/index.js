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
      <View style={styles.View_0_264}>
        <View style={styles.View_0_265}>
          <View style={styles.View_I0_265_0_1303}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/ba40/44545c502a2463b51e71f874937e87c9"
              }}
              style={styles.ImageBackground_I0_265_0_1304}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32b0/af45/0ff93186ad2bb74489739e7569908b64"
              }}
              style={styles.ImageBackground_I0_265_0_1305}
            />
            <View style={styles.View_I0_265_0_1306}>
              <Text style={styles.Text_I0_265_0_1306}>1</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb1/6e88/d57b9cd1a21c37e83e12f25e94337c11"
              }}
              style={styles.ImageBackground_I0_265_0_1307}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1a8/12e7/c3f061e781b683f0c69438233f69abc3"
              }}
              style={styles.ImageBackground_I0_265_0_1308}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1a8/12e7/c3f061e781b683f0c69438233f69abc3"
              }}
              style={styles.ImageBackground_I0_265_0_1309}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1a8/12e7/c3f061e781b683f0c69438233f69abc3"
              }}
              style={styles.ImageBackground_I0_265_0_1310}
            />
            <View style={styles.View_I0_265_0_1311}>
              <Text style={styles.Text_I0_265_0_1311}>Next</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_266}>
          <View style={styles.View_I0_266_0_1301} />
        </View>
      </View>
      <View style={styles.View_0_267}>
        <View style={styles.View_0_268}>
          <View style={styles.View_I0_268_0_1299}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3bf/5783/6f15158d0345b0a46eccb4db0801ab67"
              }}
              style={styles.ImageBackground_I0_268_0_1297}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4b/3151/52609e6435e42fec34b022ca01bd74f1"
              }}
              style={styles.ImageBackground_I0_268_0_1298}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_269}
        />
        <View style={styles.View_0_270}>
          <Text style={styles.Text_0_270}>Phone number</Text>
        </View>
      </View>
      <View style={styles.View_0_271}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_272}
        />
        <View style={styles.View_0_273}>
          <Text style={styles.Text_0_273}>Date of birth</Text>
        </View>
        <View style={styles.View_0_274}>
          <View style={styles.View_I0_274_0_1290}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea23/6d3a/0d98eb0d14f790bb7e7cee7b62683e42"
              }}
              style={styles.ImageBackground_I0_274_0_1286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe9/5fe9/d16823ba3ae61b2c9027e63f1f3edf35"
              }}
              style={styles.ImageBackground_I0_274_0_1289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/579e/1988/0d6f8e33fe3dd4ffa0ef18bf15a72d12"
              }}
              style={styles.ImageBackground_I0_274_0_1291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ec/f601/4adbd63e98b15a468a333c6d3ce1a2c2"
              }}
              style={styles.ImageBackground_I0_274_0_1292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ec/f601/4adbd63e98b15a468a333c6d3ce1a2c2"
              }}
              style={styles.ImageBackground_I0_274_0_1293}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_275}>
        <View style={styles.View_0_276}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/075e/0b53/58f0379fd727189f31d01b6d73a71e5e"
            }}
            style={styles.ImageBackground_I0_276_0_1259}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_277}
        />
        <View style={styles.View_0_278}>
          <Text style={styles.Text_0_278}>Username</Text>
        </View>
      </View>
      <View style={styles.View_0_279}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_280}
        />
        <View style={styles.View_0_281}>
          <Text style={styles.Text_0_281}>Full name</Text>
        </View>
        <View style={styles.View_0_282}>
          <View style={styles.View_I0_282_0_1277}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0049/7ec4/17a4b4933777b1532b6e9a561a5e609d"
              }}
              style={styles.ImageBackground_I0_282_0_1275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec2/2614/815378393fc36476c0a81516aa6c0ff2"
              }}
              style={styles.ImageBackground_I0_282_0_1276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d904/e203/4a791cfdaa7da2f9db20c892c0c9fda9"
              }}
              style={styles.ImageBackground_I0_282_0_1280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b63/7d36/212a6b7731f8024036b35b98d6935591"
              }}
              style={styles.ImageBackground_I0_282_0_1281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b63/7d36/212a6b7731f8024036b35b98d6935591"
              }}
              style={styles.ImageBackground_I0_282_0_1282}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_283}>
        <Text style={styles.Text_0_283}>Fill your information</Text>
      </View>
      <View style={styles.View_0_284}>
        <View style={styles.View_I0_284_0_1261}>
          <View style={styles.View_I0_284_0_1262} />
          <View style={styles.View_I0_284_0_1263}>
            <View style={styles.View_I0_284_0_1264}>
              <View style={styles.View_I0_284_0_1265} />
              <View style={styles.View_I0_284_0_1266} />
              <View style={styles.View_I0_284_0_1267} />
              <View style={styles.View_I0_284_0_1268} />
              <View style={styles.View_I0_284_0_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_284_0_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_284_0_1271}
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
  View_0_264: {
    width: 324,
    minWidth: 324,
    height: 97,
    minHeight: 97,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 758
  },
  View_0_265: {
    width: 324,
    minWidth: 324,
    height: 97,
    minHeight: 97,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_265_0_1303: {
    flexGrow: 1,
    width: 324,
    height: 97,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I0_265_0_1304: {
    width: 324,
    height: 97,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_265_0_1305: {
    width: 24,
    height: 24,
    top: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283
  },
  View_I0_265_0_1306: {
    width: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 57
  },
  Text_I0_265_0_1306: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_265_0_1307: {
    width: 5,
    height: 5,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130
  },
  ImageBackground_I0_265_0_1308: {
    width: 5,
    height: 5,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150
  },
  ImageBackground_I0_265_0_1309: {
    width: 5,
    height: 5,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170
  },
  ImageBackground_I0_265_0_1310: {
    width: 5,
    height: 5,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 190
  },
  View_I0_265_0_1311: {
    width: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 54
  },
  Text_I0_265_0_1311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_266: {
    width: 65,
    minWidth: 65,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 13,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_266_0_1301: {
    flexGrow: 1,
    width: 65,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_267: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 599,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_268: {
    width: 14,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_268_0_1299: {
    flexGrow: 1,
    width: 14,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_268_0_1297: {
    width: 14,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_268_0_1298: {
    width: 2,
    height: 2,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6
  },
  ImageBackground_0_269: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_270: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_270: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_271: {
    width: 369,
    minWidth: 369,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 504,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_272: {
    width: 369,
    height: 1,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_273: {
    width: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  Text_0_273: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_274: {
    width: 20,
    height: 22,
    top: 0.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_274_0_1290: {
    flexGrow: 1,
    width: 20,
    height: 21.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_274_0_1286: {
    width: 20,
    height: 20,
    top: 1.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_274_0_1289: {
    width: 4,
    height: 4,
    top: 13.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  ImageBackground_I0_274_0_1291: {
    width: 18.40904998779297,
    height: 1.5,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.75
  },
  ImageBackground_I0_274_0_1292: {
    width: 1.5,
    height: 4.390628814697266,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.75
  },
  ImageBackground_I0_274_0_1293: {
    width: 1.5,
    height: 4.390628814697266,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.75
  },
  View_0_275: {
    width: 369,
    minWidth: 369,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 412,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_276: {
    width: 16,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_276_0_1259: {
    flexGrow: 1,
    width: 15.02734375,
    height: 20.141597747802734,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_277: {
    width: 369,
    height: 1,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_278: {
    width: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_0_278: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_279: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 320,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_280: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_281: {
    width: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_281: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_282: {
    width: 21,
    height: 17,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_282_0_1277: {
    flexGrow: 1,
    width: 21,
    height: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_282_0_1275: {
    width: 5,
    height: 5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.5
  },
  ImageBackground_I0_282_0_1276: {
    width: 7.300000190734863,
    height: 4.300000190734863,
    top: 8.35009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3499755859375
  },
  ImageBackground_I0_282_0_1280: {
    width: 21,
    height: 17,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_282_0_1281: {
    width: 6.188471794128418,
    height: 1.2999999523162842,
    top: 5.85009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.8499755859375
  },
  ImageBackground_I0_282_0_1282: {
    width: 6.188471794128418,
    height: 1.2999999523162842,
    top: 9.85009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.8499755859375
  },
  View_0_283: {
    width: 315,
    minWidth: 315,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 202
  },
  Text_0_283: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_284: {
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
  View_I0_284_0_1261: {
    flexGrow: 1,
    width: 50,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_284_0_1262: {
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
  View_I0_284_0_1263: {
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
  View_I0_284_0_1264: {
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
  View_I0_284_0_1265: {
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
  View_I0_284_0_1266: {
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
  View_I0_284_0_1267: {
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
  View_I0_284_0_1268: {
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
  View_I0_284_0_1269: {
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
  ImageBackground_I0_284_0_1270: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  ImageBackground_I0_284_0_1271: {
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
