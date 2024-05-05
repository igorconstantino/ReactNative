import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ManageScreen = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', description: '' });
  const [reservations, setReservations] = useState([]);

  const addEvent = () => {
    if (newEvent.name.trim() === '') {
      alert('Please enter a valid event name');
      return;
    }
    const newEventObject = { id: Date.now(),...newEvent };
    setEvents([...events, newEventObject]);
    setNewEvent({ name: '', description: '' });
  };

  const deleteAllReservations = () => {
    setReservations([]);
  };

  const deleteAllEvents = () => {
    setEvents([]);
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do Evento"
        value={newEvent.name}
        onChangeText={(text) => setNewEvent({...newEvent, name: text })}
      />
      <Button title="Criar Evento" onPress={addEvent} />
      <Button title="Apagar Todos os Eventos" onPress={deleteAllEvents} />
      <Button title="Apagar Todas as Reservas" onPress={deleteAllReservations} />
    </View>
  );
};

export default ManageScreen;