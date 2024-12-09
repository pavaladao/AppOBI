// screens/MultipleChoiceScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DiagramBox from '../../components/DiagramBox';

export default function MultipleChoiceScreen({ navigation }){
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const invalidExample1 = ['O/F', 'F/O'];
  const invalidExample2 = ['F', 'O'];
  const invalidExample3 = ['O', 'F'];
  
  const options = [
    { id: 1, ca: true, data: ['-', '-', '-', '-', 'F', 'O'] },
    { id: 2, ca: false, data: ['-', 'O', '-', '-', 'F', '-'] },
    { id: 3, ca: false, data: ['-', 'F', '-', 'O', '-', '-'] },
  ];

  const handleCheck = () => {
    if (selectedOption !== null) {
      setShowFeedback(true);
    }
  };

  const getFeedbackText = () => {
    const correctOption = options.find(option => option.ca);
    return selectedOption !== null && options[selectedOption - 1]?.ca
      ? 'Correto! Esta combinação não é permitida pois viola a regra.'
      : `Incorreto. Tente novamente observando as regras.`;
  };

  const getFeedbackStyle = () => {
    return selectedOption !== null && options[selectedOption - 1]?.ca
      ? styles.successFeedback
      : styles.errorFeedback;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>

          {/* Main Content */}
          <View style={styles.content}>
            {/* Instructions */}
            <Text style={styles.instruction}>
              Para representarmos a segunda regra, teríamos vários possíveis blocos,
              pois existe, no mínimo, um carro entre O e F.
            </Text>

            <Text style={styles.instruction}>
              Assim, é melhor representarmos a condição que não pode acontecer, ou seja,
              O e F juntos (vizinhos ou adjacentes). Temos duas
              possíveis representações, nesse caso. Podemos usar um único bloco com as vari-
              áveis separadas pela barra para frente, ou dois blocos com uma única variável em
              cada posição. 
            </Text>

            <Text style={styles.instruction}>
              Note que os blocos são marcados com uma diagonal, passando pela
              sua parte central, indicando que essas configurações são proibidas.
            </Text>

            {/* Invalid Examples Section */}
            <View style={styles.examplesSection}>
              <View style={styles.invalidExample}>
                  <DiagramBox data={invalidExample1} />
                  <View style={styles.strikethrough} />
              </View>
            </View>
            
            <View style={styles.examplesSection}>
              <View style={styles.invalidExample}>
                <DiagramBox data={invalidExample2} />
                <View style={styles.strikethrough} />
              </View>
              <Text style={styles.orText}>ou</Text>
              <View style={styles.invalidExample}>
                <DiagramBox data={invalidExample3} />
                <View style={styles.strikethrough} />
              </View>
            </View>

            {/* Question */}
            <View style={styles.questionBox}>
              <Text style={styles.questionText}>
                Vamos ver se você entendeu... Qual das opções abaixo mostra uma combinação que
                não pode ser feita?
              </Text>
            </View>

            {/* Options */}
            <View style={styles.optionsSection}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionButton,
                    selectedOption === option.id && styles.selectedOption,
                  ]}
                  onPress={() => setSelectedOption(option.id)}
                >
                  <DiagramBox data={option.data} showIndexes = {true}/>
                </TouchableOpacity>
              ))}
            </View>

            {/* Feedback */}
            {showFeedback && (
              <View style={[styles.feedbackBox, getFeedbackStyle()]}>
                <MaterialIcons
                  name={options[selectedOption - 1]?.ca ? 'check-circle' : 'error'}
                  size={24}
                  color={options[selectedOption - 1]?.ca ? '#059669' : '#DC2626'}
                  style={styles.feedbackIcon}
                />
                <Text
                  style={[
                    styles.feedbackText,
                    options[selectedOption - 1]?.ca ? styles.successText : styles.errorText,
                  ]}
                >
                  {getFeedbackText()}
                </Text>
              </View>
            )}

            {/* Actions */}
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.checkButton}
                onPress={handleCheck}
                activeOpacity={0.8}
              >
                <Text style={styles.checkButtonText}>Verificar Resposta</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => {
                  setSelectedOption(null);
                  setShowFeedback(false);
                  navigation.navigate('Screen4');
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.nextButtonText}>Próxima Etapa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//Screen3Styles
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
    marginBottom: 16,
  },
  examplesSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  invalidExample: {
    position: 'relative',
  },
  strikethrough: {
    position: 'absolute',
    top: '50%',
    left: -5,
    right: -5,
    height: 2,
    backgroundColor: '#DC2626',
    transform: [{ rotate: '12deg' }],
  },
  orText: {
    fontSize: 16,
    color: '#6B7280',
    marginHorizontal: 16,
  },
  questionBox: {
    backgroundColor: '#f9fafb',
    padding: 24,
    borderRadius: 12,
    marginVertical: 24,
  },
  questionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1f2937',
    fontWeight: '500',
  },
  optionsSection: {
    gap: 12,
    marginBottom: 24,
  },
  optionButton: {
    padding: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    backgroundColor: '#f9fafb',
  },
  selectedOption: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  feedbackBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  feedbackIcon: {
    marginRight: 8,
  },
  successFeedback: {
    backgroundColor: '#ecfdf5',
  },
  errorFeedback: {
    backgroundColor: '#fef2f2',
  },
  feedbackText: {
    fontSize: 16,
    flex: 1,
  },
  successText: {
    color: '#059669',
  },
  errorText: {
    color: '#DC2626',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingBottom: 24,
    marginTop: 'auto',
  },
  checkButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    borderWidth: 1,
    borderColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#3b82f6',
    fontSize: 16,
    fontWeight: '600',
  },
});
