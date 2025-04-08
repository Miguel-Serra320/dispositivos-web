import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const vagas = [
    {
      id: '1',
      titulo: 'Desenvolvedor Front-End',
      empresa: 'Tech Solutions',
      local: 'Remoto',
      descricao: 'Experiência com React e APIs REST.',
      salario: 'R$ 5.500,00',
    },
    {
      id: '2',
      titulo: 'Analista de Suporte',
      empresa: 'InfoSys',
      local: 'São Paulo - SP',
      descricao: 'Suporte técnico ao usuário e manutenção de redes (vai sofrer, já ta avisado).',
      salario: 'R$ 3.000,00',
    },
    {
      id: '3',
      titulo: 'Estágio em Desenvolvimento',
      empresa: 'StartUp X',
      local: 'Curitiba - PR',
      descricao: 'Aprendizado em JavaScript, HTML e CSS.',
      salario: 'R$ 1.200,00 (Bolsa)',
    },
    {
      id: '4',
      titulo: 'Dev Back-End Java',
      empresa: 'Banco Digital',
      local: 'Remoto',
      descricao: 'Spring Boot, APIs, banco de dados SQL.',
      salario: 'R$ 6.800,00',
    },
    {
      id: '5',
      titulo: 'Product Owner (TI)',
      empresa: 'AgileTech',
      local: 'Belo Horizonte - MG',
      descricao: 'Liderança de squads ágeis e definição de backlog.',
      salario: 'R$ 9.000,00',
    },
    {
      id: '6',
      titulo: 'QA Tester',
      empresa: 'SoftTest',
      local: 'Porto Alegre - RS',
      descricao: 'Testes manuais e automatizados com Cypress.',
      salario: 'R$ 4.500,00',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.tituloVaga}>{item.titulo}</Text>
      <Text style={styles.empresa}>{item.empresa} - {item.local}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.salario}>💰 Salário: {item.salario}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💼 Vagas de Emprego - TI</Text>

      <FlatList
        data={vagas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    flex: 1,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#eef6ff',
  },
  tituloVaga: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  empresa: {
    fontSize: 15,
    color: '#1a73e8',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#444',
  },
  salario: {
    marginTop: 5,
    fontSize: 15,
    color: '#28a745',
    fontWeight: 'bold',
  },
});
