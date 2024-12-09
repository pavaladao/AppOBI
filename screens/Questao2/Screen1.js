// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import CarTable from '../../components/Table1';
import LogicDiagram from '../../components/LogicDiagram';

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          
          <CarTable></CarTable>
          {/* Main Content */}
          <View style={styles.content}>
            <Text style={styles.instruction}>
              Neste tipo de questão representaremos uma regra condicional com a condição suficiente à esquerda, seguida de uma seta, e a condição necessária à direita. Veja o exemplo:
            </Text>

            <View style={styles.diagramSection}>
            <LogicDiagram leftText='Passou no teste' rightText='Estudou' arrowType = "right" fontSize={18}/>
            </View>

            <Text style={styles.instruction}>
              Dada uma regra condicional, é possível inferirmos uma outra regra a partir da inversão e da negação dos termos que compõem a regra.
            </Text>

            <Text style={styles.instruction}>
              Essa nova regra é chamada de Contrapositiva e corresponde ao equivalente lógico de uma proposição. Veja só:
            </Text>
            
            <View style={styles.diagramSection}>
              <LogicDiagram leftText='Passou no vestibular' rightText='Estudou' arrowType = "right" fontSize={16}/>
              <Text style={{margin:20, paddingBottom: 20}}>contrapositiva</Text>
              <LogicDiagram leftText='Estudou' rightText='Passou no vestibular' isRightTextStriked={true} isLeftTextStriked={true} arrowType = "right" fontSize={16}/>
            </View>

            <Text style={styles.instruction}>
              Em seguida veremos as regras gerais aplicadas para o execício
            </Text>

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
    flex: 1,
    flexDirection: 'column', // Mude para column para empilhar verticalmente
    justifyContent: "center", // Centraliza os elementos verticalmente
    alignItems: 'center',     // Alinha os elementos horizontalmente
    marginVertical: 24,
    width: '100%', // Use largura total
    alignSelf: 'center', // Centraliza o contêiner dentro do pai
    marginBottom: 40,
  },  
  arrow: {
    marginVertical: 16,
  },
  explanationBox: {
    backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
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
  explanationBox: {
    backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
});

export default HomeScreen;
