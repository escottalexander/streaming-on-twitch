$(document).ready(function(){
//First set up any variables
//Add any channel here that you want on the list
var streamersList = ["capcomfighters","iateyourpie","LCK1","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas","Orange_HS"];

  
//create the unsorted list
function createList(){
  $("#all").addClass("disabled");
  $("#onlyLive").removeClass("disabled");
  $("#onlyOffline").removeClass("disabled");
    $("#streams").empty();
  streamersList.forEach(function(streamName){
    var call = 'https://wind-bow.gomix.me/twitch-api/channels/' + streamName + '?callback=?';
    
    $.getJSON(call, function(data){
      //create and move the variables to the html
      var url = data.url;
      var name = data.display_name;
      var logo = data.logo;
      var status = data.status;
      var labelSwitch = '';
      var labelActivity = 
          $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamName + '?callback=?', function(json) {
              var isActive = (json.stream !== null);
              labelActivity.done(function(){
               });
            if (isActive === true) {
              labelSwitch = '<span class="label label-success">Active</span>';$("#streams").append('<div class="well col-xs-4 col-xs-offset-4"><p><img class ="img-responsive img-rounded" style="float: left; margin: 0px 15px 15px 0px;" width="25%" src=' + logo + '><a href=' + url + '>' + name + " " + labelSwitch + '</p></a><p>' + status + '</p></div>');
            }  else {
           labelSwitch = '<span class="label label-default">Inactive</span>';
              $("#streams").append('<div class="well col-xs-4 col-xs-offset-4"><p><img class ="img-responsive img-rounded" style="float: left; margin: 0px 15px 15px 0px;" width="25%" src=' + logo + '><a href=' + url + '>' + name + " " + labelSwitch + '</p></a><p>' + status + '</p></div>');
            }
            
      
    });
  });
});

}
createList();
  
  //View all streams
  $("#all").click(function(){
     $("#onlyLive").removeClass("disabled");
    $("#onlyOffline").removeClass("disabled");
    $("#all").addClass("disabled");
    $("#streams").empty();

createList();
  });
  
  //get rid of non-live streams
  $("#onlyLive").click(function(){
     $("#onlyLive").addClass("disabled");
    $("#onlyOffline").removeClass("disabled");
    $("#all").removeClass("disabled");
    $("#streams").empty();

onlyLiveList();
  });
  
  //get rid of live streams
  $("#onlyOffline").click(function(){
     $("#onlyLive").removeClass("disabled");
    $("#onlyOffline").addClass("disabled");
    $("#all").removeClass("disabled");
    $("#streams").empty();

onlyOfflineList();
  });
  
  //add stream submit function
  $("#addStreamBtn").click(function(){
    streamersList.push($("#addStreamInput").val());
    $("#addStreamInput").val("");
    
     $("#onlyLive").removeClass("disabled");
    $("#onlyOffline").removeClass("disabled");
    $("#all").addClass("disabled");
    $("#streams").empty();

createList();
  });
  
  function onlyOfflineList(){
  streamersList.forEach(function(streamName){
    var call = 'https://wind-bow.gomix.me/twitch-api/channels/' + streamName + '?callback=?';
    
    $.getJSON(call, function(data){
      //create and move the variables to the html
      var url = data.url;
      var name = data.display_name;
      var logo = data.logo;
      var status = data.status;
      var labelSwitch = '';
      var labelActivity = 
          $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamName + '?callback=?', function(json) {
              var isActive = (json.stream !== null);
              labelActivity.done(function(){
              
            if (isActive === true) {
              labelSwitch = '<span class="label label-success">Active</span>';
            }  else {
           labelSwitch = '<span class="label label-default">Inactive</span>';
              $("#streams").append('<div class="well col-xs-4 col-xs-offset-4"><p><img class ="img-responsive img-rounded" style="float: left; margin: 0px 15px 15px 0px;" width="25%" src=' + logo + '><a href=' + url + '>' + name + " " + labelSwitch + '</p></a><p>' + status + '</p></div>');
            }
            
      });
    });
  });
});

}
//create the live list
function onlyLiveList(){
  streamersList.forEach(function(streamName){
    var call = 'https://wind-bow.gomix.me/twitch-api/channels/' + streamName + '?callback=?';
    
    $.getJSON(call, function(data){
      //create and move the variables to the html
      var url = data.url;
      var name = data.display_name;
      var logo = data.logo;
      var status = data.status;
      var labelSwitch = '';
      var labelActivity = 
          $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamName + '?callback=?', function(json) {
              var isActive = (json.stream !== null);
              labelActivity.done(function(){
              
            if (isActive === true) {
              labelSwitch = '<span class="label label-success">Active</span>';
              $("#streams").append('<div class="well col-xs-4 col-xs-offset-4"><p><img class ="img-responsive img-rounded" style="float: left; margin: 0px 15px 15px 0px;" width="25%" src=' + logo + '><a href=' + url + '>' + name + " " + labelSwitch + '</p></a><p>' + status + '</p></div>');
            }  else {
           labelSwitch = '<span class="label label-default">Inactive</span>';
              
            }
            
      });
    });
  });
});

}

});