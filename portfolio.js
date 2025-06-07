const projects = [
    {
      name: "Advanced Java Programming (AJP)",
      description: "Explore Java concepts in depth with practical applications.",
      link: "https://dribbble.com/shots/following",
    },
    {
      name: "Comprehensive Assessment (CA)",
      description: "Master comprehensive evaluations and skill integration.",
      link: "https://dribbble.com/shots/following",
    },
    {
      name: "HTML and CSS",
      description: "Hyper Text Markup language and Cascading StyleSheet.",
      link: "https://dribbble.com/shots/following",
    },
    {
        name: "JavaScript",
        description: "JavaScript is a programming language used to create interactive and dynamic web content.",
        link: "https://dribbble.com/shots/following",
      },
  ];
  
  const projectsGrid = document.getElementById("projects-grid");
  
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
  
    projectCard.innerHTML = `
      <h2 class="project-title">${project.name}</h2>
      <p class="project-description">${project.description}</p>
      <a class="project-link" href="${project.link}">Learn More</a>
    `;
  
    projectsGrid.appendChild(projectCard);
  });

  document.getElementById('contact-button').addEventListener('click',function(){
    window.location.href='mailto:ankitrj787@gmail.com';
  })

  const educationData = [
    { year: "2024 - Present", institution: "MCA", degree: "Master of Computer Applications" },
    { year: "2021 - 2024", institution: "BCA", degree: "Bachelor of Computer Applications" },
    { year: "2020 - 2021", institution: "Higher Secondary School", degree: "Science Stream" },
  ];
  
  function populateSection(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = data
      .map(
        (item) => `
        <div class="journey-item">
          <h4>${item.year}</h4>
          <p>${item.institution}</p>
          <span>${item.degree}</span>
        </div>
      `
      )
      .join("");
  }
  
  // Populate Education section
  populateSection(educationData, "education-list");
  

  document.querySelector('.resume-button').addEventListener('click', function () {
    alert("Thanks for downloading my resume!");
  });
  
