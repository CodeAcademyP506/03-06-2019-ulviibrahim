
  var Student1={
    name: "Besir",
    surname:"Memmedov",
    score: 58,

}
 var Student2= {
    name: "Ulvi",
    surname:"Ibrahimov",
    score: 75,

}

var teacher1={
    name: "Ismayil",
    surname: "Ismayilov",
    Students:[Student1,Student2,Student2,Student1,Student1],

    countOfStudents:function(){
        var count=0
        for( var i=0;i<this.Students.length;i++){
      count++
        }
       
        return count
        
    },
}

var teacher2={
    name: "Yolcu",
    surname: "Nesib",
    Students:[Student1,Student2,Student2,Student1,Student1],

    countOfStudents:function(){
        var count=0
        for( var i=0;i<this.Students.length;i++){
      count++
        }
       
        return count
        
    },
}

var group1={
    name:"p506",
     Students:([Student1,Student2,Student2,Student1,Student1]),
    countOfStudents:function(){
        var count=0
        for( var i=0;i<this.Students.length;i++){
      count++
        }
       
        return count
        
    },
    
    teacherOfGroup:{
        select_teacher:teacher2

    },
}

var group2={
        
    name:"p506",
     Students:[Student1,Student2,Student2,Student1,Student1],
    countOfStudents:function(){
        var count=0
        for( var i=0;i<this.Students.length;i++){
      count++
        }
       
        return count
        
    },
 
    teacherOfGroup:{
        select_teacher:teacher1,

    },
}


var University={
    name:"Code- Academy",
enter_groups:{
    
 
   group_name:group2,
   

},
groupteachername: function(){
    name=this.enter_groups.group_name.teacherOfGroup.select_teacher.name

    return name
}


    
       
        
      


}


   
  console.log(University.enter_groups.group_name.teacherOfGroup.select_teacher.countOfStudents())

// var teacherOfGroup = function(name,surname,groups_name){
//     this.teacher_name=name;
//     this.surname=surname;
//     this.groups_name=groups_name
// }
// var myteacer = new teacherOfGroup("Ulvi","Ibrahimov","p506")




