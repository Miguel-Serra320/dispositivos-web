import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';

// Importações das atividades
import Primeira from './atividades/1primeira/primeira';
import Segunda from './atividades/2segunda/segunda';
import Terceiro from './atividades/3terceiro/terceiro';
import Quarta from './atividades/4quarta/quarta';
import Quinto from './atividades/5quinto/quinto';
import Sexto from './atividades/6sexto/sexto';
import Setima from './atividades/7setima/setima';
import Oitava from './atividades/8oitava/oitava';
import Nona from './atividades/9nona/nona';
import Decima from './atividades/decima/decima';

export default function App() {
  const [tela, setTela] = useState(null);

  const voltar = () => setTela(null);

  if (tela === 'Primeira') return <Primeira />;
  if (tela === 'Segunda') return <Segunda />;
  if (tela === 'Terceiro') return <Terceiro />;
  if (tela === 'Quarta') return <Quarta />;
  if (tela === 'Quinto') return <Quinto />;
  if (tela === 'Sexto') return <Sexto />;
  if (tela === 'Setima') return <Setima />;
  if (tela === 'Oitava') return <Oitava />;
  if (tela === 'Nona') return <Nona />;
  if (tela === 'Decima') return <Decima />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escolha um APP</Text>
      <Button title="Perfil Profiffional" onPress={() => setTela('Primeira')} />
      <Button title="Contador" onPress={() => setTela('Segunda')} />
      <Button title="Multiplicador" onPress={() => setTela('Terceiro')} />
      <Button title="Alcool vs Gasolina4" onPress={() => setTela('Quarta')} />
      <Button title="Cálculo do IMC" onPress={() => setTela('Quinto')} />
      <Button title="Jogo do Número" onPress={() => setTela('Sexto')} />
      <Button title="Ánuncio de Produtos" onPress={() => setTela('Setima')} />
      <Button title="Vagas de Emprego(scroll)" onPress={() => setTela('Oitava')} />
      <Button title="Vagas de Emprego(FlatList)" onPress={() => setTela('Nona')} />
      <Button title="Abertura de Contas" onPress={() => setTela('Decima')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
