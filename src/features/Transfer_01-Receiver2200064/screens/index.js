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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/005f/43a6/a260da71257364f6da9b4229d082bead"
        }}
        style={styles.ImageBackground_2_1417}
      />
      <View style={styles.View_0_61}>
        <View style={styles.View_I0_61_0_1241}>
          <View style={styles.View_I0_61_0_1242} />
          <View style={styles.View_I0_61_0_1243}>
            <Text style={styles.Text_I0_61_0_1243}>Next</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_62}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/e2e1/6c07a480346d68875f6d1e29597ace1e"
          }}
          style={styles.ImageBackground_0_63}
        />
        <View style={styles.View_0_64}>
          <Text style={styles.Text_0_64}>Receiver</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9878/776f/4f665a20fa1261444c85a6f348d0b210"
          }}
          style={styles.ImageBackground_0_67}
        />
      </View>
      <View style={styles.View_0_68}>
        <Text style={styles.Text_0_68}>Next</Text>
      </View>
      <View style={styles.View_0_69}>
        <View style={styles.View_I0_69_0_1646}>
          <View style={styles.View_I0_69_0_1647} />
          <View style={styles.View_I0_69_0_1648}>
            <View style={styles.View_I0_69_0_1648_0_1769} />
          </View>
          <View style={styles.View_I0_69_0_1656}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2b1/355a/03f2d1240d43463c81c228ffaa460b21"
              }}
              style={styles.ImageBackground_I0_69_0_1651}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9614/28f4/03398241c899c8f1c368ea8a537f22dd"
              }}
              style={styles.ImageBackground_I0_69_0_1655}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ccc/a0e4/0b7762815760e5cd516ea021c1825db0"
              }}
              style={styles.ImageBackground_I0_69_0_1657}
            />
          </View>
          <View style={styles.View_I0_69_0_1665}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2b1/355a/03f2d1240d43463c81c228ffaa460b21"
              }}
              style={styles.ImageBackground_I0_69_0_1660}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9614/28f4/03398241c899c8f1c368ea8a537f22dd"
              }}
              style={styles.ImageBackground_I0_69_0_1664}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ccc/a0e4/0b7762815760e5cd516ea021c1825db0"
              }}
              style={styles.ImageBackground_I0_69_0_1666}
            />
          </View>
          <View style={styles.View_I0_69_0_1671}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0b6/85dd/1224320ad16c162a77da42f7fc011adf"
              }}
              style={styles.ImageBackground_I0_69_0_1669}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea0/c724/cfa14ee4401c6e29917f167065c126f7"
              }}
              style={styles.ImageBackground_I0_69_0_1670}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8b/fcf4/becb92b701b81cb0c278e4526a3f0859"
              }}
              style={styles.ImageBackground_I0_69_0_1672}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8b/fcf4/becb92b701b81cb0c278e4526a3f0859"
              }}
              style={styles.ImageBackground_I0_69_0_1673}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccad/4311/83426dbe6d8aa41ad594b0dfe7d43fe5"
              }}
              style={styles.ImageBackground_I0_69_0_1674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8b/fcf4/becb92b701b81cb0c278e4526a3f0859"
              }}
              style={styles.ImageBackground_I0_69_0_1675}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8b/fcf4/becb92b701b81cb0c278e4526a3f0859"
              }}
              style={styles.ImageBackground_I0_69_0_1676}
            />
          </View>
          <View style={styles.View_I0_69_0_1677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae1/8ab6/84fd2e6110a69d041608e693852dda9b"
              }}
              style={styles.ImageBackground_I0_69_0_1678}
            />
            <View style={styles.View_I0_69_0_1679}>
              <Text style={styles.Text_I0_69_0_1679}>0</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1680}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40aa/81d1/fee7780659fb8163f7e6f2b83e39eda0"
              }}
              style={styles.ImageBackground_I0_69_0_1681}
            />
            <View style={styles.View_I0_69_0_1682}>
              <Text style={styles.Text_I0_69_0_1682}>WXYZ</Text>
            </View>
            <View style={styles.View_I0_69_0_1683}>
              <Text style={styles.Text_I0_69_0_1683}>9</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1684}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40aa/81d1/fee7780659fb8163f7e6f2b83e39eda0"
              }}
              style={styles.ImageBackground_I0_69_0_1685}
            />
            <View style={styles.View_I0_69_0_1686}>
              <Text style={styles.Text_I0_69_0_1686}>TUV</Text>
            </View>
            <View style={styles.View_I0_69_0_1687}>
              <Text style={styles.Text_I0_69_0_1687}>8</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1688}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40aa/81d1/fee7780659fb8163f7e6f2b83e39eda0"
              }}
              style={styles.ImageBackground_I0_69_0_1689}
            />
            <View style={styles.View_I0_69_0_1690}>
              <Text style={styles.Text_I0_69_0_1690}>PQRS</Text>
            </View>
            <View style={styles.View_I0_69_0_1691}>
              <Text style={styles.Text_I0_69_0_1691}>7</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1692}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40aa/81d1/fee7780659fb8163f7e6f2b83e39eda0"
              }}
              style={styles.ImageBackground_I0_69_0_1693}
            />
            <View style={styles.View_I0_69_0_1694}>
              <Text style={styles.Text_I0_69_0_1694}>MNO</Text>
            </View>
            <View style={styles.View_I0_69_0_1695}>
              <Text style={styles.Text_I0_69_0_1695}>6</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1696}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40aa/81d1/fee7780659fb8163f7e6f2b83e39eda0"
              }}
              style={styles.ImageBackground_I0_69_0_1697}
            />
            <View style={styles.View_I0_69_0_1698}>
              <Text style={styles.Text_I0_69_0_1698}>JKL</Text>
            </View>
            <View style={styles.View_I0_69_0_1699}>
              <Text style={styles.Text_I0_69_0_1699}>5</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1700}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40aa/81d1/fee7780659fb8163f7e6f2b83e39eda0"
              }}
              style={styles.ImageBackground_I0_69_0_1701}
            />
            <View style={styles.View_I0_69_0_1702}>
              <Text style={styles.Text_I0_69_0_1702}>GHI</Text>
            </View>
            <View style={styles.View_I0_69_0_1703}>
              <Text style={styles.Text_I0_69_0_1703}>4</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1704}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae1/8ab6/84fd2e6110a69d041608e693852dda9b"
              }}
              style={styles.ImageBackground_I0_69_0_1705}
            />
            <View style={styles.View_I0_69_0_1706}>
              <Text style={styles.Text_I0_69_0_1706}>DEF</Text>
            </View>
            <View style={styles.View_I0_69_0_1707}>
              <Text style={styles.Text_I0_69_0_1707}>3</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1708}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae1/8ab6/84fd2e6110a69d041608e693852dda9b"
              }}
              style={styles.ImageBackground_I0_69_0_1709}
            />
            <View style={styles.View_I0_69_0_1710}>
              <Text style={styles.Text_I0_69_0_1710}>ABC</Text>
            </View>
            <View style={styles.View_I0_69_0_1711}>
              <Text style={styles.Text_I0_69_0_1711}>2</Text>
            </View>
          </View>
          <View style={styles.View_I0_69_0_1712}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae1/8ab6/84fd2e6110a69d041608e693852dda9b"
              }}
              style={styles.ImageBackground_I0_69_0_1713}
            />
            <View style={styles.View_I0_69_0_1714}>
              <Text style={styles.Text_I0_69_0_1714}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_70}>
        <View style={styles.View_I0_70_0_1576}>
          <View style={styles.View_I0_70_0_1577}>
            <View style={styles.View_I0_70_0_1578} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b123/a151/b1907580fa397483f94b871242a335e0"
              }}
              style={styles.ImageBackground_I0_70_0_1579}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_71}>
        <Text style={styles.Text_0_71}>Transfer</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_2_1417: {
    width: 369.0000305175781,
    height: 763,
    top: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.000030517578125
  },
  View_0_61: {
    width: 324,
    minWidth: 324,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 482,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_61_0_1241: {
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
  View_I0_61_0_1242: {
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
  View_I0_61_0_1243: {
    width: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 22
  },
  Text_I0_61_0_1243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_62: {
    width: 323,
    minWidth: 323,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 210,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_63: {
    width: 323,
    height: 1,
    top: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_64: {
    width: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0
  },
  Text_0_64: {
    color: "rgba(159, 165, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_67: {
    width: 15.02734375,
    height: 20.141597747802734,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3
  },
  View_0_68: {
    width: 40,
    minWidth: 40,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    top: 812
  },
  Text_0_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_69: {
    width: 399,
    minWidth: 399,
    height: 309,
    minHeight: 309,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 587,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_69_0_1646: {
    flexGrow: 1,
    width: 399,
    height: 309,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_69_0_1647: {
    width: 399,
    height: 309,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(210, 213, 219, 1)",
    opacity: 0.8999999761581421,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_69_0_1648: {
    width: 399,
    height: 36.103092193603516,
    top: 272.89697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_69_0_1648_0_1769: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 22,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_69_0_1656: {
    width: 15.960005760192871,
    height: 26.54362678527832,
    top: 255.909912109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 351.1199951171875
  },
  ImageBackground_I0_69_0_1651: {
    width: 15.960005760192871,
    height: 15.573884010314941,
    top: 10.9697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_69_0_1655: {
    width: 9.583870887756348,
    height: 19.1070499420166,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.191925048828125
  },
  ImageBackground_I0_69_0_1657: {
    width: 6.036538124084473,
    height: 15.573897361755371,
    top: 1.7705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.96478271484375
  },
  View_I0_69_0_1665: {
    width: 15.960005760192871,
    height: 26.54362678527832,
    top: 255.909912109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 351.1199951171875
  },
  ImageBackground_I0_69_0_1660: {
    width: 15.960005760192871,
    height: 15.573884010314941,
    top: 10.9697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_69_0_1664: {
    width: 9.583870887756348,
    height: 19.1070499420166,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.191925048828125
  },
  ImageBackground_I0_69_0_1666: {
    width: 6.036538124084473,
    height: 15.573897361755371,
    top: 1.7705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.96478271484375
  },
  View_I0_69_0_1671: {
    width: 24.065214157104492,
    height: 19.113401412963867,
    top: 191.134033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 321.2027893066406
  },
  ImageBackground_I0_69_0_1669: {
    width: 24.065214157104492,
    height: 19.1134033203125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_69_0_1670: {
    width: 7.516423225402832,
    height: 7.503235340118408,
    top: 5.7978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.7020263671875
  },
  ImageBackground_I0_69_0_1672: {
    width: 1.268510341644287,
    height: 1.267365574836731,
    top: 5.607666015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.12701416015625
  },
  ImageBackground_I0_69_0_1673: {
    width: 1.268510341644287,
    height: 1.267365574836731,
    top: 12.2041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.51123046875
  },
  ImageBackground_I0_69_0_1674: {
    width: 7.523298263549805,
    height: 7.493433952331543,
    top: 5.802734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.69317626953125
  },
  ImageBackground_I0_69_0_1675: {
    width: 1.2669785022735596,
    height: 1.2658692598342896,
    top: 12.206787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.139068603515625
  },
  ImageBackground_I0_69_0_1676: {
    width: 1.2669785022735596,
    height: 1.2658692598342896,
    top: 5.610107421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.523284912109375
  },
  View_I0_69_0_1677: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 48.845359802246094,
    minHeight: 48.845359802246094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137.25599670410156,
    top: 177.329833984375
  },
  ImageBackground_I0_69_0_1678: {
    width: 124.48799896240234,
    height: 48.845359802246094,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1679: {
    width: 124.48799896240234,
    top: 8.494873046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1679: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1680: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 49.9072151184082,
    minHeight: 49.9072151184082,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268.12799072265625,
    top: 119.98974609375
  },
  ImageBackground_I0_69_0_1681: {
    width: 124.48799896240234,
    height: 49.9072151184082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1682: {
    width: 124.48799896240234,
    top: 31.855712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1682: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1683: {
    width: 124.48799896240234,
    top: 1.5927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1683: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1684: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 49.9072151184082,
    minHeight: 49.9072151184082,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137.25599670410156,
    top: 119.98974609375
  },
  ImageBackground_I0_69_0_1685: {
    width: 124.48799896240234,
    height: 49.9072151184082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1686: {
    width: 124.48799896240234,
    top: 31.855712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1686: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1687: {
    width: 124.48799896240234,
    top: 1.5927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1687: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1688: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 49.9072151184082,
    minHeight: 49.9072151184082,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.383998870849609,
    top: 119.98974609375
  },
  ImageBackground_I0_69_0_1689: {
    width: 124.48799896240234,
    height: 49.9072151184082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1690: {
    width: 124.48799896240234,
    top: 31.855712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1690: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1691: {
    width: 124.48799896240234,
    top: 1.5927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1691: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1692: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 49.9072151184082,
    minHeight: 49.9072151184082,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268.12799072265625,
    top: 62.6494140625
  },
  ImageBackground_I0_69_0_1693: {
    width: 124.48799896240234,
    height: 49.9072151184082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1694: {
    width: 124.48799896240234,
    top: 31.855712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1694: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1695: {
    width: 124.48799896240234,
    top: 1.5927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1695: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1696: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 49.9072151184082,
    minHeight: 49.9072151184082,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137.25599670410156,
    top: 62.6494140625
  },
  ImageBackground_I0_69_0_1697: {
    width: 124.48799896240234,
    height: 49.9072151184082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1698: {
    width: 124.48799896240234,
    top: 31.855712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1698: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1699: {
    width: 124.48799896240234,
    top: 1.5927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1699: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1700: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 49.9072151184082,
    minHeight: 49.9072151184082,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.383998870849609,
    top: 62.6494140625
  },
  ImageBackground_I0_69_0_1701: {
    width: 124.48799896240234,
    height: 49.9072151184082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1702: {
    width: 124.48799896240234,
    top: 31.855712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1702: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1703: {
    width: 124.48799896240234,
    top: 1.5927734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1703: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1704: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 48.845359802246094,
    minHeight: 48.845359802246094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268.12799072265625,
    top: 6.37109375
  },
  ImageBackground_I0_69_0_1705: {
    width: 124.48799896240234,
    height: 48.845359802246094,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1706: {
    width: 124.48799896240234,
    top: 30.793701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1706: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1707: {
    width: 124.48799896240234,
    top: 1.061767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1707: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1708: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 48.845359802246094,
    minHeight: 48.845359802246094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137.25599670410156,
    top: 6.37109375
  },
  ImageBackground_I0_69_0_1709: {
    width: 124.48799896240234,
    height: 48.845359802246094,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1710: {
    width: 124.48799896240234,
    top: 30.793701171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1710: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I0_69_0_1711: {
    width: 124.48799896240234,
    top: 1.061767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1711: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I0_69_0_1712: {
    width: 124.48799896240234,
    minWidth: 124.48799896240234,
    height: 48.845359802246094,
    minHeight: 48.845359802246094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.383998870849609,
    top: 6.37109375
  },
  ImageBackground_I0_69_0_1713: {
    width: 124.48799896240234,
    height: 48.845359802246094,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_69_0_1714: {
    width: 124.48799896240234,
    top: 1.061767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I0_69_0_1714: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_0_70: {
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
  View_I0_70_0_1576: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_70_0_1577: {
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
  View_I0_70_0_1578: {
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
  ImageBackground_I0_70_0_1579: {
    width: 16,
    height: 10,
    top: 17.48046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.25
  },
  View_0_71: {
    width: 98,
    minWidth: 98,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 158,
    top: 67
  },
  Text_0_71: {
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
