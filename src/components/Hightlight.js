import { View, Text, Image } from "react-native";
import { styles } from "../styles/Styles";

export function Hightlight({ name, imgUrl }) {
  return (
    <View style={{ alignItems: "center", margin: 10 }}>
      <Image style={styles.imgHightlight} source={{ uri: imgUrl }} />
      <Text>{name}</Text>
    </View>
  );
}
