# RaichuWallet - A Cross-Platform Bitcoin and Ethereum Wallet Built in React Native

* Private keys never leave your device.
* SegWit-first. Replace-By-Fee support.
* Encryption. Plausible deniability.

The development is still under alpha version.

## BUILD & RUN IT

* In your console:

```bash
git clone https://github.com/HenryHK/RaichuWallet
cd RaichuWallet
npm install
react-native link
# for ios, use xcode to open the project file under `ios` directory
# for android, use android studio to open `android` directory
# this project use ExpoKit, run the following command in shell when you try to run the application:
exp start
``` 

## TESTS

```bash
npm run test
```

## LICENSE

MIT