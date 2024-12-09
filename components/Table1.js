import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

export default function Table1() {
  return (
    <View 
      style={[
        styles.container,
        Platform.OS === 'web' && styles.webContainer,
      ]}
    >
      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Campeonato de Lógica</Text>
        <Text style={styles.headerSubText}>OBI-2009-F1N2</Text>
      </View>

      {/* Table Body */}
      <View style={styles.tableBody}>
        {/* Description Section */}
        <Text style={styles.bodyText}>
          O diretor de uma escola precisa selecionar três bons alunos para participar de um campeonato 
          de lógica entre escolas. Ele pode escolher dentre três alunos 
          do período diurno: F, G e H, e três alunos do período noturno: K, L e M. Para compor sua equipe, o diretor se baseia nas seguintes 
          condições:
        </Text>

        {/* Rules Section */}
        <View style={styles.rules}>
          <Text style={styles.ruleText}>• No mínimo um aluno do diurno deve ser escolhido e no mínimo um aluno do noturno deve ser escolhido.</Text>
          <Text style={styles.ruleText}>• Se F é escolhido então G não pode ser escolhido.</Text>
          <Text style={styles.ruleText}>• Se H é escolhido então L deve ser escolhido.</Text>
          <Text style={styles.ruleText}>• Se L é escolhido então H deve ser escolhido.</Text>
          <Text style={styles.ruleText}>• Se K é escolhido então M deve ser escolhido.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  webContainer: {
    ...(Platform.OS === 'web' && {
      maxWidth: '100%', 
      width: '100%',
      alignSelf: 'center',
    }),
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

