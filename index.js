require('dotenv').config(); 

const admin = require("firebase-admin");

const serviceAccount = require("./movie-app.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL
});

const firestore = admin.firestore();
const movies = require('./movie-list.json');

const db = firestore.collection('movies');

movies.map(async movie => {
    try{
        await db.add(movie)
        // console.log('success')

    }catch(e){
        console.log(e)

    }
}) 