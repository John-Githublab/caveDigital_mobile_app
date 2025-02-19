export const getColorithStyle = (status: string) => {
  return { color: getStatusColor(status) };
};

export function getStatusColor(status: string) {
  switch (status) {
    case "Pending":
      return "#ff8d00";
    case "Assigned":
      return "#1648CE";
    case "Ongoing":
      return "#FF9500";
    case "Completed":
      return "#009C3C";
    case "Cancelled":
    case "Rejected":
      return "#FF0000";
    case "PaymentNotDone":
      return "#FFC107";
    case "PaymentPending":
      return "#FF9500";
    default:
      return "#000000"; // Default color (black) for unknown statuses
  }
}
