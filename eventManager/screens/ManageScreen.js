import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ManageScreen = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({});

    const addEvent = () => {
        setEvents([...events, newEvent]);
        setNewEvent({});
    };

    const deleteAll = () => {
        setEvents([]);
    };

    return (
        <View>
            <TextInput placeholder="Nome do Evento" onChangeText={text => setNewEvent({ ...newEvent, name: text })} />
            <Button title="Criar Evento" onPress={addEvent} />
            <Button title="Apagar Todos" onPress={deleteAll} />
        </View>
    );
};

export default ManageScreen;