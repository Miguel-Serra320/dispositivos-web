import React from 'react';
import { View, Text, Image } from 'react-native';
import perfil from '../image/minha.png'; // Caminho corrigido

export default function App() {
  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Image source={perfil} style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }} />

      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Meu Perfil Profissional</Text>
      <Text style={{ marginTop: 20 }}>Nome: Miguel Serra</Text>
      <Text>Curso: Tecnologia da Informação</Text>
      <Text>Instituição: FATEC</Text>
      <Text>Email: miguel.ti@email.com</Text>

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Experiência:</Text>
      <Text>- Estagiário em Suporte Técnico (2024)</Text>

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Projetos:</Text>
      <Text>- Site pessoal com HTML e CSS</Text>
      <Text>- App de tarefas com React Native</Text>
    </View>
  );
}
