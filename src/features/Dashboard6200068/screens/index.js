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
      <View style={styles.View_0_124}>
        <View style={styles.View_I0_124_0_1554}>
          <View style={styles.View_I0_124_0_1555} />
          <View style={styles.View_I0_124_0_1556}>
            <View style={styles.View_I0_124_0_1557}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fde7/6475/91e70a200ef1ceb4d8f9c625c280cdf0"
                }}
                style={styles.ImageBackground_I0_124_0_1557_0_1552}
              />
            </View>
          </View>
          <View style={styles.View_I0_124_0_1558}>
            <View style={styles.View_I0_124_0_1559}>
              <View style={styles.View_I0_124_0_1559_0_1548}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3119/8740/43a8452b357bbfde8b048fe3ddd0a36a"
                  }}
                  style={styles.ImageBackground_I0_124_0_1559_0_1544}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69ed/90f6/bec8dda6a737416de93435342a8e04e1"
                  }}
                  style={styles.ImageBackground_I0_124_0_1559_0_1547}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I0_124_0_1560}>
            <View style={styles.View_I0_124_0_1561} />
            <View style={styles.View_I0_124_0_1562}>
              <View style={styles.View_I0_124_0_1563} />
              <View style={styles.View_I0_124_0_1564} />
              <View style={styles.View_I0_124_0_1565} />
              <View style={styles.View_I0_124_0_1566} />
              <View style={styles.View_I0_124_0_1567} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_124_0_1568}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_I0_124_0_1569}
              />
            </View>
          </View>
          <View style={styles.View_I0_124_0_1570}>
            <View style={styles.View_I0_124_0_1571}>
              <View style={styles.View_I0_124_0_1571_0_1540}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab4a/f13e/eb75b99de67353d780459d151b623cf1"
                  }}
                  style={styles.ImageBackground_I0_124_0_1571_0_1538}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f664/1608/0943356d1b10a8f9e8ab868a6ee739b0"
                  }}
                  style={styles.ImageBackground_I0_124_0_1571_0_1539}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I0_124_0_1572}>
            <View style={styles.View_I0_124_0_1573}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/636a/3126/d096282afc98c56e6422e6b1790ab044"
                }}
                style={styles.ImageBackground_I0_124_0_1573_0_1534}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b0/d878/96168f93fbcb2d622041ccf94f26b388"
              }}
              style={styles.ImageBackground_I0_124_0_1574}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_125}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d59a/a320/2814cb3a440150a834870a14eeaea772"
          }}
          style={styles.ImageBackground_0_126}
        />
        <View style={styles.View_0_127}>
          <Text style={styles.Text_0_127}>Darrell Wolfe</Text>
        </View>
        <View style={styles.View_0_128}>
          <Text style={styles.Text_0_128}>Payment recieved</Text>
        </View>
        <View style={styles.View_0_129}>
          <Text style={styles.Text_0_129}>+$550</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46c9/a80c/e29787211679ce04d9f99f255ccb12e9"
          }}
          style={styles.ImageBackground_0_130}
        />
      </View>
      <View style={styles.View_0_131}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d59a/a320/2814cb3a440150a834870a14eeaea772"
          }}
          style={styles.ImageBackground_0_132}
        />
        <View style={styles.View_0_133}>
          <Text style={styles.Text_0_133}>Darrell Wolfe</Text>
        </View>
        <View style={styles.View_0_134}>
          <Text style={styles.Text_0_134}>Payment sent</Text>
        </View>
        <View style={styles.View_0_135}>
          <Text style={styles.Text_0_135}>-$100</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f3/10e9/d6e9892777e8dc77beb8adb14fc90013"
          }}
          style={styles.ImageBackground_0_136}
        />
      </View>
      <View style={styles.View_0_137}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d59a/a320/2814cb3a440150a834870a14eeaea772"
          }}
          style={styles.ImageBackground_0_138}
        />
        <View style={styles.View_0_139}>
          <Text style={styles.Text_0_139}>Darrell Wolfe</Text>
        </View>
        <View style={styles.View_0_140}>
          <Text style={styles.Text_0_140}>Payment sent</Text>
        </View>
        <View style={styles.View_0_141}>
          <Text style={styles.Text_0_141}>-$75</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fd1/8a59/6e615be5511d4acac3ee1a41ac9789df"
          }}
          style={styles.ImageBackground_0_142}
        />
      </View>
      <View style={styles.View_0_143}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d59a/a320/2814cb3a440150a834870a14eeaea772"
          }}
          style={styles.ImageBackground_0_144}
        />
        <View style={styles.View_0_145}>
          <Text style={styles.Text_0_145}>Darrell Wolfe</Text>
        </View>
        <View style={styles.View_0_146}>
          <Text style={styles.Text_0_146}>Payment recieved</Text>
        </View>
        <View style={styles.View_0_147}>
          <Text style={styles.Text_0_147}>+$250</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab5/bd34/48f7aa5eff534c5209d87ea434f8a50f"
          }}
          style={styles.ImageBackground_0_148}
        />
      </View>
      <View style={styles.View_0_149}>
        <View style={styles.View_0_150} />
        <View style={styles.View_0_151}>
          <Text style={styles.Text_0_151}>Weekly</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0475/8d43/9cc8a8801f995c88e99e2d7b2c22c622"
          }}
          style={styles.ImageBackground_0_152}
        />
      </View>
      <View style={styles.View_0_153}>
        <Text style={styles.Text_0_153}>Transaction</Text>
      </View>
      <View style={styles.View_0_154}>
        <View style={styles.View_I0_154_0_1503}>
          <View style={styles.View_I0_154_0_1504}>
            <View style={styles.View_I0_154_0_1506} />
            <View style={styles.View_I0_154_0_1505} />
            <View style={styles.View_I0_154_2_1389}>
              <View style={styles.View_I0_154_2_1301} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8279/5e16/07540f6a0aa246911c81f5123504a219"
                }}
                style={styles.ImageBackground_I0_154_0_1507}
              />
            </View>
            <View style={styles.View_I0_154_2_1288}>
              <View style={styles.View_I0_154_2_1267} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a20e/8cbd/0ef1b68727fa1f902109870b1ec1c14f"
                }}
                style={styles.ImageBackground_I0_154_0_1508}
              />
            </View>
          </View>
          <View style={styles.View_I0_154_0_1512}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_154_0_1509}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_154_0_1510}
            />
            <View style={styles.View_I0_154_0_1511} />
          </View>
          <View style={styles.View_I0_154_0_1513}>
            <View style={styles.View_I0_154_0_1514}>
              <Text style={styles.Text_I0_154_0_1514}>Robert Downey, Jr.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_154_0_1515}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_154_0_1520}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_154_0_1525}
            />
            <View style={styles.View_I0_154_0_1530}>
              <Text style={styles.Text_I0_154_0_1530}>2457</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_155}>
        <View style={styles.View_I0_155_0_1473}>
          <View style={styles.View_I0_155_0_1474}>
            <View style={styles.View_I0_155_0_1476} />
            <View style={styles.View_I0_155_0_1475} />
            <View style={styles.View_I0_155_2_990}>
              <View style={styles.View_I0_155_2_901} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de5/397d/c77da9ad4123bd305df759bbc96b3075"
                }}
                style={styles.ImageBackground_I0_155_0_1477}
              />
            </View>
            <View style={styles.View_I0_155_2_882}>
              <View style={styles.View_I0_155_2_851} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38fb/b349/5a907a5a99088de65f16a1ea94fe8508"
                }}
                style={styles.ImageBackground_I0_155_0_1478}
              />
            </View>
          </View>
          <View style={styles.View_I0_155_0_1482}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_155_0_1479}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/0401/8a29a72458e209d45f4165deb47d8879"
              }}
              style={styles.ImageBackground_I0_155_0_1480}
            />
            <View style={styles.View_I0_155_0_1481} />
          </View>
          <View style={styles.View_I0_155_0_1483}>
            <View style={styles.View_I0_155_0_1484}>
              <Text style={styles.Text_I0_155_0_1484}>Robert Downey, Jr.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_155_0_1485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_155_0_1490}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d527/6048/009d371ba6c97bb4e54ad8379a050c4a"
              }}
              style={styles.ImageBackground_I0_155_0_1495}
            />
            <View style={styles.View_I0_155_0_1500}>
              <Text style={styles.Text_I0_155_0_1500}>2457</Text>
            </View>
          </View>
          <View style={styles.View_I0_155_0_1501}>
            <View style={styles.View_I0_155_0_1501_0_1465}>
              <View style={styles.View_I0_155_0_1501_0_1463} />
              <View style={styles.View_I0_155_0_1501_0_1464} />
              <View style={styles.View_I0_155_0_1501_0_1466} />
              <View style={styles.View_I0_155_0_1501_0_1467} />
              <View style={styles.View_I0_155_0_1501_0_1468} />
              <View style={styles.View_I0_155_0_1501_0_1469} />
              <View style={styles.View_I0_155_0_1501_0_1470} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79b3/601f/0995079d210c5939ffe369026ec3f228"
                }}
                style={styles.ImageBackground_I0_155_0_1501_0_1471}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7611/ed88/6d1d0780125903dc2ff29572c30140c4"
        }}
        style={styles.ImageBackground_0_156}
      />
      <View style={styles.View_0_157}>
        <Text style={styles.Text_0_157}>Dashboard</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_124: {
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
  View_I0_124_0_1554: {
    flexGrow: 1,
    width: 414,
    height: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_124_0_1555: {
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
  View_I0_124_0_1556: {
    width: 23,
    minWidth: 23,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271.0673828125,
    top: 34.611083984375
  },
  View_I0_124_0_1557: {
    width: 23,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_124_0_1557_0_1552: {
    flexGrow: 1,
    width: 22.125858306884766,
    height: 21.570112228393555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_124_0_1558: {
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
  View_I0_124_0_1559: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_124_0_1559_0_1548: {
    flexGrow: 1,
    width: 21.98000144958496,
    height: 21.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_124_0_1559_0_1544: {
    width: 21.98000144958496,
    height: 10.071428298950195,
    top: 11.428466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_124_0_1559_0_1547: {
    width: 9.5,
    height: 9.119047164916992,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.73974609375
  },
  View_I0_124_0_1560: {
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
  View_I0_124_0_1561: {
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
  View_I0_124_0_1562: {
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
  View_I0_124_0_1563: {
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
  View_I0_124_0_1564: {
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
  View_I0_124_0_1565: {
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
  View_I0_124_0_1566: {
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
  View_I0_124_0_1567: {
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
  ImageBackground_I0_124_0_1568: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35
  },
  ImageBackground_I0_124_0_1569: {
    width: 2.222222328186035,
    height: 2.222222328186035,
    top: 24.4443359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.111083984375
  },
  View_I0_124_0_1570: {
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
  View_I0_124_0_1571: {
    width: 23,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_124_0_1571_0_1540: {
    flexGrow: 1,
    width: 23,
    height: 21.047618865966797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_124_0_1571_0_1538: {
    width: 23,
    height: 21.047618865966797,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_124_0_1571_0_1539: {
    width: 21.265220642089844,
    height: 2,
    top: 6.1904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  View_I0_124_0_1572: {
    width: 23,
    minWidth: 23,
    height: 32.326927185058594,
    minHeight: 32.326927185058594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 32.742919921875
  },
  View_I0_124_0_1573: {
    width: 23,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_124_0_1573_0_1534: {
    flexGrow: 1,
    width: 23,
    height: 23.257179260253906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I0_124_0_1574: {
    width: 4,
    height: 4,
    top: 28.326904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.5
  },
  View_0_125: {
    width: 369,
    minWidth: 369,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 720,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_126: {
    width: 300,
    height: 1,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69
  },
  View_0_127: {
    width: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 3
  },
  Text_0_127: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_128: {
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 26
  },
  Text_0_128: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_129: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 15
  },
  Text_0_129: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_130: {
    width: 44,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_131: {
    width: 369,
    minWidth: 369,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 640,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_132: {
    width: 300,
    height: 1,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69
  },
  View_0_133: {
    width: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 3
  },
  Text_0_133: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_134: {
    width: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 26
  },
  Text_0_134: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_135: {
    width: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 15
  },
  Text_0_135: {
    color: "rgba(255, 110, 31, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_136: {
    width: 44,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_137: {
    width: 369,
    minWidth: 369,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 550,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_138: {
    width: 300,
    height: 1,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69
  },
  View_0_139: {
    width: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 3
  },
  Text_0_139: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_140: {
    width: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 26
  },
  Text_0_140: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_141: {
    width: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291,
    top: 15
  },
  Text_0_141: {
    color: "rgba(255, 110, 31, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_142: {
    width: 44,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_143: {
    width: 369,
    minWidth: 369,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 470,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_144: {
    width: 300,
    height: 1,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69
  },
  View_0_145: {
    width: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 3
  },
  Text_0_145: {
    color: "rgba(42, 49, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_146: {
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 26
  },
  Text_0_146: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_147: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 15
  },
  Text_0_147: {
    color: "rgba(52, 62, 223, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_148: {
    width: 44,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_149: {
    width: 90,
    minWidth: 90,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 406,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_150: {
    width: 90,
    height: 26,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(229, 234, 246, 1)",
    borderWidth: 1
  },
  View_0_151: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 5
  },
  Text_0_151: {
    color: "rgba(197, 208, 236, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_152: {
    width: 9.192387580871582,
    height: 9.192387580871582,
    top: 6.65380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72.15380859375
  },
  View_0_153: {
    width: 88,
    minWidth: 88,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 409
  },
  Text_0_153: {
    color: "rgba(141, 151, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_154: {
    width: 324,
    minWidth: 324,
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 379,
    top: 188,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_154_0_1503: {
    flexGrow: 1,
    width: 324,
    height: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_154_0_1504: {
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
  View_I0_154_0_1506: {
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
  View_I0_154_0_1505: {
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
  View_I0_154_2_1389: {
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
  View_I0_154_2_1301: {
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
  ImageBackground_I0_154_0_1507: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_154_2_1288: {
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
  View_I0_154_2_1267: {
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
  ImageBackground_I0_154_0_1508: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_154_0_1512: {
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
  ImageBackground_I0_154_0_1509: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_154_0_1510: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_154_0_1511: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_154_0_1513: {
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
  View_I0_154_0_1514: {
    width: 106,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 25
  },
  Text_I0_154_0_1514: {
    color: "rgba(255, 205, 178, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_154_0_1515: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_154_0_1520: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74
  },
  ImageBackground_I0_154_0_1525: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  View_I0_154_0_1530: {
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 0
  },
  Text_I0_154_0_1530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_155: {
    width: 324,
    minWidth: 324,
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 188,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_155_0_1473: {
    flexGrow: 1,
    width: 324,
    height: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_155_0_1474: {
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
  View_I0_155_0_1476: {
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
  View_I0_155_0_1475: {
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
  View_I0_155_2_990: {
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
  View_I0_155_2_901: {
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
  ImageBackground_I0_155_0_1477: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_155_2_882: {
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
  View_I0_155_2_851: {
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
  ImageBackground_I0_155_0_1478: {
    width: 324,
    height: 184,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_155_0_1482: {
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
  ImageBackground_I0_155_0_1479: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_155_0_1480: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I0_155_0_1481: {
    width: 55,
    height: 17.81999969482422,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_155_0_1483: {
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
  View_I0_155_0_1484: {
    width: 106,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 25
  },
  Text_I0_155_0_1484: {
    color: "rgba(156, 162, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_155_0_1485: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I0_155_0_1490: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74
  },
  ImageBackground_I0_155_0_1495: {
    width: 44,
    height: 5,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148
  },
  View_I0_155_0_1500: {
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 0
  },
  Text_I0_155_0_1500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I0_155_0_1501: {
    width: 32,
    height: 32,
    top: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 255,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_155_0_1501_0_1465: {
    flexGrow: 1,
    width: 31.99911880493164,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00048828125,
    top: 0
  },
  View_I0_155_0_1501_0_1463: {
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
  View_I0_155_0_1501_0_1464: {
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
  View_I0_155_0_1501_0_1466: {
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
  View_I0_155_0_1501_0_1467: {
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
  View_I0_155_0_1501_0_1468: {
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
  View_I0_155_0_1501_0_1469: {
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
  View_I0_155_0_1501_0_1470: {
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
  ImageBackground_I0_155_0_1501_0_1471: {
    width: 13.289258003234863,
    height: 25,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.8055419921875
  },
  ImageBackground_0_156: {
    width: 44,
    minWidth: 44,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 325,
    top: 92,
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_157: {
    width: 126,
    minWidth: 126,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 100
  },
  Text_0_157: {
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
