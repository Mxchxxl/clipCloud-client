// db.js

import Dexie from "dexie";

export const db = new Dexie("clipcloud");
db.version(1).stores({
  watchedVideos:
    "++id, _id, userId, title, desc,imgUrl,views,tags,likes,dislikes,createdAt, updatedAt", // Primary key and indexed props
  savedVideos:
    "++id,_id, userId, title, desc,imgUrl,views,tags,likes,dislikes,createdAt, updatedAt", // Primary key and indexed props
});

export default db;
