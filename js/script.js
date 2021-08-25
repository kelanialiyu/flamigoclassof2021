// modals

window.addEventListener("load",function(){
    var vstudent;
    var vstudents = document.querySelector(".grad-students")
   for (const key in students) {
       if (Object.hasOwnProperty.call(students, key)) {
           const student = students[key];
           vstudent = makeStudent(student)
           vstudents.appendChild(vstudent)
       }
   }
})

var students = {
    "23":
        {
        "id" : "23",
        "name" : " Turmat Bello",
        "nickname" : "TBell",
        "phone_no" : "08123232126",
        "email" : "turmatb@mail.com",
        "position_held" :"Sanitary Prefect",
        "hobbies": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut commodi.",
        "aspirations" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut commodi. Placeat harum eveniet ratione perferendis odio alias hic consequatur expedita, ab officiis, tenetur odit praesentium eligendi minus neque. Dolores!",
        "headshoturl" : "/img/headshoti.png",
        "student_picurl" :"/img/graduate-picture.jpg"
    },
    "25":
    {
        "id": "25",
        "name": " Isbaq Tolu",
        "nickname": "Balu",
        "phone_no": "08168740228",
        "email": "isbaqtolu@mail.com",
        "position_held": "Head Prefect",
        "hobbies": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut commodi.",
        "aspirations": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aut commodi. Placeat harum eveniet ratione perferendis odio alias hic consequatur expedita, ab officiis, tenetur odit praesentium eligendi minus neque. Dolores!",
        "headshoturl": "/img/headshotII.jpg",
        "student_picurl": "/img/graduate-picture.jpg"
    }
}


// blinking graduation
setInterval(() => {
    myriadColour("Graduating class 2021");
}, 1000);

// helper functions
function myriadColour(text){
    var colored=""
    for (const char of text) {
        colored+="<span style='color: " + getColour() + "' >"+ char + "</span>";
    }
    document.querySelector("span.below").innerHTML= colored
}

function getColour(){
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 128);
    return "rgb(" + red + ", "+ green + ", " + blue + ")";
}

function makeStudent(student){
    var visualstudent = document.createElement("div");
    var headshot = document.createElement("div");
    var name = document.createElement("p");
    visualstudent.className = "grad-student";
    visualstudent.setAttribute("data-id", student.id);
    visualstudent.setAttribute("data-toggle","modal")
    visualstudent.setAttribute("data-target","#studentProfileModal")
    headshot.className = "headshot";
    name.className="name"
    headshot.style.backgroundImage ="url("+student.headshoturl+")";
    name.innerHTML=student.name;
    visualstudent.appendChild(headshot);
    visualstudent.appendChild(name);
    return visualstudent;
}
function removeActiveClass() {
    var nav = document.querySelectorAll("#navigation ul li");
    nav.forEach(element => {
        element.setAttribute("class", "nav-item");
    });
}
function makeClassActive(item){
    item.classList.add("active")
}

// adding active reactitvity to nav element 
$(".nav-item").on("click", function(event){
    removeActiveClass()
    var parent = event.currentTarget;
    makeClassActive(parent);
})
document.querySelector("section.about").addEventListener("mouseenter ",function (params) {
    confirm("are you working")
},true);

function greet(event){console.log(event)}


// modals
$('#studentProfileModal').on('show.bs.modal', function (event) {
    var source = $(event.relatedTarget) // Button that triggered the modal
    var id = source[0].dataset.id
    var st = students[id] 
    var modal = $(this)
    modal.find('.md-name').text(st.name);
    modal.find('.md-nickname').text(st.nickname);
    modal.find('.md-phone_no').text(st.phone_no);
    modal.find('.md-email').text(st.email);
    modal.find('.md-position_held').text(st.position_held);
    modal.find('.md-aspiration').text(st.aspirations);
    modal.find('.md-hobbies').text(st.hobbies);
    modal.find('.student-picture')[0].style.backgroundImage = "url(" + st.student_picurl+")";
})

