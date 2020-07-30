import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVI7roezg4yUdcUJ3qlvSZF1nxRsL-LKA",
    authDomain: "crwn-db-fc930.firebaseapp.com",
    databaseURL: "https://crwn-db-fc930.firebaseio.com",
    projectId: "crwn-db-fc930",
    storageBucket: "crwn-db-fc930.appspot.com",
    messagingSenderId: "524512926666",
    appId: "1:524512926666:web:3aba78173986795a570d33",
    measurementId: "G-M08MSK8L48"
  };
  
firebase.initializeApp(config);

export const createUserProfileDocument = async( userAuth , additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();
    console.log({collectionSnapshot});

    if(!snapShot.exists){
      const { displayName , email } = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message );
      }
    }
    return userRef;
};


export const addCollectionAndItems = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.title);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  return transformedCollection.reduce((accumalator, collection) => {
    accumalator[collection.title.toLowerCase()] = collection;
    return accumalator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;