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
};


function renderHtml(data){
var htmlString = '';
htmlString += '<table id="myTable"><tr><th> Title </th> <th> Artist </th> <th> Genre </th> <th> Release Year </th> </tr>';
for (i=0;i< data.records.length;i++){
htmlString += '<tr name="' + data.records[i].genre + '">';
htmlString += '<td>'+ data.records[i].title + '</td>';
htmlString += '<td>'+ data.records[i].artist + '</td>';
htmlString += '<td>'+ data.records[i].genre + '</td>';
htmlString += '<td>'+ data.records[i].releaseYear + '</td>';
htmlString += '</tr>';
}
htmlString += '</table>';
document.getElementById("theSongsUserFriend").innerHTML = htmlString;
}



elem1Func();


function populateGrid() {

  var projectGrid = document.getElementByClass(gridContainer).innerHTML;

  projectGrid =  '<div class="gridContainer">';

  projectGrid += '</div>';
}

function populateGrid() {

  projectGrid += '<div class="gridItem">';
  projectGrid += '<div class="marginOuter">';
  projectGrid += '<div class="marginInner" div onclick="#" style="cursor: pointer;">'
  projectGrid += '<div class="contentArea">';
  projectGrid += '<img class="contentImg" src="'
  projectGrid += projectImgsource;
  projectGrid += '" style="';
  projectGrid += projectImgStyle
  projectGrid += ';"><br>';
  projectGrid += '</div>';
  projectGrid += '<div class="overlay">';
  projectGrid += '<div class="overlayText">';
  projectGrid += '<p class="textColorDarkGrey">';
  projectGrid += '<strong id="projectName">Name:';
  projectGrid += projectName;
  projectGrid += '<strong id="projectSentence">';
  projectGrid += projectSentence;
  projectGrid +=  '</strong><br>';
  projectGrid += '<br>';
  projectGrid += '<strong id="projectfields">Field(s):</strong>';
  projectGrid += projectFields;
  projectGrid += '<br>';
  projectGrid += '<strong id="projectSkills">Skills:</strong> '
  projectGrid += projectSkills;
  projectGrid += '<br>';
  projectGrid += '<br>';
  projectGrid += '<div class="clickMe"><a><strong class="textColorDarkGrey">Click for more details!</strong></a></div>';
  projectGrid += '</p>';
  projectGrid += '</div>';
  projectGrid += '</div>';
  projectGrid += '</div>';
  projectGrid += '</div>';

}