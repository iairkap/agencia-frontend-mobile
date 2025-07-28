# Agencia Frontend - React Native App

Esta es la aplicación móvil de la agencia desarrollada con React Native y Expo.

## Configuración del Entorno

### Requisitos
- Node.js 16+
- npm o yarn
- Expo CLI
- Expo Go app en tu teléfono (para pruebas en dispositivo real)

### Instalación

1. Navega al directorio del frontend:
```bash
cd frontend-react-native/agencia-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

## Comandos Disponibles

- `npm start` - Inicia el servidor de desarrollo de Expo
- `npm run android` - Ejecuta en emulador Android
- `npm run ios` - Ejecuta en simulador iOS (solo macOS)
- `npm run web` - Ejecuta en navegador web

## Configuración para conectar con el Backend

### Para emulador/simulador:
La app está configurada para conectarse a `http://127.0.0.1:8000` (localhost).

### Para dispositivo físico:
1. Encuentra tu IP local:
   ```bash
   # En macOS/Linux
   ifconfig | grep "inet "
   
   # En Windows
   ipconfig
   ```

2. Cambia la URL en `App.js`:
   ```javascript
   const API_BASE_URL = 'http://TU_IP_LOCAL:8000/api';
   ```

## Funcionalidades

### Conectividad con Backend
- ✅ Prueba de conexión con Django
- ✅ Obtención de datos de la agencia
- ✅ Manejo de errores de conexión
- ✅ Interfaz responsive

### Componentes Principales
- **App.js**: Componente principal con lógica de conexión API
- Botones para probar conexión y cargar datos
- Display de información de la agencia
- Manejo de estados de carga

## Estructura del Proyecto

```
frontend-react-native/
└── agencia-app/
    ├── App.js              # Componente principal
    ├── package.json        # Dependencias y scripts
    ├── app.json           # Configuración de Expo
    └── assets/            # Imágenes y recursos
```

## Próximos Pasos

1. **Navegación**: Implementar React Navigation para múltiples pantallas
2. **Estado Global**: Agregar Context API o Redux para manejo de estado
3. **Autenticación**: Sistema de login/registro
4. **Formularios**: Pantallas para contacto y servicios
5. **Notificaciones**: Push notifications con Expo
6. **Almacenamiento**: AsyncStorage para datos offline

## Problemas Comunes

### Error de conexión con backend
- Verificar que Django esté ejecutándose en el puerto 8000
- Revisar la IP configurada en API_BASE_URL
- Verificar configuración CORS en Django

### Problemas con Expo
- Reinstalar dependencias: `rm -rf node_modules && npm install`
- Limpiar caché: `expo start -c`
- Verificar versión de Node.js

## Recursos

- [Documentación de Expo](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Go App](https://expo.dev/client)
