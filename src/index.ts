import { initializeApp } from 'firebase/app';
import { ref, getStorage, connectStorageEmulator, getDownloadURL } from 'firebase/storage';

const config = {
  projectId: "demo-signed-urls",
  storageBucket: "demo-signed-urls.appspot.com",
};

const app = initializeApp(config);
const storage = getStorage(app);
connectStorageEmulator(storage, "127.0.0.1", 9199);

(async function() {
  try {
    const url = await getDownloadURL(ref(storage, "c"));
    console.log(`${url}`)
  } catch (e) {
    console.log(`error getting download url: ${e}`);
  }
})()