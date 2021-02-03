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
      <View style={styles.View_0_177}>
        <View style={styles.View_0_178}>
          <View style={styles.View_I0_178_0_1440}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/ba40/44545c502a2463b51e71f874937e87c9"
              }}
              style={styles.ImageBackground_I0_178_0_1441}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32b0/af45/0ff93186ad2bb74489739e7569908b64"
              }}
              style={styles.ImageBackground_I0_178_0_1442}
            />
            <View style={styles.View_I0_178_0_1443}>
              <Text style={styles.Text_I0_178_0_1443}>4</Text>
            </View>
            <View style={styles.View_I0_178_0_1444}>
              <Text style={styles.Text_I0_178_0_1444}>Finish</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_179}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4d/396e/3d04777c30e7aad6a7fc4d09c0a211b6"
            }}
            style={styles.ImageBackground_I0_179_0_1434}
          />
        </View>
      </View>
      <View style={styles.View_0_180}>
        <View style={styles.View_0_181} />
        <View style={styles.View_0_182}>
          <View style={styles.View_I0_182_0_1417}>
            <View style={styles.View_I0_182_0_1418} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f547/7a46/13dc5614bc9fe0d5ff9780903732bfff"
              }}
              style={styles.ImageBackground_I0_182_0_1419}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d759/7513/0e0d427d06dbc768c4cb40cd3c9e9434"
              }}
              style={styles.ImageBackground_I0_182_0_1420}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66db/5401/178b0a6c5173efc617c2f68ad5124ca6"
              }}
              style={styles.ImageBackground_I0_182_0_1423}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/563d/c67d/1bd2502df53bea9f5a0e7dd68089bb33"
              }}
              style={styles.ImageBackground_I0_182_0_1426}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc51/5242/03647592303e439eb74de800961013ce"
              }}
              style={styles.ImageBackground_I0_182_0_1429}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb1b/d7f6/c77d1da0f2f8e4aaba516564c206e296"
              }}
              style={styles.ImageBackground_I0_182_0_1432}
            />
          </View>
        </View>
        <View style={styles.View_0_183}>
          <Text style={styles.Text_0_183}>Agent</Text>
        </View>
        <View style={styles.View_0_184}>
          <Text style={styles.Text_0_184}>Our agent will come to you</Text>
        </View>
      </View>
      <View style={styles.View_0_185}>
        <View style={styles.View_0_186} />
        <View style={styles.View_0_187}>
          <View style={styles.View_I0_187_0_1389}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f547/7a46/13dc5614bc9fe0d5ff9780903732bfff"
              }}
              style={styles.ImageBackground_I0_187_0_1390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/137a/bf84/7f6eb9d90a6422bd6d4f513236d28e26"
              }}
              style={styles.ImageBackground_I0_187_0_1393}
            />
            <View style={styles.View_I0_187_0_1394} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f547/7a46/13dc5614bc9fe0d5ff9780903732bfff"
              }}
              style={styles.ImageBackground_I0_187_0_1395}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0f/aecd/858e85121fc0d0ce9efcac3c8f29a1e2"
              }}
              style={styles.ImageBackground_I0_187_0_1396}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d79d/4266/f71d5a54ed2681994f8e043348130de1"
              }}
              style={styles.ImageBackground_I0_187_0_1397}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286e/acee/289a41ab6caa2c18bc64d29456de190b"
              }}
              style={styles.ImageBackground_I0_187_0_1400}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/2ea8/9ecccf6c1e249c2acbbcd73657689491"
              }}
              style={styles.ImageBackground_I0_187_0_1403}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae49/0bbe/dd72187ea338d9544a16c390f281afd7"
              }}
              style={styles.ImageBackground_I0_187_0_1404}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/2ea8/9ecccf6c1e249c2acbbcd73657689491"
              }}
              style={styles.ImageBackground_I0_187_0_1407}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae49/0bbe/dd72187ea338d9544a16c390f281afd7"
              }}
              style={styles.ImageBackground_I0_187_0_1408}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/2ea8/9ecccf6c1e249c2acbbcd73657689491"
              }}
              style={styles.ImageBackground_I0_187_0_1411}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae49/0bbe/dd72187ea338d9544a16c390f281afd7"
              }}
              style={styles.ImageBackground_I0_187_0_1412}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/2ea8/9ecccf6c1e249c2acbbcd73657689491"
              }}
              style={styles.ImageBackground_I0_187_0_1415}
            />
          </View>
        </View>
        <View style={styles.View_0_188}>
          <Text style={styles.Text_0_188}>Outlets</Text>
        </View>
        <View style={styles.View_0_189}>
          <Text style={styles.Text_0_189}>You came to our outlates</Text>
        </View>
      </View>
      <View style={styles.View_0_190}>
        <View style={styles.View_0_192}>
          <View style={styles.View_I0_192_0_1372}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b8f/0694/544298040a9984eb29ac9ca2b0e56d03"
              }}
              style={styles.ImageBackground_I0_192_0_1375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afc1/7ece/f08eff6ea2ef142687312caa1fa37aab"
              }}
              style={styles.ImageBackground_I0_192_0_1378}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/606b/7e85/cec44cf3c82ea43ce039b1f575b119cf"
              }}
              style={styles.ImageBackground_I0_192_0_1379}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcca/c09e/bd2ee6308239a6530733fb3fa99be9be"
              }}
              style={styles.ImageBackground_I0_192_0_1382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286e/acee/289a41ab6caa2c18bc64d29456de190b"
              }}
              style={styles.ImageBackground_I0_192_0_1385}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/923d/920c/0046b9fdae6b3d61138d3155f18ba693"
              }}
              style={styles.ImageBackground_I0_192_0_1386}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa0/4b98/c328746aa70d9fdf0aedea1dce62cdbc"
              }}
              style={styles.ImageBackground_I0_192_0_1387}
            />
          </View>
        </View>
        <View style={styles.View_0_193}>
          <Text style={styles.Text_0_193}>Video call</Text>
        </View>
        <View style={styles.View_0_194}>
          <Text style={styles.Text_0_194}>We will call you shortly</Text>
        </View>
      </View>
      <View style={styles.View_0_195}>
        <Text style={styles.Text_0_195}>Pick way to verify</Text>
      </View>
      <View style={styles.View_0_196}>
        <View style={styles.View_I0_196_0_1261}>
          <View style={styles.View_I0_196_0_1262} />
          <View style={styles.View_I0_196_0_1263}>
            <View style={styles.View_I0_196_0_1264}>
              <View style={styles.View_I0_196_0_1265} />
              <View style={styles.View_I0_196_0_1266} />
              <View style={styles.View_I0_196_0_1267} />
              <View style={styles.View_I0_196_0_1268} />
              <View style={styles.View_I0_196_0_1269} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_196_0_1270}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_196_0_1271}
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
  View_0_177: {
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
  View_0_178: {
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
  View_I0_178_0_1440: {
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
  ImageBackground_I0_178_0_1441: {
    width: 324,
    height: 97,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_178_0_1442: {
    width: 24,
    height: 24,
    top: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283
  },
  View_I0_178_0_1443: {
    width: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291,
    top: 57
  },
  Text_I0_178_0_1443: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_178_0_1444: {
    width: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 54
  },
  Text_I0_178_0_1444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_179: {
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
  ImageBackground_I0_179_0_1434: {
    flexGrow: 1,
    width: 65,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_180: {
    width: 324,
    minWidth: 324,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 561,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_181: {
    width: 324,
    height: 114,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_182: {
    width: 95,
    height: 55,
    top: 31.257568359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_182_0_1417: {
    flexGrow: 1,
    width: 93.07479095458984,
    height: 54.74250793457031,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.925201416015625,
    top: 0
  },
  View_I0_182_0_1418: {
    width: 12,
    height: 15,
    top: 38.742431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.074798583984375,
    backgroundColor: "rgba(108, 117, 252, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_182_0_1419: {
    width: 93.07479095458984,
    height: 2,
    top: 52.742431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_182_0_1420: {
    width: 15.7279634475708,
    height: 2,
    top: 45.242431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.074798583984375
  },
  ImageBackground_I0_182_0_1423: {
    width: 16,
    height: 16,
    top: 38.742431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.074798583984375
  },
  ImageBackground_I0_182_0_1426: {
    width: 6,
    height: 6,
    top: 30.742431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.074798583984375
  },
  ImageBackground_I0_182_0_1429: {
    width: 6,
    height: 6,
    top: 30.742431640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.074798583984375
  },
  ImageBackground_I0_182_0_1432: {
    width: 52,
    height: 54.74250793457031,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.074798583984375
  },
  View_0_183: {
    width: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 34
  },
  Text_0_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_184: {
    width: 148,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 65
  },
  Text_0_184: {
    color: "rgba(154, 160, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_185: {
    width: 324,
    minWidth: 324,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 417,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_186: {
    width: 324,
    height: 114,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_187: {
    width: 92,
    height: 58,
    top: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_187_0_1389: {
    flexGrow: 1,
    width: 93.07479095458984,
    height: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.074798583984375,
    top: -1
  },
  ImageBackground_I0_187_0_1390: {
    width: 92,
    height: 2,
    top: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.074798583984375
  },
  ImageBackground_I0_187_0_1393: {
    width: 58.006439208984375,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.074066162109375
  },
  View_I0_187_0_1394: {
    width: 12,
    height: 15,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64.07977294921875,
    backgroundColor: "rgba(108, 117, 252, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_187_0_1395: {
    width: 93.07479095458984,
    height: 2,
    top: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_187_0_1396: {
    width: 50,
    height: 27.71805763244629,
    top: 31.281982421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34.07977294921875
  },
  ImageBackground_I0_187_0_1397: {
    width: 2,
    height: 19.399999618530273,
    top: 39.60009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.574798583984375
  },
  ImageBackground_I0_187_0_1400: {
    width: 13,
    height: 13,
    top: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.074798583984375
  },
  ImageBackground_I0_187_0_1403: {
    width: 10,
    height: 11,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.07977294921875
  },
  ImageBackground_I0_187_0_1404: {
    width: 8,
    height: 9,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.07977294921875
  },
  ImageBackground_I0_187_0_1407: {
    width: 10,
    height: 11,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.07977294921875
  },
  ImageBackground_I0_187_0_1408: {
    width: 8,
    height: 9,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.07977294921875
  },
  ImageBackground_I0_187_0_1411: {
    width: 10,
    height: 11,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62.07977294921875
  },
  ImageBackground_I0_187_0_1412: {
    width: 8,
    height: 9,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71.07977294921875
  },
  ImageBackground_I0_187_0_1415: {
    width: 10,
    height: 11,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78.07977294921875
  },
  View_0_188: {
    width: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 35
  },
  Text_0_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_189: {
    width: 139,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 66
  },
  Text_0_189: {
    color: "rgba(154, 160, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_190: {
    width: 324,
    minWidth: 324,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 273,
    backgroundColor: "rgba(255, 110, 31, 1)",
    overflow: "hidden"
  },
  View_0_192: {
    width: 92,
    height: 59,
    top: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_192_0_1372: {
    flexGrow: 1,
    width: 93.07479095458984,
    height: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.074798583984375,
    top: -1
  },
  ImageBackground_I0_192_0_1375: {
    width: 17,
    height: 12,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.074798583984375
  },
  ImageBackground_I0_192_0_1378: {
    width: 29,
    height: 20,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.074798583984375
  },
  ImageBackground_I0_192_0_1379: {
    width: 93.07479095458984,
    height: 2,
    top: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_192_0_1382: {
    width: 34,
    height: 60,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.074798583984375
  },
  ImageBackground_I0_192_0_1385: {
    width: 13,
    height: 13,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65.07479858398438
  },
  ImageBackground_I0_192_0_1386: {
    width: 18.075428009033203,
    height: 8.334576606750488,
    top: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61.999542236328125
  },
  ImageBackground_I0_192_0_1387: {
    width: 5,
    height: 5,
    top: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69.07479858398438
  },
  View_0_193: {
    width: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 34
  },
  Text_0_193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_194: {
    width: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 65
  },
  Text_0_194: {
    color: "rgba(255, 223, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_195: {
    width: 275,
    minWidth: 275,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 162
  },
  Text_0_195: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_196: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 87,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_196_0_1261: {
    flexGrow: 1,
    width: 50,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_196_0_1262: {
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
  View_I0_196_0_1263: {
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
  View_I0_196_0_1264: {
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
  View_I0_196_0_1265: {
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
  View_I0_196_0_1266: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 12.77783203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.11111068725586,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_196_0_1267: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 12.77783203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.000000953674316,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_196_0_1268: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 26.66650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.11111068725586,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_I0_196_0_1269: {
    width: 11.666666984558105,
    height: 11.666666984558105,
    top: 26.66650390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.000000953674316,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  ImageBackground_I0_196_0_1270: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  ImageBackground_I0_196_0_1271: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.11111068725586
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
