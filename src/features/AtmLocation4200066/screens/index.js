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
      <View style={styles.View_0_85}>
        <View style={styles.View_0_87} />
        <View style={styles.View_0_86} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4794/e428/347b4fb494700885e457f52bd2527a4a"
          }}
          style={styles.ImageBackground_0_88}
        />
        <View style={styles.View_0_89} />
      </View>
      <View style={styles.View_0_90}>
        <View style={styles.View_0_91} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f88a/f3ba/69fdf2ee15865ab1626c9db5a9e1b9f5"
          }}
          style={styles.ImageBackground_0_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fd/4370/a3e0549a0b513d491c33497017c2792c"
          }}
          style={styles.ImageBackground_0_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccfd/133e/0db608541a6eb7f395d3a8be20a56eb3"
          }}
          style={styles.ImageBackground_0_94}
        />
        <View style={styles.View_0_95}>
          <Text style={styles.Text_0_95}>Alaynafurt 5min</Text>
        </View>
        <View style={styles.View_0_96}>
          <Text style={styles.Text_0_96}>1809 Pouros Inlet Suite 940</Text>
        </View>
      </View>
      <View style={styles.View_0_97}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81fd/d514/3fea40de3128f6eaae5b46231cf5888b"
          }}
          style={styles.ImageBackground_0_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967d/12b6/73edd7bb11f842981eaab5c4bde2a160"
          }}
          style={styles.ImageBackground_0_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2561/4212/8800d9f87895009cc8d784578f14034b"
          }}
          style={styles.ImageBackground_0_100}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d0/7349/f8d142a3a5a9264f67fa7a782d592da9"
          }}
          style={styles.ImageBackground_0_101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d0/7349/f8d142a3a5a9264f67fa7a782d592da9"
          }}
          style={styles.ImageBackground_0_105}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d0/7349/f8d142a3a5a9264f67fa7a782d592da9"
          }}
          style={styles.ImageBackground_0_109}
        />
      </View>
      <View style={styles.View_0_113}>
        <Text style={styles.Text_0_113}>ATM Location</Text>
      </View>
      <View style={styles.View_0_114}>
        <View style={styles.View_I0_114_0_1587}>
          <View style={styles.View_I0_114_0_1588} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6082/98f8/09217a7a269f66cb1a684b0ac74ab7b7"
            }}
            style={styles.ImageBackground_I0_114_0_1589}
          />
        </View>
      </View>
      <View style={styles.View_0_115}>
        <View style={styles.View_I0_115_0_1591}>
          <View style={styles.View_I0_115_0_1592} />
          <View style={styles.View_I0_115_0_1593}>
            <View style={styles.View_I0_115_0_1594}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fde7/6475/91e70a200ef1ceb4d8f9c625c280cdf0"
                }}
                style={styles.ImageBackground_I0_115_0_1594_0_1552}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b0/d878/96168f93fbcb2d622041ccf94f26b388"
              }}
              style={styles.ImageBackground_I0_115_0_1595}
            />
          </View>
          <View style={styles.View_I0_115_0_1596}>
            <View style={styles.View_I0_115_0_1597}>
              <View style={styles.View_I0_115_0_1597_0_1548}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3119/8740/43a8452b357bbfde8b048fe3ddd0a36a"
                  }}
                  style={styles.ImageBackground_I0_115_0_1597_0_1544}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69ed/90f6/bec8dda6a737416de93435342a8e04e1"
                  }}
                  style={styles.ImageBackground_I0_115_0_1597_0_1547}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I0_115_0_1598}>
            <View style={styles.View_I0_115_0_1599} />
            <View style={styles.View_I0_115_0_1600}>
              <View style={styles.View_I0_115_0_1601} />
              <View style={styles.View_I0_115_0_1602} />
              <View style={styles.View_I0_115_0_1603} />
              <View style={styles.View_I0_115_0_1604} />
              <View style={styles.View_I0_115_0_1605} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_115_0_1606}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_115_0_1607}
              />
            </View>
          </View>
          <View style={styles.View_I0_115_0_1608}>
            <View style={styles.View_I0_115_0_1609}>
              <View style={styles.View_I0_115_0_1609_0_1540}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab4a/f13e/eb75b99de67353d780459d151b623cf1"
                  }}
                  style={styles.ImageBackground_I0_115_0_1609_0_1538}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f664/1608/0943356d1b10a8f9e8ab868a6ee739b0"
                  }}
                  style={styles.ImageBackground_I0_115_0_1609_0_1539}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I0_115_0_1610}>
            <View style={styles.View_I0_115_0_1611}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/636a/3126/d096282afc98c56e6422e6b1790ab044"
                }}
                style={styles.ImageBackground_I0_115_0_1611_0_1534}
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
  View_0_85: {
    width: 414,
    minWidth: 414,
    height: 896,
    minHeight: 896,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_87: {
    width: 414,
    minWidth: 414,
    height: 896,
    minHeight: 896,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_86: {
    width: 414,
    minWidth: 414,
    height: 896,
    minHeight: 896,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_88: {
    width: 414,
    minWidth: 414,
    height: 896,
    minHeight: 896,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_89: {
    width: 414,
    minWidth: 414,
    height: 246,
    minHeight: 246,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_90: {
    width: 324,
    minWidth: 324,
    height: 697,
    minHeight: 697,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 59,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_91: {
    width: 44,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(42, 49, 71, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_92: {
    width: 324,
    height: 100,
    top: 597,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_93: {
    width: 28.82163429260254,
    height: 28.832611083984375,
    top: 635.005859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269.01153564453125
  },
  ImageBackground_0_94: {
    width: 44,
    height: 44,
    top: 625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_95: {
    width: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92,
    top: 627
  },
  Text_0_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_96: {
    width: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92,
    top: 655
  },
  Text_0_96: {
    color: "rgba(255, 225, 208, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_97: {
    width: 307,
    minWidth: 307,
    height: 425,
    minHeight: 425,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 166
  },
  ImageBackground_0_98: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 401
  },
  ImageBackground_0_99: {
    width: 10,
    minWidth: 10,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 408
  },
  ImageBackground_0_100: {
    width: 245.0642547607422,
    minWidth: 245.0642547607422,
    height: 188.30331420898438,
    minHeight: 188.30331420898438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.8846435546875,
    top: 225.04638671875
  },
  ImageBackground_0_101: {
    width: 56,
    minWidth: 56,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 225
  },
  ImageBackground_0_105: {
    width: 56,
    minWidth: 56,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 151
  },
  ImageBackground_0_109: {
    width: 56,
    minWidth: 56,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    top: 0
  },
  View_0_113: {
    width: 156,
    minWidth: 156,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 67
  },
  Text_0_113: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_114: {
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
  View_I0_114_0_1587: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_114_0_1588: {
    width: 44,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_114_0_1589: {
    width: 16,
    height: 10,
    top: 17.48046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.25
  },
  View_0_115: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 806,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_115_0_1591: {
    flexGrow: 1,
    width: 414,
    height: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_115_0_1592: {
    width: 414,
    height: 90,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I0_115_0_1593: {
    width: 23,
    minWidth: 23,
    height: 30.458683013916016,
    minHeight: 30.458683013916016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271.0673828125,
    top: 34.611083984375
  },
  View_I0_115_0_1594: {
    width: 23,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_115_0_1594_0_1552: {
    flexGrow: 1,
    width: 22.125858306884766,
    height: 21.570112228393555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_115_0_1595: {
    width: 4,
    height: 4,
    top: 26.458740234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.9326171875
  },
  View_I0_115_0_1596: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 346.51019287109375,
    top: 34.25
  },
  View_I0_115_0_1597: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_115_0_1597_0_1548: {
    flexGrow: 1,
    width: 21.98000144958496,
    height: 21.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_115_0_1597_0_1544: {
    width: 21.98000144958496,
    height: 10.071428298950195,
    top: 11.428466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_115_0_1597_0_1547: {
    width: 9.5,
    height: 9.119047164916992,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.73980712890625
  },
  View_I0_115_0_1598: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182,
    top: 20
  },
  View_I0_115_0_1599: {
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
  View_I0_115_0_1600: {
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
  View_I0_115_0_1601: {
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
  View_I0_115_0_1602: {
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
  View_I0_115_0_1603: {
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
  View_I0_115_0_1604: {
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
  View_I0_115_0_1605: {
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
  ImageBackground_I0_115_0_1606: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  ImageBackground_I0_115_0_1607: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375
  },
  View_I0_115_0_1608: {
    width: 23,
    minWidth: 23,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 34.97607421875
  },
  View_I0_115_0_1609: {
    width: 23,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_115_0_1609_0_1540: {
    flexGrow: 1,
    width: 23,
    height: 21.047618865966797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_115_0_1609_0_1538: {
    width: 23,
    height: 21.047618865966797,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_115_0_1609_0_1539: {
    width: 21.265220642089844,
    height: 2,
    top: 6.1904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  View_I0_115_0_1610: {
    width: 23,
    minWidth: 23,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 32.742919921875
  },
  View_I0_115_0_1611: {
    width: 23,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_115_0_1611_0_1534: {
    flexGrow: 1,
    width: 23,
    height: 23.257179260253906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
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
