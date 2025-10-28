interface AppConfig {
  username: string;
  password: string;
  districtId: string;
  cleverUsername: string;
  cleverPassword: string;
}

const config: AppConfig = {
  username: process.env.TEST_USERNAME || 'kavithasub',
  password: process.env.TEST_PASSWORD || 'Welcome@123',
  districtId: process.env.DISTRICT_ID || '6076fd3886f9e29339baa99d',
  cleverUsername: process.env.CLEVER_USERNAME || 'lily.jones',
  cleverPassword: process.env.CLEVER_PASSWORD || 'vizzle',
};

export default config;
