import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  sectionFollow: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemFollow: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  imgHightlight: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imgPost: {
    width: 125,
    height: 125,
    margin: 1,
  },
  iconHeader: {
    marginHorizontal: 10,
  },
  postUserImageProfile: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  postImage: {
    width: "100%",
    height: 350,
  },
});
