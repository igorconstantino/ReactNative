import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Event = ({ event, onReserve, onFavorite, onDelete, onUpdate }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [updatedName, setUpdatedName] = useState(event.name);

	const handleUpdate = () => {
		onUpdate(event.id, updatedName);
		setIsEditing(false);
	};

	return (
		<View>
			{isEditing ? (
				<TextInput value={updatedName} onChangeText={setUpdatedName} />
			) : (
				<Text>{event.name}</Text>
			)}
			<Button title="Reservar" onPress={() => onReserve(event)} />
			<Button title={event.isFavorite ? "Desmarcar Favorito" : "Marcar Favorito"} onPress={() => onFavorite(event)} />
			<Button title="Excluir" onPress={() => onDelete(event)} />
			{isEditing ? (
				<Button title="Atualizar" onPress={handleUpdate} />
			) : (
				<Button title="Editar" onPress={() => setIsEditing(true)} />
			)}
		</View>
	);
};

export default Event;