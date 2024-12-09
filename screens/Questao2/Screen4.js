// screens/MultipleChoiceScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import LogicDiagram from '../../components/LogicDiagram';

export default function MultipleChoiceScreen1({ navigation }){
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const options = [
    { id: 1, ca: false, data: ' F, H e M.' },
    { id: 2, ca: false, data: 'G, L e M.'},
    { id: 3, ca: false, data: 'H, K e L.' },
    { id: 4, ca: false, data: 'H, L e M.'},
    { id: 5, ca: true, data: 'K, L e M.' },
  ];

  const handleCheck = () => {
    if (selectedOption !== null) {
      setShowFeedback(true);
    }
  };

  const getFeedbackText = () => {
    const correctOption = options.find(option => option.ca);
    return selectedOption !== null && options[selectedOption - 1]?.ca
      ? 'RESPOSTA CORRETA! Só recaptulando:\n\n\nAs opções (A), (B) e (E) estão erradas, pois H e L devem ser selecionadas conjuntamente.\n\nA opção (C) está errada, pois, se tem K, deve ter M também.\n\nPortanto, a opção (D) é a correta.'
      : 'RESPOSTA INCORRETA! Vamos ver o proquê?:\n\n\nAs opções (A), (B) e (E) estão erradas, pois H e L devem ser selecionadas conjuntamente.\n\nA opção (C) está errada, pois, se tem K, deve ter M também.\n\nPortanto, a opção (D) é a correta.';
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
              Agora que entendemos as regras vamos ás questões... Vou deixar os diagramas lógicos das regras aqui pra te lembrar:
            </Text>

            {/*Examples Section */}
            <View style={styles.examplesSection}>
              <LogicDiagram leftText='F' rightText='G     ' arrowType='both' isArrowStriked={true}/>
              <LogicDiagram leftText='K' rightText='M' arrowType='right'/>
              <LogicDiagram leftText='H' rightText='L' arrowType='both'/>
              <LogicDiagram leftText='M' rightText='K' arrowType='right' isLeftTextStriked={true} isRightTextStriked={true}/>
            </View>

            {/* Question */}
            <View style={styles.questionBox}>
              <Text style={styles.questionText}>
                Qual das seguintes opções é uma lista completa e correta de alunos escolhidos para a equipe?
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
                  <Text>{option.data}</Text>
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
    flex: 1,
    flexDirection: 'row', // Elementos dispostos em linha
    flexWrap: 'wrap',     // Permite quebra de linha quando não houver espaço
    justifyContent: "space-around", // Centraliza os elementos horizontalmente
    alignItems: 'center',     // Alinha os elementos verticalmente
    marginVertical: 24,
    maxWidth: '90%', // Limita a largura a 80% do contêiner pai
    alignSelf: 'center', // Centraliza o contêiner dentro do pai
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
