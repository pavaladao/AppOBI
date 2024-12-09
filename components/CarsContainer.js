// components/CarsContainer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarsContainer = ({ cars }) => {
  return (
    <View style={styles.carsContainer}>
      {cars.map((car, index) => (
        <View key={index} style={styles.carCircle}>
          <Text style={styles.carText}>{car}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  carsContainer: {
    flexDirection: 'row',
    backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 12,
  },
  carCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  carText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
});

export default CarsContainer;
