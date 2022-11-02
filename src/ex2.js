import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Image } from "react-native";
import jerry from "../assets/jerry.png";

export default function Ex2() {
  const [location1, setLocation1] = useState({
    marginLeft1: new Animated.Value(Math.floor(Math.random() * 300 + 1)),
    marginTop1: new Animated.Value(Math.floor(Math.random() * 700 + 1)),
  });
  const [location2, setLocation2] = useState({
    marginLeft2: new Animated.Value(Math.floor(Math.random() * 300 + 1)),
    marginTop2: new Animated.Value(Math.floor(Math.random() * 700 + 1)),
  });
  const [location3, setLocation3] = useState({
    marginLeft3: new Animated.Value(Math.floor(Math.random() * 300 + 1)),
    marginTop3: new Animated.Value(Math.floor(Math.random() * 700 + 1)),
  });
  function onPressR() {
    setLocation1({
      marginLeft1: Math.floor(Math.random() * 300 + 1),
      marginTop1: Math.floor(Math.random() * 700 + 1),
    }),
      setLocation2({
        marginLeft2: Math.floor(Math.random() * 300 + 1),
        marginTop2: Math.floor(Math.random() * 700 + 1),
      }),
      setLocation3({
        marginLeft3: Math.floor(Math.random() * 300 + 1),
        marginTop3: Math.floor(Math.random() * 700 + 1),
      });
    // console.log("location1", location1);
  }
  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;
  const { marginTop3, marginLeft3 } = location3;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      style={styles.container}
    >
      <View>
        <TouchableOpacity style={{ position: "absolute" }} onPress={onPressR}>
          <Animated.Image
            source={jerry}
            style={{
              marginLeft: marginLeft1,
              marginTop: marginTop1,
              height: 68,
              width: 60,
            }}
          ></Animated.Image>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onPressR} style={{ position: "absolute" }}>
          <Animated.Image
            source={jerry}
            style={{
              marginLeft: marginLeft2,
              marginTop: marginTop2,
              height: 68,
              width: 60,
            }}
          ></Animated.Image>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ position: "absolute" }} onPress={onPressR}>
          <Animated.Image
            source={jerry}
            style={{
              marginLeft: marginLeft3,
              marginTop: marginTop3,
              height: 68,
              width: 60,
            }}
          ></Animated.Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
