# Project App (react_metacritic)

## Crear plantilla en blanco
    $ npx create-expo-app@latest react_metacritic --template blank

## instalar dependencias web
    $ npx expo install react-dom react-native-web @expo/metro-runtime

## instalar safe areaContext ReactNative
    $ npx expo install react-native-safe-area-context

## Añadir el linter (LINT)
    $ npx expo lint

## Añadir el prettier (LINT)
    $ npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
    - Agregar la extension al VScode: 
        * ESLint, Prettier - Code formatter

## Run project
    $ npm start