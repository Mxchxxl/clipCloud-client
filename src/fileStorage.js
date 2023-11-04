import { Account, Client, Storage } from "appwrite";

const fileEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_CLIPCLOUD_PROJECT_ID;

const email = import.meta.env.VITE_APPWRITE_EMAIL;
const password = import.meta.env.VITE_APPWRITE_PASSWORD;

const client = new Client().setEndpoint(fileEndpoint).setProject(projectId);

const storage = new Storage(client);
const account = new Account(client);

const loginIfNeeded = async () => {
  try {
    // Check if user is already authenticated
    const currentUser = await account.get();
    // console.log("User already logged in:", currentUser);
    return currentUser;
  } catch (error) {
    // Not logged in, so create a new session
    if (error.code === 401) {
      const session = await account.createEmailSession(email, password);
      // console.log("New session created:", session);
      return session;
    } else {
      throw error; // Something else went wrong
    }
  }
};

loginIfNeeded();

export { client, storage, account };
