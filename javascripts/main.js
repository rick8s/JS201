requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase', 
    'q': '../bower_components/q/q'
  },

  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "firebase", "hbs", "bootstrap", "addFamily", "deleteFamily"], 
  function($, _firebase, Handlebars, bootstrap, addFamily, deleteFamily) {



      // Create a referance to your Firebase database
    var myFirebaseRef = new Firebase("https://nss-rick-family.firebaseio.com/");

      // Listen for when any changes occur to the "songs" key
    myFirebaseRef.child("family").on("value", function(snapshot) {
      // console.log(snapshot.val()); 




        //Store the entire songs key in a local variable
      var family = snapshot.val();
      var allFamilyArray = [];

      for (var key in family) {
        allFamilyArray[allFamilyArray.length] = family[key];
      }
      // console.log(allSongsArray);

      
    });
  });










