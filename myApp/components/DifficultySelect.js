import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const DifficultySelect = ({ difficultyLevel, setDifficultyLevel }) => (
  <RNPickerSelect
    selectedValue={difficultyLevel}
    onValueChange={(itemValue) => setDifficultyLevel(itemValue)}
    items={[
        { label: 'Fácil', value: 'easy' },
        { label: 'Médio', value: 'medium' },
        { label: 'Difícil', value: 'hard' },
    ]}
    placeholder={{ label: "Selecione a dificuldade", value: null }}
  />
);

export default DifficultySelect;