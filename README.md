# Project Documentation

## 1. Project Repository

The project is version-controlled using Git, and the repository is hosted on [GitHub](https://github.com/AlizadehAFPN/Revpanda).

- [Link to Repository](https://github.com/AlizadehAFPN/Revpanda)

## 2. Setup Instructions

### Prerequisites

- Node.js installed
- Pod installed
- NPM (Node Package Manager) or Yarn installed
- Xcode and/or Android Studio installed (for iOS and Android development)
- Git installed

### Cloning the Repository

```bash
git clone https://github.com/AlizadehAFPN/Revpanda.git
cd Revpanda
```

### Installing Dependencies
You don't need to run pod install in this project as it runs automatically after each yarn install execution.

```bash
yarn install
```

## 3. Running the App Locally

### iOS

```bash
yarn ios
# or
npm run ios
```

### Android

```bash
yarn android
# or
npm run android
```

### 4. Running Tests

To run tests:

```bash
yarn test
# or
npm test
```

To run Detox E2E tests:

Detox Test Configuration:

Detox is currently configured only for iOS in this project. For configuring Detox for Android, follow the instructions provided [here] https://wix.github.io/Detox/docs/introduction/getting-started.


Ensure you have a .detoxrc.js file in the root of the project (it may be hidden). Adjust the parameters in this file, such as the current running iOS device in the devices part and your Metro Bundler port (if different from 8081). Failing to do so may result in Detox tests not working as expected.
The default simulator is set to iPhone 15.

Detox is only running when the Metro server is running

```bash
yarn detox:build
yarn detox:test
# or
npm run detox:build
npm run detox:test

```

## 5. Additional Notes

- **Linting:**
  Run linting to ensure code quality:

  ```bash
  yarn lint
  # or
  npm run lint
  ```

- **Test Watcher:**
  To run tests in watch mode:

  ```bash
  yarn test:watch
  # or
  npm run test:watch
  ```

"This project is written to showcase basic abilities in React Native, including responsive handling, state management (using context), basic navigation handling, unit tests, and end-to-end tests, etc. For more complex projects, you can refer to:

- [GitHub][RickAndMorty](https://github.com/AlizadehAFPN/RickAndMorty)
- [GitHub][diet](https://github.com/AlizadehAFPN/diet)"
```
