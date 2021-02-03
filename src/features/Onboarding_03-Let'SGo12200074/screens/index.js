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
      <View style={styles.View_0_298}>
        <Text style={styles.Text_0_298}>Let’s go</Text>
      </View>
      <View style={styles.View_0_299}>
        <Text style={styles.Text_0_299}>
          A Discount Toner Cartridge Is Better Than Ever lipsum
        </Text>
      </View>
      <View style={styles.View_0_300}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e1/8a66/215ed84cf5eedfde799cba982fdcbaf6"
          }}
          style={styles.ImageBackground_I0_300_0_1221}
        />
      </View>
      <View style={styles.View_0_301}>
        <View style={styles.View_I0_301_0_1208}>
          <View style={styles.View_I0_301_0_1209} />
          <View style={styles.View_I0_301_0_1210}>
            <Text style={styles.Text_I0_301_0_1210}>Next</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_302}>
        <View style={styles.View_I0_302_0_1212}>
          <View style={styles.View_I0_302_0_1213} />
          <View style={styles.View_I0_302_0_1214}>
            <Text style={styles.Text_I0_302_0_1214}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_303}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cac/a441/6fcbbe711c88afe24f670e9e415f9767"
          }}
          style={styles.ImageBackground_0_304}
        />
        <View style={styles.View_0_305}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b0a/d0a5/3f8fb00ee890d651a272759d6317a258"
            }}
            style={styles.ImageBackground_0_306}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fbf/ace5/af2f95b41167f55d95658725c96f1fba"
            }}
            style={styles.ImageBackground_0_310}
          />
          <View style={styles.View_0_311}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0572/585d/98a18178175934acff7e1d61149f7d28"
              }}
              style={styles.ImageBackground_0_312}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ef1/a147/904e5f07abb957bf5f574e9c73975002"
              }}
              style={styles.ImageBackground_0_316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2fb/69a2/cd1c9a57de4b5e0504b4b19e338d679d"
              }}
              style={styles.ImageBackground_0_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9238/6c17/f7c808dd3f41ef369a41fc69600ae8ab"
              }}
              style={styles.ImageBackground_0_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f611/4028/0cac6206190b4b4b13a712882ef95be6"
              }}
              style={styles.ImageBackground_0_323}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da13/93e7/3474dac5511e750e89c5735459783686"
            }}
            style={styles.ImageBackground_0_324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf1d/9a4a/e63bd96d9c175e9b2298d7f26181d84f"
            }}
            style={styles.ImageBackground_0_325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afdd/968e/42097e1cd059961c47abef03aacae57c"
            }}
            style={styles.ImageBackground_0_326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69d8/6e80/409f53e44640b0b13191267c8be3800b"
            }}
            style={styles.ImageBackground_0_327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3de8/4397/1d9d57136efe1295b481424923d9c7dd"
            }}
            style={styles.ImageBackground_0_331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8443/15da/04854fcbb4a40289ecd496200f3d3ac1"
            }}
            style={styles.ImageBackground_0_332}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68ae/b74b/061d537c4166869798b5fdbaba957be3"
            }}
            style={styles.ImageBackground_0_333}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b3d/4de3/4e9a4160c15cdce758b4a5e20c8f6f7d"
            }}
            style={styles.ImageBackground_0_337}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2bb/343e/74c3707fb48128585ed9a43aae70b26a"
            }}
            style={styles.ImageBackground_0_338}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7db6/25c2/55d4def5ec39873f2881574a8741c37f"
            }}
            style={styles.ImageBackground_0_339}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/640e/04d8/2f87a4f8064c9211575187f0652bf2a1"
            }}
            style={styles.ImageBackground_0_340}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3832/6b6d/7d261d382c88da7b65054891c798d0a4"
            }}
            style={styles.ImageBackground_0_341}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3832/6b6d/7d261d382c88da7b65054891c798d0a4"
            }}
            style={styles.ImageBackground_0_342}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3832/6b6d/7d261d382c88da7b65054891c798d0a4"
            }}
            style={styles.ImageBackground_0_343}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3832/6b6d/7d261d382c88da7b65054891c798d0a4"
            }}
            style={styles.ImageBackground_0_344}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3832/6b6d/7d261d382c88da7b65054891c798d0a4"
            }}
            style={styles.ImageBackground_0_345}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_298: {
    width: 123,
    minWidth: 123,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 145,
    top: 539
  },
  Text_0_298: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_299: {
    width: 279,
    minWidth: 279,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68,
    top: 598
  },
  Text_0_299: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_300: {
    width: 48,
    minWidth: 48,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 183,
    top: 838,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_300_0_1221: {
    flexGrow: 1,
    width: 48,
    height: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_301: {
    width: 100,
    minWidth: 100,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 817,
    backgroundColor: "rgba(52, 62, 223, 1)"
  },
  View_I0_301_0_1208: {
    flexGrow: 1,
    width: 100,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_301_0_1209: {
    width: 100,
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
  View_I0_301_0_1210: {
    width: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 16
  },
  Text_I0_301_0_1210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_302: {
    width: 100,
    minWidth: 100,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 817,
    backgroundColor: "rgba(255, 110, 31, 1)"
  },
  View_I0_302_0_1212: {
    flexGrow: 1,
    width: 100,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_302_0_1213: {
    width: 100,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 110, 31, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_302_0_1214: {
    width: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 16
  },
  Text_I0_302_0_1214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_303: {
    width: 1459,
    minWidth: 1459,
    height: 343,
    minHeight: 343,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1146,
    top: 61.7779541015625
  },
  ImageBackground_0_304: {
    width: 1453.8197021484375,
    minWidth: 1453.8197021484375,
    height: 342.66351318359375,
    minHeight: 342.66351318359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.000732421875,
    top: 0.239013671875
  },
  View_0_305: {
    width: 194,
    minWidth: 194,
    height: 188,
    minHeight: 188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1265,
    top: 83
  },
  ImageBackground_0_306: {
    width: 64,
    minWidth: 64,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120.91650390625,
    top: 51.992919921875
  },
  ImageBackground_0_310: {
    width: 56.87382125854492,
    minWidth: 56.87382125854492,
    height: 69.14724731445312,
    minHeight: 69.14724731445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.60479736328125,
    top: 39.254638671875
  },
  View_0_311: {
    width: 128,
    minWidth: 128,
    height: 147,
    minHeight: 147,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.323577880859375,
    top: 0.93017578125
  },
  ImageBackground_0_312: {
    width: 89,
    minWidth: 89,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.001953125,
    top: 0.7230224609375
  },
  ImageBackground_0_316: {
    width: 84,
    minWidth: 84,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.11004638671875,
    top: 26.560546875
  },
  ImageBackground_0_322: {
    width: 56.995208740234375,
    minWidth: 56.995208740234375,
    height: 57.990440368652344,
    minHeight: 57.990440368652344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 89
  },
  ImageBackground_0_321: {
    width: 56.995208740234375,
    minWidth: 56.995208740234375,
    height: 57.990440368652344,
    minHeight: 57.990440368652344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 89
  },
  ImageBackground_0_323: {
    width: 56.995208740234375,
    minWidth: 56.995208740234375,
    height: 57.990440368652344,
    minHeight: 57.990440368652344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 89
  },
  ImageBackground_0_324: {
    width: 38.38930130004883,
    minWidth: 38.38930130004883,
    height: 26.75602912902832,
    minHeight: 26.75602912902832,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131.21035766601562,
    top: 134.1446533203125
  },
  ImageBackground_0_325: {
    width: 31,
    minWidth: 31,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136,
    top: 140.2220458984375
  },
  ImageBackground_0_326: {
    width: 34.49884033203125,
    minWidth: 34.49884033203125,
    height: 19.95517921447754,
    minHeight: 19.95517921447754,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 102.647216796875,
    top: 11.3367919921875
  },
  ImageBackground_0_327: {
    width: 35,
    minWidth: 35,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95.19140625,
    top: 11.8839111328125
  },
  ImageBackground_0_331: {
    width: 46.27667236328125,
    minWidth: 46.27667236328125,
    height: 18.721872329711914,
    minHeight: 18.721872329711914,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68.46478271484375,
    top: 0.9259033203125
  },
  ImageBackground_0_332: {
    width: 30.37763023376465,
    minWidth: 30.37763023376465,
    height: 22.247404098510742,
    minHeight: 22.247404098510742,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101.68338012695312,
    top: 0
  },
  ImageBackground_0_333: {
    width: 58,
    minWidth: 58,
    height: 59,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50.904327392578125,
    top: 84.0836181640625
  },
  ImageBackground_0_337: {
    width: 36.79956817626953,
    minWidth: 36.79956817626953,
    height: 14.341879844665527,
    minHeight: 14.341879844665527,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66.24923706054688,
    top: 135.4122314453125
  },
  ImageBackground_0_338: {
    width: 193.75271606445312,
    minWidth: 193.75271606445312,
    height: 49.05298614501953,
    minHeight: 49.05298614501953,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 138.8975830078125
  },
  ImageBackground_0_339: {
    width: 14,
    minWidth: 14,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 143,
    top: 157.2220458984375
  },
  ImageBackground_0_340: {
    width: 14,
    minWidth: 14,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136,
    top: 157.2220458984375
  },
  ImageBackground_0_341: {
    width: 19,
    minWidth: 19,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 166.2220458984375
  },
  ImageBackground_0_342: {
    width: 19,
    minWidth: 19,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 172.2220458984375
  },
  ImageBackground_0_343: {
    width: 19,
    minWidth: 19,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 175.2220458984375
  },
  ImageBackground_0_344: {
    width: 19,
    minWidth: 19,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 169.2220458984375
  },
  ImageBackground_0_345: {
    width: 19,
    minWidth: 19,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 169.2220458984375
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
