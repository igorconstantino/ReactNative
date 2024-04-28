import React from 'react';
import { View, FlatList } from 'react-native';
import Reservation from '../components/Reservation';

const StatusScreen = ({ route }) => {
    const { reservations, onDelete } = route.params;

    const handleDelete = (reservation) => {
        onDelete(reservation);
    };

    return (
        <View>
            <FlatList
                data={reservations}
                renderItem={({ item }) => (
                    <Reservation
                        reservation={item}
                        onDelete={() => handleDelete(item)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default StatusScreen;