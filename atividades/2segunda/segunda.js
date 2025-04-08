import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const adicionar = () => setContador(contador + 1);

  const remover = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Pessoas: {contador}
      </Text>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button title="➕ Entrou" onPress={adicionar} />
        <Button title="➖ Saiu" onPress={remover} />
      </View>

      {contador === 0 && (
        <Text style={{ marginTop: 20, color: 'red' }}>Vazio</Text>
      )}
    </View>
  );
}
