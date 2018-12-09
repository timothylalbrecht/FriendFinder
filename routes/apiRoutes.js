// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  	app.get("/api/friends", function(req, res) {
    	res.json(friendsData);
  	});

  // API POST Requests
  // ---------------------------------------------------------------------------

 	app.post("/api/friends", function (req, res) {
    	var newSurveyScores = req.body.scores;
    	var scoresArray = [];
    	var newMatch = 0;

    	for (var i = 0; i < friendsData.length; i++) {
			var scoreDifferential = 0;
			  
      		for (var j = 0; j < newSurveyScores.length; j++) {
        		scoreDifferential += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newSurveyScores[j])));
      		}
      		scoresArray.push(scoreDifferential);
    	}

    for (var i = 0; i < scoresArray.length; i++) {
      	if (scoresArray[i] <= scoresArray[newMatch]) {
        	newMatch = i;
      	}
    }

    var updatedData = friendsData[newMatch];
    res.json(updatedData);

    friendsData.push(req.body);

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = [];
//     waitListData.length = [];

//     res.json({ ok: true });
//   });
};
