import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";

export const ScreenWrapper = (props: React.PropsWithChildren) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.flex,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
