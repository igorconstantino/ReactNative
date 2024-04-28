import React, { useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Event from '../components/Event';

const HomeScreen = () => {
    const [events, setEvents] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const handleReserve = (event) => {
        navigation.navigate('Reserve', { event, onReserve: reserve });
    };

    const handleStatus = (event) => {
        const eventReservations = reservations.filter(reservation => reservation.id === event.id);
        navigation.navigate('Status', { reservations: eventReservations, onDelete: deleteReservation });
    };

    const reserve = (event) => {
        setReservations([...reservations, event]);
    };

    const favorite = (event) => {
        const updatedEvents = events.map(e => e.id === event.id ? { ...e, isFavorite: !e.isFavorite } : e);
        setEvents(updatedEvents);
    };

    const deleteEvent = (event) => {
        const updatedEvents = events.filter(e => e.id !== event.id);
        setEvents(updatedEvents);
    };

    const updateEvent = (id, name) => {
        const updatedEvents = events.map(e => e.id === id ? { ...e, name } : e);
        setEvents(updatedEvents);
    };

    const filteredEvents = events.filter(event => event.name.includes(search));

    return (
        <View>
            <TextInput placeholder="Buscar eventos" value={search} onChangeText={setSearch} />
            <FlatList
                data={filteredEvents}
                renderItem={({ item }) => <Event event={item} onReserve={handleReserve} onFavorite={favorite} onDelete={deleteEvent} onUpdate={updateEvent} onStatus={handleStatus} />}
            />
        </View>
    );
};

export default HomeScreen;