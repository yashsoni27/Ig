import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const PostFooterIcons = [
  {
    name: "Like",
    imageUrl: require("../../assets/like.png"),
    likedImageUrl: require("../../assets/liked.png"),
  },
  {
    name: "Comment",
    imageUrl: require("../../assets/comment.png"),
  },
  {
    name: "Share",
    imageUrl: require("../../assets/share.png"),
  },
  {
    name: "Save",
    imageUrl: require("../../assets/bookmark.png"),
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 5,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", fontWeight: 400, marginLeft: 5 }}>
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: 900 }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ height: 400, width: "100%" }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: 400, resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={imgUrl} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <Text style={{ color: "white", fontWeight: 600 }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: 600 }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{marginTop:5}}>
    {!!post.comments.length && (
    <Text style={{ color: "gray" }}>
      View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
      {post.comments.length > 1 ? "comments" : "comment"}
    </Text>
    )}
  </View>
);

const Comments = ({post}) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection:'row', marginTop:5}}>
                <Text style={{color:'white'}}>
                    <Text style={{fontWeight: 600}}>{comment.user}</Text>
                    <Text>  {comment.comment}</Text>
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 5,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 28,
    height: 28,
    tintColor: "white",
    marginRight: 5,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    widht: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
