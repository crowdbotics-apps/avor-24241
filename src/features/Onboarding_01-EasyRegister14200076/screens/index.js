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
      <View style={styles.View_0_411}>
        <Text style={styles.Text_0_411}>Easy Register</Text>
      </View>
      <View style={styles.View_0_412}>
        <Text style={styles.Text_0_412}>
          A Discount Toner Cartridge Is Better Than Ever lipsum
        </Text>
      </View>
      <View style={styles.View_0_413}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b97/0814/215b17847736807b435ed4881b5059c6"
          }}
          style={styles.ImageBackground_I0_413_0_1203}
        />
      </View>
      <View style={styles.View_0_414}>
        <View style={styles.View_I0_414_0_1208}>
          <View style={styles.View_I0_414_0_1209} />
          <View style={styles.View_I0_414_0_1210}>
            <Text style={styles.Text_I0_414_0_1210}>Next</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_415}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b974/694d/be7b2d7e41ad763a9e8fc2f054676bfa"
          }}
          style={styles.ImageBackground_0_416}
        />
        <View style={styles.View_0_417}>
          <View style={styles.View_0_431} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78d5/2d2c/7a246eac16ad1de499f72a7a61337acf"
            }}
            style={styles.ImageBackground_0_432}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b460/2520/0135ca53e91f24612d7ba1b423f285b2"
            }}
            style={styles.ImageBackground_0_439}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d6e/931f/ae1ce2b596d12245de466c0512d07335"
            }}
            style={styles.ImageBackground_0_440}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4cd/3e2b/2ce7c96422b457b924a0d6cfa286eee9"
            }}
            style={styles.ImageBackground_0_441}
          />
          <View style={styles.View_0_445}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c1a/c3ff/32a2d05a20e207946267f20812e88608"
              }}
              style={styles.ImageBackground_0_446}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/415b/ec77/f18607f42a53b26536cd152a4df9b6e1"
              }}
              style={styles.ImageBackground_0_447}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dc3/11ca/a3b4881fc8397fa44093085d997643ff"
              }}
              style={styles.ImageBackground_0_452}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/935a/5491/af2bf97f781af2e21bc9f882a5594cbd"
            }}
            style={styles.ImageBackground_0_453}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/397a/18e1/369974346022c275655979103d5972ce"
            }}
            style={styles.ImageBackground_0_457}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d95a/1f9c/b5e787fae2faa21cada9dd2dabb9e3d3"
            }}
            style={styles.ImageBackground_0_461}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bf8/fd32/ca9bfae0f45ca47f842d3fce380dce4d"
            }}
            style={styles.ImageBackground_0_462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6556/0610/ab4534ee08dd2216b2bf5c488b442d38"
            }}
            style={styles.ImageBackground_0_463}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6512/b76f/86c50ee44a81520c476dc2883266cecb"
            }}
            style={styles.ImageBackground_0_468}
          />
          <View style={styles.View_0_472}>
            <View style={styles.View_0_474} />
            <View style={styles.View_0_473} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d25/2d39/cf91e2f481e8fc0e3e5147040ad8640c"
              }}
              style={styles.ImageBackground_0_475}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e857/e173/6bf0c6bc789bdfa95ee76d0b8019259c"
            }}
            style={styles.ImageBackground_0_476}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e20/7303/231adbde58371db9e00d507fd611c4dc"
            }}
            style={styles.ImageBackground_0_477}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bf0/2354/565b507ad557865b51ec64170f451b35"
            }}
            style={styles.ImageBackground_0_478}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dafc/71f7/7a46a28f798736d21eb1b791f3257527"
            }}
            style={styles.ImageBackground_0_479}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f03/39c3/81a5e308fdb3ce465ca6716f35cfc753"
            }}
            style={styles.ImageBackground_0_483}
          />
        </View>
        <View style={styles.View_0_484}>
          <View style={styles.View_0_485} />
          <View style={styles.View_0_486}>
            <View style={styles.View_0_487}>
              <View style={styles.View_0_488} />
              <View style={styles.View_0_489} />
              <View style={styles.View_0_490} />
              <View style={styles.View_0_491} />
              <View style={styles.View_0_492} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_0_493}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
                }}
                style={styles.ImageBackground_0_494}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_495}>
          <View style={styles.View_0_496} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c7b/5f11/aaf3a6293191503f07f22ec59883f55a"
            }}
            style={styles.ImageBackground_0_497}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b7d/1dc3/2b6f3ffd4bbd9b52873a67cdb68f3ebb"
            }}
            style={styles.ImageBackground_0_498}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346b/01d8/576bc740946aa61562da336674d197c1"
            }}
            style={styles.ImageBackground_0_499}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a439/5b75/470309e91df3e21300d0a966917d2e5c"
            }}
            style={styles.ImageBackground_0_500}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_411: {
    width: 215,
    minWidth: 215,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 539
  },
  Text_0_411: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_412: {
    width: 279,
    minWidth: 279,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68,
    top: 598
  },
  Text_0_412: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_413: {
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
  ImageBackground_I0_413_0_1203: {
    flexGrow: 1,
    width: 48,
    height: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_414: {
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
  View_I0_414_0_1208: {
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
  View_I0_414_0_1209: {
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
  View_I0_414_0_1210: {
    width: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 16
  },
  Text_I0_414_0_1210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_415: {
    width: 1462,
    minWidth: 1462,
    height: 358,
    minHeight: 358,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 60
  },
  ImageBackground_0_416: {
    width: 1453.8338623046875,
    minWidth: 1453.8338623046875,
    height: 357.3367614746094,
    minHeight: 357.3367614746094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.978271484375,
    top: -0.0006103515625
  },
  View_0_417: {
    width: 264,
    minWidth: 264,
    height: 196,
    minHeight: 196,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 124
  },
  View_0_431: {
    width: 36,
    minWidth: 36,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 0
  },
  ImageBackground_0_432: {
    width: 194,
    minWidth: 194,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70,
    top: 13.948974609375
  },
  ImageBackground_0_439: {
    width: 17.911821365356445,
    minWidth: 17.911821365356445,
    height: 33.675228118896484,
    minHeight: 33.675228118896484,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222.138916015625,
    top: 144.0087890625
  },
  ImageBackground_0_440: {
    width: 28.145811080932617,
    minWidth: 28.145811080932617,
    height: 30.691404342651367,
    minHeight: 30.691404342651367,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 215.269775390625,
    top: 161.5751953125
  },
  ImageBackground_0_441: {
    width: 79,
    minWidth: 79,
    height: 59,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 167,
    top: 94.2908935546875
  },
  View_0_445: {
    width: 38,
    minWidth: 38,
    height: 83,
    minHeight: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 81.948974609375
  },
  ImageBackground_0_446: {
    width: 17.00067138671875,
    minWidth: 17.00067138671875,
    height: 31.44722557067871,
    minHeight: 31.44722557067871,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.6600341796875,
    top: 38.0955810546875
  },
  ImageBackground_0_447: {
    width: 38,
    minWidth: 38,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_452: {
    width: 31.297428131103516,
    minWidth: 31.297428131103516,
    height: 33.36479187011719,
    minHeight: 33.36479187011719,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.6807861328125,
    top: 49.29345703125
  },
  ImageBackground_0_453: {
    width: 24,
    minWidth: 24,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199.176025390625,
    top: 54.1729736328125
  },
  ImageBackground_0_457: {
    width: 30,
    minWidth: 30,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164.35693359375,
    top: 36.74755859375
  },
  ImageBackground_0_461: {
    width: 20.480852127075195,
    minWidth: 20.480852127075195,
    height: 8.332575798034668,
    minHeight: 8.332575798034668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186.9144287109375,
    top: 112.2493896484375
  },
  ImageBackground_0_462: {
    width: 6.6134161949157715,
    minWidth: 6.6134161949157715,
    height: 14.176538467407227,
    minHeight: 14.176538467407227,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187.2977294921875,
    top: 111.4620361328125
  },
  ImageBackground_0_463: {
    width: 61,
    minWidth: 61,
    height: 81,
    minHeight: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146.863525390625,
    top: 45.0185546875
  },
  ImageBackground_0_468: {
    width: 54,
    minWidth: 54,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146.863525390625,
    top: 62.3955078125
  },
  View_0_472: {
    width: 12,
    minWidth: 12,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 79.948974609375
  },
  View_0_474: {
    width: 10.30953598022461,
    minWidth: 10.30953598022461,
    height: 15.176493644714355,
    minHeight: 15.176493644714355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84521484375,
    top: 0.4117431640625,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_473: {
    width: 10.30953598022461,
    minWidth: 10.30953598022461,
    height: 15.176493644714355,
    minHeight: 15.176493644714355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84521484375,
    top: 0.4117431640625,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_475: {
    width: 10.30953598022461,
    minWidth: 10.30953598022461,
    height: 15.176493644714355,
    minHeight: 15.176493644714355,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84521484375,
    top: 0.4117431640625
  },
  ImageBackground_0_476: {
    width: 7.717785835266113,
    minWidth: 7.717785835266113,
    height: 4.877145767211914,
    minHeight: 4.877145767211914,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193.728271484375,
    top: 90.0762939453125
  },
  ImageBackground_0_477: {
    width: 14.095004081726074,
    minWidth: 14.095004081726074,
    height: 30.121578216552734,
    minHeight: 30.121578216552734,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175.42724609375,
    top: 6.85498046875
  },
  ImageBackground_0_478: {
    width: 23,
    minWidth: 23,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 165,
    top: 15.948974609375
  },
  ImageBackground_0_479: {
    width: 28,
    minWidth: 28,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152.989990234375,
    top: 6.3309326171875
  },
  ImageBackground_0_483: {
    width: 13.752702713012695,
    minWidth: 13.752702713012695,
    height: 25.755292892456055,
    minHeight: 25.755292892456055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163.91162109375,
    top: 38.1607666015625
  },
  View_0_484: {
    width: 42,
    minWidth: 42,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 86
  },
  View_0_485: {
    width: 42,
    minWidth: 42,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 21
  },
  View_0_486: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 4
  },
  View_0_487: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_488: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_489: {
    width: 7.4666666984558105,
    minWidth: 7.4666666984558105,
    height: 7.4666666984558105,
    minHeight: 7.4666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.111083984375,
    top: 8.177734375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_0_490: {
    width: 7.4666666984558105,
    minWidth: 7.4666666984558105,
    height: 7.4666666984558105,
    minHeight: 7.4666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 8.177734375,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_0_491: {
    width: 7.4666666984558105,
    minWidth: 7.4666666984558105,
    height: 7.4666666984558105,
    minHeight: 7.4666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.111083984375,
    top: 17.066650390625,
    backgroundColor: "rgba(194, 197, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  View_0_492: {
    width: 7.4666666984558105,
    minWidth: 7.4666666984558105,
    height: 7.4666666984558105,
    minHeight: 7.4666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 17.066650390625,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100
  },
  ImageBackground_0_493: {
    width: 1.4222222566604614,
    minWidth: 1.4222222566604614,
    height: 1.4222222566604614,
    minHeight: 1.4222222566604614,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.4000244140625,
    top: 15.6444091796875
  },
  ImageBackground_0_494: {
    width: 1.4222222566604614,
    minWidth: 1.4222222566604614,
    height: 1.4222222566604614,
    minHeight: 1.4222222566604614,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.111083984375,
    top: 15.6444091796875
  },
  View_0_495: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 145
  },
  View_0_496: {
    width: 26,
    minWidth: 26,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 0,
    backgroundColor: "rgba(255, 110, 31, 1)",
    borderColor: "rgba(255, 110, 31, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 21
  },
  ImageBackground_0_497: {
    width: 6,
    minWidth: 6,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 11
  },
  ImageBackground_0_498: {
    width: 4,
    minWidth: 4,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 29
  },
  ImageBackground_0_499: {
    width: 3,
    minWidth: 3,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 33
  },
  ImageBackground_0_500: {
    width: 2,
    minWidth: 2,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 36
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
