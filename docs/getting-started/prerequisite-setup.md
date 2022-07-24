# Prerequisite Setup

## Environment Variables

These are three required environemnt variables for starting a Dester deployment:

-   `MONGODB_DOMAIN`: a MongoDB cluster domain
    -   Example: `cluster.fe43d.mongodb.net`
-   `MONGODB_USERNAME`: a username for a MongoDB admin user that has access to the cluster inputted in the MONGODB_DOMAIN
    -   Example: `dester`
-   `MONGODB_PASSWORD`: a password for a MongoDB admin user that has access to the cluster inputted in the MONGODB_DOMAIN
    -   Example: `P@ssword123`

## MongoDB

To store all the media data, Dester uses [MongoDB](https://mongodb.com/), which is completely free.

1. Sign up to [MongoDB](https://mongodb.com/)
2. Create a 'Cluster'
3. There are different tiers of clusters. The free one is titled `Shared`
4. Select the location of the cluster. This doesn't matter too much, but try to choose a region closer to your server
5. Press the `Create Cluster` button
6. The process of creating the cluster will take a few minutes, so be patient
7. Once it has been created, press the `Connect` button
8. Choose any of the connection methods
9. On the next page, you will see a code block with a URL. In the URL, find and note down the domain that looks something like `cluster.fe43d.mongodb.net`. This is your `MONGODB_DOMAIN` env variable
10. On the MongoDB dashboard's sidebar, click `Database Access`
11. On this page, press the `Add New Database User` button
12. Fill in the username and password, and keep it for later. These are your `MONGODB_USERNAME` AND `MONGODB_PASSWORD` env variables
13. Set the `Built-in Role` to `Atlas Admin`
14. Press the `Add User` button
15. Done!

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

## Auth0

** Coming Soon **
