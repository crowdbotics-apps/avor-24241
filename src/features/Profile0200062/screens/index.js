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
      <View style={styles.View_0_3}>
        <View style={styles.View_0_4} />
        <View style={styles.View_0_5}>
          <View style={styles.View_0_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fde7/6475/91e70a200ef1ceb4d8f9c625c280cdf0"
              }}
              style={styles.ImageBackground_I0_6_0_1552}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b0/d878/96168f93fbcb2d622041ccf94f26b388"
            }}
            style={styles.ImageBackground_0_7}
          />
        </View>
        <View style={styles.View_0_8}>
          <View style={styles.View_0_9}>
            <View style={styles.View_I0_9_0_1548}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3119/8740/43a8452b357bbfde8b048fe3ddd0a36a"
                }}
                style={styles.ImageBackground_I0_9_0_1544}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69ed/90f6/bec8dda6a737416de93435342a8e04e1"
                }}
                style={styles.ImageBackground_I0_9_0_1547}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_10}>
          <View style={styles.View_0_11} />
          <View style={styles.View_0_12}>
            <View style={styles.View_0_13} />
            <View style={styles.View_0_14} />
            <View style={styles.View_0_15} />
            <View style={styles.View_0_16} />
            <View style={styles.View_0_17} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
              }}
              style={styles.ImageBackground_0_18}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
              }}
              style={styles.ImageBackground_0_19}
            />
          </View>
        </View>
        <View style={styles.View_0_20}>
          <View style={styles.View_0_21}>
            <View style={styles.View_I0_21_0_1540}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab4a/f13e/eb75b99de67353d780459d151b623cf1"
                }}
                style={styles.ImageBackground_I0_21_0_1538}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f664/1608/0943356d1b10a8f9e8ab868a6ee739b0"
                }}
                style={styles.ImageBackground_I0_21_0_1539}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_22}>
          <View style={styles.View_0_23}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/636a/3126/d096282afc98c56e6422e6b1790ab044"
              }}
              style={styles.ImageBackground_I0_23_0_1534}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_24}>
        <View style={styles.View_0_25}>
          <View style={styles.View_I0_25_0_1767}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb3/13b8/3a5d0754c9df593f4f20614001a3efc0"
              }}
              style={styles.ImageBackground_I0_25_0_1765}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c0/1ea5/c2dbeb4ec133f8852e600e3884350d1d"
              }}
              style={styles.ImageBackground_I0_25_0_1766}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_26}
        />
        <View style={styles.View_0_27}>
          <Text style={styles.Text_0_27}>Logout</Text>
        </View>
      </View>
      <View style={styles.View_0_28}>
        <View style={styles.View_0_29}>
          <View style={styles.View_I0_29_0_1758}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb3/13b8/3a5d0754c9df593f4f20614001a3efc0"
              }}
              style={styles.ImageBackground_I0_29_0_1756}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a36/b1e5/8099be8597b6b90b0a331fc3ca1847e3"
              }}
              style={styles.ImageBackground_I0_29_0_1757}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a36/b1e5/8099be8597b6b90b0a331fc3ca1847e3"
              }}
              style={styles.ImageBackground_I0_29_0_1759}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314f/2f47/62fab3937738afd3562ca9fa089331b1"
              }}
              style={styles.ImageBackground_I0_29_0_1760}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314f/2f47/62fab3937738afd3562ca9fa089331b1"
              }}
              style={styles.ImageBackground_I0_29_0_1761}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_30}
        />
        <View style={styles.View_0_31}>
          <Text style={styles.Text_0_31}>Support</Text>
        </View>
      </View>
      <View style={styles.View_0_32}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_33}
        />
        <View style={styles.View_0_34}>
          <Text style={styles.Text_0_34}>Contact us</Text>
        </View>
        <View style={styles.View_0_35}>
          <View style={styles.View_I0_35_0_1749}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bff/a6d6/9b970370d23e0b3b476d98baf4c30118"
              }}
              style={styles.ImageBackground_I0_35_0_1747}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b07c/c07d/8e41077faee88a2f91457efaf2e01fff"
              }}
              style={styles.ImageBackground_I0_35_0_1748}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dabe/0935/a3f3c7d5524ec04a5993eb5853011af4"
              }}
              style={styles.ImageBackground_I0_35_0_1752}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_36}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_37}
        />
        <View style={styles.View_0_38}>
          <Text style={styles.Text_0_38}>Security</Text>
        </View>
        <View style={styles.View_0_39}>
          <View style={styles.View_I0_39_0_1743}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1748/7340/84e2ed59a9b56fb3329ad4b6db3b7d78"
              }}
              style={styles.ImageBackground_I0_39_0_1741}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/9dec/f5d5889fdc5f520f2c3e38f3c9656bb6"
              }}
              style={styles.ImageBackground_I0_39_0_1742}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_41}
        />
        <View style={styles.View_0_42}>
          <Text style={styles.Text_0_42}>Information</Text>
        </View>
        <View style={styles.View_0_43}>
          <View style={styles.View_I0_43_0_1737}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e86/200f/02e73d7d7191648e3b8b92320568b3aa"
              }}
              style={styles.ImageBackground_I0_43_0_1733}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21a/eb35/80819869b19e179759fa4dfb121be39e"
              }}
              style={styles.ImageBackground_I0_43_0_1736}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_44}>
        <View style={styles.View_I0_44_0_1722}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690d/7e29/6c84702d8df07312ee004b014c6281ce"
            }}
            style={styles.ImageBackground_I0_44_0_1723}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6564/8583/e62c738747f609f5af59409768f0c6e6"
            }}
            style={styles.ImageBackground_I0_44_0_1724}
          />
          <View style={styles.View_I0_44_0_1725}>
            <View style={styles.View_I0_44_0_1726}>
              <Text style={styles.Text_I0_44_0_1726}>Richard Beck</Text>
            </View>
            <View style={styles.View_I0_44_0_1727}>
              <Text style={styles.Text_I0_44_0_1727}>
                Vice precident of Google
              </Text>
            </View>
          </View>
          <View style={styles.View_I0_44_0_1728} />
          <View style={styles.View_I0_44_0_1729}>
            <Text style={styles.Text_I0_44_0_1729}>Edit</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_45}>
        <Text style={styles.Text_0_45}>27 March 2019</Text>
      </View>
      <View style={styles.View_0_46}>
        <View style={styles.View_I0_46_0_1576}>
          <View style={styles.View_I0_46_0_1577}>
            <View style={styles.View_I0_46_0_1578} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b123/a151/b1907580fa397483f94b871242a335e0"
              }}
              style={styles.ImageBackground_I0_46_0_1579}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_3: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 806
  },
  View_0_4: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_5: {
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
  View_0_6: {
    width: 23,
    minWidth: 23,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_6_0_1552: {
    flexGrow: 1,
    width: 22.125858306884766,
    height: 21.570112228393555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_7: {
    width: 4,
    minWidth: 4,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.9326171875,
    top: 26.458740234375
  },
  View_0_8: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 346.51025390625,
    top: 34.25
  },
  View_0_9: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_9_0_1548: {
    flexGrow: 1,
    width: 21.98000144958496,
    height: 21.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_9_0_1544: {
    width: 21.98000144958496,
    height: 10.071428298950195,
    top: 11.428466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_9_0_1547: {
    width: 9.5,
    height: 9.119047164916992,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.73974609375
  },
  View_0_10: {
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
  View_0_11: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_12: {
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
  View_0_13: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_14: {
    width: 11.666666984558105,
    minWidth: 11.666666984558105,
    height: 11.666666984558105,
    minHeight: 11.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375,
    top: 12.77783203125,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_0_15: {
    width: 11.666666984558105,
    minWidth: 11.666666984558105,
    height: 11.666666984558105,
    minHeight: 11.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.99993896484375,
    top: 12.77783203125,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_0_16: {
    width: 11.666666984558105,
    minWidth: 11.666666984558105,
    height: 11.666666984558105,
    minHeight: 11.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375,
    top: 26.66650390625,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_0_17: {
    width: 11.666666984558105,
    minWidth: 11.666666984558105,
    height: 11.666666984558105,
    minHeight: 11.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.99993896484375,
    top: 26.66650390625,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  ImageBackground_0_18: {
    width: 2.222222328186035,
    minWidth: 2.222222328186035,
    height: 2.222222328186035,
    minHeight: 2.222222328186035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 24.4443359375
  },
  ImageBackground_0_19: {
    width: 2.222222328186035,
    minWidth: 2.222222328186035,
    height: 2.222222328186035,
    minHeight: 2.222222328186035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375,
    top: 24.4443359375
  },
  View_0_20: {
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
  View_0_21: {
    width: 23,
    minWidth: 23,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_21_0_1540: {
    flexGrow: 1,
    width: 23,
    height: 21.047618865966797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_21_0_1538: {
    width: 23,
    height: 21.047618865966797,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_21_0_1539: {
    width: 21.265220642089844,
    height: 2,
    top: 6.1904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  View_0_22: {
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
  View_0_23: {
    width: 23,
    minWidth: 23,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_23_0_1534: {
    flexGrow: 1,
    width: 23,
    height: 23.257179260253906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_24: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 695,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_25: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_25_0_1767: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_25_0_1765: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_25_0_1766: {
    width: 1.5,
    height: 7.090780258178711,
    top: 9.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.25
  },
  ImageBackground_0_26: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_27: {
    width: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0
  },
  Text_0_27: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_28: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 602,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_29: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_29_0_1758: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_29_0_1756: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_29_0_1757: {
    width: 8,
    height: 8,
    top: 1.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5
  },
  ImageBackground_I0_29_0_1759: {
    width: 8,
    height: 8,
    top: 12.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.5
  },
  ImageBackground_I0_29_0_1760: {
    width: 8,
    height: 8,
    top: 1.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.5
  },
  ImageBackground_I0_29_0_1761: {
    width: 8,
    height: 8,
    top: 12.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5
  },
  ImageBackground_0_30: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_31: {
    width: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0
  },
  Text_0_31: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_32: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 509,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_33: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_34: {
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0
  },
  Text_0_34: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_35: {
    width: 23,
    height: 15,
    top: 4.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.25,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_35_0_1749: {
    flexGrow: 1,
    width: 22.25338363647461,
    height: 14.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_35_0_1747: {
    width: 22.25338363647461,
    height: 14.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_35_0_1748: {
    width: 20.42926025390625,
    height: 7.533736228942871,
    top: 1.422607421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.96514892578125
  },
  ImageBackground_I0_35_0_1752: {
    width: 20.42926025390625,
    height: 6.62890625,
    top: 6.855712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.96514892578125
  },
  View_0_36: {
    width: 369,
    minWidth: 369,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 415,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_37: {
    width: 369,
    height: 1,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_38: {
    width: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 1
  },
  Text_0_38: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_39: {
    width: 19,
    height: 23,
    top: 0.311279296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.25,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_39_0_1743: {
    flexGrow: 1,
    width: 18.5,
    height: 22.438711166381836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_39_0_1741: {
    width: 18.5,
    height: 22.438711166381836,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_39_0_1742: {
    width: 9.291332244873047,
    height: 6.712459564208984,
    top: 7.926513671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.59320068359375
  },
  View_0_40: {
    width: 370,
    minWidth: 370,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 318,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_41: {
    width: 369,
    height: 1,
    top: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  View_0_42: {
    width: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 5
  },
  Text_0_42: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_43: {
    width: 23,
    height: 23,
    top: 0.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.25,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_43_0_1737: {
    flexGrow: 1,
    width: 22.007143020629883,
    height: 22.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_43_0_1733: {
    width: 22.007143020629883,
    height: 10.5,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_43_0_1736: {
    width: 9.5,
    height: 9.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.75335693359375
  },
  View_0_44: {
    width: 324,
    minWidth: 324,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 163,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_44_0_1722: {
    flexGrow: 1,
    width: 324,
    height: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I0_44_0_1723: {
    width: 324,
    height: 100,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_44_0_1724: {
    width: 44,
    height: 44,
    top: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_44_0_1725: {
    width: 126,
    height: 40,
    top: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_44_0_1726: {
    width: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I0_44_0_1726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_44_0_1727: {
    width: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 27
  },
  Text_I0_44_0_1727: {
    color: "rgba(108, 117, 252, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_44_0_1728: {
    width: 50,
    height: 20,
    top: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_44_0_1729: {
    width: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 258,
    top: 43
  },
  Text_I0_44_0_1729: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_45: {
    width: 168,
    minWidth: 168,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123,
    top: 67
  },
  Text_0_45: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_46: {
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
  View_I0_46_0_1576: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_46_0_1577: {
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
  View_I0_46_0_1578: {
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
  ImageBackground_I0_46_0_1579: {
    width: 16,
    height: 10,
    top: 17.48046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.25
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
