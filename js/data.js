const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Polytechnic University of the Philippines Santo Tomas",
    year: "2024 - Present"
  },
  {
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    school: "Tanauan Institute Inc.",
    year: "2022 - 2024"
  }
];

function renderEducation() {
  const containers = document.querySelectorAll('.education-timeline');
  
  containers.forEach(container => {
    container.innerHTML = educationData.map(item => `
      <div class="timeline-item position-relative ps-4 ${container.classList.contains('mt-3') ? 'mt-3' : ''}">
        <span class="timeline-dot position-absolute rounded-circle"></span>
        <div class="timeline-content">
          <h5 class="fw-bold mb-1" style="color: #2a2b2a; font-size: 1.05rem;">${item.degree}</h5>
          <div class="text-secondary mb-1" style="font-size: 0.95rem;">${item.school}</div>
          <div class="text-muted small">${item.year}</div>
        </div>
      </div>
    `).join('');
  });
}

renderEducation();

const techStackData = [
    {
        category: "Frontend",
        items: ["HTML", "CSS", "Javascript", "Bootstrap"]
    },
    {
        category: "Backend",
        items: ["C#", "PHP", "Python", "MySQL", "PostgreSQL"]
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "Github", "VS Code", "Figma"]
    },
];

const techStackContainer = document.getElementById("cardsContainer");

for (let i = 0; i < techStackData.length; i++) {
    const data = techStackData[i];

    let tagsHtml = "";
    for (let j = 0; j < data.items.length; j++) {
        tagsHtml += `<span class="p-2 text-color border rounded small lh-1">${data.items[j]}</span>`
    }

    const colDiv = document.createElement("div");
    colDiv.className = "col";
    colDiv.innerHTML = `
    <div class="card shadow-sm h-100" style="min-height: 150px">
      <div class="card-header fw-bold" style="background-color: #efefef">
        ${data.category}
      </div>
      <div class="card-body d-flex flex-wrap gap-2 align-content-start">
        ${tagsHtml}
      </div>
    </div>
  `;

    techStackContainer.appendChild(colDiv);

};

const projectsData = [
    {
        imgSrc: "assets/img/f1_topdown_racing.jpg",
        imgAlt: "F1 Top-Down Racing Image",
        badges: ["Python", "Pygame"],
        title: "F1 Top-Down Racing",
        description: "A casual, top-down 2D arcade mini-game built with a retro pixel art style, featuring responsive car handling and smooth background parallax scrolling.",
        githubUrl: "https://github.com/jomelmnz/F1-Top-down-Racing"
    },
    {
        imgSrc: "assets/img/lockdown_defense.jpg",
        imgAlt: "Lockdown Defense Image",
        badges: ["Python", "Pygame"],
        title: "Lockdown Defense",
        description: "A classic 2D tower defense game focused on strategic placement, resource survival, and upgrading stationary turrets to hold off waves.",
        githubUrl: "https://github.com/Cheztahcry/Tower-Defense"
    },
    {
        imgSrc: "assets/img/house_central.jpg",
        imgAlt: "House Central Image",
        badges: ["PHP", "JavaScript", "Bootstrap"],
        title: "House Central",
        description: "A web platform designed to streamline boarding house operations, handle property management tasks, and organize basic records cleanly.",
        githubUrl: "https://github.com/jomelmnz/HouseCentral"
    },
    {
        imgSrc: "assets/img/stay_sto_tomas.jpg",
        imgAlt: "StayStoTomas Image",
        badges: ["PHP", "MySQL", "CSS"],
        title: "StayStoTomas",
        description: "A localized property listing platform featuring interactive map pinning to help users easily find, view, and locate available boardhouses and room rentals within the area.",
        githubUrl: "https://github.com/riveracharlie/stay-sto-tomas"
    }
];

const projectsContainer = document.getElementById("portfolioContainer");

for (let i = 0; i < projectsData.length; i++) {
    const project = projectsData[i];

    let badgesHtml = '';
    for (let j = 0; j < project.badges.length; j++) {
        badgesHtml += `<span class="badge bg-dark-subtle text-dark me-1 mb-1 fs-7">${project.badges[j]}</span>`;
    }

    const colDiv = document.createElement("div");
    colDiv.className = "col-12 col-sm-6 col-md-4";
    colDiv.innerHTML = `
    <div class="card shadow h-100 position-relative" style="min-height: 150px">
      <div class="ratio ratio-16x9 bg-light" style="border-top-left-radius: var(--bs-card-inner-border-radius); border-top-right-radius: var(--bs-card-inner-border-radius); overflow: hidden;">
        <img src="${project.imgSrc}" class="card-img-top" alt="${project.imgAlt}" />
      </div>
      <div class="card-body">
        <div class="mb-2">
          ${badgesHtml}
        </div>
        <h4 class="card-title mt-3">${project.title}</h4>
        <p class="card-text">
          ${project.description}
        </p>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark mt-auto stretched-link">View in Github</a>
      </div>
    </div>
  `;

    projectsContainer.appendChild(colDiv);
}

const activitiesData = [
  {
    badges: ["HTML", "CSS", "Bootstrap", "UI/UX Design"],
    title: "Nintendo Switch Bento Layout",
    description: "A web activity featuring a dark-themed bento grid layout inspired by Nintendo Switch hardware, showcasing console specs and the Joy-Con ecosystem.",
    link: "https://jomelmnz.github.io/Web-Development-Activities/Activity 1 - Bento Layout",
    linkText: "View Live Activity"
  },
  {
    badges: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    title: "JSON Web Activity",
    description: "A Clash of Clans-inspired training interface featuring a responsive troop grid and interactive modal popups showcasing detailed troop statistics like DPS and hitpoints.",
    link: "https://jomelmnz.github.io/Web-Development-Activities/Activity 2 - JSON",
    linkText: "View Live Activity"
  }
];

const activitiesContainer = document.getElementById("activitiesContainer");

for (let i = 0; i < activitiesData.length; i++) {
  const activity = activitiesData[i];

  let badgesHtml = "";
  for (let j = 0; j < activity.badges.length; j++) {
    badgesHtml += `<span class="badge bg-dark-subtle text-dark fs-7 me-1 mb-1">${activity.badges[j]}</span>`;
  }

  const colDiv = document.createElement("div");
  colDiv.className = "col-12";
  colDiv.innerHTML = `
    <div class="card shadow h-100 position-relative">
      <div class="card-body p-4 p-sm-5">
        <div class="mb-2">
          ${badgesHtml}
        </div>
        <h4 class="card-title fw-bold mt-3">
          ${activity.title}
        </h4>
        <p class="card-text text-color mb-4 w-75">
          ${activity.description}
        </p>
        <a
          href="${activity.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-dark mt-auto stretched-link"
        >${activity.linkText}</a>
      </div>
    </div>
  `;

  activitiesContainer.appendChild(colDiv);
}

const processData = [
    {
        step: "1",
        title: "Analysis",
        description: "Analyze project goals, target users, and technical requirements to define the best development approach."
    },
    {
        step: "2",
        title: "System Design",
        description: "Create a structured plan outlining technologies, features, and scope to guide the development process."
    },
    {
        step: "3",
        title: "Implementation",
        description: "Build the solution using clean, efficient code with continuous improvements and testing."
    },
    {
        step: "4",
        title: "Deployment",
        description: "Deliver the final product with proper documentation and provide support for maintenance and updates."
    }
];

const processContainer = document.getElementById("processContainer")

for (let i = 0; i < processData.length; i++) {
    const data = processData[i];
    const colDiv = document.createElement("div");
    colDiv.className = "col";
    colDiv.innerHTML = `
    <div class="card shadow h-100">
      <div class="card-body p-4">
        <div class="d-flex align-items-center justify-content-center shadow-sm border border-1 border-dark rounded-circle fw-bold mb-3" style="width: 40px; height: 40px; font-size: 20px">
          ${data.step}
        </div>
        <h4 class="card-title fw-bold mb-3">${data.title}</h4>
        <p class="card-text">
          ${data.description}
        </p>
      </div>
    </div>
  `;

    processContainer.appendChild(colDiv);
};

const servicesData = [
  {
    iconSrc: "assets/svg/frontend_icon.svg",
    iconAlt: "Frontend Icon",
    width: "35",
    height: "35",
    title: "Frontend Development",
    description: "Develop responsive interfaces using HTML, CSS, Bootstrap, and JavaScript."
  },
  {
    iconSrc: "assets/svg/backend_icon.svg",
    iconAlt: "Backend Icon",
    width: "30",
    height: "30",
    title: "Backend Development",
    description: "Build server-side logic and connect applications with databases."
  },
  {
    iconSrc: "assets/svg/database_icon.svg",
    iconAlt: "Database Icon",
    width: "30",
    height: "30",
    title: "Database Management",
    description: "Design, implement, and manage relational databases using MySQL."
  }
];

const servicesContainer = document.getElementById("servicesContainer");

for (let i = 0; i < servicesData.length; i++) {
  const data = servicesData[i];

  const colDiv = document.createElement("div");
  colDiv.className = "col";

  colDiv.innerHTML = `
    <div class="card shadow h-100">
      <div class="card-body p-4">
        <div class="d-flex align-items-center justify-content-center mb-3" style="width: 40px; height: 40px; font-size: 20px">
          <img src="${data.iconSrc}" alt="${data.iconAlt}" width="${data.width}" height="${data.height}" />
        </div>
        <h4 class="card-title fw-bold mb-3">${data.title}</h4>
        <p class="card-text">
          ${data.description}
        </p>
      </div>
    </div>
  `;

  servicesContainer.appendChild(colDiv);
};

