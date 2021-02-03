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
      <View style={styles.View_0_73}>
        <View style={styles.View_I0_73_0_1635}>
          <View style={styles.View_I0_73_0_1636} />
          <View style={styles.View_I0_73_0_1637}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32db/603c/0134f71c2c8e56bb598f69ae9fe62bf6"
              }}
              style={styles.ImageBackground_I0_73_0_1640}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec73/14e2/30a7e22895b5560df608d1d107f4b7c5"
              }}
              style={styles.ImageBackground_I0_73_0_1641}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/051a/c047/228008619146c99696b10492a55739de"
              }}
              style={styles.ImageBackground_I0_73_0_1642}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e320/a02c/5717a38a92af46b0a6ddca4160fafe9c"
              }}
              style={styles.ImageBackground_I0_73_0_1643}
            />
          </View>
          <View style={styles.View_I0_73_0_1644}>
            <Text style={styles.Text_I0_73_0_1644}>Refund</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_74}>
        <View style={styles.View_I0_74_0_1625}>
          <View style={styles.View_I0_74_0_1626} />
          <View style={styles.View_I0_74_0_1627}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32f5/82d7/9b29a29cca48d77286a9d38751dff2ec"
              }}
              style={styles.ImageBackground_I0_74_0_1628}
            />
          </View>
          <View style={styles.View_I0_74_0_1633}>
            <Text style={styles.Text_I0_74_0_1633}>Print</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_75}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_76}
        />
        <View style={styles.View_0_77}>
          <Text style={styles.Text_0_77}>-$50</Text>
        </View>
      </View>
      <View style={styles.View_0_78}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6153/ff0e/6be2ecc219538e9273c04ad45a1c0f23"
          }}
          style={styles.ImageBackground_0_79}
        />
        <View style={styles.View_0_80}>
          <Text style={styles.Text_0_80}>ID : 100000000002</Text>
        </View>
      </View>
      <View style={styles.View_0_81}>
        <View style={styles.View_I0_81_0_1613}>
          <View style={styles.View_I0_81_0_1614}>
            <View style={styles.View_I0_81_0_1616} />
            <View style={styles.View_I0_81_0_1615} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f02/4e96/73bb33e867fe61c17bd0b69641522cf7"
              }}
              style={styles.ImageBackground_I0_81_0_1617}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f385/ad03/00f8d7f0e636dba312b0725ea2cb46fd"
              }}
              style={styles.ImageBackground_I0_81_0_1618}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06a9/e8de/4a1f081b8eb78a4248814d075042afcb"
              }}
              style={styles.ImageBackground_I0_81_0_1619}
            />
          </View>
          <View style={styles.View_I0_81_0_1620}>
            <View style={styles.View_I0_81_0_1621}>
              <Text style={styles.Text_I0_81_0_1621}>$250.00</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d195/a5ee/088aef42a92a75f59c2fb09edbb361ef"
              }}
              style={styles.ImageBackground_I0_81_0_1622}
            />
            <View style={styles.View_I0_81_0_1623}>
              <Text style={styles.Text_I0_81_0_1623}>
                you successfully sent to JennieYRB
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_82}>
        <Text style={styles.Text_0_82}>27 March 2019</Text>
      </View>
      <View style={styles.View_0_83}>
        <View style={styles.View_I0_83_0_1576}>
          <View style={styles.View_I0_83_0_1577}>
            <View style={styles.View_I0_83_0_1578} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b123/a151/b1907580fa397483f94b871242a335e0"
              }}
              style={styles.ImageBackground_I0_83_0_1579}
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
  View_0_73: {
    width: 150,
    minWidth: 150,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 790,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_73_0_1635: {
    flexGrow: 1,
    width: 150,
    height: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_73_0_1636: {
    width: 150,
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
  View_I0_73_0_1637: {
    width: 22,
    minWidth: 22,
    height: 20.24264144897461,
    minHeight: 20.24264144897461,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 23.378662109375
  },
  ImageBackground_I0_73_0_1640: {
    width: 22,
    height: 18,
    top: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_73_0_1641: {
    width: 4.242640495300293,
    height: 4.242640495300293,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11
  },
  ImageBackground_I0_73_0_1642: {
    width: 4.242640495300293,
    height: 4.242640495300293,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8
  },
  ImageBackground_I0_73_0_1643: {
    width: 20,
    height: 1,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  View_I0_73_0_1644: {
    width: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 22
  },
  Text_I0_73_0_1644: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_74: {
    width: 150,
    minWidth: 150,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 790,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_74_0_1625: {
    flexGrow: 1,
    width: 150,
    height: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_74_0_1626: {
    width: 150,
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
  View_I0_74_0_1627: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 23
  },
  ImageBackground_I0_74_0_1628: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_74_0_1633: {
    width: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 22
  },
  Text_I0_74_0_1633: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_75: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 502,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_76: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_77: {
    width: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_77: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_78: {
    width: 369,
    minWidth: 369,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 409,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_79: {
    width: 369,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_80: {
    width: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_80: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_81: {
    width: 324,
    minWidth: 324,
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 163,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_81_0_1613: {
    flexGrow: 1,
    width: 324,
    height: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_81_0_1614: {
    width: 324,
    minWidth: 324,
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_81_0_1616: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_81_0_1615: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_81_0_1617: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_81_0_1618: {
    width: 23,
    height: 23,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226
  },
  ImageBackground_I0_81_0_1619: {
    width: 35,
    height: 35,
    top: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29
  },
  View_I0_81_0_1620: {
    width: 219,
    height: 100,
    top: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_81_0_1621: {
    width: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 0
  },
  Text_I0_81_0_1621: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9375,
    textTransform: "none"
  },
  ImageBackground_I0_81_0_1622: {
    width: 219,
    height: 1,
    top: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_81_0_1623: {
    width: 215,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5,
    top: 84
  },
  Text_I0_81_0_1623: {
    color: "rgba(108, 117, 252, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_82: {
    width: 168,
    minWidth: 168,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123,
    top: 67
  },
  Text_0_82: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_83: {
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
  View_I0_83_0_1576: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_83_0_1577: {
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
  View_I0_83_0_1578: {
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
  ImageBackground_I0_83_0_1579: {
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
