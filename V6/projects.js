var ourRequest = new XMLHttpRequest();
var projectGrid = document.getElementByClass("gridContainer").innerHTML;
function reqHandler(){
ourRequest.open('GET', 'https://raphaelobu.github.io/portfolioWebsite/V6/projects/projects.json');
ourRequest.onload = function(){
var rawData = ourRequest.responseText;
var ourData= JSON.parse(rawData);
renderHtml(ourData);
};
ourRequest.send();
console.log("request sent")
};


function renderHtml(data){
var projectGrid = '<div class="gridContainer">';
for (i=0;i< data.length;i++){

  projectGrid += '<div class="gridItem">';
  projectGrid += '<div class="marginOuter">';
  projectGrid += '<div class="marginInner" div onclick="#" style="cursor: pointer;">'
  projectGrid += '<div class="contentArea">';
  projectGrid += '<img class="contentImg" src="'
  projectGrid += data[i].imageFileLocation;
  projectGrid += '" style="';
  // projectGrid += projectImgStyle
  projectGrid += ';"><br>';
  projectGrid += '</div>';
  projectGrid += '<div class="overlay">';
  projectGrid += '<div class="overlayText">';
  projectGrid += '<p class="textColorDarkGrey">';
  projectGrid += '<strong id="projectName">Name:';
  projectGrid += data[i].projectName;
  projectGrid += '<strong id="projectSentence">';
  projectGrid += data[i].singleSentenceSummary;
  projectGrid +=  '</strong><br>';
  projectGrid += '<br>';
  projectGrid += '<strong id="projectfields">Field(s):</strong>';
  projectGrid += data[i].fields;
  projectGrid += '<br>';
  projectGrid += '<strong id="projectSkills">Skills:</strong> '
  projectGrid += data[i].skills;
  projectGrid += '<br>';
  projectGrid += '<br>';
  projectGrid += '<div class="clickMe"><a><strong class="textColorDarkGrey">Click for more details!</strong></a></div>';
  projectGrid += '</p>';
  projectGrid += '</div>';
  projectGrid += '</div>';
  projectGrid += '</div>';
  projectGrid += '</div>';

}
projectGrid += '</div>';
document.getElementByClass(gridContainer).innerHTML = projectGrid ;
}