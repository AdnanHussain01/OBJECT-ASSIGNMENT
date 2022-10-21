var Student1 = {
    Name: "Adnan Soomro",
    FatherName: "Mumtaz Soomro",
    ContactNo: "03112474407",
    rollno: 1,
    Result: "A+"
}
var Student2 = {
    Name: "Muhammad Sufyan",
    FatherName: "Muhammad Naseem", 
    ContactNo: "03112472207",
    rollno: 2,
    Result: "C"
}
var Student3 = {
    Name: "Muhammad Hamza",
    FatherName: "Saleem Ahmed",
    ContactNo: "03112474407",
    rollno: 3,
    Result: "A+"
}
var Student4 = {
    Name: "Nasir Haseeb",
    FatherName: "Muhammad Haseeb",
    ContactNo: "03112474407",
    rollno: 4,
    Result: "B"
}
var Student5 = {
    Name: "Yousuf Shahid",
    FatherName: "Muhammad Shahid",
    ContactNo: "03112474407",
    rollno: 5,
    Result: "A+"
}
var Student6 = {
    Name: "Bilal Ahmed",
    FatherName: "Muhammad Ahmed",
    ContactNo: "03112474407",
    rollno: 6,
    Result: "A"
}
var Student7 = {
    Name: "Muhammad Abdullah",
    FatherName: "Muhammad Raza",
    ContactNo: "03112474407",
    rollno: 7,
    Result: "A+"
}
var Student8 = {
    Name: "Shahid Anwar",
    FatherName: "Muhammad Anwar",
    ContactNo: "03112474407",
    rollno: 8,
    Result: "A+"
}
var Student9 = {
    Name: "Hamza Soomro",
    FatherName: "Muhammad Adnan",
    ContactNo: "03112474407",
    rollno: 9,
    Result: "A+"
}
var Student10 = {
    Name: "Muhammad Moiz",
    FatherName: "Muhammad Shahzad",
    ContactNo: "03112474407",
    rollno: 10,
    Result: "A+"
}
var AllClass = [Student1, Student2, Student3, Student4, Student5, Student6, Student7, Student8, Student9, Student10];


var show_name = document.getElementById("show-name");
var parent = document.getElementById("parent");

var input = document.getElementById("inputs");
for (var i = 0; i < AllClass.length; i++){
    show_name.innerHTML += `
        <tr>
        <td>${AllClass[i].Name}</td>
        <td>${AllClass[i].FatherName}</td>
        <td>${AllClass[i].ContactNo}</td>
        <td class="roll">${AllClass[i].rollno}</td>
        </tr>
    `
}
function search() {
    parent.style.display = 'none'
    for (var i = 0; i < AllClass.length; i++) {
    if (input.value == AllClass[i].rollno) {
        show_name.innerHTML = `
        <tr>
        <th>Name</th>
    <th  >Result</th>
    <th>Roll Number</th>
    </tr>
    <tr>   
    <td>${AllClass[i].Name}</td>
       <td class="res">${AllClass[i].Result}</td>
       <td class="roll">${AllClass[i].rollno}</td>
       </tr>
       `
    }
}
    }
    function back() {
        box.style.display = "none";
        container.style.display = "block";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        }