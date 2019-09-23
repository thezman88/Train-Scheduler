$(document).ready(function() {
      var firebaseConfig = {
        apiKey: "AIzaSyCOYjvXoJnE0B9Fp9uWS8sOGvLDrXeL0d4",
        authDomain: "train-1abff.firebaseapp.com",
        databaseURL: "https://train-1abff.firebaseio.com",
        projectId: "train-1abff",
        storageBucket: "",
        messagingSenderId: "938575230593",
        appId: "1:938575230593:web:474a4953a6d4b1fe44ff80"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var name;
      var destination;
      var firstTrain;
      var frequency = 0;
