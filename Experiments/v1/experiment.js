
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
{"Version":"1", "storyID":1, "numberSuffix": 0,  "storyPreName": "", "storyPostName": " attempted a field goal kick for his football team; his ball went too far right and missed the goal by ", "storyPostNumber": " yards.", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":2, "numberSuffix": 0,  "storyPreName": "", "storyPostName": " walked into the store to buy a limited edition t-shirt. The sales-person told him that the last one was sold ", "storyPostNumber": " minutes ago", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":3, "numberSuffix": 0,  "storyPreName": "", "storyPostName": " was downloading some large and important files. When the estimated download time remaining was ", "storyPostNumber": "  minutes, his internet connection suddenly crashed", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":4, "numberSuffix": 1,  "storyPreName": "", "storyPostName": " walked into a store. He heard a commotion behind him. Turning back to look, he saw that the ", "storyPostNumber": " person who entered the store after him won a big cash prize for being the one-millionth customer.", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":5, "numberSuffix": 0,  "storyPreName": "", "storyPostName": "'s state recently implemented a new child-care subsidy policy. However, his total household income was $", "storyPostNumber": ",000 too high to qualify.", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":6, "numberSuffix": 0,  "storyPreName": "", "storyPostName": " was on a flight. In midflight, there was a lucky draw, and seats were randomly selected to receive prizes. The top prize went to the seat exactly ", "storyPostNumber": " rows behind him.", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":7, "numberSuffix": 0,  "storyPreName": "", "storyPostName": " recently went to a fundraising event where everyone was handed a raffle ticket at the door. The winning ticket was ", "storyPostNumber": " numbers higher than his.", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":8, "numberSuffix": 0,  "storyPreName": "", "storyPostName": " was watching a recent blockbuster movie on the plane. ", "storyPostNumber": " minutes before the 'big reveal' in the conclusion, the plane's entertainment system was switched off for landing.", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":9, "numberSuffix": 1,  "storyPreName": "", "storyPostName": " signed up for an event with a famous motivational speaker. He could not get tickets, and did not attend the event; afterwards, he found out he was the ", "storyPostNumber": " person on the waitlist for tickets.", "storyPostNamePositive": "", "storyPostNumberPositive": ""},
{"Version":"1", "storyID":10, "numberSuffix": 0, "storyPreName": "", "storyPostName": " took part in a fundraising event: a tightrope-walking competition using a long tightrope strung between two trees in the local park. He fell off when he was ", "storyPostNumber": " inches from completing it.", "storyPostNamePositive": "", "storyPostNumberPositive": ""}
],
[
{"Version":"1", "storyID":11, "numberSuffix": 0, "storyPreName": "", "storyPostName": " was in line for a free gift. When he was number ", "storyPostNumber": " in the line, the promoter announced that they were out of free gifts.", "storyPostNamePositive": " was in line for a free gift. When he got to the front of the line and received his gift, he noticed that they only had ", "storyPostNumberPositive": " gifts left."},
{"Version":"1", "storyID":12, "numberSuffix": 0, "storyPreName": "", "storyPostName": " was baking a large batch of fudge brownies for a party he was throwing. He was in a rush, and forgot to run to the store to get eggs. As a result, he was ", "storyPostNumber": " eggs short.", "storyPostNamePositive": "Bob was baking a large batch of fudge brownies for a party he was throwing. He was in a rush, and forgot to run to the store to get eggs. He managed to complete his recipe with ", "storyPostNumberPositive": " eggs leftover."},
{"Version":"1", "storyID":13, "numberSuffix": 0, "storyPreName": "", "storyPostName": " had a tight connection between flights. After running to the next gate, he was ", "storyPostNumber": " minutes late for his next flight.", "storyPostNamePositive": " had a tight connection between flights. After running to the next gate, he was ", "storyPostNumberPositive": " minutes early for his next flight."},
{"Version":"1", "storyID":14, "numberSuffix": 0, "storyPreName": "", "storyPostName": " had a huge group of children 'trick-or-treat'-ing at his door on Halloween. After counting the amount of candy left in his candy bowl, he realized he was ", "storyPostNumber": " pieces of candy short.", "storyPostNamePositive": " had a huge group of children 'trick-or-treat'-ing at his door on Halloween. After counting the amount of candy left in his candy bowl, he realized he had ", "storyPostNumberPositive": " pieces of candy leftover."},
{"Version":"1", "storyID":15, "numberSuffix": 0, "storyPreName": "", "storyPostName": " bought some paint to paint his fence. The paint ran out with ", "storyPostNumber": " inches of fence remaining.", "storyPostNamePositive": " bought some paint to paint his fence. He finished painting the fence, with enough paint left for an additional ", "storyPostNumberPositive": " inches of fence."},
{"Version":"1", "storyID":16, "numberSuffix": 0, "storyPreName": "", "storyPostName": " was rushing from work to an ice cream place. He arrived ", "storyPostNumber": " minutes after it closed.", "storyPostNamePositive": "  was rushing from work to an ice cream place. He arrived ", "storyPostNumberPositive": " minutes before it closed."},
{"Version":"1", "storyID":17, "numberSuffix": 0, "storyPreName": "", "storyPostName": " had a job interview this morning. There was morning traffic. He was ", "storyPostNumber": " minutes late for his interview.", "storyPostNamePositive": " had a job interview this morning. There was morning traffic. He was ", "storyPostNumberPositive": " minutes late for his interview."},
{"Version":"1", "storyID":18, "numberSuffix": 0, "storyPreName": "", "storyPostName": " was taking part in a world record attempt for most number of hot dogs eaten in an hour. He was ", "storyPostNumber": " hot dogs short of breaking the previous record.", "storyPostNamePositive": " was taking part in a world record attempt for most number of hot dogs eaten in an hour. He ate ", "storyPostNumberPositive": " hot dogs more than the previous record."},
{"Version":"1", "storyID":19, "numberSuffix": 0, "storyPreName": "", "storyPostName": " was at the laundromat doing a large batch of laundry for the whole house. After counting out his quarters, he realized he was ", "storyPostNumber": " quarters short.", "storyPostNamePositive": " was at the laundromat doing a large batch of laundry for the whole house. After counting out his quarters, he realized he had ", "storyPostNumberPositive": " quarters leftover."},
{"Version":"1", "storyID":20, "numberSuffix": 0, "storyPreName": "", "storyPostName": " picked up a discarded car roof luggage rack, and decided to take it home. When he got home, he found out that the rack was ", "storyPostNumber": " inches too long to fit securely on top of his car.", "storyPostNamePositive": " picked up a discarded car roof luggage rack, and decided to take it home. When he got home, he found out that the rack fit on top of his car, with about ", "storyPostNumberPositive": " inches to spare."},
{"Version":"1", "storyID":21, "numberSuffix": 0, "storyPreName": "", "storyPostName": " finished his meal and got up to pay. At the counter, he realized that he had forgotten to get cash from the ATM, and was ", "storyPostNumber": " dollars short.", "storyPostNamePositive": " finished his meal and got up to pay. At the counter, he counted out all his change, paid for the meal, and had just ", "storyPostNumberPositive": " dollars left."},
{"Version":"1", "storyID":22, "numberSuffix": 0, "storyPreName": "", "storyPostName": " received a letter at the end of the year from his frequent flyer club. He had missed the 'Silver' level, earning ", "storyPostNumber": " hundred miles less than the requirement.", "storyPostNamePositive": " received a letter at the end of the year from his frequent flyer club. He had reached the 'Silver' level, earning ", "storyPostNumberPositive": " hundred miles more than the requirement."}
]
];






var charNameList = ["Alex", "Bob", "Charlie", "Chris", 
    "David", "Eric", "Frank", "George", "Jacob", "Jake", 
    "James", "John", "Josh", "Mike", "Scott", "Steve", "Tom"];
var charNameOrder = shuffledArray(charNameList.length);

/* Experimental Variables */
// Number of conditions in experiment
var numConditions = allConditions.length;

// Randomly select a condition number for this particular participant
var chooseCondition = Math.random(Math.round()); //1;//0;//random(0, numConditions-1);

// Based on condition number, choose set of input (trials)
var allTrialOrders = allConditions[chooseCondition];

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
  condition: chooseCondition + 1,
  positiveArray: new Array(numTrials),
  distanceArray: new Array(numTrials),
  
  q1responseArray: new Array(numTrials),
  q2responseArray: new Array(numTrials),
  q3responseArray: new Array(numTrials),
  q4responseArray: new Array(numTrials),
  q5responseArray: new Array(numTrials),
  q6responseArray: new Array(numTrials),
  q7responseArray: new Array(numTrials),
  q8responseArray: new Array(numTrials),
  responsibilityArray: new Array(numTrials),
  actualUtilityArray: new Array(numTrials),
  alternativeUtilityArray: new Array(numTrials),
  freeResponses: new Array(numTrials),

  reactionTimeArray: new Array(numTrials),

  characterNames: new Array(numTrials),

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
        experiment.q1responseArray[numComplete-1] = $('input[name="q1"]:checked').val();
        experiment.q2responseArray[numComplete-1] = $('input[name="q2"]:checked').val();
        experiment.q3responseArray[numComplete-1] = $('input[name="q3"]:checked').val();
        experiment.q4responseArray[numComplete-1] = $('input[name="q4"]:checked').val();
        experiment.q5responseArray[numComplete-1] = $('input[name="q5"]:checked').val();
        experiment.q6responseArray[numComplete-1] = $('input[name="q6"]:checked').val();
        experiment.q7responseArray[numComplete-1] = $('input[name="q7"]:checked').val();
        experiment.q8responseArray[numComplete-1] = $('input[name="q8"]:checked').val();
        experiment.responsibilityArray[numComplete-1] = $('input[name="responsibilityQ"]:checked').val();
        experiment.actualUtilityArray[numComplete-1] = $('input[name="actualUtilityQ"]:checked').val();
        experiment.alternativeUtilityArray[numComplete-1] = $('input[name="alternativeUtilityQ"]:checked').val();
        experiment.freeResponses[numComplete-1] = $('#freeResponseInput').val();

        experiment.endTime = (new Date()).getTime();
        experiment.reactionTimeArray[numComplete-1] = experiment.endTime - experiment.startTime;

        $('input[name="q1"]:').prop('checked', false);
        $('input[name="q2"]:').prop('checked', false);
        $('input[name="q3"]:').prop('checked', false);
        $('input[name="q4"]:').prop('checked', false);
        $('input[name="q5"]:').prop('checked', false);
        $('input[name="q6"]:').prop('checked', false);
        $('input[name="q7"]:').prop('checked', false);
        $('input[name="q8"]:').prop('checked', false);
        $('input[name="responsibilityQ"]:checked').prop('checked', false);
        $('input[name="actualUtilityQ"]:checked').prop('checked', false);
        $('input[name="alternativeUtilityQ"]:checked').prop('checked', false);
        $('#freeResponseInput').val('');
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

      currentTrialNumForName = charNameOrder[numComplete];
      charName = charNameList[currentTrialNumForName];
      experiment.characterNames[numComplete] = charName;
      $('#CharName1').html(charName);
      $('#CharName2').html(charName);
      $('#CharName3').html(charName);
      $('#CharName4').html(charName);
      $('#CharName5').html(charName);

      //currentTrialNum is used for randomizing later
      currentTrialNum = shuffledOrder[numComplete]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];


      //$('#CharName2').html(charName);
      distance = allDistances.random();
      positive = 0;
      if(experiment.condition==2) {
        positive = Math.round(Math.random());
      }


      if(positive==0) {
        if(trial.numberSuffix) {
          if(distance == 2) {
            $('#storySpan1').html(trial.storyPreName + charName + trial.storyPostName + distance + "nd" + trial.storyPostNumber);
          } else {
            $('#storySpan1').html(trial.storyPreName + charName + trial.storyPostName + distance + "th" + trial.storyPostNumber);
          }
        } else {
          $('#storySpan1').html(trial.storyPreName + charName + trial.storyPostName + distance + trial.storyPostNumber);
        }
      } else {
        if(trial.numberSuffix) {
          if(distance == 2) {
            $('#storySpan1').html(trial.storyPreName + charName + trial.storyPostNamePositive + distance + "nd" + trial.storyPostNumberPositive);
          } else {
            $('#storySpan1').html(trial.storyPreName + charName + trial.storyPostNamePositive + distance + "th" + trial.storyPostNumberPositive);
          }
        } else {
          $('#storySpan1').html(trial.storyPreName + charName + trial.storyPostNamePositive + distance + trial.storyPostNumberPositive);
        }
      }
      
            
      experiment.storyIDArray[numComplete] = trial.storyID;
      experiment.orderArray[numComplete] = currentTrialNum;
      experiment.distanceArray[numComplete] = distance;
      experiment.positiveArray[numComplete] = positive;

      experiment.startTime = (new Date()).getTime();

      numComplete++;
    } // end of else loop.
  } // end experiment.next()
}; // end experiment variable

