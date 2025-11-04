// Local: app/(tabs)/index.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView }
from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; // Importar o router para os botões

export default function HomeScreen() { 

  function handleGoToFeedback() {
    router.push('/feedback'); 
  }

  function handleGoBack() {
    console.log("Botão de voltar pressionado");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        
        {/* ======================================= */}
        {/* AQUI ESTÁ A CORREÇÃO (1 de 2): */}
        {/* ======================================= */}
        <Image
          source={require('../../assets/images/logo-scorefit.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Ionicons name="notifications-outline" size={24} color="#0F0" style={styles.bell} />
      </View>

      {/* Foto de perfil */}
      <View style={styles.profileContainer}>
        
        {/* ======================================= */}
        {/* AQUI ESTÁ A CORREÇÃO (2 de 2): */}
        {/* ======================================= */}
        <Image
          source={require('../../assets/images/perfil.png')} 
          style={styles.profileImage}
        />
        <TouchableOpacity onPress={() => router.push('/editperfil')}>
        <Text style={styles.editProfile}>Editar Perfil</Text>
</TouchableOpacity>

      </View>

      {/* Texto */}
      <Text style={styles.text}>
        Edite seu perfil ou dê seu feedback.
      </Text>

      {/* Botão (conectado à função) */}
      <TouchableOpacity style={styles.button} onPress={handleGoToFeedback}>
        <Text style={styles.buttonText}>Enviar feedback</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Direitos reservados pela ScoreFit @</Text>
      </View>
    </ScrollView>
  );
}

// Seus estilos (nenhuma mudança necessária aqui)
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
  },
  bell: {
    marginRight: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editProfile: {
    color: '#00B020',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#007F0C',
    fontWeight: 'bold',
    fontSize: 17,
  },
  footer: {
    backgroundColor: '#007F0C',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 60,
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});