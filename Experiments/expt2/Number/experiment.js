
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
// {"Version":"1", "storyID":7, "storyName":"dice", "name1":"Jacob", "name2":"Alex"},
{"Version":"1", "storyID":11, "storyName":"cardNumbers", "name1":"Scott", "name2":"Frank", "name3":"David"},
//{"Version":"1", "storyID":9, "storyName":"color", "name1":"James", "name2":"Steve"},
//{"Version":"1", "storyID":10, "storyName":"animal", "name1":"Bob", "name2":"David"}
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

// var trialNumbers = [
//     {"trialType":1},
//     {"trialType":2},
//     {"trialType":3},
//     {"trialType":1},
//     {"trialType":2},
//     {"trialType":3}
// ];


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

// var trialTypeOrder = shuffledArray(trialNumbers.length);

/* Experimental Variables */
// Number of conditions in experiment
var numConditions = allConditions.length;

// Randomly select a condition number for this particular participant
var chooseCondition = 1;//0;//random(0, numConditions-1);

// Based on condition number, choose set of input (trials)
var allTrialOrders = allConditions[chooseCondition-1];

// Number of trials in each condition
var numTrials = 1;//allTrialOrders.length; //allTrialOrders.length;

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


  

  
  trialType: Math.ceil(Math.random()*3),
  whichCharFirst: Math.round(Math.random()) +  1,
  // winLossArray: new Array(numTrials),
  // distanceCodeArray: new Array(numTrials),
  distance1Array: new Array(numTrials),
  distance2Array: new Array(numTrials),
      
  
  happy1responseArray: new Array(numTrials),
  sad1responseArray: new Array(numTrials),
  relief1responseArray: new Array(numTrials),
  regret1responseArray: new Array(numTrials),
  contentment1responseArray: new Array(numTrials),
  disappointment1responseArray: new Array(numTrials),
  closeness1Array: new Array(numTrials),
  
  happy2responseArray: new Array(numTrials),
  sad2responseArray: new Array(numTrials),
  relief2responseArray: new Array(numTrials),
  regret2responseArray: new Array(numTrials),
  contentment2responseArray: new Array(numTrials),
  disappointment2responseArray: new Array(numTrials),
  closeness2Array: new Array(numTrials),
  
  // positiveOutcomeUtilityArray: new Array(numTrials),
  // negativeOutcomeUtilityArray: new Array(numTrials),
  
  forcedWorseArray: new Array(numTrials),
  

  attentionCheck1Array: new Array(numTrials),
  attentionCheck2Array: new Array(numTrials),
  reactionTimeArray: new Array(numTrials),

  //characterNames: new Array(numTrials),

  freeResponses: new Array(numTrials),

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

    // setting up the Raphael canvas
    cardTable = Raphael('cardTableDiv', '100%', '100%');
    card1 = cardTable.rect(10,10,100,140, 10).attr({fill:"grey"});
    card2 = cardTable.rect(140,10,100,140, 10).attr({fill:"grey"});
    card3 = cardTable.rect(270,10,100,140, 10).attr({fill:"grey"});
    card4 = cardTable.rect(400,10,100,140, 10).attr({fill:"grey"});
    card5 = cardTable.rect(530,10,100,140, 10).attr({fill:"grey"});
    card6 = cardTable.rect(10,160,100,140, 10).attr({fill:"grey"});
    card7 = cardTable.rect(140,160,100,140, 10).attr({fill:"grey"});
    card8 = cardTable.rect(270,160,100,140, 10).attr({fill:"grey"});
    card9 = cardTable.rect(400,160,100,140, 10).attr({fill:"grey"});
    card10 = cardTable.rect(530,160,100,140, 10).attr({fill:"grey"});
    card11 = cardTable.rect(10,310,100,140, 10).attr({fill:"grey"});
    card12 = cardTable.rect(140,310,100,140, 10).attr({fill:"grey"});
    card13 = cardTable.rect(270,310,100,140, 10).attr({fill:"grey"});
    card14 = cardTable.rect(400,310,100,140, 10).attr({fill:"grey"});
    card15 = cardTable.rect(530,310,100,140, 10).attr({fill:"grey"});
    card16 = cardTable.rect(10,460,100,140, 10).attr({fill:"grey"});
    card17 = cardTable.rect(140,460,100,140, 10).attr({fill:"grey"});
    card18 = cardTable.rect(270,460,100,140, 10).attr({fill:"grey"});
    card19 = cardTable.rect(400,460,100,140, 10).attr({fill:"grey"});
    card20 = cardTable.rect(530,460,100,140, 10).attr({fill:"grey"});

    
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

  drawTwoCards: function() {
    answerPick = cardTable.rect(265,157,110,150, 10).attr({stroke: "#f0f", 'stroke-width': 3});
    // highlight target card

    switch(experiment.trialType) {
        // scott = proximally close
        // frank = numerically close
        // david = far
        case 1: // proximally close vs numerically close
          // $("#resultsSpan").html("Scott and Frank both pick cards simultaneously. Scott picks the card 19 (circled in red), while Frank picks the card 11 (circled in green).");
          // card 3 = (3,1)
          scottPick = cardTable.rect(265,3,110,150, 10).attr({stroke: "#f00", 'stroke-width': 3});
          card3 = cardTable.rect(270,10,100,140, 10).attr({fill:"white"});
          card3text = cardTable.text(320, 70, "19").attr({'font-size':26});

          // card 17 = (2,5)
          frankPick = cardTable.rect(135,455,110,150, 10).attr({stroke: "#0f0", 'stroke-width': 3});
          card17 = cardTable.rect(140,460,100,140, 10).attr({fill:"white"});
          card17text = cardTable.text(190, 525, "11").attr({'font-size':26});
          break;
        case 2: // proximally close vs far
          // $("#resultsSpan").html("Scott and David both pick cards simultaneously. Scott picks the card 19 (circled in red), while David picks the card 1 (circled in blue).");
          // card 3 = (3,1)
          scottPick = cardTable.rect(265,3,110,150, 10).attr({stroke: "#f00", 'stroke-width': 3});
          card3 = cardTable.rect(270,10,100,140, 10).attr({fill:"white"});
          card3text = cardTable.text(320, 70, "19").attr({'font-size':26});
          
          // card 19 = (4,5)
          davidPick = cardTable.rect(395,455,110,150, 10).attr({stroke: "#00f", 'stroke-width': 3});
          card19 = cardTable.rect(400,460,100,140, 10).attr({fill:"white"});
          card19text = cardTable.text(450, 525, "1").attr({'font-size':26});
          break;
        case 3: // numerically close vs far
          // $("#resultsSpan").html("Frank and David both pick cards simultaneously. Frank picks the card 11 (circled in green), while David picks the card 1 (circled in blue).");
          // card 17 = (2,5)
          frankPick = cardTable.rect(135,455,110,150, 10).attr({stroke: "#0f0", 'stroke-width': 3});
          card17 = cardTable.rect(140,460,100,140, 10).attr({fill:"white"});
          card17text = cardTable.text(190, 525, "11").attr({'font-size':26});

          // card 19 = (4,5)
          davidPick = cardTable.rect(395,455,110,150, 10).attr({stroke: "#00f", 'stroke-width': 3});
          card19 = cardTable.rect(400,460,100,140, 10).attr({fill:"white"});
          card19text = cardTable.text(450, 525, "1").attr({'font-size':26});
          break;
    } 


    // card 3 = (3,1)
    // scottPick = cardTable.rect(265,3,110,150, 10).attr({stroke: "#f00", 'stroke-width': 3});
    // card3 = cardTable.rect(270,10,100,140, 10).attr({fill:"white"});
    // card3text = cardTable.text(320, 45, "19").attr({'font-size':26});

    // card 17 = (2,5)
    // frankPick = cardTable.rect(135,455,110,150, 10).attr({stroke: "#0f0", 'stroke-width': 3});
    // card17 = cardTable.rect(140,460,100,140, 10).attr({fill:"white"});
    // card17text = cardTable.text(190, 270, "11").attr({'font-size':26});

    // card 19 = (4,5)
    // davidPick = cardTable.rect(395,455,110,150, 10).attr({stroke: "#00f", 'stroke-width': 3});
    // card19 = cardTable.rect(400,460,100,140, 10).attr({fill:"white"});
    // card19text = cardTable.text(450, 270, "1").attr({'font-size':26});
  },

  revealWinningCard: function() {
    // card 8 = (3,2)
    
    card8 = cardTable.rect(270,160,100,140, 10).attr({fill:"white"});
    card8text = cardTable.text(320, 230, "10").attr({'font-size':26});

    $('#emotionResponseDiv1').show();

  },
  
  next: function() {
    
  // $('#response').hide();

  showSlide("stage");
  // setTimeout(function() {$('#response').show();}, 10);

  $('#drawResultsDiv').hide();
  $('#emotionResponseDiv1').hide();
  $('#drawResultsDiv').hide();
  $('#winningResultDiv').hide();
  $('#3AFCResponseDiv').hide();
  // if (numComplete == 1) {
    // $('#winningResultDiv').show();
    // experiment.revealWinningCard();
  // }

    // If this is not the first trial, record variables
    if (numComplete > 0) {
        

        experiment.happy1responseArray[numComplete-1] = $('input[name="happy1"]:checked').val();
        experiment.sad1responseArray[numComplete-1] = $('input[name="sad1"]:checked').val();
        experiment.relief1responseArray[numComplete-1] = $('input[name="relief1"]:checked').val();
        experiment.regret1responseArray[numComplete-1] = $('input[name="regret1"]:checked').val();
        experiment.contentment1responseArray[numComplete-1] = $('input[name="contentment1"]:checked').val();
        experiment.disappointment1responseArray[numComplete-1] = $('input[name="disappointment1"]:checked').val();
        experiment.closeness1Array[numComplete-1] = $('input[name="closeness1"]:checked').val();
        
        experiment.happy2responseArray[numComplete-1] = $('input[name="happy2"]:checked').val();
        experiment.sad2responseArray[numComplete-1] = $('input[name="sad2"]:checked').val();
        experiment.relief2responseArray[numComplete-1] = $('input[name="relief2"]:checked').val();
        experiment.regret2responseArray[numComplete-1] = $('input[name="regret2"]:checked').val();
        experiment.contentment2responseArray[numComplete-1] = $('input[name="contentment2"]:checked').val();
        experiment.disappointment2responseArray[numComplete-1] = $('input[name="disappointment2"]:checked').val();
        experiment.closeness2Array[numComplete-1] = $('input[name="closeness2"]:checked').val();
        
        experiment.freeResponses[numComplete-1] = $('#freeResponseInput').val();

        experiment.forcedWorseArray[numComplete-1] = $('input[name="3AFCWorse"]:checked').val();
        experiment.attentionCheck1Array[numComplete-1] = $('#attentionCheck1').val();
        experiment.attentionCheck2Array[numComplete-1] = $('#attentionCheck2').val();

        experiment.endTime = (new Date()).getTime();
        experiment.reactionTimeArray[numComplete-1] = experiment.endTime - experiment.startTime;

        $('input[name="happy1"]:').prop('checked', false);
        $('input[name="sad1"]:').prop('checked', false);
        $('input[name="relief1"]:').prop('checked', false);
        $('input[name="regret1"]:').prop('checked', false);
        $('input[name="contentment1"]:').prop('checked', false);
        $('input[name="disappointment1"]:').prop('checked', false);
        $('input[name="closeness1"]:checked').prop('checked', false);
        $('input[name="responsibility1"]:checked').prop('checked', false);
        $('input[name="happy2"]:').prop('checked', false);
        $('input[name="sad2"]:').prop('checked', false);
        $('input[name="relief2"]:').prop('checked', false);
        $('input[name="regret2"]:').prop('checked', false);
        $('input[name="contentment2"]:').prop('checked', false);
        $('input[name="disappointment2"]:').prop('checked', false);
        $('input[name="closeness2"]:checked').prop('checked', false);
        $('input[name="responsibility2"]:checked').prop('checked', false);
        $('input[name="3AFCWorse"]:checked').prop('checked', false);

        // $('input[name="positiveOutcomeUtilityQ"]:checked').prop('checked', false);
        // $('input[name="negativeOutcomeUtilityQ"]:checked').prop('checked', false);
        $('#freeResponseInput').val('');
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
      
      // var trialType;
      // var whichCharFirst;
      if(numComplete==0) {
        trial = allTrialOrders[currentTrialNum];
      //   trialType = Math.ceil(Math.random()*3);
      //   whichCharFirst = Math.round(Math.random()) +  1;
      }
      // trialType = trialNumbers[trialTypeOrder[currentTrialNum]];

      
      switch(experiment.trialType) {
        case 1:
          firstChar = trial.name1;
          secondChar = trial.name2;
          $('#colorChar1').html('red');
          $('#colorChar2').html('green');
          $('#numberChar1').html('19');
          $('#numberChar2').html('11');
          if(experiment.whichCharFirst==2) {
            firstChar = trial.name2;
            secondChar = trial.name1;
            $('#colorChar1').html('green');
            $('#colorChar2').html('red');
            $('#numberChar1').html('11');
            $('#numberChar2').html('19');
          }
        break;
        case 2:
          firstChar = trial.name1;
          secondChar = trial.name3;
          $('#colorChar1').html('red');
          $('#colorChar2').html('blue');
          $('#numberChar1').html('19');
          $('#numberChar2').html('1');
          if(experiment.whichCharFirst==2) {
            firstChar = trial.name3;
            secondChar = trial.name1;
            $('#colorChar1').html('blue');
            $('#colorChar2').html('red');
            $('#numberChar1').html('1');
            $('#numberChar2').html('19');
          }
        break;
        case 3:
          firstChar = trial.name2;
          secondChar = trial.name3;
          $('#colorChar1').html('green');
          $('#colorChar2').html('blue');
          $('#numberChar1').html('11');
          $('#numberChar2').html('1');
          if(experiment.whichCharFirst==2) {
            firstChar = trial.name3;
            secondChar = trial.name2;
            $('#colorChar1').html('blue');
            $('#colorChar2').html('green');
            $('#numberChar1').html('1');
            $('#numberChar2').html('11');
          }
        break;
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
      $('#CharName1j').html(firstChar);
      $('#CharName2a').html(secondChar);
      $('#CharName2b').html(secondChar);
      $('#CharName2c').html(secondChar);
      $('#CharName2d').html(secondChar);
      $('#CharName2e').html(secondChar);
      $('#CharName2f').html(secondChar);
      $('#CharName2g').html(secondChar);
      $('#CharName2h').html(secondChar);
      $('#CharName2i').html(secondChar);
      $('#CharName2j').html(secondChar);

       // varies from one to three


      switch(trial.storyID) {
        case 11:
        switch(numComplete) {
          case 0:
            $('#outcome1span').html("what number did he guess? (please type the number into the box)");
            $('#outcome2span').html("what number did he guess? (please type the number into the box)");
            switch(experiment.trialType) {

              // scott = proximally close
              // frank = numerically close
              // david = far
              case 1: // proximally close vs numerically close
                // $('#storySpan1').html("Scott and Frank");
                $("#resultsSpan").html("Scott and Frank both made their guesses simultaneously. Scott guessed the <b>number 19</b>, <b>circled in red</b>, while Frank guessed the <b>number 11</b>, <b>circled in green</b>.");
                if(experiment.whichCharFirst==1) {
                  experiment.distance1Array[numComplete]="19";
                  experiment.distance2Array[numComplete]="11";
                } else {
                  experiment.distance1Array[numComplete]="11";
                  experiment.distance2Array[numComplete]="19";
                }
                break;
              case 2: // proximally close vs far
                // $('#storySpan1').html("Scott and Frank");
                $("#resultsSpan").html("Scott and David both made their guesses simultaneously. Scott guessed the <b>number 19</b>, <b>circled in red</b>, while David guessed the <b>number 1</b>, <b>circled in blue</b>.");
                if(experiment.whichCharFirst==1) {
                  experiment.distance1Array[numComplete]="19";
                  experiment.distance2Array[numComplete]="1";
                } else {
                  experiment.distance1Array[numComplete]="1";
                  experiment.distance2Array[numComplete]="19";
                }
                break;
              case 3: // numerically close vs far
                // $('#storySpan1').html("Scott and Frank");
                $("#resultsSpan").html("Frank and David both made their guesses simultaneously. Frank guessed the <b>number 11</b>, <b>circled in green</b>, while David guessed the <b>number 1</b>, <b>circled in blue</b>.");
                if(experiment.whichCharFirst==1) {
                  experiment.distance1Array[numComplete]="11";
                  experiment.distance2Array[numComplete]="1";
                } else {
                  experiment.distance1Array[numComplete]="1";
                  experiment.distance2Array[numComplete]="11";
                }
                break;
            } 
            break;  
          break;
          case 1: // second trial
          experiment.distance1Array[numComplete] = experiment.distance1Array[numComplete-1];
          experiment.distance2Array[numComplete] = experiment.distance2Array[numComplete-1];
          break;
        }
            
      }
      
      
      // experiment.whichCharFirstArray[numComplete] = whichCharFirst;
      experiment.storyIDArray[numComplete] = trial.storyID;
      // experiment.trialTypeArray[numComplete] = trialType;
      // experiment.winLossArray[numComplete] = trialType.winLoss;
      // experiment.distanceCodeArray[numComplete] = trialType.distanceCode;
      // experiment.distance1Array[numComplete] = trialType.dist1;
      // experiment.distance2Array[numComplete] = trialType.dist2;
      experiment.orderArray[numComplete] = numComplete+1;
      // experiment.distanceArray[numComplete] = distance;
      // experiment.positiveArray[numComplete] = positive;

      experiment.startTime = (new Date()).getTime();

      numComplete++;
    } // end of else loop.
  } // end experiment.next()
}; // end experiment variable

