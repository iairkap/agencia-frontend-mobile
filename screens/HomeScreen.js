import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  const handleEnter = () => {
    // Navegar a la pantalla principal de la app
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header con logo */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>🏢</Text>
          <Text style={styles.companyName}>Agencia Digital</Text>
        </View>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.helloText}>¡Hello!</Text>
          <Text style={styles.welcomeText}>
            Bienvenido a tu agencia digital de confianza
          </Text>
          <Text style={styles.descriptionText}>
            Desarrollamos aplicaciones móviles, sitios web y 
            soluciones digitales para hacer crecer tu negocio.
          </Text>
        </View>

        {/* Botón de entrada */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.enterButton}
            onPress={handleEnter}
            activeOpacity={0.8}
          >
            <Text style={styles.enterButtonText}>Entrar</Text>
            <Text style={styles.enterButtonIcon}>→</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tu socio tecnológico ideal
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  helloText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4fc3f7',
    marginBottom: 20,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 16,
    color: '#b0b0b0',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  enterButton: {
    backgroundColor: '#4fc3f7',
    paddingHorizontal: 50,
    paddingVertical: 18,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4fc3f7',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  enterButtonText: {
    color: '#1a1a2e',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  enterButtonIcon: {
    color: '#1a1a2e',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
    fontStyle: 'italic',
  },
});
