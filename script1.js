document.addEventListener('DOMContentLoaded', function () {
    const teachers = document.querySelectorAll('.teacher');

    teachers.forEach(teacher => {
        teacher.addEventListener('click', function () {
            const teacherInfo = teacher.querySelector('.teacher-info');
            if (teacher.classList.contains('open')) {
                teacher.style.maxHeight = null;
                teacherInfo.style.display = 'none';
            } else {
                teacherInfo.style.display = 'block';
                teacher.style.maxHeight = teacher.scrollHeight + 'px';
            }
            teacher.classList.toggle('open');
        });
    });
});
// // script.js
// const teachers = [
//     {
//         name: "D.M.Prajapati",
//         image: "1.jpg",
//         info: [
//             "Social Science Teacher",
//             "Contact: dmprajapati06@gmail.com",
//             "Phone: +91 9925650195",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
//     {
//         name: "Falakben Bhavsar",
//         image: "2.jpg",
//         info: [
//             "Mathematics Teacher",
//             "Contact: ",
//             "Phone: +0987654321",
//             "Standard: 3rd, 4th, 5th",
//             "Degree: B.A."
//         ]
//     },
    
// ];

// const teacherList = document.querySelector(".teachers");

// teachers.forEach((teacher) => {
//     const teacherHTML = `
//         <div class="teacher">
//             <img src="${teacher.image}" alt="${teacher.name}">
//             <h2>${teacher.name}</h2>
//             <div class="teacher-info">
//                 ${teacher.info.map((info) => `<p>${info}</p>`).join("")}
//                 <a href="#" class="insta_tea" target="_blank"><i class="fab fa-instagram"></i></a>
//             </div>
//         </div>
//     `;
//     teacherList.innerHTML += teacherHTML;
// });

// const teacherInfos = document.querySelectorAll(".teacher-info");

// teacherInfos.forEach((teacherInfo) => {
//     teacherInfo.style.display = "none";
// });

// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("teacher")) {
//         const teacherInfo = e.target.querySelector(".teacher-info");
//         teacherInfo.style.display = "block";
//     }
// });