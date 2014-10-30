
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
{"Version":"2", "storyID":1, "story": "shopped for groceries", "condition":1},
{"Version":"2", "storyID":2, "story": "opened a letter", "condition":1},
{"Version":"2", "storyID":3, "story": "talked to his friend", "condition":1},
{"Version":"2", "storyID":4, "story": "kicked a ball", "condition":1},
],
[
{"Version":"2", "storyID":1, "storyType":2, "emotion":0, "story": "shopped for groceries", "condition":2},
{"Version":"2", "storyID":2, "storyType":2, "emotion":1, "story": "opened a letter", "condition":2},
{"Version":"2", "storyID":3, "storyType":2, "emotion":0, "story": "talked to his friend", "condition":2},
{"Version":"2", "storyID":4, "storyType":2, "emotion":1, "story": "kicked a ball", "condition":2},
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
var chooseCondition = random(0, numConditions-1);

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



/*
Show the instructions slide — this is what we want subjects to see first.
*/

$("#progressBar").hide();
showSlide("instructions");


// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials *2);

/*
The actual variable that will be returned to MTurk. The experiment object with various variables that you want to keep track of and return as results.

More practically, you should stick everything in an object and submit that whole object so that you don’t lose data (e.g. randomization parameters, what condition the subject is in, etc). Don’t worry about the fact that some of the object properties are functions — mmturkey (the Turk submission library) will strip these out.
*/

var experiment = {

/*
Parameters for this sequence.
*/
  //condition: 1,
  
  storyIDArray: new Array(numTrials),
  orderArray: new Array(numTrials),
  condition: chooseCondition + 1,

  q1responseArray: new Array(numTrials),
  q2responseArray: new Array(numTrials),
  q3responseArray: new Array(numTrials),
  q4responseArray: new Array(numTrials),
  q5responseArray: new Array(numTrials),
  q6responseArray: new Array(numTrials),
  q7responseArray: new Array(numTrials),
  q8responseArray: new Array(numTrials),
  
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
  sanityCheckCorrect: 1,

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
    
  showSlide("stage");
  
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


      //currentTrialNum is used for randomizing later
      currentTrialNum = shuffledOrder[numComplete]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];

      $('#storySpan1').html(trial.story);
      
      experiment.storyIDArray[numComplete] = trial.storyID;
      experiment.orderArray[numComplete] = currentTrialNum;

      experiment.startTime = (new Date()).getTime();

      numComplete++;
    } // end of else loop.
  } // end experiment.next()
}; // end experiment variable

