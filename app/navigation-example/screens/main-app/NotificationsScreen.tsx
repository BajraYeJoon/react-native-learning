import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

interface NotificationsScreenProps {
  onMenuPress: () => void;
}

const NotificationsScreen = ({ onMenuPress }: NotificationsScreenProps) => {
  const notifications = [
    {
      id: "1",
      type: "like",
      user: "Sarah Johnson",
      content: "liked your photo",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: "2",
      type: "comment",
      user: "Michael Brown",
      content: 'commented on your post: "Great shot!"',
      time: "10 minutes ago",
      read: false,
    },
    {
      id: "3",
      type: "follow",
      user: "Jessica Williams",
      content: "started following you",
      time: "30 minutes ago",
      read: false,
    },
    {
      id: "4",
      type: "mention",
      user: "Alex Parker",
      content: "mentioned you in a comment",
      time: "1 hour ago",
      read: true,
    },
    {
      id: "5",
      type: "comment",
      user: "David Wilson",
      content: 'replied to your comment: "Thanks for the feedback!"',
      time: "2 hours ago",
      read: true,
    },
    {
      id: "6",
      type: "like",
      user: "Emma Davis",
      content: "liked your comment",
      time: "3 hours ago",
      read: true,
    },
    {
      id: "7",
      type: "tag",
      user: "Ryan Martinez",
      content: "tagged you in a photo",
      time: "5 hours ago",
      read: true,
    },
    {
      id: "8",
      type: "birthday",
      user: "Jennifer Taylor",
      content: "has a birthday today",
      time: "Today",
      read: true,
    },
  ];

  const renderNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return "❤️";
      case "comment":
        return "💬";
      case "follow":
        return "👤";
      case "mention":
        return "@️";
      case "tag":
        return "🏷️";
      case "birthday":
        return "🎂";
      default:
        return "📢";
    }
  };

  const renderNotificationItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.notificationItem, !item.read && styles.unreadNotification]}
    >
      <View style={styles.notificationIconContainer}>
        <Text style={styles.notificationIcon}>
          {renderNotificationIcon(item.type)}
        </Text>
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.notificationUsername}>{item.user}</Text>{" "}
          {item.content}
        </Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      {!item.read && <View style={styles.unreadIndicator} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuPress}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, styles.activeFilterButton]}
        >
          <Text style={[styles.filterText, styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mentions</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
        style={styles.notificationsList}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.markAllReadButton}>
        <Text style={styles.markAllReadText}>Mark All as Read</Text>
      </TouchableOpacity>
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
  settingsIcon: {
    fontSize: 24,
    color: "#333",
  },
  filterContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
  },
  activeFilterButton: {
    backgroundColor: "#007AFF",
  },
  filterText: {
    color: "#666",
    fontSize: 14,
  },
  activeFilterText: {
    color: "#fff",
    fontWeight: "bold",
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  unreadNotification: {
    backgroundColor: "#f0f7ff",
  },
  notificationIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  notificationIcon: {
    fontSize: 20,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  notificationUsername: {
    fontWeight: "bold",
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF",
    marginLeft: 5,
  },
  markAllReadButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eaeaea",
  },
  markAllReadText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NotificationsScreen;
