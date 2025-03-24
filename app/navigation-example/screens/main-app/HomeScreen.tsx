import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

interface HomeScreenProps {
  onMenuPress: () => void;
}

const HomeScreen = ({ onMenuPress }: HomeScreenProps) => {
  const posts = [
    {
      id: 1,
      author: "Jane Smith",
      time: "10 min ago",
      content: "Just finished a great workout session! 💪 #fitness #health",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      author: "John Doe",
      time: "32 min ago",
      content:
        "Check out this amazing photo I took on my hike today! The views were incredible. Has anyone else been to this trail?",
      likes: 42,
      comments: 7,
    },
    {
      id: 3,
      author: "Sarah Williams",
      time: "1 hour ago",
      content:
        "Just released my new app! Would love your feedback. Link in profile. #coding #newrelease",
      likes: 56,
      comments: 13,
    },
    {
      id: 4,
      author: "Mike Johnson",
      time: "3 hours ago",
      content:
        "Having a great time on vacation! The beach is beautiful and the food is amazing.",
      likes: 38,
      comments: 8,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuPress}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home Feed</Text>
        <TouchableOpacity>
          <Text style={styles.refreshIcon}>↻</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.storiesContainer}>
          <Text style={styles.storiesTitle}>Stories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storiesScroll}
          >
            <View style={[styles.storyCircle, styles.yourStory]}>
              <Text style={styles.yourStoryPlus}>+</Text>
              <Text style={styles.storyName}>You</Text>
            </View>
            {["Alex", "Brian", "Claire", "David", "Emma"].map((name, index) => (
              <View key={index} style={styles.storyCircle}>
                <Text style={styles.storyName}>{name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.postsContainer}>
          <Text style={styles.postsTitle}>Recent Posts</Text>
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar} />
                <View style={styles.postHeaderInfo}>
                  <Text style={styles.postAuthor}>{post.author}</Text>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
              </View>
              <Text style={styles.postContent}>{post.content}</Text>
              <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>👍 {post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>💬 {post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>↗️ Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  menuIcon: {
    fontSize: 24,
    color: "#333",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  refreshIcon: {
    fontSize: 24,
    color: "#333",
  },
  content: {
    flex: 1,
  },
  storiesContainer: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  storiesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  storiesScroll: {
    flexDirection: "row",
  },
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#E7F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  yourStory: {
    backgroundColor: "#f2f2f2",
    position: "relative",
  },
  yourStoryPlus: {
    fontSize: 24,
    color: "#333",
    position: "absolute",
    top: 15,
  },
  storyName: {
    marginTop: 45,
    fontSize: 12,
    color: "#333",
  },
  postsContainer: {
    padding: 15,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E7F3FF",
    marginRight: 10,
  },
  postHeaderInfo: {
    flex: 1,
  },
  postAuthor: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  postTime: {
    fontSize: 12,
    color: "#888",
  },
  postContent: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 15,
  },
  postActions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
    paddingTop: 10,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  actionText: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
