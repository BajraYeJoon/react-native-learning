import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

interface ProfileScreenProps {
  onMenuPress: () => void;
}

const ProfileScreen = ({ onMenuPress }: ProfileScreenProps) => {
  const stats = [
    { label: "Posts", value: 48 },
    { label: "Followers", value: 1254 },
    { label: "Following", value: 348 },
  ];

  const activities = [
    {
      id: 1,
      type: "photo",
      description: "Shared a new photo",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "comment",
      description: "Commented on Jane's post",
      time: "Yesterday",
    },
    {
      id: 3,
      type: "like",
      description: "Liked 5 photos",
      time: "2 days ago",
    },
    {
      id: 4,
      type: "friend",
      description: "Added Sarah as a friend",
      time: "Last week",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuPress}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.editIcon}>✎</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Text style={styles.editAvatarText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userBio}>
              Software Developer | Traveler | Coffee Enthusiast
            </Text>
            <Text style={styles.userLocation}>New York, USA</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
          >
            <Text style={styles.secondaryButtonText}>Share Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {activities.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityIconContainer}>
                <Text style={styles.activityIcon}>
                  {activity.type === "photo"
                    ? "📷"
                    : activity.type === "comment"
                    ? "💬"
                    : activity.type === "like"
                    ? "❤️"
                    : "👥"}
                </Text>
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityDescription}>
                  {activity.description}
                </Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <View style={styles.photosGrid}>
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <View key={id} style={styles.photoItem} />
            ))}
          </View>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Photos</Text>
          </TouchableOpacity>
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
  editIcon: {
    fontSize: 24,
    color: "#333",
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E7F3FF",
    marginBottom: 10,
  },
  editAvatarButton: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  editAvatarText: {
    fontSize: 12,
    color: "#333",
  },
  profileInfo: {
    alignItems: "center",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  userBio: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 5,
  },
  userLocation: {
    fontSize: 14,
    color: "#999",
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  actionsContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  secondaryButtonText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  sectionContainer: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  activityIcon: {
    fontSize: 18,
  },
  activityInfo: {
    flex: 1,
  },
  activityDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
  photosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  photoItem: {
    width: "32%",
    aspectRatio: 1,
    backgroundColor: "#E7F3FF",
    marginBottom: 10,
    borderRadius: 5,
  },
  viewAllButton: {
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 5,
  },
  viewAllText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
