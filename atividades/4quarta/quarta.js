import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import foto from '../image/gasolina.png';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMelhorOpcao = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!isNaN(precoAlcool) && !isNaN(precoGasolina) && precoGasolina !== 0) {
      const proporcao = precoAlcool / precoGasolina;
      if (proporcao < 0.7) {
        setResultado('Abasteça com Álcool 🍃');
      } else {
        setResultado('Abasteça com Gasolina ⛽');
      }
    } else {
      setResultado('Digite os dois preços corretamente!');
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50, alignItems: 'center' }}>
      {/* Imagem no topo */}
      <Image
        source={foto}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          marginBottom: 20,
        }}
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Álcool ou Gasolina?
      </Text>

      <TextInput
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          width: '100%',
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          width: '100%',
          marginBottom: 10,
        }}
      />

      <Button title="Calcular" onPress={calcularMelhorOpcao} />

      {resultado !== '' && (
        <Text style={{ marginTop: 20, fontSize: 18, textAlign: 'center' }}>
          {resultado}
        </Text>
      )}
    </View>
  );
}
