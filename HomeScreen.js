import React, { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const [memo, setMemo] = useState("");

  useEffect(() => {
    // AsyncStorage에서 메모 가져오기
    const fetchMemo = async () => {
      try {
        const savedMemo = await AsyncStorage.getItem("memo");
        if (savedMemo !== null) {
          setMemo(savedMemo);
        }
      } catch (error) {
        console.error("메모 불러오기 에러:", error);
      }
    };

    fetchMemo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.memoText}>{memo}</Text>
      <Button
        title="메모 작성하기"
        onPress={() => navigation.navigate("Memo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  memoText: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
});
