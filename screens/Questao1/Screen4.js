
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import DraggableArray from '../../components/DraggableArray';
import DiagramBox from '../../components/DiagramBox';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const InstructionText = ({ children }) => (
  <Text style={styles.instructionText}>{children}</Text>
);

export default function DragAndDropScreen1({ navigation }) {
  const diagramData = ['C/?', '_', '_', '_', '_', '?/C'];
  const validConfigs = [
    [null, null, null, null, null, 'C'],
    ['C', null, null, null, null, null],
  ];
  const blocks = ['C'];
  const arraySize = 6;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          {/* Instructions Section */}
          <View style={styles.instructionsContainer}>
            <InstructionText>
              A última regra, a regra 3, estabelece que C só pode ter um vizinho (adjacente) e, portanto, seu posicionamento deve ser nas extremidades, posições 1 ou 6.
            </InstructionText>
            
            <InstructionText>
              Como consequência, as posições de 2 a 5 ficam proibidas para C, uma outra regra (oculta) inferida a partir de uma regra da questão.
            </InstructionText>
          </View>
          
          {/* Explanation Section */}
          <View style={styles.explanationBox}>
            <InstructionText>
              Essa situação é representada a seguir com a dupla C/? e ?/C, significando que C pode estar na primeira posição e alguma outra letra na sexta posição, ou o contrário:
            </InstructionText>
          </View>

          {/* Diagram Section */}
          <View style={styles.diagramSection}>
            <DiagramBox data={diagramData} />
          </View>

          {/* Additional Instructions */}
          <View style={styles.instructionsContainer}>
            <InstructionText style={styles.highlightedText}>
              Para treinar, arraste o bloco e forme todas as combinações possíveis para o carro C nas vagas: (Dica: Existem duas possibilidades).
            </InstructionText>
          </View>

          {/* Draggable Array Component */}
          <View style={styles.draggableSection}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <DraggableArray 
                validConfigs={validConfigs} 
                blocks={blocks} 
                arraySize={arraySize} 
                initialNumPossibilities={2}
              />
            </GestureHandlerRootView>
          </View>

          {/* Navigation Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Screen5')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Próxima Etapa</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
//Screen4Styles
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
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  instructionsContainer: {
    marginBottom: 24,
  },
  instructionText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 24,
  },
  diagramSection: {
    alignItems: 'center',
    marginVertical: 24,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
  },
  diagram: {
    marginVertical: 8,
  },
  explanationBox: {
    backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  highlightedText: {
    color: '#2563eb',
    fontWeight: '600',
  },
  draggableSection: {
    marginVertical: 24,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    minHeight: 200, // Adjust based on your DraggableArray component
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
