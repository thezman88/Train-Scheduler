$(document).ready(function() {
      var firebaseConfig = {
        apiKey: "AIzaSyC-Dsl_wAvKRxN5UdZ9L5urHoNd4l-EXM0",
        authDomain: "train-schedule-139cf.firebaseapp.com",
        databaseURL: "https://train-schedule-139cf.firebaseio.com",
        projectId: "train-schedule-139cf",
        storageBucket: "",
        messagingSenderId: "138339544019",
        appId: "1:138339544019:web:097dc723078c193625dd26"
      };
      firebase.initializeApp(firebaseConfig);

    });
    var database = firebase.database();

        // Variables for the onClick event
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
