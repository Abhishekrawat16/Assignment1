var projectList={
    projects:[],
    
    addProject:function(pId,pName,pStatus,pDesc){
        this.projects.push({
            pId:pId,
            pName:pName,
            pStatus:pStatus,
            pDesc:pDesc
        });
        console.log(this.projects);
    },

    changeProjectStatus: function(pStatus){
        this.projects[position].pStatus=pStatus;
        this.displayIssues();
    },
    
    deleteProject: function(position){
        this.projects.splice(position,1);
        view.displayProjects();
    }
    
};

var checkInput={

    isPrime:function(){
        var number= document.getElementById("number").value;
        var output = document.getElementById('output');
        output.textContent = 'Is a Prime Number';
        if(number==0){
            output.textContent = 'Please Enter a Number';
        }
        for(var i=2; i<=number/2; i++){
            if(number/i==Math.round(number/i)){
                output.textContent = 'Not a Prime Number';
                break;
            };
        };       
    },
    checkStatus: function(pid,pname){
        var projects=projectList.projects;
       for(var i=0; i<projects.length;i++){
           if(pid!="" && projects[i].pId==pid){
               if(projects[i].pStatus=="completed"){
                return "True: Issue Completed";
               }
               else{
                return "False: Issue In Progress";
               }
           }
           else if(pname!="" && projects[i].pName.toLowerCase()==pname.toLowerCase()){
            if(projects[i].pStatus=="completed"){
                return "True: Issue Completed";
               }
               else{
                return "False: Issue In Progress";
               }
           }        
       }
       return "No project available against entered input";
    },
    showReqProject: function(pid){
        var projects=projectList.projects;
        for(var i=0; i<projects.length;i++){
            if(projects[i].pId==pid){
                return projects[i];
            }
        }
        return null;
    }

};

var view= {

    addProject:function(){
        var pId= document.getElementById("pid").value;
        var pName= document.getElementById("pname").value;
        var pStatus= document.getElementById("pstatus").value;
        var pDesc= document.getElementById("pdesc").value;

        var output = document.getElementById('ques4op');
        if(pId==""||pName==""||pStatus==""||pDesc==""){
            output.textContent ="All Above field are required";
        }
        else{
            projectList.addProject(pId,pName,pStatus,pDesc);
        }
        this.displayProjects();
    },
    createStatusDropdown: function (status) {
        var statusSelect;
        statusSelect =  document.createElement('select');
        statusSelect.id="selectedStatus";
        var option= document.createElement('option');
        option.value="inProgress";
        option.textContent="In Progress"
        statusSelect.appendChild(option);
        option= document.createElement('option')
        option.value="completed";
        option.textContent="Completed"
        statusSelect.appendChild(option);
        statusSelect.value=status;
        return statusSelect;
    },
    createDeleteButton: function () {
        var deleteButton;
        deleteButton =  document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteProject';
        deleteButton.addEventListener('click',function(event){
            projectList.deleteProject(event.target.parentNode.id);
            console.log(projectList.projects);
         });
        return deleteButton;
    },
    displayProjects :  function(){
        var projectUl = document.querySelector('ul');
        projectUl.addEventListener('change',function(event){
            projectList.projects[event.target.parentNode.id].pStatus=event.target.value;
            console.log(projectList.projects);
        });

        projectUl.innerHTML = '';
        for(var i=0; i<projectList.projects.length;i++){
            var projectLi = document.createElement('li');
            projectLi.id=i;
            var project = projectList.projects[i];
            var projectTextWithCompletion = '';
            projectTextWithCompletion = "Project Id: "+project.pId +" || " +"  Project Name: "+project.pName+" || "+"Status: ";
            projectLi.textContent = projectTextWithCompletion;
            projectLi.appendChild(this.createStatusDropdown(project.pStatus));
            projectLi.appendChild(this.createDeleteButton());
            projectUl.appendChild(projectLi);
         }
        },

        checkStatus: function(){
            var pIdSol2= document.getElementById("pidSol2").value;
            var pNameSol2= document.getElementById("pnameSol2").value;
            var output = document.getElementById('ques2op');
            if(pIdSol2!="" || pNameSol2!=""){
                output.textContent=checkInput.checkStatus(pIdSol2,pNameSol2);
            }
            else{ 
                output.textContent="Aleast one input is requred";
            }
            
        },
        showReqProject: function(){
            var pIdSol3= document.getElementById("pidSol3").value;
            var output = document.getElementById('ques3op');
            if(pIdSol3!=""){
                var projectUl = document.querySelector('ul');
                projectUl.innerHTML = '';
                var projectLi = document.createElement('li');
                var projectTextWithCompletion = '';
                var project=checkInput.showReqProject(pIdSol3);
                if(project!=null){
                projectTextWithCompletion = "  Project Name: "+project.pName+" || "+"Project Description: "+project.pDesc;
                
            }
            else{
                projectTextWithCompletion= "No Project Found";
            }
                projectLi.textContent = projectTextWithCompletion;
                projectUl.appendChild(projectLi);
               
            }
            else{ 
                output.textContent="Please enter Project Id";
            }
        }
}