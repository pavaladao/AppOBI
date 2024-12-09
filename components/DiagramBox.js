import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiagramBox = ({ data, blocked = false, showIndexes = false }) => {
  return (
    <View style={styles.diagramContainer}>
      {data.map((item, index) => (
        <View key={index} style={styles.diagramItem}>
          {/* Box */}
          <View style={[styles.diagramBox, blocked && styles.blockedBox]}>
            <Text style={styles.diagramText}>{item}</Text>
            {blocked && <View style={styles.diagonalLine} />}
          </View>
          {/* Index */}
          {showIndexes && <Text style={styles.indexText}>{index + 1}</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  diagramContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  diagramItem: {
    alignItems: 'center', // Align box and index vertically
    marginHorizontal: 4,  // Add space between items
  },
  diagramBox: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  blockedBox: {
    borderColor: '#e11d48',
  },
  diagonalLine: {
    position: 'absolute',
    width: '141.4%',
    height: 2,
    backgroundColor: '#e11d48',
    transform: [{ rotate: '45deg' }],
  },
  diagramText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  indexText: {
    marginTop: 4,
    fontSize: 14,
    color: '#6b7280', // Gray color for indexes
  },
});

export default DiagramBox;
