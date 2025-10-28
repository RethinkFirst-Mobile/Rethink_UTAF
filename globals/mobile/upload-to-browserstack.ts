/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const user = process.env.BROWSERSTACK_USER;
const key = process.env.BROWSERSTACK_KEY;
const androidApp = process.env.ANDROID_APP;
const iosApp = process.env.IOS_APP;

if (!user || !key) {
  console.error('BROWSERSTACK_USER and BROWSERSTACK_KEY must be set');
  process.exit(1);
}

const filePath = androidApp || iosApp;
if (!filePath) {
  console.error('Set ANDROID_APP or IOS_APP to the local file path to upload');
  process.exit(1);
}

const absolute = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
if (!fs.existsSync(absolute)) {
  console.error(`File not found: ${absolute}`);
  process.exit(1);
}

async function upload(): Promise<void> {
  try {
    const url = 'https://api-cloud.browserstack.com/app-automate/upload';
    const resp = await axios.post(url, fs.createReadStream(absolute), {
      auth: { username: user!, password: key! },
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    if (resp.data && resp.data.app_url) {
      console.log('Uploaded to BrowserStack. app_url:', resp.data.app_url);
      console.log('Set ANDROID_APP or IOS_APP to this value to run tests on BrowserStack.');
    } else {
      console.log('Upload response:', resp.data);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Upload failed:', err && err.response && err.response.data ? err.response.data : err.message);
    process.exit(1);
  }
}

upload();
