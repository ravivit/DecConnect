// -------------------------
// Section Switching
// -------------------------
function showSection(id) {
  // Hide all main sections
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  // Show the selected section
  document.getElementById(id).classList.add('active');
}

// -------------------------
// Login / Signup / Forgot Password
// -------------------------
const loginBox = document.querySelector('.login-box');
const signupBox = document.getElementById('signup-box');
const forgotBox = document.getElementById('forgot-box');

function showSignup() {
  loginBox.classList.add('hidden');
  signupBox.classList.remove('hidden');
  forgotBox.classList.add('hidden');
}

function hideSignup() {
  signupBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
}

function showForgot() {
  loginBox.classList.add('hidden');
  forgotBox.classList.remove('hidden');
  signupBox.classList.add('hidden');
}

function hideForgot() {
  forgotBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
}

// -------------------------
// Feed Posts
// -------------------------
const feedPosts = [
  {
    name: "Ravi Kasaudhan",
    content: "Launching my startup 🚀 #DevConnect",
    img: "https://media.licdn.com/dms/image/v2/D5622AQEU3Utla9uUSQ/feedshare-shrink_800/B56ZnO.z7TKMAg-%2F0%2F1760114302394?e=2147483647&v=beta&t=atLNZaVklo3i9XfjwqXyJ4tWDDQ0m1IDhQL-zKj5IhY"
  },
  {
    name: "Neha Verma",
    content: "Learning AI + ML. Let's collab!",
    img: "https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=500/https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/0ffdeeac-2712-451c-913a-f17d8a1751fa.png"
  },
  {
    name: "Aryan Kyatham",
    content: "Won 7 hackathons! #CodingLife",
    img: "https://media.licdn.com/dms/image/v2/C4D12AQGJ8XHy-WQCrg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1592923286474?e=2147483647&v=beta&t=cxfRcuKyw_MCXxbBToivlmmUYBBgRBDTGZz-xrai75U"
  },
  {
    name: "Data Science Pro",
    content: "Post Hackathon Guide - Tips & Tricks.",
    img: "https://global.discourse-cdn.com/uipath/optimized/4X/9/d/4/9d445ca8eb31d5655bc48f819ac63a09b091151d_2_690x456.jpeg"
  },
  {
    name: "Tech News",
    content: "Latest AI developments 2025",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Artificial_intelligence_-_AI.jpg"
  },
  {
    name: "Robotics Lab",
    content: "Hands-on Robotics Workshop!",
    img: "https://cdn.pixabay.com/photo/2017/03/24/10/01/robot-2160721_1280.jpg"
  }
];

const feedContainer = document.getElementById("feed-container");

feedPosts.forEach((post, index) => {
  const div = document.createElement("div");
  div.className = "post-card";
  div.innerHTML = `
    <h3>${post.name}</h3>
    <p>${post.content}</p>
    <img src="${post.img}" alt="Post Image">
    <div class="post-actions">
      <button id="like-${index}">Like</button>
      <button id="comment-${index}">Comment</button>
      <button id="share-${index}">Share</button>
    </div>
  `;
  feedContainer.appendChild(div);

  // Button actions
  document.getElementById(`like-${index}`).addEventListener("click", () => {
    alert(`You liked ${post.name}'s post!`);
  });
  document.getElementById(`comment-${index}`).addEventListener("click", () => {
    alert(`You commented on ${post.name}'s post!`);
  });
  document.getElementById(`share-${index}`).addEventListener("click", () => {
    alert(`You shared ${post.name}'s post!`);
  });
});

// -------------------------
// Projects
// -------------------------
const projects = [
  {
    title: "Water Quality Prediction",
    description: "AI-powered model to predict water quality based on dataset features.",
    img: "water.png",
    link: "https://github.com/ravivit/water-quality-prediction"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(div);
});


// -------------------------
// Profile Upload
// -------------------------
const uploadPic = document.getElementById("uploadPic");
const previewImg = document.getElementById("previewImg");

uploadPic.addEventListener("change", e => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImg.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

// Profile Form Save
const profileForm = document.getElementById("profileForm");
const profileDisplay = document.getElementById("profileDisplay");

profileForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const age = document.getElementById("age").value;
  const leetcode = document.getElementById("leetcode").value;
  const linkedin = document.getElementById("linkedin").value;
  const github = document.getElementById("github").value;

  profileDisplay.innerHTML = `
    <img src="${previewImg.src}" alt="Profile">
    <p><strong>${name}</strong></p>
    <p>${college}, Age: ${age}</p>
    <p>
      <a href="${leetcode}" target="_blank">LeetCode</a> | 
      <a href="${linkedin}" target="_blank">LinkedIn</a> | 
      <a href="${github}" target="_blank">GitHub</a>
    </p>
  `;
  profileDisplay.classList.remove("hidden");
});





