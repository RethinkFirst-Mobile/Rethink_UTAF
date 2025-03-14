📌 README.md – Appium + WebdriverIO Mobile Automation
# 🚀 WebdriverIO + Appium Mobile Automation
This project sets up **WebdriverIO** with **Appium** to automate mobile applications on both **iOS** and **Android** devices.
---
## 📌 Prerequisites
Before setting up WebdriverIO and Appium, ensure you have the following installed:
### 🔧 **1. System Requirements**
- macOS / Windows / Linux
- Node.js (>= 16.x)
- Java JDK (>= 11)
- Android SDK (for Android testing)
- Xcode (for iOS testing, macOS only)
- Homebrew (macOS users) → [Install Here](https://brew.sh/)
- Python (for WebDriverAgent on iOS)
### 🛠 **2. Install Required Dependencies**
#### ✅ Install Node.js & npm (if not installed)
Check if you have Node.js installed:
```sh
node -v
npm -v
If not installed, install it via Homebrew (macOS) or official site:
brew install node
or download from Node.js Official Site.
✅ Install Java & Android SDK
brew install openjdk@11
export JAVA_HOME=/usr/local/opt/openjdk@11
Install Android SDK via Android Studio and set ANDROID_HOME:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
✅ Install Xcode (For iOS)
xcode-select --install
	• Open Xcode and install Command Line Tools.
	• Accept Xcode license:
sudo xcodebuild -license accept
	• Install WebDriverAgent:
brew install carthage

📦 Setup WebdriverIO & Appium
🔹 1. Clone the Repository
git clone https://github.com/RethinkFirst-Mobile/Webdriverio-Appium.git
cd Webdriverio-Appium
🔹 2. Install Dependencies
npm install
🔹 3. Install Appium
npm install -g appium
Verify installation:
appium -v
🔹 4. Install Appium Drivers
For Android:
appium driver install uiautomator2
For iOS:
appium driver install xcuitest
🔹 5. Start Appium Server
appium

📲 Configure WebdriverIO
📝 Update wdio.conf.js
Modify the WebdriverIO configuration file (wdio.conf.js) to match your device/emulator setup.
Android Example Configuration
capabilities: [{
  platformName: "Android",
  deviceName: "Pixel_4_API_30",
  automationName: "UiAutomator2",
  app: "/path/to/your/app.apk"
}]
iOS Example Configuration
capabilities: [{
  platformName: "iOS",
  deviceName: "iPhone 13",
  automationName: "XCUITest",
  app: "/path/to/your/app.app"
}]

🚀 Running Tests
🔹 1. Start the Emulator / Simulator
Android
emulator -avd <emulator-name>
Check available devices:
adb devices
iOS (macOS)
xcrun simctl list
xcrun simctl boot "iPhone 13"
🔹 2. Run WebdriverIO Tests
Run tests using:
npx wdio run wdio.conf.js
For specific tests:
npx wdio run wdio.conf.js --spec ./test/specs/sampleTest.js

🛠 Debugging
Check Appium Logs
appium --log-level debug
Check WebDriver Logs
adb logcat -s WebDriver
Restart WebDriverAgent (iOS)
xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'platform=iOS Simulator,name=iPhone 13' test

📚 Resources
	• WebdriverIO Docs: https://webdriver.io/
	• Appium Docs: https://appium.io/docs/en/about-appium/intro/
	• Android Developer Docs: https://developer.android.com/
	• Apple Developer Docs: https://developer.apple.com/

🏆 License
This project is licensed under the MIT License.

