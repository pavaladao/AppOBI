import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Table() {
  return (
    <View 
      style={[
        styles.container,
        Platform.OS === 'web' && styles.webContainer,
      ]}
    >
      {/* Header da Tabela */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Vagas de Estacionamento</Text>
        <Text style={styles.headerSubText}>OBI-2009-F2N1</Text>
      </View>

      {/* Corpo da Tabela */}
      <View style={styles.tableBody}>
        <Text style={styles.bodyText}>
          Em um prédio de uma companhia existem seis vagas de estacionamento,
          separadas das demais vagas, para os diretores da empresa...
        </Text>
        <View style={styles.rules}>
          <Text style={styles.ruleText}>• Há exatamente três carros entre V e D.</Text>
          <Text style={styles.ruleText}>• Existe no mínimo um carro entre O e F.</Text>
          <Text style={styles.ruleText}>• C é adjacente a somente um único carro.</Text>
        </View>
      </View>
    </View>
  );
}

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
