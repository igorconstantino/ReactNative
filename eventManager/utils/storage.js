import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeEvents = async (events) => {
  await AsyncStorage.setItem('events', JSON.stringify(events));
};

export const storeReservations = async (reservations) => {
  await AsyncStorage.setItem('reservations', JSON.stringify(reservations));
};

export const getEvents = async () => {
  const eventsJson = await AsyncStorage.getItem('events');
  return eventsJson ? JSON.parse(eventsJson) : null;
};

export const getReservations = async () => {
  const reservationsJson = await AsyncStorage.getItem('reservations');
  return reservationsJson ? JSON.parse(reservationsJson) : null;
};