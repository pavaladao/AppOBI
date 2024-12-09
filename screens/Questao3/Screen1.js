// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CarsContainer from '../../components/CarsContainer';
import TableQuestion from '../../components/Table2';
import TableData from '../../components/Table3';

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <TableQuestion/>
          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.instruction}>
              Nesta questão temos um jogo do tipo Cálculo.
            </Text>

            <Text style={styles.instruction}>
              Como poderemos verificar, as regras anteriores não se aplicam a esse tipo de problema, pois sua solução depende exclusivamente de algum tipo de cálculo envolvendo os dados fornecidos pela questão, e não o arranjo ou agrupamento de objetos.
            </Text>

            <Text style={styles.instruction}>
              O que pode ser feito então é resumir as informações do problema em um quadro para facilitar a vizualização. Dá uma olhada:
            </Text>

            <TableData/>

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
    flex: 1,
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
