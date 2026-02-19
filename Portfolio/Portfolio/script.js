// ================= Hero Buttons =================
const heroButtons = [
  { name: "Download Resume", link: "assets/resume.pdf", type: "download" },
  { name: "Contact", link: "contact.html", type: "link" },
  { name: "GitHub", link: "https://github.com/yourusername", type: "icon", icon: "fab fa-github" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/yourusername/", type: "icon", icon: "fab fa-linkedin" },
  { name: "Kaggle", link: "https://www.kaggle.com/yourusername", type: "icon", icon: "fab fa-kaggle" },
  { name: "LeetCode", link: "https://leetcode.com/yourusername/", type: "icon", icon: "fas fa-code" },
  { name: "Email", link: "mailto:satyampatel21082005@gmail.com", type: "icon", icon: "fas fa-envelope" }
];

const heroButtonsContainer = document.getElementById("hero-buttons");
heroButtonsContainer.innerHTML = ""; // Clear previous

heroButtons.forEach(btn => {
  const a = document.createElement("a");
  if(btn.type === "icon"){
    a.className = "icon-btn";
    a.innerHTML = `<i class="${btn.icon}"></i>`;
  } else {
    a.className = "btn hero-btn";
    a.textContent = btn.name;
    if(btn.type === "download") a.setAttribute("download", "");
  }
  a.href = btn.link;
  a.target = "_blank";
  heroButtonsContainer.appendChild(a);
});

// ================= Hero Typing Animation =================
const typingEl = document.querySelector('.typing');
const titles = ["AI / ML Engineer", "GenAI Enthusiast", "Data Scientist"];
let titleIndex = 0, charIndex = 0;
let deleting = false;
function typeEffect() {
  const current = titles[titleIndex];
  if(!deleting){
    typingEl.textContent = current.slice(0, charIndex+1);
    charIndex++;
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, charIndex-1);
    charIndex--;
    if(charIndex === 0){
      deleting = false;
      titleIndex = (titleIndex+1) % titles.length;
    }
  }
  setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();

// ================= Skills Rendering =================
const skillsContainer = document.querySelector(".skills-container");
skills.forEach(skill => {
  const div = document.createElement("div");
  div.className = "skill-box";
  div.innerHTML = `<h3>${skill.category}</h3><p>${skill.items.join(", ")}</p><div class="skill-fill"></div>`;
  skillsContainer.appendChild(div);
});

// ================= Projects Rendering =================
const projectsContainer = document.querySelector(".projects-container");
function renderProjects(list) {
  projectsContainer.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `<h3>${p.title}</h3><span class="project-tag">${p.category}</span><p>${p.description}</p>`;
    projectsContainer.appendChild(div);
  });
}
renderProjects(projects);

// ================= Project Filters =================
function filterProjects(category) {
  if(category === "All") renderProjects(projects);
  else renderProjects(projects.filter(p => p.category === category));
}

// ================= Intersection Observer =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.1});
document.querySelectorAll('.skills-container, .projects-container').forEach(el => observer.observe(el));
