import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Event from '../components/Event';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const loadData = async () => {
    const storedEvents = await AsyncStorage.getItem('events');
    const storedReservations = await AsyncStorage.getItem('reservations');

    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }

    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem('events', JSON.stringify(events));
    await AsyncStorage.setItem('reservations', JSON.stringify(reservations));
  };

  useEffect(() => {
    loadData();
  }, []);

  const reserve = (event) => {
    setReservations([...reservations, event]);
    saveData();
  };

  const favorite = (event) => {
    const updatedEvents = events.map((e) => (e.id === event.id ? { ...e, isFavorite: !e.isFavorite } : e));
    setEvents(updatedEvents);
    saveData();
  };

  const deleteEvent = (event) => {
    const updatedEvents = events.filter((e) => e.id !== event.id);
    setEvents(updatedEvents);
    saveData();
  };

  const updateEvent = (id, name) => {
    const updatedEvents = events.map((e) => (e.id === id ? { ...e, name } : e));
    setEvents(updatedEvents);
    saveData();
  };

  const handleReserve = (event) => {
    navigation.navigate('Reserve', { event, onReserve: reserve });
  };

  const handleStatus = (event) => {
    const eventReservations = reservations.filter((reservation) => reservation.id === event.id);
    navigation.navigate('Status', { reservations: eventReservations, onDelete: deleteReservation });
  };

  const filteredEvents = search.trim() === '' ? events : events.filter((event) => event.name.includes(search));

  return (
    <View>
      <TextInput placeholder="Buscar eventos" value={search} onChangeText={setSearch} />
      <FlatList
        data={filteredEvents}
        renderItem={({ item }) => (
          <Event event={item} onReserve={handleReserve} onFavorite={favorite} onDelete={deleteEvent} onUpdate={updateEvent} onStatus={handleStatus} />
        )}
      />
    </View>
  );
};

export default HomeScreen;