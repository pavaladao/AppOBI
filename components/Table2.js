import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

export default function Table2() {
  const Wrapper = Platform.OS === 'web' ? View : ScrollView;
  return (
    <Wrapper contentContainerStyle={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}> Pane Seca</Text>
          <Text style={styles.headerSubText}>OBI-2005-N2</Text>
        </View>

        {/* Table Body */}
        <View style={styles.tableBody}>
          {/* Description Section */}
          <Text style={styles.bodyText}>
          A estrada entre Abrigo e Feliciana é a única ligação terrestre entre essas duas cidades. Ela atravessa todo o extenso cerrado de Mato Baixo, sem passar por nenhuma outra cidade. Assim, os motoristas têm que se preocupar em escolher bem em quais dos postos de gasolina irão colocar combustível, sob pena de ficar parado no meio do caminho por “pane seca” (falta de combustível).{'\n\n'}
          Há um posto de combustível em Abrigo, um em Feliciana, e outros quatro postos ao longo da estrada entre as duas cidades. O combustível nos postos de Abrigo e Feliciana é mais barato do que nos outros quatro postos ao longo da estrada, de forma que os motoristas preferem encher o tanque no posto da cidade antes de uma viagem entre as duas cidades. O preço do combustível é igual para os quatro postos ao longo da estrada.{'\n\n'}
          Os seis postos são identificados pelas letras A (posto em Abrigo), B, C, D, E e F (posto em Feliciana). A distância entre o posto de Abrigo e o posto de Feliciana é de 430 quilômetros. Considerando como ponto inicial o posto da cidade de Abrigo, os postos estão localizados nos quilômetros 0 (posto de Abrigo), 33, 108, 171, 332 e 430 (posto de Feliciana).{'\n\n'}
          Alan quer viajar entre as duas cidades com sua motocicleta, que tem um tanque com capacidade de 8 litros, e necessita de sua ajuda para planejar a viagem.
          </Text>

          {/* Rules Section */}
          {/* <View style={styles.rules}>
            <Text style={styles.ruleText}>• No mínimo um aluno do diurno deve ser escolhido e no mínimo um aluno do noturno deve ser escolhido.</Text>
            <Text style={styles.ruleText}>• Se F é escolhido então G não pode ser escolhido.</Text>
            <Text style={styles.ruleText}>• Se H é escolhido então L deve ser escolhido.</Text>
            <Text style={styles.ruleText}>• Se L é escolhido então H deve ser escolhido.</Text>
            <Text style={styles.ruleText}>• Se K é escolhido então M deve ser escolhido.</Text>
          </View> */}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 8,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 3,
    textAlign: 'left',
  },
  headerSubText: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
  },
  tableBody: {
    marginTop: 16,
  },
  bodyText: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  rules: {
    marginTop: 8,
    backgroundColor: '#fff',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  ruleText: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
});

