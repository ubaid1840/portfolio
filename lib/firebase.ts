const admin = require('firebase-admin');
// const serviceAccount = require("/etc/secrets/service-key.json")

const GOOGLE_CLOUD_CREDENTIALS = JSON.parse(
  Buffer.from(process.env.GOOGLE_CLOUD_CREDENTIALS!, 'base64').toString('utf-8')
);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(GOOGLE_CLOUD_CREDENTIALS),
    });
}


const db = admin.firestore();

export { admin, db };