import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('');

  const jogar = () => {
    const numeroGerado = Math.floor(Math.random() * 10) + 1;
    const numeroPalpite = parseInt(palpite);

    if (!isNaN(numeroPalpite) && numeroPalpite >= 1 && numeroPalpite <= 10) {
      if (numeroPalpite === numeroGerado) {
        setMensagem(`🎉 Parabéns! Você acertou! O número era ${numeroGerado}.`);
      } else {
        setMensagem(`😢 Errou! O número era ${numeroGerado}.`);
      }
    } else {
      setMensagem('Digite um número entre 1 e 10.');
    }
    setPalpite('');
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Jogo do Número Aleatório 
      </Text>

      <TextInput
        placeholder="Digite um número de 1 a 10"
        keyboardType="numeric"
        value={palpite}
        onChangeText={setPalpite}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title="Tentar a Sorte" onPress={jogar} />

      {mensagem !== '' && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>{mensagem}</Text>
      )}
    </View>
  );
}
