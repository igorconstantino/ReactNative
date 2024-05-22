import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Example_mazza from './calendarios_types/mmazzarolo';
import Example_maggi from './calendarios_types/maggialejandro';
import Example_henninghall_modal from './calendarios_types/henninghall_modal';
import Example_henninghall_inlined from './calendarios_types/henninghall_inlined';

export default function App() {
  return ( //é só preciso descomentar cada um para teste, fazendo teste um de cada vez
    <Example_mazza></Example_mazza>
    // <Example_maggi></Example_maggi>
    // <Example_henninghall_modal></Example_henninghall_modal>
    // <Example_henninghall_inlined></Example_henninghall_inlined>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});