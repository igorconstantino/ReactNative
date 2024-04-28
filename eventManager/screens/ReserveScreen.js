import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ReserveScreen = ({ route, navigation }) => {
	const { event, onReserve } = route.params;
	const [name, setName] = useState('');
	const [tickets, setTickets] = useState(1);

	const handleReserve = () => {
		onReserve({ ...event, name, tickets });
		navigation.goBack();
	};

	return (
		<View>
			<TextInput placeholder="Nome" value={name} onChangeText={setName} />
			<TextInput placeholder="Ingressos" value={String(tickets)} onChangeText={text => setTickets(Number(text))} keyboardType="numeric" />
			<Button title="Confirmar Reserva" onPress={handleReserve} />
		</View>
	);
};

export default ReserveScreen;