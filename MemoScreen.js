import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
} from "react-native";

export default function MemoScreen({ navigation }) {
  const [memo, setMemo] = useState("");

  const saveMemo = async () => {
    // AsyncStorage에 메모 저장
    try {
      await AsyncStorage.setItem("memo", memo);
      console.log("메모 저장:", memo);
      // 메모를 저장한 후 홈 화면으로 이동
      navigation.navigate("Home");
    } catch (error) {
      console.error("메모 저장 에러:", error);
    }
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="메모를 입력하세요"
          value={memo}
          onChangeText={setMemo}
        />
        <Button title="저장" onPress={saveMemo} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    minHeight: 200,
  },
});
