import { useNavigation } from "expo-router";
import { Button, ImageBackground, StyleSheet, View } from "react-native";

export default function TelaAdicao() {
  const navigation = useNavigation();

  return (
      <View style={styles.background}>
        <ImageBackground source={require("../images/172.jpg")} style={styles.backgroundImage}/>
        <View style={styles.body}>
          <Button 
            title="Home"
            onPress={() => navigation.goBack()}
            color= "#4e4e4e"/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create
({
   body:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    background:
    {
        flex: 1,
        backgroundColor: "#141414"
    },

    backgroundImage:
    {
      flex: 1,
      opacity: 0.1,
    },
})

