import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      <Text>UserInfo</Text>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/index/index",
          });
        }}
      >
        Click Me
      </Button>
    </View>
  );
}
