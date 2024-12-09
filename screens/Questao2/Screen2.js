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
          {/* Main Content */}
          <View style={styles.content}>

            <Text style={styles.instruction}>
              No exercício em questão a variável base é representada pela equipe com 3 alunos (1, 2, 3). 
            </Text>

            <Text style={styles.instruction}>
              A variável livre é representada pelos alunos que comporão a equipe - período diurno (F, G, H) e noturno (K, L, M).
            </Text>

            <Text style={styles.instruction}>
              Não há a necessidade de fazermos um diagrama de variáveis para um agrupamento (equipe), visto que ele dependerá das regras.
            </Text>

            <Text style={[styles.instructionText, styles.highlightedText]}>
              Vamos analisar as regras do jogo:
            </Text>

            <Text style={styles.instruction}>
              A <Text style={{fontWeight: "bold", color: "black"}}>primeira regra</Text> estabelece um número mínimo de alunos a serem escolhidos, o que caracteriza um jogo parcialmente definido.
            </Text>

            <Text style={styles.instruction}>
              A <Text style={{fontWeight: "bold", color: "black"}}>segunda regra</Text> corresponde a uma regra Condicional: se F é escolhido, então G não pode ser escolhido.
            </Text>

            <Text style={styles.instruction}>
             A representação dessa regra, assim como da sua contrapositiva (inferência), é mostrada abaixo:
            </Text>
            
            <View style={styles.diagramSection}>
              <LogicDiagram leftText='F' rightText='G' rule = 'Regra' isRightTextStriked = {true} arrowType = "right" />
              <Text style={{margin:20, paddingBottom: 20}}>contrapositiva</Text>
              <LogicDiagram leftText='G' rightText='F' rule = 'Inferência' isRightTextStriked = {true} arrowType = "right"/>
            </View>

            {/* Instructions */}
            <View style={styles.explanationBox}>
              <Text style={styles.instructionText}>
                Veja que a contrapositiva estabelece que, se G é escolhido, então F não pode ser escolhido.
              </Text>
              <Text style={styles.instructionText}>
                Assim, podemos concluir que a seleção conjunta de F e G é <Text style={styles.highlightedText}>proibida</Text>.
              </Text>
            </View>

            <Text style={styles.instruction}>
              Representaremos essa situação com as letras separadas por duas setas cortadas por uma diagonal.
            </Text>
            
            <View style={styles.diagramSection}>
              <LogicDiagram leftText='F' rightText='G' arrowType = "both" isArrowStriked = {true} rule= 'Seleção conjunta proibida'/>
            </View>

            {/* Action button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Screen3')}
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
    flexDirection: 'row', // Elementos dispostos em linha
    flexWrap: 'wrap',     // Permite quebra de linha quando não houver espaço
    justifyContent: "space-around", // Centraliza os elementos horizontalmente
    alignItems: 'center',     // Alinha os elementos verticalmente
    marginVertical: 24,
    maxWidth: '90%', // Limita a largura a 80% do contêiner pai
    alignSelf: 'center', // Centraliza o contêiner dentro do pai
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
