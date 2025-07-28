import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function MainScreen({ navigation }) {
  const [agenciaData, setAgenciaData] = useState(null);
  const [loading, setLoading] = useState(false);

  // URL base de tu API Django
  const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

  const fetchAgenciaInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/agencia/`);
      const data = await response.json();
      setAgenciaData(data);
      Alert.alert('Éxito', 'Datos cargados desde Django!');
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'No se pudo conectar con el backend');
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/hello/`);
      const data = await response.json();
      Alert.alert('Conexión exitosa', data.message);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'No se pudo conectar con el backend');
    }
  };

  const goBackHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBackHome} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        {/* Sección de bienvenida */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>¡Bienvenido!</Text>
          <Text style={styles.welcomeSubtitle}>
            Estás en el panel principal de la agencia
          </Text>
        </View>

        {/* Botones de acción */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Pruebas de Conectividad</Text>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={testConnection}
          >
            <Text style={styles.actionButtonIcon}>🔗</Text>
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>Probar Conexión</Text>
              <Text style={styles.actionButtonSubtext}>Test con backend Django</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={fetchAgenciaInfo}
          >
            <Text style={styles.actionButtonIcon}>📊</Text>
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>
                {loading ? 'Cargando...' : 'Cargar Datos'}
              </Text>
              <Text style={styles.actionButtonSubtext}>Información de la agencia</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Mostrar datos si existen */}
        {agenciaData && (
          <View style={styles.dataCard}>
            <Text style={styles.dataTitle}>{agenciaData.nombre}</Text>
            <Text style={styles.dataDescription}>{agenciaData.descripcion}</Text>
            
            <Text style={styles.servicesTitle}>Nuestros Servicios:</Text>
            {agenciaData.servicios.map((servicio, index) => (
              <View key={index} style={styles.serviceItem}>
                <Text style={styles.serviceBullet}>•</Text>
                <Text style={styles.serviceText}>{servicio}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Sección de próximas funcionalidades */}
        <View style={styles.comingSoonSection}>
          <Text style={styles.sectionTitle}>Próximamente</Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>🔐 Sistema de autenticación</Text>
            <Text style={styles.featureItem}>📝 Formularios de contacto</Text>
            <Text style={styles.featureItem}>📱 Más pantallas y navegación</Text>
            <Text style={styles.featureItem}>🔔 Notificaciones push</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#4fc3f7',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 60,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeCard: {
    backgroundColor: '#1a1a2e',
    padding: 25,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#333',
  },
  welcomeTitle: {
    color: '#4fc3f7',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    color: '#b0b0b0',
    fontSize: 16,
  },
  actionsSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  actionButtonIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  actionButtonContent: {
    flex: 1,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  actionButtonSubtext: {
    color: '#888',
    fontSize: 14,
  },
  dataCard: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#4fc3f7',
  },
  dataTitle: {
    color: '#4fc3f7',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dataDescription: {
    color: '#b0b0b0',
    fontSize: 16,
    marginBottom: 15,
  },
  servicesTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  serviceBullet: {
    color: '#4fc3f7',
    fontSize: 16,
    marginRight: 8,
  },
  serviceText: {
    color: '#b0b0b0',
    fontSize: 14,
    flex: 1,
  },
  comingSoonSection: {
    marginBottom: 30,
  },
  featureList: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  featureItem: {
    color: '#888',
    fontSize: 14,
    marginBottom: 8,
  },
});
