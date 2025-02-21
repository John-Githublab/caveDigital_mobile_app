export const getColorithStyle = (status: string) => {
  return { color: getStatusColor(status) };
};

export function getStatusColor(status: string) {
  switch (status) {
    case "pending":
      return "#ff8d00";
    case "assigned":
      return "#1648CE";
    case "ongoing":
      return "#FF9500";
    case "completed":
      return "#009C3C";
    case "cancelled":
    case "rejected":
      return "#FF0000";
    case "paymentNotDone":
      return "#FFC107";
    case "paymentPending":
      return "#FF9500";
    default:
      return "#000000"; // Default color (black) for unknown statuses
  }
}
