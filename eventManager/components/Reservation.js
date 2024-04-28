import React from 'react';
import { View, Text, Button } from 'react-native';

const Reservation = ({ reservation, onDelete }) => (
    <View>
        <Text>{reservation.name}</Text>
        <Button title="Excluir" onPress={() => onDelete(reservation)} />
    </View>
);

export default Reservation;