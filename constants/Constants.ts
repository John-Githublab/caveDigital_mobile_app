import { Content } from "@/types/Modal";

export default {
  statuses: [
    {
      label: "Pending",
      value: "pending",
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
};
