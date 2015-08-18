requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase', 
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
  function($, lodash,  _firebase, Handlebars, bootstrap, add, delete) {



      // Create a referance to your Firebase database
    var myFirebaseRef = new Firebase("https://sizzling-inferno-3854.firebaseio.com/");

      // Listen for when any changes occur to the "songs" key
    myFirebaseRef.child("songs").on("value", function(snapshot) {
      // console.log(snapshot.val()); 




        //Store the entire songs key in a local variable
      var songs = snapshot.val();
      var allSongsArray = [];

      for (var key in songs) {
        allSongsArray[allSongsArray.length] = songs[key];
      }
      // console.log(allSongsArray);

      
  });










