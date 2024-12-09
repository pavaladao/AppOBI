import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView
} from 'react-native';

const QuestionCard = ({ title, onPress }) => (
  <TouchableOpacity 
    style={styles.card} 
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const questions = [
    { 
      id: 'Questao1', 
      title: 'Questões de Ordenação',
      navigator: 'Questao1Navigator' 
    },
    { 
      id: 'Questao2', 
      title: 'Questões de Agrupamento',
      navigator: 'Questao2Navigator'
    },
    { 
      id: 'Questao3', 
      title: 'Questões de Cálculo',
      navigator: 'Questao3Navigator'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tipos de Questão OBI</Text>
        </View>
        
        <View style={styles.cardsContainer}>
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              title={question.title}
              onPress={() => navigation.navigate(question.navigator)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'white',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
  },
  cardsContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
});

export default HomeScreen;