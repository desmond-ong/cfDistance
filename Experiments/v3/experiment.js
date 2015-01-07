
var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent)
      || this.searchVersion(navigator.appVersion)
      || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i=0;i<data.length;i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      }
      else if (dataProp)
        return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    },
    {   string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version"
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    },
    {   // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    },
    {     // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }
  ],
  dataOS : [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
    },
    {
         string: navigator.userAgent,
         subString: "iPhone",
         identity: "iPhone/iPod"
      },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    }
  ]

};
BrowserDetect.init();

/*
showSlide(id)
Displays each slide
*/

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

/* 
random(a,b)
Returns random number between a and b, inclusive
*/

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}


/* 
Array.prototype.random
Randomly shuffles elements in an array. Useful for condition randomization.
*/

Array.prototype.random = function() {
  return this[random(this.length)];
}

/* 
Produces an array with numbers 0~arrLength
in random order. Kind of spurious--use 
Array.prototype.random instead
*/

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/* 
Gets the value of the checked radio button
*/

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}

function setQuestion(array) {
    var i = random(0, array.length - 1);
    var q = array[i];
    return q;
}


/* 
Clears value from form
*/

function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
	field_type = elements[i].type.toLowerCase();
	
	switch(field_type) {
	
		case "text": 
		case "password": 
		case "textarea":
	        case "hidden":	
			
			elements[i].value = ""; 
			break;
        
		case "radio":
		case "checkbox":
  			if (elements[i].checked) {
   				elements[i].checked = false; 
			}
			break;

		case "select-one":
		case "select-multi":
            		elements[i].selectedIndex = -1;
			break;

		default: 
			break;
	}
    }
}





// Input Data

var allConditions = [
// 1: positive, 0: negative, 2: neutral
[
{"Version":"1", "storyID":7, "storyName":"dice", "name1":"Jacob", "name2":"Alex"},
{"Version":"1", "storyID":8, "storyName":"shape", "name1":"Scott", "name2":"Frank"},
{"Version":"1", "storyID":9, "storyName":"color", "name1":"James", "name2":"Steve"},
{"Version":"1", "storyID":10, "storyName":"animal", "name1":"Bob", "name2":"David"}
]
,
[
{"Version":"1", "storyID":1, "storyName":"missPlane", "name1":"Jacob", "name2":"Alex"},
{"Version":"1", "storyID":2, "storyName":"freeGift", "name1":"Scott", "name2":"Frank"},
{"Version":"1", "storyID":3, "storyName":"paintFence", "name1":"James", "name2":"Steve"},
{"Version":"1", "storyID":4, "storyName":"ticketList", "name1":"Bob", "name2":"David"},
{"Version":"1", "storyID":5, "storyName":"gelatoShop", "name1":"Charlie", "name2":"George"},
{"Version":"1", "storyID":6, "storyName":"admissions", "name1":"Chris", "name2":"Mike"}
],
[
{"Version":"1", "storyID":1, "storyName":"missPlane", "name1":"Jacob", "name2":"Alex"}
]
];

var trialNumbers = [
    {"trialType":1},
    {"trialType":2},
    {"trialType":3},
    {"trialType":1},
    {"trialType":2},
    {"trialType":3}
];


// var trialNumbers = [
// {"trialType":1, "winLoss":"WL", "distanceCode":"EB", "dist1":10, "dist2":-10 },
// {"trialType":2, "winLoss":"WL", "distanceCode":"DC", "dist1":2, "dist2":-2 },
// {"trialType":3, "winLoss":"LL", "distanceCode":"CA", "dist1":-2, "dist2":-50 },
// {"trialType":4, "winLoss":"LL", "distanceCode":"CB", "dist1":-2, "dist2":-10 },
// {"trialType":5, "winLoss":"WW", "distanceCode":"FD", "dist1":50, "dist2":2 },
// {"trialType":6, "winLoss":"WW", "distanceCode":"ED", "dist1":10, "dist2":2 }
// ]


//{"Version":"1", "storyID":12, "numberSuffix": 0, "storyPreName": "", "storyPostName": " was baking a large batch of fudge brownies for a party he was throwing. He was in a rush, and forgot to run to the store to get eggs. As a result, he was ", "storyPostNumber": " eggs short.", "storyPostNamePositive": "Bob was baking a large batch of fudge brownies for a party he was throwing. He was in a rush, and forgot to run to the store to get eggs. He managed to complete his recipe with ", "storyPostNumberPositive": " eggs leftover."},
//{"Version":"1", "storyID":19, "numberSuffix": 0, "storyPreName": "", "storyPostName": " picked up a discarded car roof luggage rack, and decided to take it home. When he got home, he found out that the rack was ", "storyPostNumber": " inches too long to fit securely on top of his car.", "storyPostNamePositive": " picked up a discarded car roof luggage rack, and decided to take it home. When he got home, he found out that the rack fit on top of his car, with about ", "storyPostNumberPositive": " inches to spare."},


var charNameList = ["Alex", "Bob", "Charlie", "Chris", 
    "David", "Eric", "Frank", "George", "Jacob", "Jake", 
    "James", "John", "Josh", "Mike", "Scott", "Steve", "Tom"];
var charNameOrder = shuffledArray(charNameList.length);

var trialTypeOrder = shuffledArray(trialNumbers.length);

/* Experimental Variables */
// Number of conditions in experiment
var numConditions = allConditions.length;

// Randomly select a condition number for this particular participant
var chooseCondition = 1;//0;//random(0, numConditions-1);

// Based on condition number, choose set of input (trials)
var allTrialOrders = allConditions[chooseCondition-1];

// Number of trials in each condition
var numTrials = allTrialOrders.length; //allTrialOrders.length;

// Produce random order in which the trials will occur
var shuffledOrder = shuffledArray(allTrialOrders.length);

// Keep track of current trial 
var currentTrialNum = 0;

// A variable special for this experiment because we're randomly
// choosing word orders as well
// var wordOrder = 100;
var trial;

// Keep track of how many trials have been completed
var numComplete = 0;

// Keep track of how many "causal" trials have been completed
var numCausalComplete = 0;

// var allDistances = [2, 5, 10, 20];


/*
Show the instructions slide — this is what we want subjects to see first.
*/

$("#progressBar").hide();
showSlide("instructions");


// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);

/*
The actual variable that will be returned to MTurk. The experiment object with various variables that you want to keep track of and return as results.

More practically, you should stick everything in an object and submit that whole object so that you don’t lose data (e.g. randomization parameters, what condition the subject is in, etc). Don’t worry about the fact that some of the object properties are functions — mmturkey (the Turk submission library) will strip these out.
*/

var experiment = {
  
  storyIDArray: new Array(numTrials),
  orderArray: new Array(numTrials),
  condition: chooseCondition,
  //positiveArray: new Array(numTrials),
  //distanceArray: new Array(numTrials),
  whichCharFirstArray: new Array(numTrials),

  trialTypeArray: new Array(numTrials),
  // winLossArray: new Array(numTrials),
  // distanceCodeArray: new Array(numTrials),
  distance1Array: new Array(numTrials),
  distance2Array: new Array(numTrials),
      
  
  happy1responseArray: new Array(numTrials),
  sad1responseArray: new Array(numTrials),
  anger1responseArray: new Array(numTrials),
  surprise1responseArray: new Array(numTrials),
  relief1responseArray: new Array(numTrials),
  regret1responseArray: new Array(numTrials),
  contentment1responseArray: new Array(numTrials),
  disappointment1responseArray: new Array(numTrials),
  closeness1Array: new Array(numTrials),
  responsibility1Array: new Array(numTrials),
  effort1Array: new Array(numTrials),
  happy2responseArray: new Array(numTrials),
  sad2responseArray: new Array(numTrials),
  anger2responseArray: new Array(numTrials),
  surprise2responseArray: new Array(numTrials),
  relief2responseArray: new Array(numTrials),
  regret2responseArray: new Array(numTrials),
  contentment2responseArray: new Array(numTrials),
  disappointment2responseArray: new Array(numTrials),
  closeness2Array: new Array(numTrials),
  responsibility2Array: new Array(numTrials),
  effort2Array: new Array(numTrials),
  // positiveOutcomeUtilityArray: new Array(numTrials),
  // negativeOutcomeUtilityArray: new Array(numTrials),
  // freeResponses: new Array(numTrials),

  attentionCheck1Array: new Array(numTrials),
  attentionCheck2Array: new Array(numTrials),
  reactionTimeArray: new Array(numTrials),

  //characterNames: new Array(numTrials),

  // Demographics
  gender: "",
  age:"",
  nativeLanguage:"",
  comments:"",
  browser: BrowserDetect.browser,
  browserVersion: BrowserDetect.version,
  browserOS: BrowserDetect.OS,
  // sanityCheckCorrect: 1,

  startTime: 0,
  endTime: 0,


/*
An array to store the data that we’re collecting.
*/

  //data: [],

// Goes to description slide
  description: function() {
    $("#progressBar").show();
    showSlide("description");
    $("#tot-num").html(numTrials);

    if (turk.previewMode) {
      alert ( "Please accept the HIT before continuing." );
    }   
  },

/*
The function that gets called when the sequence is finished.
*/

  end: function() {
  	// Records demographics
    experiment.gender = $('input[name="genderButton"]:checked').val();
    experiment.age = $('#ageRange').val();
    experiment.nativeLanguage = $('input[name="nativeLanguage"]').val();
    experiment.comments = $('textarea[name="commentsTextArea"]').val();
    //experiment.sanityCheck = $('input[name="example1Button"]:checked').val();
    
    // Show the finish slide.
    showSlide("finished");

    /*
    Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we’re just submitting properties [i.e. data])
    */
    setTimeout(function() { turk.submit(experiment);}, 1500);
  },

  askInfo: function() {
  	showSlide("askInfo");
  },
  
  next: function() {
    
  $('#response').hide();
  showSlide("stage");
  setTimeout(function() {$('#response').show();}, 10);

    // If this is not the first trial, record variables
    if (numComplete > 0) {
        experiment.happy1responseArray[numComplete-1] = $('input[name="happy1"]:checked').val();
        experiment.sad1responseArray[numComplete-1] = $('input[name="sad1"]:checked').val();
        experiment.anger1responseArray[numComplete-1] = $('input[name="anger1"]:checked').val();
        experiment.surprise1responseArray[numComplete-1] = $('input[name="surprise1"]:checked').val();
        experiment.relief1responseArray[numComplete-1] = $('input[name="relief1"]:checked').val();
        experiment.regret1responseArray[numComplete-1] = $('input[name="regret1"]:checked').val();
        experiment.contentment1responseArray[numComplete-1] = $('input[name="contentment1"]:checked').val();
        experiment.disappointment1responseArray[numComplete-1] = $('input[name="disappointment1"]:checked').val();
        experiment.closeness1Array[numComplete-1] = $('input[name="closeness1"]:checked').val();
        experiment.responsibility1Array[numComplete-1] = $('input[name="responsibility1"]:checked').val();
        experiment.effort1Array[numComplete-1] = $('input[name="effort1"]:checked').val();
        experiment.happy2responseArray[numComplete-1] = $('input[name="happy2"]:checked').val();
        experiment.sad2responseArray[numComplete-1] = $('input[name="sad2"]:checked').val();
        experiment.anger2responseArray[numComplete-1] = $('input[name="anger2"]:checked').val();
        experiment.surprise2responseArray[numComplete-1] = $('input[name="surprise2"]:checked').val();
        experiment.relief2responseArray[numComplete-1] = $('input[name="relief2"]:checked').val();
        experiment.regret2responseArray[numComplete-1] = $('input[name="regret2"]:checked').val();
        experiment.contentment2responseArray[numComplete-1] = $('input[name="contentment2"]:checked').val();
        experiment.disappointment2responseArray[numComplete-1] = $('input[name="disappointment2"]:checked').val();
        experiment.closeness2Array[numComplete-1] = $('input[name="closeness2"]:checked').val();
        experiment.responsibility2Array[numComplete-1] = $('input[name="responsibility2"]:checked').val();
        experiment.effort2Array[numComplete-1] = $('input[name="effort2"]:checked').val();
        // experiment.positiveOutcomeUtilityArray[numComplete-1] = $('input[name="positiveOutcomeUtilityQ"]:checked').val();
        // experiment.negativeOutcomeUtilityArray[numComplete-1] = $('input[name="negativeOutcomeUtilityQ"]:checked').val();
        // experiment.freeResponses[numComplete-1] = $('#freeResponseInput').val();


        experiment.attentionCheck1Array[numComplete-1] = $('#attentionCheck1').val();
        experiment.attentionCheck2Array[numComplete-1] = $('#attentionCheck2').val();

        experiment.endTime = (new Date()).getTime();
        experiment.reactionTimeArray[numComplete-1] = experiment.endTime - experiment.startTime;

        $('input[name="happy1"]:').prop('checked', false);
        $('input[name="sad1"]:').prop('checked', false);
        $('input[name="anger1"]:').prop('checked', false);
        $('input[name="surprise1"]:').prop('checked', false);
        $('input[name="relief1"]:').prop('checked', false);
        $('input[name="regret1"]:').prop('checked', false);
        $('input[name="contentment1"]:').prop('checked', false);
        $('input[name="disappointment1"]:').prop('checked', false);
        $('input[name="closeness1"]:checked').prop('checked', false);
        $('input[name="responsibility1"]:checked').prop('checked', false);
        $('input[name="effort1"]:checked').prop('checked', false);
        $('input[name="happy2"]:').prop('checked', false);
        $('input[name="sad2"]:').prop('checked', false);
        $('input[name="anger2"]:').prop('checked', false);
        $('input[name="surprise2"]:').prop('checked', false);
        $('input[name="relief2"]:').prop('checked', false);
        $('input[name="regret2"]:').prop('checked', false);
        $('input[name="contentment2"]:').prop('checked', false);
        $('input[name="disappointment2"]:').prop('checked', false);
        $('input[name="closeness2"]:checked').prop('checked', false);
        $('input[name="responsibility2"]:checked').prop('checked', false);
        $('input[name="effort2"]:checked').prop('checked', false);
        // $('input[name="positiveOutcomeUtilityQ"]:checked').prop('checked', false);
        // $('input[name="negativeOutcomeUtilityQ"]:checked').prop('checked', false);
        // $('#freeResponseInput').val('');
        $('#attentionCheck1').val('');
        $('#attentionCheck2').val('');
      }

      //experiment.data.push(trial);

    // If subject has completed all trials, update progress bar and
    // show slide to ask for demographic info
    if (numComplete >= numTrials) {
      $('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
      $("#trial-num").html(numComplete);
      $("#total-num").html(numTrials);
      showSlide("askInfo");
      
    // Otherwise, if trials not completed yet, update progress bar
    // and go to next trial based on the order in which trials are supposed
    // to occur
    } else {
      $('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
      $("#trial-num").html(numComplete);
      $("#total-num").html(numTrials);


      //function refreshCharName() {
      //    return(charNameList[Math.floor(Math.random()*17)]);
      //};
      //var charName = refreshCharName();


      // currentTrialNumForName = charNameOrder[numComplete];
      // charName = charNameList[currentTrialNumForName];
      // experiment.characterNames[numComplete] = charName;
      // $('#CharName1').html(charName);
      // $('#CharName2').html(charName);
      // $('#CharName3').html(charName);
      // $('#CharName4').html(charName);
      // $('#CharName5').html(charName);

      //currentTrialNum is used for randomizing later
      currentTrialNum = shuffledOrder[numComplete]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];
      trialType = trialNumbers[trialTypeOrder[currentTrialNum]];

      whichCharFirst = Math.round(Math.random()) +  1;
      firstChar = trial.name1;
      secondChar = trial.name2;
      if(whichCharFirst==2) {
        firstChar = trial.name2;
        secondChar = trial.name1;
      }
      $('#CharName1a').html(firstChar);
      $('#CharName1b').html(firstChar);
      $('#CharName1c').html(firstChar);
      $('#CharName1d').html(firstChar);
      $('#CharName1e').html(firstChar);
      $('#CharName1f').html(firstChar);
      $('#CharName1g').html(firstChar);
      $('#CharName1h').html(firstChar);
      $('#CharName1i').html(firstChar);
      $('#CharName2a').html(secondChar);
      $('#CharName2b').html(secondChar);
      $('#CharName2c').html(secondChar);
      $('#CharName2d').html(secondChar);
      $('#CharName2e').html(secondChar);
      $('#CharName2f').html(secondChar);
      $('#CharName2g').html(secondChar);
      $('#CharName2h').html(secondChar);
      $('#CharName2i').html(secondChar);

      switch(trial.storyID) {
        case 7:
          // $('#positiveOutcomeSpan').html("winning a prize?");
          // $('#negativeOutcomeSpan').html("missing the international flight");
          $('#outcome1span').html("what number did he roll? (please type the number into the box)");
          $('#outcome2span').html("what number did he roll? (please type the number into the box)");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both playing the same game at two different times. They were playing a game using a 20 sided dice with the numbers 1 through 20 on it. <br><br> They each needed to <b>roll a number greater than 10</b> to win a prize. <br><br> Jacob rolled a <b>5</b> while Alex rolled a <b>9</b>. <br><br> Neither Jacob nor Alex won the prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="5";
                experiment.distance2Array[numComplete]="9";
              } else {
                experiment.distance1Array[numComplete]="9";
                experiment.distance2Array[numComplete]="5";
              }
              break;
            case 2:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both playing the same game at two different times. They were playing a game using a 20 sided dice with the numbers 1 through 20 on it. <br><br> They each needed to <b>roll a number greater than 10</b> to win a prize. Jacob rolled a <b>9</b> while Alex rolled an <b>11</b>. <br><br> Jacob did not manage to win a prize, while Alex won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="9";
                experiment.distance2Array[numComplete]="11";
              } else {
                experiment.distance1Array[numComplete]="11";
                experiment.distance2Array[numComplete]="9";
              }
              break;
            case 3:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both playing the same game at two different times. They were playing a game using a 20 sided dice with the numbers 1 through 20 on it. <br><br> They each needed to <b>roll a number greater than 10</b> to win a prize. Jacob rolled an <b>11</b> while Alex rolled a <b>15</b>. <br><br> Both Jacob and Alex managed to win a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="11";
                experiment.distance2Array[numComplete]="15";
              } else {
                experiment.distance1Array[numComplete]="15";
                experiment.distance2Array[numComplete]="11";
              }
              break;
          } 
          break;
        case 8:
          // $('#positiveOutcomeSpan').html("getting the free gift");
          // $('#negativeOutcomeSpan').html("not getting the free gift");
          $('#outcome1span').html("what card did he pick? (please type the shape into the box)");
          $('#outcome2span').html("what card did he pick? (please type the shape into the box)");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both playing the same game at two different times. There was a pack of cards laid face down on the table. The back of each card was identical and each card had a drawing of a geometric shape on the side facing down. Each player can only pick one card. <br><br> They needed to pick a <b>shape with 4 or more sides</b> to win a prize. Scott picked a card with a <b>Circle</b> on it, and Frank picked a card with a <b>Triangle</b> on it. <br><br> Neither Scott nor Frank won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Circle";
                experiment.distance2Array[numComplete]="Triangle";
              } else {
                experiment.distance1Array[numComplete]="Triangle";
                experiment.distance2Array[numComplete]="Circle";
              }
              break;
            case 2:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both playing the same game at two different times. There was a pack of cards laid face down on the table. The back of each card was identical and each card had a drawing of a geometric shape on the side facing down. Each player can only pick one card. <br><br> They needed to pick a <b>shape with 4 or more sides</b> to win a prize. Scott picked a card with a <b>Triangle</b> on it, and Frank picked a card with a <b>Pentagon</b> on it. <br><br> Scott did not manage to win a prize, while Frank won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Triangle";
                experiment.distance2Array[numComplete]="Pentagon";
              } else {
                experiment.distance1Array[numComplete]="Pentagon";
                experiment.distance2Array[numComplete]="Triangle";
              }
              break;
            case 3:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both playing the same game at two different times. There was a pack of cards laid face down on the table. The back of each card was identical and each card had a drawing of a geometric shape on the side facing down. Each player can only pick one card. <br><br> They needed to pick a <b>shape with 4 or more sides</b> to win a prize. Scott picked a card with a <b>Pentagon</b> on it, and Frank picked a card with an <b>Octagon</b> on it. <br><br> Both Scott and Frank won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Pentagon";
                experiment.distance2Array[numComplete]="Octagon";
              } else {
                experiment.distance1Array[numComplete]="Octagon";
                experiment.distance2Array[numComplete]="Pentagon";
              }
              break;
          } 
          break;
        case 9:
          // $('#positiveOutcomeSpan').html("finishing painting the fence");
          // $('#negativeOutcomeSpan').html("not finishing painting the fence");
          $('#outcome1span').html("what color did he roll? (please type the color into the box)");
          $('#outcome2span').html("what color did he roll? (please type the color into the box)");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("James and Steve (who do not know each other) were both playing the same game at two different times. They were playing a game using a 20 sided dice with 20 different colors on it. <br><br> They each needed to <b>roll the color 'Red'</b> to win a prize. James rolled <b>'Yellow'</b> while Steve rolled <b>'Blue'</b>. <br><br> Neither James nor Steve won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Yellow";
                experiment.distance2Array[numComplete]="Blue";
              } else {
                experiment.distance1Array[numComplete]="Blue";
                experiment.distance2Array[numComplete]="Yellow";
              }
              break;
            case 2:
              $('#storySpan1').html("James and Steve (who do not know each other) were both playing the same game at two different times. They were playing a game using a 20 sided dice with 20 different colors on it. <br><br> They each needed to <b>roll the color 'Red'</b> to win a prize. James rolled <b>'Pink'</b> while Steve rolled <b>'Blue'</b>. <br><br> Neither James nor Steve won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Pink";
                experiment.distance2Array[numComplete]="Blue";
              } else {
                experiment.distance1Array[numComplete]="Blue";
                experiment.distance2Array[numComplete]="Pink";
              }
              break;
            case 3:
              $('#storySpan1').html("James and Steve (who do not know each other) were both playing the same game at two different times. They were playing a game using a 20 sided dice with 20 different colors on it. <br><br> They each needed to <b>roll the color 'Red'</b> to win a prize. James rolled <b>'Pink'</b> while Steve rolled <b>'Yellow'</b>. <br><br> Neither James nor Steve won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Pink";
                experiment.distance2Array[numComplete]="Yellow";
              } else {
                experiment.distance1Array[numComplete]="Yellow";
                experiment.distance2Array[numComplete]="Pink";
              }
              break;
          } 
          break;
        case 10:
          // $('#positiveOutcomeSpan').html("catching the concert");
          // $('#negativeOutcomeSpan').html("missing the concert");
          $('#outcome1span').html("what card did he pick? (please type the animal into the box)");
          $('#outcome2span').html("what card did he pick? (please type the animal into the box)");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Bob and David (who do not know each other) were both playing the same game at two different times. There was a pack of cards laid face down on the table. The back of each card was identical and each card had a drawing of an animal on the side facing down. Each player can only pick one card. <br><br> They needed to <b>pick a card with a cat</b> to win a prize. Bob picked a card with an <b>elephant</b> on it, and David picked a card with a <b>dog</b> on it. <br><br> Neither Bob nor David won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Elephant";
                experiment.distance2Array[numComplete]="Dog";
              } else {
                experiment.distance1Array[numComplete]="Dog";
                experiment.distance2Array[numComplete]="Elephant";
              }
              break;
            case 2:
              $('#storySpan1').html("Bob and David (who do not know each other) were both playing the same game at two different times. There was a pack of cards laid face down on the table. The back of each card was identical and each card had a drawing of an animal on the side facing down. Each player can only pick one card. <br><br> They needed to <b>pick a card with a cat</b> to win a prize. Bob picked a card with a <b>dog</b> on it, and David picked a card with a <b>tiger</b> on it. <br><br> Neither Bob nor David won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Dog";
                experiment.distance2Array[numComplete]="Tiger";
              } else {
                experiment.distance1Array[numComplete]="Tiger";
                experiment.distance2Array[numComplete]="Dog";
              }
              break;
            case 3:
              $('#storySpan1').html("Bob and David (who do not know each other) were both playing the same game at two different times. There was a pack of cards laid face down on the table. The back of each card was identical and each card had a drawing of an animal on the side facing down. Each player can only pick one card. <br><br> They needed to <b>pick a card with a cat</b> to win a prize. Bob picked a card with a <b>tiger</b> on it, and David picked a card with an <b>elephant</b> on it. <br><br> Neither Bob nor David won a prize.");
              if(whichCharFirst==1) {
                experiment.distance1Array[numComplete]="Tiger";
                experiment.distance2Array[numComplete]="Elephant";
              } else {
                experiment.distance1Array[numComplete]="Elephant";
                experiment.distance2Array[numComplete]="Tiger";
              }
              break;
          }
          break;
      }
      
      
      experiment.whichCharFirstArray[numComplete] = whichCharFirst;
      experiment.storyIDArray[numComplete] = trial.storyID;
      experiment.trialTypeArray[numComplete] = trialType.trialType;
      // experiment.winLossArray[numComplete] = trialType.winLoss;
      // experiment.distanceCodeArray[numComplete] = trialType.distanceCode;
      // experiment.distance1Array[numComplete] = trialType.dist1;
      // experiment.distance2Array[numComplete] = trialType.dist2;
      experiment.orderArray[numComplete] = currentTrialNum;
      // experiment.distanceArray[numComplete] = distance;
      // experiment.positiveArray[numComplete] = positive;

      experiment.startTime = (new Date()).getTime();

      numComplete++;
    } // end of else loop.
  } // end experiment.next()
}; // end experiment variable

