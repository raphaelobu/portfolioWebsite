

//Temporary hardcoding until I have time to implement database
populateMechanicalProjects();

function populateMechanicalProjects(){
    console.log("in js");
    let inputString = "";
    const mechanicalProjects = [
        ["../projects/projectsImages/assemblyOfAJuicer.JPG","Assembly of a Juicer","Assembly of Juicer Components","Solidworks"],
        ["../projects/projectsImages/assemblyOfAJuicer.JPG","Assembly of a Juicer","Assembly of Juicer Components","Solidworks"],
        ["../projects/projectsImages/assemblyOfAJuicer.JPG","Assembly of a Juicer","Assembly of Juicer Components","Solidworks"],
        ["../projects/projectsImages/assemblyOfAJuicer.JPG","Assembly of a Juicer","Assembly of Juicer Components","Solidworks"]
    ];
    
    for (let i = 0; i < mechanicalProjects.length; i++) {
        inputString += '<div class="gridItem"><div class="marginOuter"><div class="marginInner" div onclick="#" style="cursor: pointer;"><div class="contentArea" style="overflow: hidden;">';
        inputString += '<img class="contentImg" src="';
        inputString += mechanicalProjects[i][0].projectImageLocation;  //Project Image Location
        inputString += '" style="width:100%; margin-top:-30%;"><br></div><div class="overlay"><div class="overlayText"><p class="textColorDarkGrey">';

        inputString += '<strong id="projectName">Name: ';
        inputString += mechanicalProjects[i][1].projectName;  //Project Name
        inputString += '</strong><br>';

        inputString += '<strong id="projectSentence">';
        inputString += mechanicalProjects[i][2].projectDescription;   //Project Description
        inputString += '</strong><br><br>';

        inputString += '<strong id="projectSkills">Skills: </strong>';
        inputString += mechanicalProjects[i][3].projectSkills;    //Project Skills
        inputString += '<br><br>';

        inputString += '<div class="clickMe"><a><strong class="textColorDarkGrey">Click for more details!</strong></a></div></p></div></div></div></div></div>'

      }

      inputString += '<div class="gridItem"></div>';

      document.getElementById('mechanicalProjectsGrid').innerHTML += inputString;
}