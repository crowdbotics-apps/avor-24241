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
      <View style={styles.View_0_198}>
        <View style={styles.View_0_199}>
          <View style={styles.View_I0_199_0_1354}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/ba40/44545c502a2463b51e71f874937e87c9"
              }}
              style={styles.ImageBackground_I0_199_0_1355}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32b0/af45/0ff93186ad2bb74489739e7569908b64"
              }}
              style={styles.ImageBackground_I0_199_0_1356}
            />
            <View style={styles.View_I0_199_0_1357}>
              <Text style={styles.Text_I0_199_0_1357}>3</Text>
            </View>
            <View style={styles.View_I0_199_0_1358}>
              <Text style={styles.Text_I0_199_0_1358}>Next</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_200}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18a2/ead6/e1e2609b1aace4ef30f0fd9f8cb12e70"
            }}
            style={styles.ImageBackground_I0_200_0_1348}
          />
        </View>
      </View>
      <View style={styles.View_0_201}>
        <View style={styles.View_0_202}>
          <View style={styles.View_I0_202_0_1366}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/081d/2855/b76e39daf95b6b84ac9debfe00460ba1"
              }}
              style={styles.ImageBackground_I0_202_0_1362}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4da/c922/f8ee4bbcf582756de5afb41a5daf526e"
              }}
              style={styles.ImageBackground_I0_202_0_1365}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4da/c922/f8ee4bbcf582756de5afb41a5daf526e"
              }}
              style={styles.ImageBackground_I0_202_0_1369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4b/3151/52609e6435e42fec34b022ca01bd74f1"
              }}
              style={styles.ImageBackground_I0_202_0_1370}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_203}
        />
        <View style={styles.View_0_204}>
          <Text style={styles.Text_0_204}>Post code</Text>
        </View>
      </View>
      <View style={styles.View_0_205}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_206}
        />
        <View style={styles.View_0_207}>
          <Text style={styles.Text_0_207}>Company name</Text>
        </View>
        <View style={styles.View_0_208}>
          <View style={styles.View_I0_208_0_1319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74cd/4318/7d768d3d9e77c0fd7ecb718cee832791"
              }}
              style={styles.ImageBackground_I0_208_0_1315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe9/5fe9/d16823ba3ae61b2c9027e63f1f3edf35"
              }}
              style={styles.ImageBackground_I0_208_0_1318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe9/5fe9/d16823ba3ae61b2c9027e63f1f3edf35"
              }}
              style={styles.ImageBackground_I0_208_0_1322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4b/3151/52609e6435e42fec34b022ca01bd74f1"
              }}
              style={styles.ImageBackground_I0_208_0_1323}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65e/6131/7343dc7c16faec8a56b3e0ba8b34ab5c"
              }}
              style={styles.ImageBackground_I0_208_0_1326}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_209}>
        <View style={styles.View_0_216}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f063/2d54/6d19ca1c10413581c66bb268276f8fe5"
            }}
            style={styles.ImageBackground_0_212}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c5/4968/c956ef4b9de8955e2da2fd692e035088"
            }}
            style={styles.ImageBackground_0_215}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_217}
        />
        <View style={styles.View_0_218}>
          <Text style={styles.Text_0_218}>Second address</Text>
        </View>
      </View>
      <View style={styles.View_0_219}>
        <View style={styles.View_0_226}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f063/2d54/6d19ca1c10413581c66bb268276f8fe5"
            }}
            style={styles.ImageBackground_0_222}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c5/4968/c956ef4b9de8955e2da2fd692e035088"
            }}
            style={styles.ImageBackground_0_225}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_227}
        />
        <View style={styles.View_0_228}>
          <Text style={styles.Text_0_228}>Address</Text>
        </View>
      </View>
      <View style={styles.View_0_229}>
        <Text style={styles.Text_0_229}>Addresses</Text>
      </View>
      <View style={styles.View_0_230}>
        <View style={styles.View_I0_230_0_1261}>
          <View style={styles.View_I0_230_0_1262} />
          <View style={styles.View_I0_230_0_1263}>
            <View style={styles.View_I0_230_0_1264}>
              <View style={styles.View_I0_230_0_1265} />
              <View style={styles.View_I0_230_0_1266} />
              <View style={styles.View_I0_230_0_1267} />
              <View style={styles.View_I0_230_0_1268} />
              <View style={styles.View_I0_230_0_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_230_0_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_230_0_1271}
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
  View_0_198: {
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
  View_0_199: {
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
  View_I0_199_0_1354: {
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
  ImageBackground_I0_199_0_1355: {
    width: 324,
    height: 97,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_199_0_1356: {
    width: 24,
    height: 24,
    top: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283
  },
  View_I0_199_0_1357: {
    width: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291,
    top: 57
  },
  Text_I0_199_0_1357: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_199_0_1358: {
    width: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 54
  },
  Text_I0_199_0_1358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_200: {
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
  ImageBackground_I0_200_0_1348: {
    flexGrow: 1,
    width: 65,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_201: {
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
  View_0_202: {
    width: 21,
    height: 14,
    top: 4.35009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303.3500061035156,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_202_0_1366: {
    flexGrow: 1,
    width: 20.299999237060547,
    height: 13.061904907226562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_202_0_1362: {
    width: 20.299999237060547,
    height: 13.061904907226562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_202_0_1365: {
    width: 3,
    height: 3,
    top: 5.14990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.149993896484375
  },
  ImageBackground_I0_202_0_1369: {
    width: 3,
    height: 3,
    top: 5.14990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.149993896484375
  },
  ImageBackground_I0_202_0_1370: {
    width: 2,
    height: 2,
    top: 5.64990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.649993896484375
  },
  ImageBackground_0_203: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_204: {
    width: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_204: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_205: {
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
  ImageBackground_0_206: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_207: {
    width: 131,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_207: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_208: {
    width: 20,
    height: 20,
    top: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_208_0_1319: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_208_0_1315: {
    width: 10,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_208_0_1318: {
    width: 4,
    height: 4,
    top: 7.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3
  },
  ImageBackground_I0_208_0_1322: {
    width: 4,
    height: 4,
    top: 12.833251953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3
  },
  ImageBackground_I0_208_0_1323: {
    width: 2,
    height: 2,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  ImageBackground_I0_208_0_1326: {
    width: 8,
    height: 15,
    top: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12
  },
  View_0_209: {
    width: 369,
    minWidth: 369,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 413,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_216: {
    width: 20.299999237060547,
    height: 20.467166900634766,
    top: 0.182861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303.3500061035156
  },
  ImageBackground_0_212: {
    width: 20.299999237060547,
    height: 20.467166900634766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_215: {
    width: 5.300000190734863,
    height: 7.300000190734863,
    top: 13.167236328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11
  },
  ImageBackground_0_217: {
    width: 369,
    height: 1,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_218: {
    width: 134,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_0_218: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_219: {
    width: 369,
    minWidth: 369,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 320,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_226: {
    width: 20.299999237060547,
    height: 20.467166900634766,
    top: 0.182861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303.3500061035156
  },
  ImageBackground_0_222: {
    width: 20.299999237060547,
    height: 20.467166900634766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_225: {
    width: 5.300000190734863,
    height: 7.300000190734863,
    top: 13.167236328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11
  },
  ImageBackground_0_227: {
    width: 369,
    height: 1,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_228: {
    width: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_0_228: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_229: {
    width: 166,
    minWidth: 166,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 202
  },
  Text_0_229: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_230: {
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
  View_I0_230_0_1261: {
    flexGrow: 1,
    width: 50,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_230_0_1262: {
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
  View_I0_230_0_1263: {
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
  View_I0_230_0_1264: {
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
  View_I0_230_0_1265: {
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
  View_I0_230_0_1266: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 12.77783203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111114501953125,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_230_0_1267: {
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
  View_I0_230_0_1268: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 26.66650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111114501953125,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_230_0_1269: {
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
  ImageBackground_I0_230_0_1270: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  ImageBackground_I0_230_0_1271: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111114501953125
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
