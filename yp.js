const standardBoxes = document.querySelectorAll('.standard-box');
const planningData = {
    1: { // Standard 1 planning
      description: "A brief description of Standard 1 planning...",
      resources: ["Resource 1 Link", "Resource 2 Link"], 
      // ...other planning details
    },
    2: { description: "A brief description of Standard 1 planning...",
        resources: ["Resource 1 Link", "Resource 2 Link"], 
    },
    3:
    { // Standard 1 planning
        description: "A brief description of Standard 1 planning...",
        resources: ["Resource 1 Link", "Resource 2 Link"], 
        // ...other planning details
      },
      4: { // Standard 1 planning
        description: "A brief description of Standard 1 planning...",
        resources: ["Resource 1 Link", "Resource 2 Link"], 
        // ...other planning details
      },
      5: { // Standard 1 planning
        description: "A brief description of Standard 1 planning...",
        resources: ["Resource 1 Link", "Resource 2 Link"], 
        // ...other planning details
      },
      6: { // Standard 1 planning
        description: "A brief description of Standard 1 planning...",
        resources: ["Resource 1 Link", "Resource 2 Link"], 
        // ...other planning details
      },
      7: { // Standard 1 planning
        description: "A brief description of Standard 1 planning...",
        resources: ["Resource 1 Link", "Resource 2 Link"], 
        // ...other planning details
      },
      8: { // Standard 1 planning
        description: "A brief description of Standard 1 planning...",
        resources: ["Resource 1 Link", "Resource 2 Link"], 
        // ...other planning details
      },
    // ... data for other standards
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

  