const mongoose = require('mongoose');

// Disable deprecation warnings
mongoose.set('strictQuery', false);

// Global test setup
beforeAll(async () => {
  // Set test environment variables
  process.env.NODE_ENV = 'test';
  process.env.DATABASE_URI = 'mongodb://localhost:27017/lightjourney_test';
  process.env.SECRET = 'test_secret_key';
  process.env.PORT = 3001;
});

// Global test teardown
afterAll(async () => {
  // Close all database connections
  await mongoose.connection.close();
  
  // Force exit after tests
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  // eslint-disable-next-line no-console
  console.error('Uncaught Exception:', error);
  process.exit(1);
}); 