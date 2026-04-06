# design-onCrunch

Protótipos de design para o app **onChurch** — um aplicativo mobile para comunidades de igreja, construído com React Native e Expo.

## O que é

O design-onCrunch contém variações visuais da tela principal (Mural) do app onChurch. Cada variante apresenta uma abordagem de design diferente para a mesma funcionalidade:

- **Opção A (Gradiente)** — Header com gradiente roxo-azul, cards com sombras suaves, botões com gradiente
- **Opção C (Flat)** — Design limpo e flat, paleta azul com tons neutros, sem gradientes

### Funcionalidades prototipadas

- Tela de boas-vindas com avatar e notificações
- Card de aniversariantes da semana
- Card de família da semana com membros
- Botão de oração
- Navegação inferior (Mural, Publicações, Calendário, Geral)
- Botão flutuante (FAB)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/go) no celular (para testar no dispositivo)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/TONICOL0/design-onCrunch.git
cd design-onCrunch

# Instale as dependências
npm install
```

## Como usar

```bash
# Inicie o servidor de desenvolvimento
npm start
```

Após iniciar, você pode:

1. **No celular:** Escaneie o QR code com o app Expo Go (Android) ou câmera (iOS)
2. **No emulador:** Pressione `a` para Android ou `i` para iOS
3. **No navegador:** Pressione `w` para abrir no web

### Alternar entre designs

Na tela do app, use o seletor no canto superior direito para alternar entre as variantes:

- **A: Gradiente** — Design com gradientes e sombras
- **C: Flat** — Design flat e minimalista

## Tecnologias

- [React Native](https://reactnative.dev/) 0.81
- [Expo](https://expo.dev/) SDK 54
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [@expo/vector-icons](https://icons.expo.fyi/) (Ionicons, MaterialCommunityIcons, Feather)

## Autor

**Antônio Soares**
- GitHub: [@TONICOL0](https://github.com/TONICOL0)
- Email: support@tonicolo.com

## Licença

Este projeto é privado e de uso pessoal.
