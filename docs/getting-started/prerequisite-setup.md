# Prerequisite Setup

## Auth0

** Coming Soon **

## Storage Providers

Dester supports [Google Drive](#google-drive), [OneDrive](#onedrive), and [SharePoint](#sharepoint) as storage provider. Using them will require extra setup steps as outlined in their respective sections below.

You can ignore uneeded storage providers and only setup the storage providers you will use.

Dester also supports local storage, which requires no additional setup.

### Google Drive

1. Create a Google account if you don't have one already (who doesn't have a Google account 🤔)
2. Visit the [Google Cloud Console](https://console.cloud.google.com) dashboard
3. Create a new Google Cloud Console project
4. In the search bar, type `Google Drive API`. Find and click on the matching result in the list
5. Click `Enable this API`
6. On the sidebar on the left, find and click on `APIs & Services`
7. Click on `Credentials`
8. Click `Create Credentials` and select `OAuth Client ID`
9. Under `Application Type` select `Web Application`
10. Under `Authorized JavaScript origins` add a URI with your server URL. For example `https://dester.gq`
11. Under `Authorized redirect URIs` add a URI with your server URL but with `/settings/gdrive` at the end of it. For example `https://dester.gq/settings/gdrive`
12. You will be prompted with a client ID and client secret. Note both these values down
13. Done!

### OneDrive

1. Create a [Microsoft Azure](https://portal.azure.com/) account
2. In the Azure Portal search bar, find `Azure Active Directory` and click on it
3. In the sidebar, find `App Registrations` and click on it
4. Press the `New Application` button
5. Under `Supported account types` select the 3rd option (Accounts in any organizational directory and personal Microsoft accounts)
6. Under `Redirect URI` set the platform to `Single Page Application (SPA)`
7. Input your Dester deployment's domain with `/callback` after it. For example, `https://dester.gq/callback`
8. Press the `Register` Button
9. You will be redirected to a new page. Note down the `Application (client) ID` for later
10. Done!

### SharePoint
