function addNewStudent() {
    var studentName = prompt("Please Enter Your Name ?");
    var stuList = document.getElementById("student-list");
    if (studentName != null && studentName != "") {
        var stuItem = document.createElement("li");
        stuItem.style.listStyle = "none";
        stuItem.id = "student-Item";
        var stuRemove = document.createElement("Button");
        stuRemove.textContent = "Remove";
        stuRemove.id = "but-Remove";
        stuItem.innerHTML = studentName;
        stuItem.appendChild(stuRemove);
        stuList.appendChild(stuItem);
        stuRemove.onclick = function () {
            stuItem.remove();
        };
    }
    else {
            alert("Sorry,You do not Enter A Name.Please Try Again ?")
    }
}

function searchForStudent() {
    var searchInput = document.getElementById("search").value;
    var allStudent = document.getElementsByTagName("li");
    if (searchInput == "") {
        alert("please enter a name you want to search for");
    }
    else if (allStudent.length < 1) {
        alert("sorry,there is no student in list to search for");
    }
    else {
        for(var i = 0; i < allStudent.length; i++) {
            var reqSearch = new RegExp(searchInput, "gi");
            if (!allStudent[i].textContent.match(reqSearch)) {
                allStudent[i].style.display = "none";
            }
        }
        
    }
}

