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

      $("#add-train").on("click", function() {
      event.preventDefault();
      // Storing and retreiving new train data
      name = $("#train-name").val().trim();
      destination = $("#destination").val().trim();
      firstTrain = $("#first-train").val().trim();
      frequency = $("#frequency").val().trim();

      // Pushing to database
      database.ref().push({
          name: name,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
      $("form")[0].reset();
  });
