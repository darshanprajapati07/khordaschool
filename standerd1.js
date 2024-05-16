const students = {
    "1st": [
        { name: "Alice", marks: 95, age: 7, grade: "A", rank: 1, photo: "https://via.placeholder.com/80", },
        { name: "Bob", marks: 90, age: 6, grade: "A", rank: 2, photo: "https://via.placeholder.com/80", },
        { name: "Charlie", marks: 85, age: 7, grade: "B", rank: 3, photo: "https://via.placeholder.com/80", }
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
const standardBoxes = document.querySelectorAll('.standard-box');
const planningData = {
    1: { // Standard 1 planning
      description: "A brief description of Standard 1 planning...",
      resources: ["Resource 1 Link", "Resource 2 Link"], 
      // ...other planning details
    }
  };  

standardBoxes.forEach(box => {
    const standard = box.dataset.standard;
    const planningContent = planningData[standard];
    const contentContainer = box.querySelector('.planning-content');

    // Add description
    if (planningContent.description) {
        contentContainer.innerHTML = `<p>${planningContent.description}</p>`; 
    }

    // Add resources (if any)
    if (planningContent.resources) {
        const resourceList = document.createElement('ul');
        planningContent.resources.forEach(resource => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${resource}">${resource}</a>`; 
            resourceList.appendChild(listItem);
        });
        contentContainer.appendChild(resourceList);
    }
}); 
document.addEventListener("DOMContentLoaded", function() {
    // Sample data of materials
    const materials = [
        { subject: "Mathematics", title: "Maths Worksheet", link: "https://example.com/maths_worksheet.pdf" },
        { subject: "Language Arts", title: "English Grammar", link: "https://example.com/english_grammar.pdf" },
        { subject: "Science", title: "Science Project Ideas", link: "https://example.com/science_project_ideas.pdf" },
        // Add more materials as needed
    ];

    const materialList = document.getElementById("materialList");

    // Populate materials list
    materials.forEach(material => {
        const item = document.createElement("div");
        item.classList.add("material-item");
        const link = document.createElement("a");
        link.href = material.link;
        link.textContent = material.title;
        item.appendChild(link);
        materialList.appendChild(item);
    });
});

  