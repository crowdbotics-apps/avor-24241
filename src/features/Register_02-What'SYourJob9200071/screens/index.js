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
      <View style={styles.View_0_232}>
        <View style={styles.View_0_233}>
          <View style={styles.View_I0_233_0_1342}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/ba40/44545c502a2463b51e71f874937e87c9"
              }}
              style={styles.ImageBackground_I0_233_0_1343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32b0/af45/0ff93186ad2bb74489739e7569908b64"
              }}
              style={styles.ImageBackground_I0_233_0_1344}
            />
            <View style={styles.View_I0_233_0_1345}>
              <Text style={styles.Text_I0_233_0_1345}>2</Text>
            </View>
            <View style={styles.View_I0_233_0_1346}>
              <Text style={styles.Text_I0_233_0_1346}>Next</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_234}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e44a/4240/53027d8541102b61c386d1f95fc0c09a"
            }}
            style={styles.ImageBackground_I0_234_0_1336}
          />
        </View>
      </View>
      <View style={styles.View_0_235}>
        <View style={styles.View_0_242}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f063/2d54/6d19ca1c10413581c66bb268276f8fe5"
            }}
            style={styles.ImageBackground_0_238}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c5/4968/c956ef4b9de8955e2da2fd692e035088"
            }}
            style={styles.ImageBackground_0_241}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_243}
        />
        <View style={styles.View_0_244}>
          <Text style={styles.Text_0_244}>Address</Text>
        </View>
      </View>
      <View style={styles.View_0_245}>
        <View style={styles.View_0_246}>
          <View style={styles.View_I0_246_0_1290}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea23/6d3a/0d98eb0d14f790bb7e7cee7b62683e42"
              }}
              style={styles.ImageBackground_I0_246_0_1286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe9/5fe9/d16823ba3ae61b2c9027e63f1f3edf35"
              }}
              style={styles.ImageBackground_I0_246_0_1289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/579e/1988/0d6f8e33fe3dd4ffa0ef18bf15a72d12"
              }}
              style={styles.ImageBackground_I0_246_0_1291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ec/f601/4adbd63e98b15a468a333c6d3ce1a2c2"
              }}
              style={styles.ImageBackground_I0_246_0_1292}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ec/f601/4adbd63e98b15a468a333c6d3ce1a2c2"
              }}
              style={styles.ImageBackground_I0_246_0_1293}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_247}
        />
        <View style={styles.View_0_248}>
          <Text style={styles.Text_0_248}>Start date</Text>
        </View>
      </View>
      <View style={styles.View_0_249}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_250}
        />
        <View style={styles.View_0_251}>
          <Text style={styles.Text_0_251}>Location</Text>
        </View>
        <View style={styles.View_0_252}>
          <View style={styles.View_I0_252_0_1334}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddcd/aed9/014d277c8001365998d7d9e5427b760b"
              }}
              style={styles.ImageBackground_I0_252_0_1330}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d16e/9e1b/67024ae09d47d6138dc84d2c21dc7800"
              }}
              style={styles.ImageBackground_I0_252_0_1333}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_253}>
        <View style={styles.View_0_254}>
          <View style={styles.View_I0_254_0_1277}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0049/7ec4/17a4b4933777b1532b6e9a561a5e609d"
              }}
              style={styles.ImageBackground_I0_254_0_1275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ec2/2614/815378393fc36476c0a81516aa6c0ff2"
              }}
              style={styles.ImageBackground_I0_254_0_1276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d904/e203/4a791cfdaa7da2f9db20c892c0c9fda9"
              }}
              style={styles.ImageBackground_I0_254_0_1280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b63/7d36/212a6b7731f8024036b35b98d6935591"
              }}
              style={styles.ImageBackground_I0_254_0_1281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b63/7d36/212a6b7731f8024036b35b98d6935591"
              }}
              style={styles.ImageBackground_I0_254_0_1282}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_255}
        />
        <View style={styles.View_0_256}>
          <Text style={styles.Text_0_256}>Position</Text>
        </View>
      </View>
      <View style={styles.View_0_257}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_258}
        />
        <View style={styles.View_0_259}>
          <Text style={styles.Text_0_259}>Company name</Text>
        </View>
        <View style={styles.View_0_260}>
          <View style={styles.View_I0_260_0_1319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74cd/4318/7d768d3d9e77c0fd7ecb718cee832791"
              }}
              style={styles.ImageBackground_I0_260_0_1315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe9/5fe9/d16823ba3ae61b2c9027e63f1f3edf35"
              }}
              style={styles.ImageBackground_I0_260_0_1318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe9/5fe9/d16823ba3ae61b2c9027e63f1f3edf35"
              }}
              style={styles.ImageBackground_I0_260_0_1322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4b/3151/52609e6435e42fec34b022ca01bd74f1"
              }}
              style={styles.ImageBackground_I0_260_0_1323}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65e/6131/7343dc7c16faec8a56b3e0ba8b34ab5c"
              }}
              style={styles.ImageBackground_I0_260_0_1326}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_261}>
        <Text style={styles.Text_0_261}>What’s your job</Text>
      </View>
      <View style={styles.View_0_262}>
        <View style={styles.View_I0_262_0_1261}>
          <View style={styles.View_I0_262_0_1262} />
          <View style={styles.View_I0_262_0_1263}>
            <View style={styles.View_I0_262_0_1264}>
              <View style={styles.View_I0_262_0_1265} />
              <View style={styles.View_I0_262_0_1266} />
              <View style={styles.View_I0_262_0_1267} />
              <View style={styles.View_I0_262_0_1268} />
              <View style={styles.View_I0_262_0_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_262_0_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_262_0_1271}
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
  View_0_232: {
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
  View_0_233: {
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
  View_I0_233_0_1342: {
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
  ImageBackground_I0_233_0_1343: {
    width: 324,
    height: 97,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_233_0_1344: {
    width: 24,
    height: 24,
    top: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283
  },
  View_I0_233_0_1345: {
    width: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291,
    top: 57
  },
  Text_I0_233_0_1345: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_233_0_1346: {
    width: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 54
  },
  Text_I0_233_0_1346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_234: {
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
  ImageBackground_I0_234_0_1336: {
    flexGrow: 1,
    width: 65,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_235: {
    width: 369,
    minWidth: 369,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 677,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_242: {
    width: 20.299999237060547,
    height: 20.467166900634766,
    top: 0.182861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303.3499755859375
  },
  ImageBackground_0_238: {
    width: 20.299999237060547,
    height: 20.467166900634766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_241: {
    width: 5.300000190734863,
    height: 7.300000190734863,
    top: 13.167236328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11
  },
  ImageBackground_0_243: {
    width: 369,
    height: 1,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_244: {
    width: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_0_244: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_245: {
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
  View_0_246: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_246_0_1290: {
    flexGrow: 1,
    width: 20,
    height: 21.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_246_0_1286: {
    width: 20,
    height: 20,
    top: 1.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_246_0_1289: {
    width: 4,
    height: 4,
    top: 13.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4
  },
  ImageBackground_I0_246_0_1291: {
    width: 18.40904998779297,
    height: 1.5,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.75
  },
  ImageBackground_I0_246_0_1292: {
    width: 1.5,
    height: 4.390628814697266,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.75
  },
  ImageBackground_I0_246_0_1293: {
    width: 1.5,
    height: 4.390628814697266,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.75
  },
  ImageBackground_0_247: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_248: {
    width: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_248: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_249: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 506,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_250: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_251: {
    width: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_251: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_252: {
    width: 20,
    height: 24,
    top: 1.35009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304.76422119140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_252_0_1334: {
    flexGrow: 1,
    width: 19.299999237060547,
    height: 23.297161102294922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_252_0_1330: {
    width: 27.294321060180664,
    height: 27.294321060180664,
    top: -3.997314453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -3.99713134765625
  },
  ImageBackground_I0_252_0_1333: {
    width: 9.399999618530273,
    height: 9.399999618530273,
    top: 4.949951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.95001220703125
  },
  View_0_253: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 413,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_254: {
    width: 21,
    height: 17,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_254_0_1277: {
    flexGrow: 1,
    width: 21,
    height: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_254_0_1275: {
    width: 5,
    height: 5,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.5
  },
  ImageBackground_I0_254_0_1276: {
    width: 7.300000190734863,
    height: 4.300000190734863,
    top: 8.35009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3499755859375
  },
  ImageBackground_I0_254_0_1280: {
    width: 21,
    height: 17,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_254_0_1281: {
    width: 6.188471794128418,
    height: 1.2999999523162842,
    top: 5.85009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.8499755859375
  },
  ImageBackground_I0_254_0_1282: {
    width: 6.188471794128418,
    height: 1.2999999523162842,
    top: 9.85009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.8499755859375
  },
  ImageBackground_0_255: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_256: {
    width: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_256: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_257: {
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
  ImageBackground_0_258: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_259: {
    width: 131,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_259: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_260: {
    width: 20,
    height: 20,
    top: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_260_0_1319: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_260_0_1315: {
    width: 10,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_260_0_1318: {
    width: 4,
    height: 4,
    top: 7.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3
  },
  ImageBackground_I0_260_0_1322: {
    width: 4,
    height: 4,
    top: 12.833251953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3
  },
  ImageBackground_I0_260_0_1323: {
    width: 2,
    height: 2,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  ImageBackground_I0_260_0_1326: {
    width: 8,
    height: 15,
    top: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12
  },
  View_0_261: {
    width: 239,
    minWidth: 239,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 202
  },
  Text_0_261: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_262: {
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
  View_I0_262_0_1261: {
    flexGrow: 1,
    width: 50,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_262_0_1262: {
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
  View_I0_262_0_1263: {
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
  View_I0_262_0_1264: {
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
  View_I0_262_0_1265: {
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
  View_I0_262_0_1266: {
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
  View_I0_262_0_1267: {
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
  View_I0_262_0_1268: {
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
  View_I0_262_0_1269: {
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
  ImageBackground_I0_262_0_1270: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  ImageBackground_I0_262_0_1271: {
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
