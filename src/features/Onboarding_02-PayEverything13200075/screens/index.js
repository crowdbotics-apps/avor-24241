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
      <View style={styles.View_0_347}>
        <Text style={styles.Text_0_347}>Pay everything</Text>
      </View>
      <View style={styles.View_0_348}>
        <Text style={styles.Text_0_348}>
          A Discount Toner Cartridge Is Better Than Ever lipsum
        </Text>
      </View>
      <View style={styles.View_0_349}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9670/629a/59fec79ed7bc233582c7811e3ddc2d4b"
          }}
          style={styles.ImageBackground_I0_349_0_1226}
        />
      </View>
      <View style={styles.View_0_350}>
        <View style={styles.View_I0_350_0_1212}>
          <View style={styles.View_I0_350_0_1213} />
          <View style={styles.View_I0_350_0_1214}>
            <Text style={styles.Text_I0_350_0_1214}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_351}>
        <View style={styles.View_I0_351_0_1208}>
          <View style={styles.View_I0_351_0_1209} />
          <View style={styles.View_I0_351_0_1210}>
            <Text style={styles.Text_I0_351_0_1210}>Next</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_352}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f0f/aa3c/ccafc1a426ac68ea216dea5ef3cd8851"
          }}
          style={styles.ImageBackground_0_353}
        />
        <View style={styles.View_0_354}>
          <View style={styles.View_0_355}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa0/49c1/03bd8e7b98b9ce1b05d8280f59f1c320"
              }}
              style={styles.ImageBackground_0_357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54a5/4ba5/7cc933ca01e5115803c4c8aa39b3d014"
              }}
              style={styles.ImageBackground_0_356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcd8/2254/c8c18a3f3acb44ca9336c777178e89f8"
              }}
              style={styles.ImageBackground_0_358}
            />
            <View style={styles.View_0_365}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36f5/4587/444644dd1af4e627b69f9e3f75368ba8"
                }}
                style={styles.ImageBackground_0_367}
              />
              <View source={{ uri: "null" }} style={styles.View_0_369} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36f5/4587/444644dd1af4e627b69f9e3f75368ba8"
                }}
                style={styles.ImageBackground_0_370}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3be/e36a/6047913cbcc214a5295fb383fddfc4fe"
                }}
                style={styles.ImageBackground_0_368}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fb1/c5f7/db3018f2a2e7da29a247c1adc7dcc664"
                }}
                style={styles.ImageBackground_0_371}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fb1/c5f7/db3018f2a2e7da29a247c1adc7dcc664"
                }}
                style={styles.ImageBackground_0_372}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fb1/c5f7/db3018f2a2e7da29a247c1adc7dcc664"
                }}
                style={styles.ImageBackground_0_373}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0abf/492d/d6a068ecef575d7c37633570649ef862"
                }}
                style={styles.ImageBackground_0_374}
              />
            </View>
            <View style={styles.View_0_375}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f3/fc71/a2aab72777ca45bb9c940eabfb774a35"
                }}
                style={styles.ImageBackground_0_377}
              />
              <View source={{ uri: "null" }} style={styles.View_0_379} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f3/fc71/a2aab72777ca45bb9c940eabfb774a35"
                }}
                style={styles.ImageBackground_0_380}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad5d/bce2/6b2b913916aa65ceee53f7a7d0a521bf"
                }}
                style={styles.ImageBackground_0_378}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6744/1239/f2805becc3c976ca98c29fe644f60bd9"
                }}
                style={styles.ImageBackground_0_381}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6744/1239/f2805becc3c976ca98c29fe644f60bd9"
                }}
                style={styles.ImageBackground_0_382}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6744/1239/f2805becc3c976ca98c29fe644f60bd9"
                }}
                style={styles.ImageBackground_0_383}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0e/ebc7/e9d62db842c0154197c7fcaba09681f1"
                }}
                style={styles.ImageBackground_0_384}
              />
            </View>
            <View style={styles.View_0_385}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f3/fc71/a2aab72777ca45bb9c940eabfb774a35"
                }}
                style={styles.ImageBackground_0_387}
              />
              <View source={{ uri: "null" }} style={styles.View_0_389} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c734/83fc/9f476c6579f0c62c305e595aaba80eed"
                }}
                style={styles.ImageBackground_0_390}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e7f/6195/b9a72d3f499de5a64617237ffc5940d3"
                }}
                style={styles.ImageBackground_0_388}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6744/1239/f2805becc3c976ca98c29fe644f60bd9"
                }}
                style={styles.ImageBackground_0_391}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6744/1239/f2805becc3c976ca98c29fe644f60bd9"
                }}
                style={styles.ImageBackground_0_392}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6744/1239/f2805becc3c976ca98c29fe644f60bd9"
                }}
                style={styles.ImageBackground_0_393}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0e/ebc7/e9d62db842c0154197c7fcaba09681f1"
                }}
                style={styles.ImageBackground_0_394}
              />
            </View>
          </View>
          <View style={styles.View_0_395} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2805/5d87/12b92e9420c5f1fbbb5962bd0bc8781f"
            }}
            style={styles.ImageBackground_0_396}
          />
          <View style={styles.View_0_397} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/624e/e14d/15adf5da7f873640d117f90be803c99a"
            }}
            style={styles.ImageBackground_0_398}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5897/1ea1/badc202cb99066ec971876940aa419f9"
            }}
            style={styles.ImageBackground_0_399}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d8b/abe6/e4e04e3de17fdc1b94d2a55bb4093df5"
            }}
            style={styles.ImageBackground_0_400}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edda/4fda/5fc201062cda4b96ede6e046f94e2a28"
            }}
            style={styles.ImageBackground_0_401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d34f/660b/e30a074e52c163e3224ee2642ec2e814"
            }}
            style={styles.ImageBackground_0_402}
          />
          <View style={styles.View_0_403} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5426/a8e0/171d0a8fb8707bd75034ed1767000012"
            }}
            style={styles.ImageBackground_0_404}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de78/ba23/b2c22092ab28c03c5bfbb875c0c18202"
            }}
            style={styles.ImageBackground_0_405}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60a/a8f0/84081850e8039a42f7510a1d03c9a221"
            }}
            style={styles.ImageBackground_0_406}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba8/3e86/32b96e81c4fd3f4029897a097f7caf22"
            }}
            style={styles.ImageBackground_0_407}
          />
          <View style={styles.View_0_408} />
          <View style={styles.View_0_409} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_347: {
    width: 237,
    minWidth: 237,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88,
    top: 539
  },
  Text_0_347: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_348: {
    width: 279,
    minWidth: 279,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 68,
    top: 598
  },
  Text_0_348: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_349: {
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
  ImageBackground_I0_349_0_1226: {
    flexGrow: 1,
    width: 48,
    height: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_350: {
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
  View_I0_350_0_1212: {
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
  View_I0_350_0_1213: {
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
  View_I0_350_0_1214: {
    width: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 16
  },
  Text_I0_350_0_1214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_351: {
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
  View_I0_351_0_1208: {
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
  View_I0_351_0_1209: {
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
  View_I0_351_0_1210: {
    width: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 16
  },
  Text_I0_351_0_1210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_352: {
    width: 1454,
    minWidth: 1454,
    height: 345,
    minHeight: 345,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -520.000732421875,
    top: 61.9993896484375
  },
  ImageBackground_0_353: {
    width: 1453.8128662109375,
    minWidth: 1453.8128662109375,
    height: 342.68121337890625,
    minHeight: 342.68121337890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_354: {
    width: 255,
    minWidth: 255,
    height: 227,
    minHeight: 227,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 601.0007934570312,
    top: 117.0006103515625
  },
  View_0_355: {
    width: 255,
    minWidth: 255,
    height: 167,
    minHeight: 167,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60
  },
  ImageBackground_0_357: {
    width: 254.6283721923828,
    minWidth: 254.6283721923828,
    height: 166.5104217529297,
    minHeight: 166.5104217529297,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_356: {
    width: 254.6283721923828,
    minWidth: 254.6283721923828,
    height: 166.5104217529297,
    minHeight: 166.5104217529297,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_358: {
    width: 254.6283721923828,
    minWidth: 254.6283721923828,
    height: 166.5104217529297,
    minHeight: 166.5104217529297,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_365: {
    width: 44,
    minWidth: 44,
    height: 94,
    minHeight: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 67
  },
  ImageBackground_0_367: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6019287109375,
    top: 0
  },
  View_0_369: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -56,
    top: 0
  },
  ImageBackground_0_370: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6019287109375,
    top: 0
  },
  ImageBackground_0_368: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6019287109375,
    top: 0
  },
  ImageBackground_0_371: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6019287109375,
    top: 0
  },
  ImageBackground_0_372: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.50897216796875,
    top: -1
  },
  ImageBackground_0_373: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.50897216796875,
    top: -3
  },
  ImageBackground_0_374: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.50897216796875,
    top: 0
  },
  View_0_375: {
    width: 44,
    minWidth: 44,
    height: 94,
    minHeight: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 67
  },
  ImageBackground_0_377: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_379: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_380: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_378: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_381: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_382: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: -1
  },
  ImageBackground_0_383: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: -3
  },
  ImageBackground_0_384: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 0
  },
  View_0_385: {
    width: 44,
    minWidth: 44,
    height: 94,
    minHeight: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 67
  },
  ImageBackground_0_387: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 93.41535186767578,
    minHeight: 93.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_389: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_390: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 113.41535186767578,
    minHeight: 113.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_388: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 113.41535186767578,
    minHeight: 113.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_391: {
    width: 43.398094177246094,
    minWidth: 43.398094177246094,
    height: 113.41535186767578,
    minHeight: 113.41535186767578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_0_392: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: -1
  },
  ImageBackground_0_393: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: -3
  },
  ImageBackground_0_394: {
    width: 7.491048336029053,
    minWidth: 7.491048336029053,
    height: 25.60840606689453,
    minHeight: 25.60840606689453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 0
  },
  View_0_395: {
    width: 110,
    minWidth: 110,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 96,
    backgroundColor: "rgba(108, 117, 252, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_396: {
    width: 93,
    minWidth: 93,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 100
  },
  View_0_397: {
    width: 74,
    minWidth: 74,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 119,
    backgroundColor: "rgba(108, 117, 252, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_398: {
    width: 79.84585571289062,
    minWidth: 79.84585571289062,
    height: 127,
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90.07635498046875,
    top: 0
  },
  ImageBackground_0_399: {
    width: 26,
    minWidth: 26,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118,
    top: 31
  },
  ImageBackground_0_400: {
    width: 5,
    minWidth: 5,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 122
  },
  ImageBackground_0_401: {
    width: 10.781725883483887,
    minWidth: 10.781725883483887,
    height: 7.663702011108398,
    minHeight: 7.663702011108398,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 41
  },
  ImageBackground_0_402: {
    width: 37.475250244140625,
    minWidth: 37.475250244140625,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111,
    top: 72
  },
  View_0_403: {
    width: 22,
    minWidth: 22,
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    backgroundColor: "rgba(108, 117, 252, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_404: {
    width: 54.56770706176758,
    minWidth: 54.56770706176758,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162.46832275390625,
    top: 20
  },
  ImageBackground_0_405: {
    width: 53.33477020263672,
    minWidth: 53.33477020263672,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172.33258056640625,
    top: 31
  },
  ImageBackground_0_406: {
    width: 53.90916061401367,
    minWidth: 53.90916061401367,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.70782470703125,
    top: 56
  },
  ImageBackground_0_407: {
    width: 12.380439758300781,
    minWidth: 12.380439758300781,
    height: 13.251116752624512,
    minHeight: 13.251116752624512,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51.30975341796875,
    top: 63.3743896484375
  },
  View_0_408: {
    width: 11,
    minWidth: 11,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 66,
    backgroundColor: "rgba(255, 193, 160, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_409: {
    width: 24,
    minWidth: 24,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 72,
    backgroundColor: "rgba(255, 193, 160, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
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
