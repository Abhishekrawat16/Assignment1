var projectList={
    projects:[],
    
    addProject:function(pId,pName,pStatus,pDesc){
        this.projects.push({
            pId:pId,
            pName:pName,
            pStatus:pStatus,
            pDesc:pDesc
        });
    },
    changeProjectStatus: function(pId, pStatus){
        this.issues[position]=newIssue;
        this.displayIssues();
    },
    
    deleteProject: function(position){
        this.issues.splice(position,1);
        this.displayIssues();
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
    }
}