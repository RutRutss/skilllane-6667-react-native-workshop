import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/Styles";
import { Hightlight } from "../components/Hightlight";
import { Post } from "../components/Post";

const datas = [
  {
    id: 1,
    username: "Post Cat 1",
    userImgProfile:
      "https://static.wixstatic.com/media/103d43_9ecc1086f64147b9afe8a9c3333b1a1a~mv2.jpg/v1/fill/w_640,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/103d43_9ecc1086f64147b9afe8a9c3333b1a1a~mv2.jpg",
    imgPost:
      "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg",
  },
  {
    id: 2,
    username: "Post Cat 2",
    userImgProfile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg",
    imgPost:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
  },
  {
    id: 3,
    username: "Post Cat 3",
    userImgProfile:
      "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
    imgPost:
      "https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageTEASER.jpg",
  },
];

export default function FeedScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      {/* ส่วนบน */}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "500" }}>Instagram</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.iconHeader}>
            <FontAwesome6 name="heart" size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconHeader}>
            <FontAwesome6 name="comment" size={26} />
          </TouchableOpacity>
        </View>
      </View>

      {/* สตอรี่ */}
      <View>
        <ScrollView horizontal={true}>
          <Hightlight
            name="Cat 1"
            imgUrl="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          />
          <Hightlight
            name="Cat 2"
            imgUrl="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          />
          <Hightlight
            name="Cat 3"
            imgUrl="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          />
          <Hightlight
            name="Cat 4"
            imgUrl="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          />
          <Hightlight
            name="Cat 5"
            imgUrl="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          />
          <Hightlight
            name="Cat 6"
            imgUrl="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
          />
        </ScrollView>
      </View>

      {/* โพส */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={datas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Post
              username={item.username}
              userImgProfile={item.userImgProfile}
              imgPost={item.imgPost}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
