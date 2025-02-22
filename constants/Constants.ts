import { Content } from "@/types/Modal";

export default {
  statuses: [
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Cancelled",
      value: "cancelled",
    },
  ],
  priority: [
    {
      label: "Low",
      value: "low",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "High",
      value: "high",
    },
  ],
  staticsDefault: {
    pending: 0,
    completed: 0,
    cancelled: 0,
    total: 0,
  },
  modalConfig: {
    delete: {
      title: "Wish to Delete?",
      description: `You might lose the details of your Task. Do you still want to Delete ?`,
    } as Content,
    logout: {
      title: "Wish to Logout?",
      description: `You might be logged out of the application. Do you still want to Logout ?`,
    } as Content,
  },
  priorityColors: {
    low: {
      bg: "#E6FFE8",
      color: "#2ACB3A",
    },
    medium: {
      color: "#1EA5FC",
      bg: "#EBF7FF",
    },
    high: {
      color: "#FF0001",
      bg: "#FFF3F3",
    },
  } as any,
};
