import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const multiplicar = () => {
    const valor1 = parseFloat(num1);
    const valor2 = parseFloat(num2);

    if (!isNaN(valor1) && !isNaN(valor2)) {
      setResultado(valor1 * valor2);
    } else {
      setResultado('Digite dois números válidos');
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Multiplicação de 2 Números
      </Text>

      <TextInput
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title="Multiplicar" onPress={multiplicar} />

      {resultado !== null && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Resultado: {resultado}
        </Text>
      )}
    </View>
  );
}
