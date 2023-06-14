const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BJkwr8YFq0MvT7PxYFrsapQkS82fSHcGDM5t7aGBF4FBlRCM8Pjy1APatWUjrvx-ICk4io54ks7GN78jPqyhZYo',
  privateKey: 'muV0vo0ls3pC08z8NGdp3YxbleGZLDa3lpt3tCFBaE4'
};

webpush.setVapidDetails(
  'mailto: <nikhil@chai.finance>',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
