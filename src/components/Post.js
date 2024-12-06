import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/Styles";
import { useState } from "react";

export function Post({ userImgProfile, imgPost, username }) {
  const [like, setLike] = useState(0);

  function addLike() {
    setLike(like + 1);
  }

  return (
    <View style={{ marginVertical: 10 }}>
      {/* แถบบนของโพส */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.postUserImageProfile}
            source={{ uri: userImgProfile }}
          />
          <Text style={{ fontWeight: "600", marginStart: 10 }}>{username}</Text>
        </View>

        <TouchableOpacity>
          <FontAwesome6 name="ellipsis" size={22} />
        </TouchableOpacity>
      </View>
      {/* ภาพโพส */}
      <Image style={styles.postImage} source={{ uri: imgPost }} />

      {/* ปุ่ม */}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.iconHeader} onPress={() => addLike()}>
            <FontAwesome6 name="heart" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconHeader}>
            <FontAwesome6 name="comment" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconHeader}>
            <FontAwesome6 name="paper-plane" size={22} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iconHeader}>
          <FontAwesome6 name="bookmark" size={22} />
        </TouchableOpacity>
      </View>

      {/* จำนวนไลค์ */}
      <Text>{like} Likes</Text>
    </View>
  );
}
