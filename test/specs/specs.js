
describe('EDU Mobile App - Login & Profile Verification', () => {
    it('Launch App', async () => {
        console.log('✅ App launched successfully.');
    });
    it('Click Login', async () => {
        const loginButton = await $(`android=new UiSelector().text("Log in")`);
        await loginButton.waitForDisplayed({ timeout: 5000 });
        if (await loginButton.isDisplayed() && await loginButton.isEnabled()) {
            await loginButton.click();
            console.log('✅ Login button clicked successfully.');
        } else {
            throw new Error('❌ Login button is not visible or enabled.');
        }
    });
    it('Enter Login and Password', async () => {
        const loginField = await $('android=new UiSelector().resourceId("signInName")');
        await loginField.waitForDisplayed({ timeout: 5000 });
        if (await loginField.isDisplayed() && await loginField.isEnabled()) {
            await loginField.click();
            await loginField.setValue('kavithasub');
            console.log('✅ Entered username successfully.');
        } else {
            throw new Error('❌ Username field is not visible or enabled.');
        }
        const passwordField = await $('android=new UiSelector().resourceId("password")');
        await passwordField.waitForDisplayed({ timeout: 5000 });
        if (await passwordField.isDisplayed() && await passwordField.isEnabled()) {
            await passwordField.click();
            await passwordField.setValue('Welcome@123');
            console.log('✅ Entered password successfully.');
        } else {
            throw new Error('❌ Password field is not visible or enabled.');
        }
    });
    it('Simulate Real Tap on Sign In Button', async () => {
        const signInButton = await $('android=new UiSelector().resourceId("next")');
        await signInButton.waitForDisplayed({ timeout: 5000 });
        if (await signInButton.isDisplayed() && await signInButton.isEnabled()) {
            console.log('✅ Sign-In button found. Performing tap.');
            // Get element location for tap
            const location = await signInButton.getLocation();
            const size = await signInButton.getSize();
            const centerX = Math.floor(location.x + size.width / 2);
            const centerY = Math.floor(location.y + size.height / 2);
            // Perform real touch action
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: centerX, y: centerY },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 100 },
                        { type: 'pointerUp', button: 0 }
                    ]
                }
            ]);
            console.log('✅ Simulated real tap on Sign-In button.');
            // Wait for home page to load after login
            await driver.pause(10000);
        } else {
            throw new Error('❌ Sign-In button is not visible or enabled.');
        }
    });
    it('Navigate to Profile & Verify First Name', async () => {
        console.log('⏳ Navigating to Profile Page...');
    
        // Tap on More Button
        const moreButton = await $('android=new UiSelector().text("More")');
        await moreButton.waitForDisplayed({ timeout: 5000 });
    
        if (await moreButton.isDisplayed() && await moreButton.isEnabled()) {
            await moreButton.click();
            console.log('✅ Tapped on More button.');
        } else {
            throw new Error('❌ More button is not visible or enabled.');
        }
    
        await driver.pause(2000); // Wait for animation
    
        // Tap on Profile Button
        const profileButton = await $('android=new UiSelector().description("Profile button icon")');
        await profileButton.waitForDisplayed({ timeout: 5000 });
    
        if (await profileButton.isDisplayed() && await profileButton.isEnabled()) {
            await profileButton.click();
            console.log('✅ Tapped on Profile button.');
        } else {
            throw new Error('❌ Profile button is not visible or enabled.');
        }
    
        await driver.pause(3000); // Wait for Profile page to load
    
        // ✅ Verify First Name using UiSelector
        console.log('⏳ Verifying First Name...');
        const firstName = await $('android=new UiSelector().text("Roman Dev-db1")');
        await firstName.waitForDisplayed({ timeout: 5000 });
    
        const firstNameText = await firstName.getText();
        if (firstNameText === "Roman Dev-db1") {
            console.log(`✅ First Name is correct: ${firstNameText}`);
        } else {
            throw new Error(`❌ First Name is incorrect. Expected: "Roman Dev-db1", Found: "${firstNameText}"`);
        }
    
        // ✅ Verify Last Name
        console.log('⏳ Verifying Last Name...');
        const lastName = await $('android=new UiSelector().text("Isanin Dev-db1")');
        await lastName.waitForDisplayed({ timeout: 5000 });
        const lastNameText = await lastName.getText();
        if (lastNameText === "Isanin Dev-db1") {
            console.log(`✅ Last Name is correct: ${lastNameText}`);
        } else {
            throw new Error(`❌ Last Name is incorrect. Expected: "Isanin Dev-db1", Found: "${lastNameText}"`);
        }
        await driver.pause(2000); // Small delay
        // ✅ Verify Username
        console.log('⏳ Verifying Username...');
        const username = await $('android=new UiSelector().text("kavithasub")');
        await username.waitForDisplayed({ timeout: 5000 });
        const usernameText = await username.getText();
        if (usernameText === "kavithasub") {
            console.log(`✅ Username is correct: ${usernameText}`);
        } else {
            throw new Error(`❌ Username is incorrect. Expected: "kavithasub", Found: "${usernameText}"`);
        }
        console.log('🎉 All profile verifications passed successfully!');
    });
    
});
