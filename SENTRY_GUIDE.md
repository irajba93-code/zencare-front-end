# Sentry Setup Guide

This guide outlines the streamlined steps to get Sentry running in our application for error tracking and user feedback.

## 1. Create Account & Project
1. Go to [sentry.io](https://sentry.io/) and sign up.
2. Create a new **Project** matching our tech stack (e.g., React, Next.js).
3. Copy your specific **DSN** (Data Source Name) provided at the end of setup.

## 2. Installation
Install the Sentry SDK in the project root:
```bash
# Example for a standard React application
npm install @sentry/react
```

## 3. Initialization
Initialize Sentry as early as possible in your application's lifecycle (e.g., `main.tsx` or `index.js`).

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR-SENTRY-DSN-HERE", 
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, // Set to 1.0 to capture 100% of transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample rate in production
  replaysOnErrorSampleRate: 1.0, // Replay on error
});
```

## 4. Enable User Feedback Widget
To allow users to submit feedback directly (especially when they encounter an error):

1. Go to your Sentry dashboard -> **Settings** -> **Projects** -> [Your Project] -> **User Feedback**.
2. Depending on your UI preference, either use the default Crash Report Modal that appears upon a crash, or implement the interactive Feedback Widget using the dashboard configuration.

## 5. Verification
1. Throw an intentional error in your code: `throw new Error("Sentry Test Error");`
2. Check your Sentry Dashboard under **Issues** to verify it was captured.
