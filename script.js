// Fade-up Animations
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

// Bold Brutalist Typing Effect
const nameText = "HARSHIT.";
const roles = ["WEB_DEV", "CREATIVE_CODER", "UI_NERD"];

let nameIndex = 0;
let roleIndex = 0;
let charIndex = 0;

const nameEl = document.querySelector(".typing-name");
const rolesEl = document.querySelector(".typing-roles");

function typeName() {
  if (nameIndex < nameText.length) {
    nameEl.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 100); 
  } else {
    setTimeout(typeRoles, 500);
  }
}

function typeRoles() {
  let currentRole = roles[roleIndex];

  if (charIndex < currentRole.length) {
    rolesEl.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(typeRoles, 60); // Fast, punchy typing
  } else {
    setTimeout(() => {
      eraseRole(currentRole);
    }, 1500); 
  }
}

function eraseRole(currentRole) {
  if (charIndex > 0) {
    rolesEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(() => eraseRole(currentRole), 30); // Fast erase
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRoles, 200);
  }
}

// Start typing effect 
setTimeout(typeName, 500);

// Skills Progress Bars Animation
const skillsSection = document.getElementById("skills");

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".progress-fill");
      bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      skillsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}