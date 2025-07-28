import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [agenciaData, setAgenciaData] = useState(null);
  const [loading, setLoading] = useState(false);

  // URL base de tu API Django (cambiar por tu IP local si usas dispositivo físico)
  const API_BASE_URL = 'http://127.0.0.1:8000/api';

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

  const testHello = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/hello/`);
      const data = await response.json();
      Alert.alert('Respuesta del servidor', data.message);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'No se pudo conectar con el backend');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agencia App</Text>
      <Text style={styles.subtitle}>React Native + Django</Text>
      
      <TouchableOpacity style={styles.button} onPress={testHello}>
        <Text style={styles.buttonText}>Probar Conexión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={fetchAgenciaInfo}>
        <Text style={styles.buttonText}>
          {loading ? 'Cargando...' : 'Cargar Info Agencia'}
        </Text>
      </TouchableOpacity>

      {agenciaData && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>{agenciaData.nombre}</Text>
          <Text style={styles.dataText}>{agenciaData.descripcion}</Text>
          <Text style={styles.servicesTitle}>Servicios:</Text>
          {agenciaData.servicios.map((servicio, index) => (
            <Text key={index} style={styles.serviceItem}>• {servicio}</Text>
          ))}
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dataContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dataTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dataText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  serviceItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});
