
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
{"trialType":1, "winLoss":"WL", "distanceCode":"EB", "dist1":10, "dist2":-10 },
{"trialType":2, "winLoss":"WL", "distanceCode":"DC", "dist1":2, "dist2":-2 },
{"trialType":3, "winLoss":"LL", "distanceCode":"CA", "dist1":-2, "dist2":-50 },
{"trialType":4, "winLoss":"LL", "distanceCode":"CB", "dist1":-2, "dist2":-10 },
{"trialType":5, "winLoss":"WW", "distanceCode":"FD", "dist1":50, "dist2":2 },
{"trialType":6, "winLoss":"WW", "distanceCode":"ED", "dist1":10, "dist2":2 }
]


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

var allDistances = [2, 5, 10, 20];


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
  winLossArray: new Array(numTrials),
  distanceCodeArray: new Array(numTrials),
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
  responsibility2Array: new Array(numTrials),
  effort2Array: new Array(numTrials),
  positiveOutcomeUtilityArray: new Array(numTrials),
  negativeOutcomeUtilityArray: new Array(numTrials),
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
        experiment.responsibility2Array[numComplete-1] = $('input[name="responsibility2"]:checked').val();
        experiment.effort2Array[numComplete-1] = $('input[name="effort2"]:checked').val();
        experiment.positiveOutcomeUtilityArray[numComplete-1] = $('input[name="positiveOutcomeUtilityQ"]:checked').val();
        experiment.negativeOutcomeUtilityArray[numComplete-1] = $('input[name="negativeOutcomeUtilityQ"]:checked').val();
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
        $('input[name="responsibility2"]:checked').prop('checked', false);
        $('input[name="effort2"]:checked').prop('checked', false);
        $('input[name="positiveOutcomeUtilityQ"]:checked').prop('checked', false);
        $('input[name="negativeOutcomeUtilityQ"]:checked').prop('checked', false);
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
      $('#CharName2a').html(secondChar);
      $('#CharName2b').html(secondChar);
      $('#CharName2c').html(secondChar);
      $('#CharName2d').html(secondChar);
      $('#CharName2e').html(secondChar);
      $('#CharName2f').html(secondChar);
      $('#CharName2g').html(secondChar);
      $('#CharName2h').html(secondChar);

      switch(trial.storyID) {
        case 1:
          $('#positiveOutcomeSpan').html("catching the international flight");
          $('#negativeOutcomeSpan').html("missing the international flight");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both travelers at the airport about to catch an international flight. <br><br> Jacob managed to reach his gate 10 minutes before the gate closed, and managed to get on the plane. <br><br> Alex was delayed, and managed to reach his gate 10 minutes after the gate had already closed. <br><br> Jacob managed to catch his plane, while Alex was not able to.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("missing his flight (in minutes)?");
                $('#outcome2span').html("catching his flight (in minutes)?");
              } else {
                $('#outcome2span').html("missing his flight (in minutes)?");
                $('#outcome1span').html("catching his flight (in minutes)?");
              }
              break;
            case 2:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both travelers at the airport about to catch an international flight. <br><br> Jacob managed to reach his gate 2 minutes before the gate closed, and managed to get on the plane. <br><br> Alex was delayed, and managed to reach his gate 2 minutes after the gate had already closed. <br><br> Jacob managed to catch his plane, while Alex was not able to.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("missing his flight (in minutes)?");
                $('#outcome2span').html("catching his flight (in minutes)?");
              } else {
                $('#outcome2span').html("missing his flight (in minutes)?");
                $('#outcome1span').html("catching his flight (in minutes)?");
              }
              break;
            case 3:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both travelers at the airport about to catch an international flight. <br><br> Jacob managed to reach his gate 2 minutes after the gate closed, and was unable to get on the plane. <br><br> Alex was delayed, and managed to reach the gate 50 minutes after the gate had already closed. <br><br> Neither Jacob nor Alex managed to catch their planes.");
                $('#outcome1span').html("catching his flight (in minutes)?");
                $('#outcome2span').html("catching his flight (in minutes)?");
              break;
            case 4:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both travelers at the airport about to catch an international flight. <br><br> Jacob managed to reach his gate 2 minutes after the gate closed, and was unable to get on the plane. <br><br> Alex was delayed, and managed to reach the gate 10 minutes after the gate had already closed. <br><br> Neither Jacob nor Alex managed to catch their planes.");
                $('#outcome1span').html("catching his flight (in minutes)?");
                $('#outcome2span').html("catching his flight (in minutes)?");
              break;
            case 5:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both travelers at the airport about to catch an international flight. <br><br> Jacob managed to reach his gate 50 minutes before the gate closed, and managed to get on the plane. <br><br> Alex was delayed, and managed to reach the gate 2 minutes before the gate closed. <br><br> Both Jacob and Alex managed to catch their planes.");
                $('#outcome1span').html("missing his flight (in minutes)?");
                $('#outcome2span').html("missing his flight (in minutes)?");
              break;
            case 6:
              $('#storySpan1').html("Jacob and Alex (who do not know each other) were both travelers at the airport about to catch an international flight. <br><br> Jacob managed to reach his gate 10 minutes before the gate closed, and managed to get on the plane. <br><br> Alex was delayed, and managed to reach the gate 2 minutes before the gate closed. <br><br> Both Jacob and Alex managed to catch their planes.");
                $('#outcome1span').html("missing his flight (in minutes)?");
                $('#outcome2span').html("missing his flight (in minutes)?");
              break;
          } 
          break;
        case 2:
          $('#positiveOutcomeSpan').html("getting the free gift");
          $('#negativeOutcomeSpan').html("not getting the free gift");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both in line for a free gift giveaway: a brand new vacuum cleaner. <br><br>When Scott got to the front of the line and received his free gift, he noticed that there were only 10 gifts left. <br><br>Frank was further back in the line, and he happened to be number 10 in line when they ran out of free gifts. <br><br>Thus, Scott was able to get a free gift, and Frank was unable to get a free gift.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not getting a free gift (in terms of number of people in line)?");
                $('#outcome2span').html("getting a free gift (in terms of number of people in line)?");
              } else {
                $('#outcome2span').html("not getting a free gift (in terms of number of people in line)?");
                $('#outcome1span').html("getting a free gift (in terms of number of people in line)?");
              }
              break;
            case 2:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both in line for a free gift giveaway: a brand new vacuum cleaner. <br><br>When Scott got to the front of the line and received his free gift, he noticed that there were only 2 gifts left. <br><br>Frank was further back in the line, and he happened to be number 2 in line when they ran out of free gifts. <br><br>Thus, Scott was able to get a free gift, and Frank was unable to get a free gift.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not getting a free gift (in terms of number of people in line)?");
                $('#outcome2span').html("getting a free gift (in terms of number of people in line)?");
              } else {
                $('#outcome2span').html("not getting a free gift (in terms of number of people in line)?");
                $('#outcome1span').html("getting a free gift (in terms of number of people in line)?");
              }
              break;
            case 3:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both in line for a free gift giveaway: a brand new vacuum cleaner. <br><br>Scott happened to be number 2 in line when they ran out of free gifts. <br><br>Frank was further back in the line, and he happened to be number 50 in line when they ran out of free gifts. <br><br>Thus, neither Scott nor Frank were able to get their free gifts.");
              $('#outcome1span').html("getting a free gift (in terms of number of people in line)?");
              $('#outcome2span').html("getting a free gift (in terms of number of people in line)?");
              break;
            case 4:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both in line for a free gift giveaway: a brand new vacuum cleaner. <br><br>Scott happened to be number 2 in line when they ran out of free gifts. <br><br>Frank was further back in the line, and he happened to be number 10 in line when they ran out of free gifts. <br><br>Thus, neither Scott nor Frank were able to get their free gifts.");
              $('#outcome1span').html("getting a free gift (in terms of number of people in line)?");
              $('#outcome2span').html("getting a free gift (in terms of number of people in line)?");
              break;
            case 5:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both in line for a free gift giveaway: a brand new vacuum cleaner. <br><br>When Scott got to the front of the line and received his free gift, he noticed that there were only 50 gifts left. <br><br>Frank was further back in the line. When he got to the front of the line and received his gift, he noticed that there were only 2 gifts left. <br><br>Thus, both Scott and Frank were able to get their free gifts.");
              $('#outcome1span').html("not getting a free gift (in terms of number of people in line)?");
              $('#outcome2span').html("not getting a free gift (in terms of number of people in line)?");
              break;
            case 6:
              $('#storySpan1').html("Scott and Frank (who do not know each other) were both in line for a free gift giveaway: a brand new vacuum cleaner. <br><br>When Scott got to the front of the line and received his free gift, he noticed that there were only 10 gifts left. <br><br>Frank was further back in the line. When he got to the front of the line and received his gift, he noticed that there were only 2 gifts left. <br><br>Thus, both Scott and Frank were able to get their free gifts.");
              $('#outcome1span').html("not getting a free gift (in terms of number of people in line)?");
              $('#outcome2span').html("not getting a free gift (in terms of number of people in line)?");
              break;
          } 
          break;
        case 3:
          $('#positiveOutcomeSpan').html("finishing painting the fence");
          $('#negativeOutcomeSpan').html("not finishing painting the fence");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("James and Steve (who do not know each other) both planned to use the long weekend to do some home improvement. <br><br>One of the tasks that they both decided to do was to paint their fences. <br><br>James managed to finish painting his fence with enough paint leftover for an additional 10 inches of fence. <br><br>Steve ran out of paint with 10 inches of fence leftover. <br><br>Thus, James managed to finish his project, but Steve was unable to.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not finishing painting the fence (in terms of inches of fence)?");
                $('#outcome2span').html("finishing painting the fence (in terms of inches of fence)?");
              } else {
                $('#outcome2span').html("not finishing painting the fence (in terms of inches of fence)?");
                $('#outcome1span').html("finishing painting the fence (in terms of inches of fence)?");
              }
              break;
            case 2:
              $('#storySpan1').html("James and Steve (who do not know each other) both planned to use the long weekend to do some home improvement. <br><br>One of the tasks that they both decided to do was to paint their fences. <br><br>James managed to finish painting his fence with enough paint leftover for an additional 2 inches of fence. <br><br>Steve ran out of paint with 2 inches of fence leftover. <br><br>Thus, James managed to finish his project, but Steve was unable to.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not finishing painting the fence (in terms of inches of fence)?");
                $('#outcome2span').html("finishing painting the fence (in terms of inches of fence)?");
              } else {
                $('#outcome2span').html("not finishing painting the fence (in terms of inches of fence)?");
                $('#outcome1span').html("finishing painting the fence (in terms of inches of fence)?");
              }
              break;
            case 3:
              $('#storySpan1').html("James and Steve (who do not know each other) both planned to use the long weekend to do some home improvement. <br><br>One of the tasks that they both decided to do was to paint their fences. <br><br>James could not finish painting his fence; he ran out of paint with 2 inches of fence left. <br><br>Steve similarly ran out with 50 inches of fence left. <br><br>Both James and Steve were unable to finish their project.");
              $('#outcome1span').html("finishing painting the fence (in terms of inches of fence)?");
              $('#outcome2span').html("finishing painting the fence (in terms of inches of fence)?");
              break;
            case 4:
              $('#storySpan1').html("James and Steve (who do not know each other) both planned to use the long weekend to do some home improvement. <br><br>One of the tasks that they both decided to do was to paint their fences. <br><br>James could not finish painting his fence; he ran out of paint with 2 inches of fence left. <br><br>Steve similarly ran out with 10 inches of fence left. <br><br>Both James and Steve were unable to finish their project.");
              $('#outcome1span').html("finishing painting the fence (in terms of inches of fence)?");
              $('#outcome2span').html("finishing painting the fence (in terms of inches of fence)?");
              break;
            case 5:
              $('#storySpan1').html("James and Steve (who do not know each other) both planned to use the long weekend to do some home improvement. <br><br>One of the tasks that they both decided to do was to paint their fences. <br><br>James managed to finish painting his fence with enough paint leftover for an additional 50 inches of fence. <br><br>Steve similarly managed to finish his fence with enough paint leftover for an additional 2 inches of fence. <br><br>Both James and Steve managed to finish their project.");
              $('#outcome1span').html("not finishing painting the fence (in terms of inches of fence)?");
              $('#outcome2span').html("not finishing painting the fence (in terms of inches of fence)?");
              break;
            case 6:
              $('#storySpan1').html("James and Steve (who do not know each other) both planned to use the long weekend to do some home improvement. <br><br>One of the tasks that they both decided to do was to paint their fences. <br><br>James managed to finish painting his fence with enough paint leftover for an additional 10 inches of fence. <br><br>Steve similarly managed to finish his fence with enough paint leftover for an additional 2 inches of fence. <br><br>Both James and Steve managed to finish their project.");
              $('#outcome1span').html("not finishing painting the fence (in terms of inches of fence)?");
              $('#outcome2span').html("not finishing painting the fence (in terms of inches of fence)?");
              break;
          } 
          break;
        case 4:
          $('#positiveOutcomeSpan').html("catching the concert");
          $('#negativeOutcomeSpan').html("missing the concert");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Bob and David (who do not know each other) were unable to get tickets for a popular concert.<br><br> Bob ended up being number 90 on the official waitlist, while David was number 110 on the waitlist.<br><br> A week before the concert, the concert organizers released more tickets to the first hundred people on the waitlist.<br><br> This means that Bob managed to get a ticket (and he was 10 people away from not getting a ticket), and David did not manage to get a ticket (although he was 10 people away from getting one).");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome2span').html("getting a ticket (in terms of number of people on the waitlist)?");
              } else {
                $('#outcome2span').html("not getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome1span').html("getting a ticket (in terms of number of people on the waitlist)?");
              }
              break;
            case 2:
              $('#storySpan1').html("Bob and David (who do not know each other) were unable to get tickets for a popular concert.<br><br> Bob ended up being number 98 on the official waitlist, while David was number 102 on the waitlist.<br><br> A week before the concert, the concert organizers released more tickets to the first hundred people on the waitlist.<br><br> This means that Bob managed to get a ticket (and he was 2 people away from not getting a ticket), and David did not manage to get a ticket (although he was 2 people away from getting one).");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome2span').html("getting a ticket (in terms of number of people on the waitlist)?");
              } else {
                $('#outcome2span').html("not getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome1span').html("getting a ticket (in terms of number of people on the waitlist)?");
              }
              break;
            case 3:
              $('#storySpan1').html("Bob and David (who do not know each other) were unable to get tickets for a popular concert.<br><br> Bob ended up being number 102 on the official waitlist, while David was number 150 on the waitlist.<br><br> A week before the concert, the concert organizers released more tickets to the first hundred people on the waitlist.<br><br> This means that neither Bob nor David managed to get a ticket, although Bob was 2 people away from getting a ticket, and David was 50 people away from getting one.");
                $('#outcome1span').html("getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome2span').html("getting a ticket (in terms of number of people on the waitlist)?");
              break;
            case 4:
              $('#storySpan1').html("Bob and David (who do not know each other) were unable to get tickets for a popular concert.<br><br> Bob ended up being number 102 on the official waitlist, while David was number 110 on the waitlist.<br><br> A week before the concert, the concert organizers released more tickets to the first hundred people on the waitlist.<br><br> This means that neither Bob nor David managed to get a ticket, although Bob was 2 people away from getting a ticket, and David was 10 people away from getting one.");
                $('#outcome1span').html("getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome2span').html("getting a ticket (in terms of number of people on the waitlist)?");
              break;
            case 5:
              $('#storySpan1').html("Bob and David (who do not know each other) were unable to get tickets for a popular concert.<br><br> Bob ended up being number 50 on the official waitlist, while David was number 98 on the waitlist.<br><br> A week before the concert, the concert organizers released more tickets to the first hundred people on the waitlist.<br><br> This means that both Bob and David managed to get a ticket: Bob was 50 people away from not getting a ticket, and David was 2 people away from not getting one.");
                $('#outcome1span').html("not getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome2span').html("not getting a ticket (in terms of number of people on the waitlist)?");
              break;
            case 6:
              $('#storySpan1').html("Bob and David (who do not know each other) were unable to get tickets for a popular concert.<br><br> Bob ended up being number 90 on the official waitlist, while David was number 98 on the waitlist.<br><br> A week before the concert, the concert organizers released more tickets to the first hundred people on the waitlist.<br><br> This means that both Bob and David managed to get a ticket: Bob was 10 people away from not getting a ticket, and David was 2 people away from not getting one.");
                $('#outcome1span').html("not getting a ticket (in terms of number of people on the waitlist)?");
                $('#outcome2span').html("not getting a ticket (in terms of number of people on the waitlist)?");
              break;
          } 
          break;
        case 5:
          $('#positiveOutcomeSpan').html("being able to get gelato");
          $('#negativeOutcomeSpan').html("not being able to get gelato");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Both Charlie and George (who do not know each other) were craving gelato from the most famous shop in the city.<br><br> Charlie rushed down in a cab after his dinner, and managed to reach the shop 10 minutes before it closed.<br><br> George similarly took a cab after dinner, and reached the shop 10 minutes after the shop closed.<br><br> Only Charlie was able to satisfy his gelato craving; George was unable to.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not being able to get gelato (in minutes)?");
                $('#outcome2span').html("being able to get gelato (in minutes)?");
              } else {
                $('#outcome2span').html("not being able to get gelato (in minutes)?");
                $('#outcome1span').html("being able to get gelato (in minutes)?");
              }
              break;
            case 2:
              $('#storySpan1').html("Both Charlie and George (who do not know each other) were craving gelato from the most famous shop in the city.<br><br> Charlie rushed down in a cab after his dinner, and managed to reach the shop 2 minutes before it closed.<br><br> George similarly took a cab after dinner, and reached the shop 2 minutes after the shop closed.<br><br> Only Charlie was able to satisfy his gelato craving; George was unable to.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not being able to get gelato (in minutes)?");
                $('#outcome2span').html("being able to get gelato (in minutes)?");
              } else {
                $('#outcome2span').html("not being able to get gelato (in minutes)?");
                $('#outcome1span').html("being able to get gelato (in minutes)?");
              }
              break;
            case 3:
              $('#storySpan1').html("Both Charlie and George (who do not know each other) were craving gelato from the most famous shop in the city.<br><br> Charlie rushed down in a cab after his dinner, but managed to reach the shop 2 minutes after it closed.<br><br> George similarly took a cab after dinner, reaching the shop 50 minutes after it closed.<br><br> Neither Charlie nor George was able to satisfy their gelato craving.");
                $('#outcome1span').html("being able to get gelato (in minutes)?");
                $('#outcome2span').html("being able to get gelato (in minutes)?");
              break;
            case 4:
              $('#storySpan1').html("Both Charlie and George (who do not know each other) were craving gelato from the most famous shop in the city.<br><br> Charlie rushed down in a cab after his dinner, but managed to reach the shop 2 minutes after it closed.<br><br> George similarly took a cab after dinner, reaching the shop 10 minutes after it closed.<br><br> Neither Charlie nor George was able to satisfy their gelato craving.");
                $('#outcome1span').html("being able to get gelato (in minutes)?");
                $('#outcome2span').html("being able to get gelato (in minutes)?");
              break;
            case 5:
              $('#storySpan1').html("Both Charlie and George (who do not know each other) were craving gelato from the most famous shop in the city.<br><br> Charlie rushed down in a cab after his dinner, and managed to reach the shop 50 minutes before it closed.<br><br> George similarly took a cab after dinner, and also managed to reached the shop 2 minutes before the shop closed.<br><br> Both Charlie and George managed to satisfy their gelato cravings.");
              $('#outcome1span').html("not being able to get gelato (in minutes)?");
              $('#outcome2span').html("not being able to get gelato (in minutes)?");
              break;
            case 6:
              $('#storySpan1').html("Both Charlie and George (who do not know each other) were craving gelato from the most famous shop in the city.<br><br> Charlie rushed down in a cab after his dinner, and managed to reach the shop 10 minutes before it closed.<br><br> George similarly took a cab after dinner, and also managed to reached the shop 2 minutes before the shop closed.<br><br> Both Charlie and George managed to satisfy their gelato cravings.");
              $('#outcome1span').html("not being able to get gelato (in minutes)?");
              $('#outcome2span').html("not being able to get gelato (in minutes)?");
              break;
          } 
          break;
        case 6:
          $('#positiveOutcomeSpan').html("getting into the course");
          $('#negativeOutcomeSpan').html("not getting into the course");
          switch(trialType.trialType) {
            case 1:
              $('#storySpan1').html("Chris and Mike (who do not know each other) were applying to a special program at their local community college, and they had to make a certain score on an admissions exam to get in. <br><br> Chris managed to score 10 more points than the required score. <br><br> Mike, on the other hand, missed the cutoff by 10 points. <br><br> Of the two, only Chris was able to meet the admission criteria, while Mike was not.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not making the admissions cutoff (in points)?");
                $('#outcome2span').html("making the admissions cutoff (in points)?");
              } else {
                $('#outcome2span').html("not making the admissions cutoff (in points)?");
                $('#outcome1span').html("making the admissions cutoff (in points)?");
              }
              break;
            case 2:
              $('#storySpan1').html("Chris and Mike (who do not know each other) were applying to a special program at their local community college, and they had to make a certain score on an admissions exam to get in. <br><br> Chris managed to score 2 more points than the required score. <br><br> Mike, on the other hand, missed the cutoff by 2 points. <br><br> Of the two, only Chris was able to meet the admission criteria, while Mike was not.");
              if(whichCharFirst==1) {
                $('#outcome1span').html("not making the admissions cutoff (in points)?");
                $('#outcome2span').html("making the admissions cutoff (in points)?");
              } else {
                $('#outcome2span').html("not making the admissions cutoff (in points)?");
                $('#outcome1span').html("making the admissions cutoff (in points)?");
              }
              break;
            case 3:
              $('#storySpan1').html("Chris and Mike (who do not know each other) were applying to a special program at their local community college, and they had to make a certain score on an admissions exam to get in. <br><br> Chris missed the cutoff score by 2 points. <br><br> Mike similarly missed the cutoff, but by 50 points. <br><br> Neither Chris nor Mike were able to meet the admission criteria.");
              $('#outcome1span').html("making the admissions cutoff (in points)?");
              $('#outcome2span').html("making the admissions cutoff (in points)?");
              break;
            case 4:
              $('#storySpan1').html("Chris and Mike (who do not know each other) were applying to a special program at their local community college, and they had to make a certain score on an admissions exam to get in. <br><br> Chris missed the cutoff score by 2 points. <br><br> Mike similarly missed the cutoff, but by 10 points. <br><br> Neither Chris nor Mike were able to meet the admission criteria.");
              $('#outcome1span').html("making the admissions cutoff (in points)?");
              $('#outcome2span').html("making the admissions cutoff (in points)?");
              break;
            case 5:
              $('#storySpan1').html("Chris and Mike (who do not know each other) were applying to a special program at their local community college, and they had to make a certain score on an admissions exam to get in. <br><br> Chris managed to score 50 more points than the required score. <br><br> Mike similarly scored 2 points above the cutoff. <br><br> Both Chris and Mike were able to meet the admission criteria.");
              $('#outcome1span').html("not making the admissions cutoff (in points)?");
              $('#outcome2span').html("not making the admissions cutoff (in points)?");
              break;
            case 6:
              $('#storySpan1').html("Chris and Mike (who do not know each other) were applying to a special program at their local community college, and they had to make a certain score on an admissions exam to get in. <br><br> Chris managed to score 10 more points than the required score. <br><br> Mike similarly scored 2 points above the cutoff. <br><br> Both Chris and Mike were able to meet the admission criteria.");
              $('#outcome1span').html("not making the admissions cutoff (in points)?");
              $('#outcome2span').html("not making the admissions cutoff (in points)?");
              break;
          } 
          break;
      }
      
      
      experiment.whichCharFirstArray[numComplete] = whichCharFirst;      
      experiment.storyIDArray[numComplete] = trial.storyID;
      experiment.trialTypeArray[numComplete] = trialType.trialType;
      experiment.winLossArray[numComplete] = trialType.winLoss;
      experiment.distanceCodeArray[numComplete] = trialType.distanceCode;
      experiment.distance1Array[numComplete] = trialType.dist1;
      experiment.distance2Array[numComplete] = trialType.dist2;
      experiment.orderArray[numComplete] = currentTrialNum;
      // experiment.distanceArray[numComplete] = distance;
      // experiment.positiveArray[numComplete] = positive;

      experiment.startTime = (new Date()).getTime();

      numComplete++;
    } // end of else loop.
  } // end experiment.next()
}; // end experiment variable

