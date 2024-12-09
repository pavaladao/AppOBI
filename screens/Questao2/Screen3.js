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
              A <Text style={{fontWeight: "bold", color: "black"}}>terceira regra</Text> estabelece que, se H é escolhido, então L deve ser escolhido.
              A representação dessa regra, e sua contrapositiva, é mostrada abaixo.
            </Text>

            <View style={styles.diagramSection}>
              <LogicDiagram leftText='H' rightText='L' rule='Regra' arrowType = "right" />
              <Text style={{margin:20, paddingBottom: 20}}>contrapositiva</Text>
              <LogicDiagram leftText='L' rightText='H' rule='Inferência' isRightTextStriked = {true} isLeftTextStriked = {true} arrowType = "right"/>
            </View>

             {/* Instructions */}
            <View style={styles.explanationBox}>
              <Text style={styles.instructionText}>
              Observe que essas duas últimas regras indicam que a seleção conjunta de H e L é obrigatória, ou seja, não podemos escolher somente H ou somente L.
              </Text>
              <Text style={styles.instructionText}>
              Se escolhermos uma delas, a outra deve ser escolhida <Text style={styles.highlightedText}>também</Text>.
              </Text>
            </View>

            <Text style={styles.instruction}>
              Isso é representado abaixo com as letras separadas por duas setas.
            </Text>
            
            <View style={styles.diagramSection}>
              <LogicDiagram leftText='H' rightText='L' arrowType = "both" rule= 'Seleção conjunta obrigatória'/>
            </View>

            <Text style={styles.instruction}>
            Finalmente, a <Text style={{fontWeight: "bold", color: "black"}}>última regra</Text> é semelhante às anteriores, mas estabelece a dependência entre K e M.
            </Text>

            <View style={styles.diagramSection}>
              <LogicDiagram leftText='K' rightText='M' rule='Regra' arrowType = "right" />
              <Text style={{margin:20, paddingBottom: 20}}>contrapositiva</Text>
              <LogicDiagram leftText='K' rightText='M' rule='Inferência' isRightTextStriked = {true} isLeftTextStriked = {true} arrowType = "right"/>
            </View>

            {/* Action button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Screen4')}
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
