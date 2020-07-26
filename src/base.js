import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWWkvgYn-F9w5lGRIlnr0qstJHmrrFKp4",
    authDomain: "catch-of-the-day-istiak.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-istiak.firebaseio.com",
    // projectId: "catch-of-the-day-istiak",
    // storageBucket: "catch-of-the-day-istiak.appspot.com",
    // messagingSenderId: "404157801709",
    // appId: "1:404157801709:web:ea58b726c7beb1db5158e4",
    // measurementId: "G-L8LTLBMPEH"

})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp} 

export default base 
