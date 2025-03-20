# Project App (react_metacritic)

## Crear plantilla en blanco
    $ npx create-expo-app@latest react_metacritic --template blank

## instalar dependencias web
    $ npx expo install react-dom react-native-web @expo/metro-runtime

## instalar safe areaContext ReactNative
    $ npx expo install react-native-safe-area-context
    $ npx expo install react-native-svg
    $ npm install react-native-device-info

## Añadir el linter (LINT)
    $ npx expo lint

## Añadir el prettier (LINT)
    $ npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
    - Agregar la extension al VScode: 
        * ESLint, Prettier - Code formatter

## Run project
    $ npm start 


---
# Notas locales
- Usar 10.0.2.2 para emuladores de Android
    Si estás usando un emulador de Android, reemplaza localhost con *10.0.2.2*, que es un alias para acceder al servidor local desde el emulador:
        
        *freeToGames.js*
        const LATEST_GAMES = "http://10.0.2.2:3000/api/games";