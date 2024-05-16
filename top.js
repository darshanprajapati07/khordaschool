const students = {
    "1st": [
        { name: "Alice", marks: 95, age: 7, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Bob", marks: 90, age: 6, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Charlie", marks: 85, age: 7, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ],
    "2nd": [
        { name: "David", marks: 92, age: 8, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Emily", marks: 88, age: 7, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Frank", marks: 86, age: 8, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ],
    "3rd": [
        { name: "George", marks: 97, age: 9, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Hannah", marks: 94, age: 9, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Isaac", marks: 91, age: 9, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ],
    "4th": [
        { name: "Jack", marks: 98, age: 10, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Kate", marks: 95, age: 10, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Liam", marks: 93, age: 10, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ],
    "5th": [
        { name: "Mia", marks: 99, age: 11, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Noah", marks: 97, age: 11, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Olivia", marks: 95, age: 11, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ],
    "6th": [
        { name: "Parker", marks: 98, age: 12, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Quinn", marks: 96, age: 12, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Ryan", marks: 94, age: 12, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ],
    "7th": [
        { name: "Sophia", marks: 99, age: 13, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Thomas", marks: 97, age: 13, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Uma", marks: 95, age: 13, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ],
    "8th": [
        { name: "Victor", marks: 98, age: 14, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Willow", marks: 96, age: 14, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Xavier", marks: 94, age: 14, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
    ]
};

function createStudentCard(name, marks, age, grade, rank, photo) {
    const card = document.createElement("div");
    card.classList.add("student-card");
    card.style.animation = "fade-in 0.5s ease";

    const photoElement = document.createElement("img");
    photoElement.classList.add("student-photo");
    photoElement.src = photo;
    photoElement.alt = name + "'s photo";

    const nameElement = document.createElement("div");
    nameElement.classList.add("student-name");
    nameElement.textContent = name;

    const rankElement = document.createElement("div");
    rankElement.classList.add("student-rank");
    rankElement.textContent = rank;

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("student-details");
    detailsElement.innerHTML = `<div>Marks: ${marks}</div><div>Age: ${age}</div><div>Grade: ${grade}</div>`;

    card.appendChild(photoElement);
    card.appendChild(nameElement);
    card.appendChild(rankElement);
    card.appendChild(detailsElement);

    return card;
}

function displayTopperStudents() {
    for (const standard in students) {
        const containerId = standard + "-container";
        const container = document.getElementById(containerId);
        const topStudents = students[standard].slice(0, 3);
        topStudents.forEach((student, index) => {
            const card = createStudentCard(student.name, student.marks, student.age, student.grade, student.rank, student.photo);
            container.appendChild(card);
        });
    }
}

displayTopperStudents();
