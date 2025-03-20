import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainTabParamList } from "../../types/navigation";

type FriendsScreenProps = {
  navigation: NativeStackNavigationProp<MainTabParamList, "Friends">;
};

// Sample data for friends list
const friendsData = [
  { id: "1", name: "Jane Smith", mutualFriends: 5 },
  { id: "2", name: "John Doe", mutualFriends: 12 },
  { id: "3", name: "Michael Johnson", mutualFriends: 3 },
  { id: "4", name: "Sarah Williams", mutualFriends: 8 },
  { id: "5", name: "David Brown", mutualFriends: 2 },
  { id: "6", name: "Emma Davis", mutualFriends: 15 },
];

export default function FriendsScreen({ navigation }: FriendsScreenProps) {
  const renderFriendItem = ({ item }: { item: (typeof friendsData)[0] }) => (
    <View style={styles.friendItem}>
      <View style={styles.profilePic} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.mutualFriends}>
          {item.mutualFriends} mutual friends
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Friends</Text>
      </View>

      <FlatList
        data={friendsData}
        renderItem={renderFriendItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.friendsList}
      />
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  friendsList: {
    padding: 15,
  },
  friendItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
    marginRight: 15,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#050505",
    marginBottom: 4,
  },
  mutualFriends: {
    fontSize: 14,
    color: "#65676b",
  },
});
