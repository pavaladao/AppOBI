// screens/MultipleChoiceScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DiagramBox from '../../components/DiagramBox';

export default function MultipleChoiceScreen1({ navigation }){
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const example1 = ['C/?', '_', '_', '_','_','?/C'];
  const invalidExample1 = ['O/F', 'F/O'];
  const example2 = ['V/D', '_', '_', '_', 'V/D'];
  
  const options = [
    { id: 1, ca: false, data: ['V', 'O', 'C', 'F', 'D', 'H'] },
    { id: 2, ca: true, data: ['C', 'D', 'H', 'O', 'V', 'F'] },
    { id: 3, ca: false, data: ['C', 'V', 'O', 'F', 'H', 'D'] },
    { id: 4, ca: false, data: ['D', 'O', 'H', 'F', 'V', 'C'] },
  ];

  const handleCheck = () => {
    if (selectedOption !== null) {
      setShowFeedback(true);
    }
  };

  const getFeedbackText = () => {
    const correctOption = options.find(option => option.ca);
    return selectedOption !== null && options[selectedOption - 1]?.ca
      ? 'RESPOSTA CORRETA! Só recaptulando:\n\n\nA opção (A) está errada, pois C não pode estar na terceira vaga.\n\nA opção (B) também está errada, pois existem somente dois carros entre D e V.\n\nA opção (C) está errada, porque não há nenhuma vaga entre O e F.\n\nA opção (D) não vai contra nenhuma regra e, portanto, está correta.\n\nA opção (E) também está errada, pois V nao pode estar na terceira vaga.'
      : 'RESPOSTA INCORRETA! Vamos ver o proquê?:\n\n\nA opção (A) está errada, pois C não pode estar na terceira vaga.\n\nA opção (B) também está errada, pois existem somente dois carros entre D e V.\n\nA opção (C) está errada, porque não há nenhuma vaga entre O e F.\n\nA opção (D) não vai contra nenhuma regra e, portanto, está correta.\n\nA opção (E) também está errada, pois V nao pode estar na terceira vaga.';
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
              Agora que entendemos as regras vamos ás questões... Vou deixar os diagramas das regras aqui pra te lembrar:
            </Text>

            {/*Examples Section */}
            <View style={styles.examplesSection}>
              <View style={styles.invalidExample}>
                  <DiagramBox data={example1} />
              </View>
            </View>

            <View style={styles.examplesSection}>
              <View style={styles.invalidExample}>
                  <DiagramBox data={invalidExample1} />
                  <View style={styles.strikethrough} />
              </View>
            </View>

            <View style={styles.examplesSection}>
              <View style={styles.invalidExample}>
                  <DiagramBox data={example2} />
              </View>
            </View>

            {/* Question */}
            <View style={styles.questionBox}>
              <Text style={styles.questionText}>
                Qual das seguintes opções é uma lista completa e correta de carros ocupando as vagas da esquerda para a direita?
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
                  navigation.navigate('Home');
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.nextButtonText}>Próxima Questão</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//Screen5Styles
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
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#3b82f6',
    fontSize: 16,
    fontWeight: '600',
  },
});
