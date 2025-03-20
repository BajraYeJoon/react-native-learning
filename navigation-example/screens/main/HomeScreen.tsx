import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainTabParamList } from "../../types/navigation";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<MainTabParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to SocialApp</Text>
          <Text style={styles.subText}>Your home feed</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>What's on your mind?</Text>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postButtonText}>Create Post</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.feedContainer}>
            <Text style={styles.feedHeading}>Your Feed</Text>

            {/* Placeholder for feed content */}
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.feedItem}>
                <View style={styles.feedHeader}>
                  <View style={styles.profilePic} />
                  <View>
                    <Text style={styles.userName}>User Name</Text>
                    <Text style={styles.postTime}>2 hours ago</Text>
                  </View>
                </View>
                <Text style={styles.postContent}>
                  This is a sample post in the Facebook-style navigation demo.
                </Text>
                <View style={styles.interactions}>
                  <TouchableOpacity style={styles.interactionButton}>
                    <Text>👍 Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.interactionButton}>
                    <Text>💬 Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.interactionButton}>
                    <Text>↗️ Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#1877f2",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 5,
  },
  content: {
    padding: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    color: "#65676b",
    marginBottom: 15,
  },
  postButton: {
    backgroundColor: "#e7f3ff",
    borderRadius: 5,
    padding: 12,
    alignItems: "center",
  },
  postButtonText: {
    color: "#1877f2",
    fontWeight: "600",
  },
  feedContainer: {
    marginTop: 10,
  },
  feedHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#050505",
  },
  feedItem: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  feedHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#050505",
  },
  postTime: {
    fontSize: 14,
    color: "#65676b",
  },
  postContent: {
    fontSize: 16,
    color: "#050505",
    marginBottom: 15,
    lineHeight: 22,
  },
  interactions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e4e6eb",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  interactionButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
});
