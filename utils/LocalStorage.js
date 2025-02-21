import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  // Method to store data in AsyncStorage
  static async storeData(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (error) {
      console.error('Error storing data:', error);
      return false;
    }
  }

  // Method to retrieve data from AsyncStorage
  static async getData(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  }

  // Method to remove data from AsyncStorage
  static async removeData(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing data:', error);
      return false;
    }
  }
}

export default LocalStorage;
