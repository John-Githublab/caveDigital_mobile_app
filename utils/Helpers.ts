export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good Morning! ☀️";
  } else if (hour < 18) {
    return "Good Afternoon! 🌤️";
  } else if (hour < 21) {
    return "Good Evening! 🌆";
  } else {
    return "Good Night! 🌙";
  }
};
