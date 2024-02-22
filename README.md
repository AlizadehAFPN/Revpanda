# Project Documentation

## 1. Project Repository

The project is version-controlled using Git, and the repository is hosted on [GitHub](https://github.com/AlizadehAFPN/Repvanda).

- [Link to Repository](https://github.com/AlizadehAFPN/Repvanda)

## 2. Setup Instructions

### Prerequisites

- Node.js installed
- Pod installed
- NPM (Node Package Manager) or Yarn installed
- Xcode and/or Android Studio installed (for iOS and Android development)
- Git installed

### Cloning the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Installing Dependencies
You don't need to run pod install in this project as it runs automatically after each yarn install execution.

```bash
npm install
# or
yarn install
```

### iOS Specific Setup

```bash
cd ios
pod install
cd ..
```

## 3. Running the App Locally

### Start Metro Server

Ensure the Metro server is running:

```bash
npm start
# or
yarn start
```

### iOS

```bash
npm run ios
# or
yarn ios
```

### Android

```bash
npm run android
# or
yarn android
```

### 4. Running Tests

To run tests:

```bash
npm test
# or
yarn test
```

To run Detox E2E tests:

```bash
npm run detox:build
npm run detox:test
# or
yarn detox:build
yarn detox:test
```

## 5. Additional Notes

- **Linting:**
  Run linting to ensure code quality:

  ```bash
  npm run lint
  # or
  yarn lint
  ```

- **Test Watcher:**
  To run tests in watch mode:

  ```bash
  npm run test:watch
  # or
  yarn test:watch
  ```

"This project is written to showcase basic abilities in React Native, including responsive handling, state management (using context), basic navigation handling, unit tests, and end-to-end tests, etc. For more complex projects, you can refer to:

- [GitHub][RickAndMorty](https://github.com/AlizadehAFPN/RickAndMorty)
- [GitHub][diet](https://github.com/AlizadehAFPN/diet)"
```
