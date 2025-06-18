import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/userinfo/index",
          });
        }}
      >
        Click Me
      </Button>
    </View>
  );
}
