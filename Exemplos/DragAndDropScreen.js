
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import DraggableArray from '../components/DraggableArray';
import DiagramBox from '../components/DiagramBox';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const InstructionText = ({ children }) => (
  <Text style={styles.instructionText}>{children}</Text>
);

export default function DragAndDropScreen({ navigation }) {
  const diagramData = ['V/D', '_', '_', '_', 'V/D'];
  const validConfigs = [
    [null, 'D', null, null, null, 'V'],
    [null, 'V', null, null, null, 'D'],
    ['D', null, null, null, 'V', null],
    ['V', null, null, null, 'D', null],
  ];
  const blocks = ['D', 'V'];
  const arraySize = 6;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          {/* Instructions Section */}
          <View style={styles.instructionsContainer}>
            <InstructionText>
              Comecemos pela primeira regra, que diz que, entre V e D, devem existir exatamente três carros.
            </InstructionText>
            
            <InstructionText>
              No caso dessa primeira regra, iremos usar a seguinte representação:
            </InstructionText>
          </View>

          {/* Diagram Section */}
          <View style={styles.diagramSection}>
            <DiagramBox data={diagramData} />
          </View>

          {/* Explanation Section */}
          <View style={styles.explanationBox}>
            <InstructionText>
              O diagrama acima indica que entre V e D, ou entre D e V, existem exatamente três posições 
              (vagas do estacionamento). Usamos uma barra para frente, separando as duas letras (V/D) 
              para representar as duas possibilidades de posicionamento das variáveis V e D.
            </InstructionText>
          </View>

          {/* Additional Instructions */}
          <View style={styles.instructionsContainer}>
            <InstructionText>
              Os blocos devem ser posicionados, sempre que possível, ao longo da representação da variável base.
            </InstructionText>
            
            <InstructionText style={styles.highlightedText}>
              Arraste os blocos e forme todas as combinações possíveis para os carros D e V nas vagas: 
              (Dica: Existem quatro possibilidades).
            </InstructionText>
          </View>

          {/* Draggable Array Component */}
          <View style={styles.draggableSection}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <DraggableArray 
                validConfigs={validConfigs} 
                blocks={blocks} 
                arraySize={arraySize} 
                initialNumPossibilities={4}
              />
            </GestureHandlerRootView>
          </View>

          {/* Navigation Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('MultipleChoice')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Próxima Etapa</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
