

      $(document).ready(function(){
        // firebase setup
      var config = {
        apiKey: "AIzaSyCOYjvXoJnE0B9Fp9uWS8sOGvLDrXeL0d4",
        authDomain: "train-1abff.firebaseapp.com",
        databaseURL: "https://train-1abff.firebaseio.com",
        projectId: "train-1abff",
        storageBucket: "",
        messagingSenderId: "938575230593",
        appId: "1:938575230593:web:474a4953a6d4b1fe44ff80"
      };
      firebase.initializeApp(config);

      var database = firebase.database();

      var name;
      var destination;
      var firstTrain;
      var frequency = 0;

      $("#add-train").on("click", function() {
          event.preventDefault();
          // reciving new train data
          name = $("#train-name").val().trim();
          destination = $("#destination").val().trim();
          firstTrain = $("#first-train").val().trim();
          frequency = $("#frequency").val().trim();

          // Push to database
          database.ref().push({
              name: name,
              destination: destination,
              firstTrain: firstTrain,
              frequency: frequency,
              dateAdded: firebase.database.ServerValue.TIMESTAMP
          });
          $("form")[0].reset();
      });

      

      database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
          // Change the HTML to reflect
          $("#name-display").html(snapshot.val().name);
          $("#email-display").html(snapshot.val().email);
          $("#age-display").html(snapshot.val().age);
          $("#comment-display").html(snapshot.val().comment);
      });
  });
