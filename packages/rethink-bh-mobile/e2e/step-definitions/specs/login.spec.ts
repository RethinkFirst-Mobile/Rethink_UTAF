import LoginPage from '../../../pages/LoginPage';
import ProfilePage from '../../../pages/ProfilePage';
import config from '../../../../../globals/mobile/config';

describe('Login and Profile Verification', () => {
    it('Should log in and verify profile details', async () => {
        console.log("Starting Login and Profile Verification Test...");

        // **Step 1: Perform Login**
        await LoginPage.login(config.username, config.password);

        // **Step 2: Wait for Home Page to Load**
        console.log("Waiting for home page to fully load...");
        await (global as any).driver.pause(5000);
        
        // **Step 3: Navigate to Profile**
        console.log("Navigating to Profile Page...");
        await ProfilePage.navigateToProfile();

        // **Step 4: Verify Profile Details**
        console.log("Verifying Profile Information...");
        await ProfilePage.verifyProfileDetails();
    });
});
