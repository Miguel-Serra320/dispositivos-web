import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const vagas = [
    {
      titulo: 'Desenvolvedor Front-End',
      empresa: 'Tech Solutions',
      local: 'Remoto',
      descricao: 'Experiência com React e APIs REST.',
      salario: 'R$ 5.500,00',
    },
    {
      titulo: 'Analista de Suporte',
      empresa: 'InfoSys',
      local: 'São Paulo - SP',
      descricao: 'Suporte técnico ao usuário e manutenção de redes (vai sofrer, já ta avisado).',
      salario: 'R$ 3.000,00',
    },
    {
      titulo: 'Estágio em Desenvolvimento',
      empresa: 'StartUp X',
      local: 'Curitiba - PR',
      descricao: 'Aprendizado em JavaScript, HTML e CSS.',
      salario: 'R$ 1.200,00 (Bolsa)',
    },
    {
      titulo: 'Dev Back-End Java',
      empresa: 'Banco Digital',
      local: 'Remoto',
      descricao: 'Spring Boot, APIs, banco de dados SQL.',
      salario: 'R$ 6.800,00',
    },
    {
      titulo: 'Product Owner (TI)',
      empresa: 'AgileTech',
      local: 'Belo Horizonte - MG',
      descricao: 'Liderança de squads ágeis e definição de backlog.',
      salario: 'R$ 9.000,00',
    },
    {
      titulo: 'QA Tester',
      empresa: 'SoftTest',
      local: 'Porto Alegre - RS',
      descricao: 'Testes manuais e automatizados com Cypress.',
      salario: 'R$ 4.500,00',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Vagas de Emprego - TI</Text>

      <ScrollView style={{ marginTop: 20 }}>
        {vagas.map((vaga, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.tituloVaga}>{vaga.titulo}</Text>
            <Text style={styles.empresa}>{vaga.empresa} - {vaga.local}</Text>
            <Text style={styles.descricao}>{vaga.descricao}</Text>
            <Text style={styles.salario}> Salário: {vaga.salario}</Text>
          </View>
        ))}
      </ScrollView>
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
