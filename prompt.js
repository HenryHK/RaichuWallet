import { AlertIOS, Platform } from 'react-native';
import prompt from 'react-native-prompt-android';

module.exports = function (title, text) {
  return new Promise(function (resolve, reject) {
    if (Platform.OS === 'ios') {
      AlertIOS.prompt(
        title,
        text,
        [
          {
            text: 'OK',
            onPress: password => {
              console.log('OK Pressed, password: ' + password);
              resolve(password);
            },
          },
        ],
        'secure-text',
      );
    } else {
      prompt(
        title,
        text,
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          {
            text: 'OK',
            onPress: password => {
              console.log('OK Pressed, password: ' + password); resolve(password)
            }
          },
        ],
        {
          type: 'secure-text',
          cancelable: true,
          placeholder: 'placeholder'
        }
      );
    }
  });
};
