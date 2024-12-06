import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/Styles";
import { Hightlight } from "../components/Hightlight";
import { useState } from "react";

export default function ProfileScreen() {
  const [follower, setFollower] = useState(200000);

  function ShowMessage() {
    Alert.alert("New Alert!", "New Message 💌");
  }

  function addFollower() {
    setFollower(follower + 5000);
  }

  return (
    <SafeAreaView style={{ paddingHorizontal: 10, flex: 1 }}>
      {/* แถบบน */}
      <View style={styles.profileHeader}>
        <TouchableOpacity>
          <FontAwesome6 name="chevron-left" size={26} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>MyIG</Text>
        <TouchableOpacity>
          <FontAwesome6 name="ellipsis" size={26} />
        </TouchableOpacity>
      </View>

      {/* โปรไฟล์และผู้ติดตาม */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.imgProfile}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
          }}
        />
        <View style={styles.sectionFollow}>
          <View style={styles.itemFollow}>
            <Text>99</Text>
            <Text>Post</Text>
          </View>
          <View style={styles.itemFollow}>
            <Text>{follower}</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.itemFollow}>
            <Text>99</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      {/* ไบโอ */}
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ fontWeight: "500" }}>MyIG</Text>
        <Text>Space of me 😍</Text>
      </View>

      {/* ปุ่ม */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Button title="follow" onPress={() => addFollower()} />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="message" onPress={() => ShowMessage()} />
        </View>
      </View>

      {/* ไฮไลต์ */}
      <View style={{ flexDirection: "row" }}>
        <Hightlight
          name="cat 1"
          imgUrl="https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_16x9.jpg"
        />
        <Hightlight
          name="cat 2"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s"
        />
        <Hightlight
          name="cat 3"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOEos42ct5cMvvgQBcT77mnwt4utek7Vb6g&s"
        />
      </View>

      {/* ไอคอนโพส */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <FontAwesome6 name="table-cells" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="film" size={24} color="dimgray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="book-tanakh" size={24} color="dimgray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="user-tag" size={24} color="dimgray" />
        </TouchableOpacity>
      </View>

      {/* โพส */}
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
          <Image
            style={styles.imgPost}
            source={{
              uri: "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
