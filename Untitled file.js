import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }} // substitua pela sua foto se quiser
          style={styles.profileImage}
        />
        <Text style={styles.name}>João Silva</Text>
        <Text style={styles.title}>Desenvolvedor Full Stack</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📇 Dados Pessoais</Text>
        <Text>📍 Local: São Paulo, SP</Text>
        <Text>📧 Email: joao.silva@email.com</Text>
        <Text>📞 Telefone: (11) 99999-9999</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎓 Formação</Text>
        <Text>🎓 Bacharelado em Ciência da Computação - USP (2018 - 2022)</Text>
        <Text>📚 Cursos: React Native, Node.js, UX/UI Design</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💼 Experiência</Text>
        <Text>🔹 Desenvolvedor Frontend na TechCorp (2022 - Presente)</Text>
        <Text>🔹 Estagiário em Desenvolvimento Web na DevSolutions (2020 - 2021)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚀 Projetos</Text>
        <Text>✅ App de Finanças Pessoais em React Native</Text>
        <Text>✅ Sistema de Gestão Escolar (Web)</Text>
        <Text>✅ Portfólio pessoal com animações interativas</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f4f8',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 16,
    color: '#555',
  },
  section: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0066cc',
  },
});
