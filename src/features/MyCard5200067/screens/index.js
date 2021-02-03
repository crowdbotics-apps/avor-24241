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
      <View style={styles.View_0_117}>
        <View style={styles.View_I0_117_0_1581}>
          <View style={styles.View_I0_117_0_1582} />
          <View style={styles.View_I0_117_0_1583}>
            <Text style={styles.Text_I0_117_0_1583}>Add new card</Text>
          </View>
          <View style={styles.View_I0_117_0_1584} />
          <View style={styles.View_I0_117_0_1585}>
            <Text style={styles.Text_I0_117_0_1585}></Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_118}>
        <View style={styles.View_I0_118_0_1473}>
          <View style={styles.View_I0_118_0_1474}>
            <View style={styles.View_I0_118_0_1476} />
            <View style={styles.View_I0_118_0_1475} />
            <View style={styles.View_I0_118_2_990}>
              <View style={styles.View_I0_118_2_901} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de5/397d/c77da9ad4123bd305df759bbc96b3075"
                }}
                style={styles.ImageBackground_I0_118_0_1477}
              />
            </View>
            <View style={styles.View_I0_118_2_882}>
              <View style={styles.View_I0_118_2_851} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38fb/b349/5a907a5a99088de65f16a1ea94fe8508"
                }}
                style={styles.ImageBackground_I0_118_0_1478}
              />
            </View>
          </View>
          <View style={styles.View_I0_118_0_1482}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_118_0_1479}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_118_0_1480}
            />
            <View style={styles.View_I0_118_0_1481} />
          </View>
          <View style={styles.View_I0_118_0_1483}>
            <View style={styles.View_I0_118_0_1484}>
              <Text style={styles.Text_I0_118_0_1484}>Robert Downey, Jr.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_118_0_1485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_118_0_1490}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_118_0_1495}
            />
            <View style={styles.View_I0_118_0_1500}>
              <Text style={styles.Text_I0_118_0_1500}>2457</Text>
            </View>
          </View>
          <View style={styles.View_I0_118_0_1501}>
            <View style={styles.View_I0_118_0_1501_0_1465}>
              <View style={styles.View_I0_118_0_1501_0_1463} />
              <View style={styles.View_I0_118_0_1501_0_1464} />
              <View style={styles.View_I0_118_0_1501_0_1466} />
              <View style={styles.View_I0_118_0_1501_0_1467} />
              <View style={styles.View_I0_118_0_1501_0_1468} />
              <View style={styles.View_I0_118_0_1501_0_1469} />
              <View style={styles.View_I0_118_0_1501_0_1470} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79b3/601f/0995079d210c5939ffe369026ec3f228"
                }}
                style={styles.ImageBackground_I0_118_0_1501_0_1471}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_119}>
        <View style={styles.View_I0_119_0_1503}>
          <View style={styles.View_I0_119_0_1504}>
            <View style={styles.View_I0_119_0_1506} />
            <View style={styles.View_I0_119_0_1505} />
            <View style={styles.View_I0_119_2_1389}>
              <View style={styles.View_I0_119_2_1301} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8279/5e16/07540f6a0aa246911c81f5123504a219"
                }}
                style={styles.ImageBackground_I0_119_0_1507}
              />
            </View>
            <View style={styles.View_I0_119_2_1288}>
              <View style={styles.View_I0_119_2_1267} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a20e/8cbd/0ef1b68727fa1f902109870b1ec1c14f"
                }}
                style={styles.ImageBackground_I0_119_0_1508}
              />
            </View>
          </View>
          <View style={styles.View_I0_119_0_1512}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_119_0_1509}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_119_0_1510}
            />
            <View style={styles.View_I0_119_0_1511} />
          </View>
          <View style={styles.View_I0_119_0_1513}>
            <View style={styles.View_I0_119_0_1514}>
              <Text style={styles.Text_I0_119_0_1514}>Robert Downey, Jr.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_119_0_1515}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_119_0_1520}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_119_0_1525}
            />
            <View style={styles.View_I0_119_0_1530}>
              <Text style={styles.Text_I0_119_0_1530}>2457</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_120}>
        <View style={styles.View_I0_120_0_1473}>
          <View style={styles.View_I0_120_0_1474}>
            <View style={styles.View_I0_120_0_1476} />
            <View style={styles.View_I0_120_0_1475} />
            <View style={styles.View_I0_120_2_990}>
              <View style={styles.View_I0_120_2_901} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de5/397d/c77da9ad4123bd305df759bbc96b3075"
                }}
                style={styles.ImageBackground_I0_120_0_1477}
              />
            </View>
            <View style={styles.View_I0_120_2_882}>
              <View style={styles.View_I0_120_2_851} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38fb/b349/5a907a5a99088de65f16a1ea94fe8508"
                }}
                style={styles.ImageBackground_I0_120_0_1478}
              />
            </View>
          </View>
          <View style={styles.View_I0_120_0_1482}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_120_0_1479}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_120_0_1480}
            />
            <View style={styles.View_I0_120_0_1481} />
          </View>
          <View style={styles.View_I0_120_0_1483}>
            <View style={styles.View_I0_120_0_1484}>
              <Text style={styles.Text_I0_120_0_1484}>Robert Downey, Jr.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_120_0_1485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_120_0_1490}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_120_0_1495}
            />
            <View style={styles.View_I0_120_0_1500}>
              <Text style={styles.Text_I0_120_0_1500}>2457</Text>
            </View>
          </View>
          <View style={styles.View_I0_120_0_1501}>
            <View style={styles.View_I0_120_0_1501_0_1465}>
              <View style={styles.View_I0_120_0_1501_0_1463} />
              <View style={styles.View_I0_120_0_1501_0_1464} />
              <View style={styles.View_I0_120_0_1501_0_1466} />
              <View style={styles.View_I0_120_0_1501_0_1467} />
              <View style={styles.View_I0_120_0_1501_0_1468} />
              <View style={styles.View_I0_120_0_1501_0_1469} />
              <View style={styles.View_I0_120_0_1501_0_1470} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79b3/601f/0995079d210c5939ffe369026ec3f228"
                }}
                style={styles.ImageBackground_I0_120_0_1501_0_1471}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_121}>
        <View style={styles.View_I0_121_0_1576}>
          <View style={styles.View_I0_121_0_1577}>
            <View style={styles.View_I0_121_0_1578} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b123/a151/b1907580fa397483f94b871242a335e0"
              }}
              style={styles.ImageBackground_I0_121_0_1579}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_122}>
        <Text style={styles.Text_0_122}>My card</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_117: {
    width: 324,
    minWidth: 324,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 793,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_117_0_1581: {
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
  View_I0_117_0_1582: {
    width: 324,
    height: 65,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(228, 230, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_117_0_1583: {
    width: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 22
  },
  Text_I0_117_0_1583: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_117_0_1584: {
    width: 30,
    height: 30,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    backgroundColor: "rgba(52, 62, 223, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_117_0_1585: {
    width: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 26
  },
  Text_I0_117_0_1585: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_118: {
    width: 324,
    minWidth: 324,
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 579,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_118_0_1473: {
    flexGrow: 1,
    width: 324,
    height: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_118_0_1474: {
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
  View_I0_118_0_1476: {
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
  View_I0_118_0_1475: {
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
  View_I0_118_2_990: {
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
  View_I0_118_2_901: {
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
  ImageBackground_I0_118_0_1477: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_118_2_882: {
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
  View_I0_118_2_851: {
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
  ImageBackground_I0_118_0_1478: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_118_0_1482: {
    width: 55,
    minWidth: 55,
    height: 17.81999969482422,
    minHeight: 17.81999969482422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 33
  },
  ImageBackground_I0_118_0_1479: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_118_0_1480: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_118_0_1481: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_118_0_1483: {
    width: 256,
    height: 39,
    top: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_118_0_1484: {
    width: 106,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 25
  },
  Text_I0_118_0_1484: {
    color: "rgba(156, 162, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_118_0_1485: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_118_0_1490: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74
  },
  ImageBackground_I0_118_0_1495: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  View_I0_118_0_1500: {
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 0
  },
  Text_I0_118_0_1500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I0_118_0_1501: {
    width: 32,
    height: 32,
    top: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 255,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_118_0_1501_0_1465: {
    flexGrow: 1,
    width: 31.99911880493164,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00048828125,
    top: 0
  },
  View_I0_118_0_1501_0_1463: {
    width: 32,
    height: 32,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_118_0_1501_0_1464: {
    width: 2,
    height: 32,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.99951171875,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_118_0_1501_0_1466: {
    width: 11,
    height: 2,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_118_0_1501_0_1467: {
    width: 11,
    height: 2,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_118_0_1501_0_1468: {
    width: 11,
    height: 2,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_118_0_1501_0_1469: {
    width: 12,
    height: 2,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.99951171875,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_118_0_1501_0_1470: {
    width: 11,
    height: 2,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.99951171875,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_118_0_1501_0_1471: {
    width: 13.289258003234863,
    height: 25,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.8055419921875
  },
  View_0_119: {
    width: 324,
    minWidth: 324,
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 362,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_119_0_1503: {
    flexGrow: 1,
    width: 324,
    height: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_119_0_1504: {
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
  View_I0_119_0_1506: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 110, 31, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_119_0_1505: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 110, 31, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_119_2_1389: {
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
  View_I0_119_2_1301: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 110, 31, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_119_0_1507: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_119_2_1288: {
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
  View_I0_119_2_1267: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 110, 31, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_119_0_1508: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_119_0_1512: {
    width: 55,
    minWidth: 55,
    height: 17.81999969482422,
    minHeight: 17.81999969482422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 33
  },
  ImageBackground_I0_119_0_1509: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_119_0_1510: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_119_0_1511: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_119_0_1513: {
    width: 256,
    height: 39,
    top: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_119_0_1514: {
    width: 106,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 25
  },
  Text_I0_119_0_1514: {
    color: "rgba(255, 205, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_119_0_1515: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_119_0_1520: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74
  },
  ImageBackground_I0_119_0_1525: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  View_I0_119_0_1530: {
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 0
  },
  Text_I0_119_0_1530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_120: {
    width: 324,
    minWidth: 324,
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 145,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_120_0_1473: {
    flexGrow: 1,
    width: 324,
    height: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_120_0_1474: {
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
  View_I0_120_0_1476: {
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
  View_I0_120_0_1475: {
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
  View_I0_120_2_990: {
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
  View_I0_120_2_901: {
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
  ImageBackground_I0_120_0_1477: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_120_2_882: {
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
  View_I0_120_2_851: {
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
  ImageBackground_I0_120_0_1478: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_120_0_1482: {
    width: 55,
    minWidth: 55,
    height: 17.81999969482422,
    minHeight: 17.81999969482422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 33
  },
  ImageBackground_I0_120_0_1479: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_120_0_1480: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_120_0_1481: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_120_0_1483: {
    width: 256,
    height: 39,
    top: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_120_0_1484: {
    width: 106,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 25
  },
  Text_I0_120_0_1484: {
    color: "rgba(156, 162, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_120_0_1485: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_120_0_1490: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74
  },
  ImageBackground_I0_120_0_1495: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  View_I0_120_0_1500: {
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 0
  },
  Text_I0_120_0_1500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I0_120_0_1501: {
    width: 32,
    height: 32,
    top: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 255,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_120_0_1501_0_1465: {
    flexGrow: 1,
    width: 31.99911880493164,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00048828125,
    top: 0
  },
  View_I0_120_0_1501_0_1463: {
    width: 32,
    height: 32,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_120_0_1501_0_1464: {
    width: 2,
    height: 32,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.99951171875,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_120_0_1501_0_1466: {
    width: 11,
    height: 2,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_120_0_1501_0_1467: {
    width: 11,
    height: 2,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_120_0_1501_0_1468: {
    width: 11,
    height: 2,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1.00048828125,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_120_0_1501_0_1469: {
    width: 12,
    height: 2,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.99951171875,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I0_120_0_1501_0_1470: {
    width: 11,
    height: 2,
    top: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.99951171875,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_120_0_1501_0_1471: {
    width: 13.289258003234863,
    height: 25,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.8055419921875
  },
  View_0_121: {
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
  View_I0_121_0_1576: {
    flexGrow: 1,
    width: 44,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_121_0_1577: {
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
  View_I0_121_0_1578: {
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
  ImageBackground_I0_121_0_1579: {
    width: 16,
    height: 10,
    top: 17.48046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.25
  },
  View_0_122: {
    width: 91,
    minWidth: 91,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 67
  },
  Text_0_122: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
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
