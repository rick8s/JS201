// update database

define(["jquery", "q"], function($, Q) {
    return function() {
    var deferred = Q.defer();

    $.ajax({
      url: "https://nss-rick-family.firebaseio.com/"
    })
    .done(function(data) {
      deferred.resolve(data);
    })
    .fail(function(xhr, status, error){
      deferred.reject(error);
    });
      return deferred.promise;
  };
});

// Submit new family member

define(["jquery"], function($) {
  $(document).on('click', '#submitInfo', function(e) {
      e.preventDefault(); 
      addFamily()
      .then(function() {
        $("#addFamily")[0].reset();
      })
      .fail(function(xhr, status, error) {
        deferred.reject(error);
      });
    }); 
});



