// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Platform} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CarsContainer from '../../components/CarsContainer';
import CarTable from '../../components/Table';
import DiagramBox from '../../components/DiagramBox';

const HomeScreen = ({ navigation }) => {
  const diagramData = ['_', '_', '_', '_', '_', '_'];
  const cars = ['C', 'D', 'F', 'H', 'O', 'V'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <CarTable></CarTable>
          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.instruction}>
              Nesta questão representaremos os carros como variáveis livres (que podem mudar) no formato circular, e
              as vagas como variáveis básicas (que não mudam) no formato de quadrados. Em um diagrama, vai ficar da seguinte forma:
            </Text>

            {/* Diagram section */}
            <View style={styles.diagramSection}>
              {/* Cars container */}
              <CarsContainer cars={cars} />

              {/* Arrow */}
              <AntDesign name="arrowdown" size={32} color="#3b82f6" style={styles.arrow} />

              {/* Diagram */}
              <DiagramBox data={diagramData} showIndexes={true}/>
            </View>

            {/* Instructions */}
            <View style={styles.instructionsBox}>
              <Text style={styles.instructionText}>
                As regras dessa questão são do tipo Combinação e, portanto, representam relações do tipo
                junto-separado.
              </Text>
              <Text style={styles.instructionText}>
                Para representar regras do tipo Combinação, usaremos blocos que indicam quão próximas ou
                distantes as variáveis livres estão.
              </Text>
              <Text style={[styles.instructionText, styles.highlightedText]}>
                Na próxima etapa te explico melhor!
              </Text>
            </View>

            {/* Action button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Screen2')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Próxima Etapa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//Screen1Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 0,
    ...(Platform.OS === 'web' && {
      maxHeight: '100%',
      overflow: 'auto',
    }),
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  card: {
    flex: 1,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    ...(Platform.OS === 'web' && {
      maxWidth: 800,
      alignSelf: 'center',
    }),
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f2937',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4b5563',
    marginBottom: 24,
  },
  diagramSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  arrow: {
    marginVertical: 16,
  },
  instructionsBox: {
    backgroundColor: '#f9fafb',
    padding: 24,
    borderRadius: 12,
    marginVertical: 24,
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4b5563',
    marginBottom: 16,
  },
  highlightedText: {
    color: '#2563eb',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
