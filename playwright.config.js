const { config } = require('dotenv');
const path = require('path');

// Load the appropriate .env file based on TEST_ENV (e.g., .env.test)
const env = process.env.TEST_ENV || 'test';
config({ path: path.resolve(__dirname, `.env.${env}`) });

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  globalSetup: require.resolve('./setup/auth-setup'),
  globalTeardown: require.resolve('./setup/auth-teatdown'),
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  globalTeardown:require.resolve('./setup/auth-teatdown'),
  use: {
    storageState: 'playwright/.auth/user.json',  // Reuse the authentication state in your tests
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json',
      },
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
    },
  ],
});
