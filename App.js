import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MuralOptionA from './src/screens/MuralOptionA';
import MuralOptionC from './src/screens/MuralOptionC';

const screens = {
  A: MuralOptionA,
  C: MuralOptionC,
};

const labels = {
  A: 'Gradiente',
  C: 'Flat',
};

export default function App() {
  const [option, setOption] = useState('A');
  const Screen = screens[option];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Screen />

      {/* Seletor de opções */}
      <View style={styles.selector}>
        {Object.keys(screens).map((key) => (
          <TouchableOpacity
            key={key}
            style={[styles.selectorBtn, option === key && styles.selectorBtnActive]}
            onPress={() => setOption(key)}
          >
            <Text style={[styles.selectorText, option === key && styles.selectorTextActive]}>
              {key}: {labels[key]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selector: {
    position: 'absolute',
    top: 50,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderRadius: 12,
    padding: 4,
    zIndex: 999,
  },
  selectorBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  selectorBtnActive: {
    backgroundColor: '#fff',
  },
  selectorText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.7)',
  },
  selectorTextActive: {
    color: '#000',
  },
});
