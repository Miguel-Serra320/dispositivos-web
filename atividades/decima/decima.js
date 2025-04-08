import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState('');
  const [brasileiro, setBrasileiro] = useState(false);
  const [exibir, setExibir] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Idade:</Text>
      <TextInput style={styles.input} value={idade} onChangeText={setIdade} keyboardType="numeric" />

      <Text>Sexo:</Text>
      <TextInput style={styles.input} value={sexo} onChangeText={setSexo} />

      <Text>Escolaridade:</Text>
      <TextInput style={styles.input} value={escolaridade} onChangeText={setEscolaridade} />

      <Text>Limite:</Text>
      <TextInput style={styles.input} value={limite} onChangeText={setLimite} keyboardType="numeric" />

      <View style={styles.switchContainer}>
        <Text>Brasileiro:</Text>
        <Switch value={brasileiro} onValueChange={setBrasileiro} />
      </View>

      <Button title="Confirmar" onPress={() => setExibir(true)} />

      {exibir && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subtitulo}>Dados informados:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Escolaridade: {escolaridade}</Text>
          <Text>Limite: {limite}</Text>
          <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
  },
});
