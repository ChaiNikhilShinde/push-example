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
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };


const pushSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/cz5NQJA1vAY:APA91bExE9d2rEq9u4dsDEhD_If4WTDeplTIEfaghRQl7HUEE8E5T8FwsFBt0PsEI2Assus4NK7qG2enS7NV-dNhA7SYQYry1A5u15rmmp3z7DfRkx0ESFB_7hVX1TyPti7R8X2paCbT",
  expirationTime: null,
  keys: {
    p256dh: "BPmb9Navou-IVpHWWeVsvDOuYMWtSiGlu_n8swyfosDObClZ2zaXaQhMQC_pOyJjQzTQhP9Zbu9ZJWigF4uaMrs",
    auth: "MG-Vr11o3fjurvo7MK5B9A"
  }
}

webpush.sendNotification(pushSubscription, 'send notification');
