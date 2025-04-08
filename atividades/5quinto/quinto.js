import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!isNaN(p) && !isNaN(a) && a > 0) {
      const imc = p / (a * a);
      let classificacao = '';

      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc < 25) classificacao = 'Peso normal';
      else if (imc < 30) classificacao = 'Sobrepeso';
      else if (imc < 35) classificacao = 'Obesidade grau 1';
      else if (imc < 40) classificacao = 'Obesidade grau 2';
      else classificacao = 'Obesidade grau 3 (mórbida)';

      setResultado(`IMC: ${imc.toFixed(2)}\n${classificacao}`);
    } else {
      setResultado('Digite peso e altura válidos.');
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Cálculo do IMC
      </Text>

      <TextInput
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />

      {resultado !== '' && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>{resultado}</Text>
      )}
    </View>
  );
}
