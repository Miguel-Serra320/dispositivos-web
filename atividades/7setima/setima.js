import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const produtos = [
    { nome: 'Fone Bluetooth', preco: 'R$ 89,90', descricao: 'Som potente e conexão rápida.' },
    { nome: 'Camiseta Anime', preco: 'R$ 49,90', descricao: 'Estampa exclusiva em algodão.' },
    { nome: 'Mouse Gamer', preco: 'R$ 119,00', descricao: 'RGB, 6 botões, alta precisão.' },
    { nome: 'Teclado Mecânico', preco: 'R$ 199,90', descricao: 'Switch azul, com LED.' },
    { nome: 'Smartwatch', preco: 'R$ 299,90', descricao: 'Monitoramento de saúde e notificações.' },
    { nome: 'Mochila Antifurto', preco: 'R$ 139,90', descricao: 'Resistente e com entrada USB.' },
    { nome: 'Caixa de Som JBL', preco: 'R$ 349,90', descricao: 'À prova d’água, bateria durável.' },
    { nome: 'Caneca Personalizada', preco: 'R$ 29,90', descricao: 'Feita sob medida pra você.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📢 Anúncios de Produtos</Text>

      <ScrollView style={{ marginTop: 20 }}>
        {produtos.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
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
    backgroundColor: '#f9f9f9',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    color: '#1a8917',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#555',
  },
});
