document.addEventListener("DOMContentLoaded", function () 
{
    let nav = document.getElementById("nav");
    let section = document.getElementById("section");
    let languageSelector = document.getElementById("header");

    
    // Inserting HTML for navigation and section
    nav.innerHTML = `
        <ul class="nav__ul" id="ul">
            <hr>
            <li class="nav__ul__li" data-modal="about">${infoUi.about}</li>
            <hr>
            <li class="nav__ul__li" data-modal="skills">${infoUi.skills}</li>
            <hr>
            <li class="nav__ul__li" data-modal="contact">${infoUi.contact}</li>
            <hr>
            <li class="nav__ul__li" data-modal="languages">${infoUi.languages}</li>
            <hr>
            <li class="nav__ul__li" data-modal="education">${infoUi.education}</li>
        </ul>

        <div class="image-links">
            <a href="https://github.com/Dum2601" target="_blank">
                <img src="./Img/Github-Icon.png" alt="Github Icon" class="Github-Icon">
            </a>
            <a href="https://www.linkedin.com/in/douglas-souza-barbosa-2698b31b9/" target="_blank">
                <img src="./Img/Linkedin-icon.png" alt="LinkedIn Icon" class="Linkedin-icon">
            </a>
        </div>
    `;

    section.innerHTML = `
        <p class="section__p1">${sectionData.name}</p>
        <p class="section__p2">${sectionData.iAm}</p>
        <p class="section__p3">${sectionData.look}</p>
    `;

    languageSelector.innerHTML = `
        <div class="language-selector">${headerData.english}</div>
    `;

    // Modal logic
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.getElementsByClassName("close")[0];

    const modalContent = {
        about: "About me <br> <br> Over three years of experience in software support, system testing, and technical documentation; skilled in SQL, GraphQL, customer service, and hardware support. Background in training employees, with a focus on problem-solving, continuous improvement, and knowledge in front-end development.",
        skills: "Skills <br> <br> * Proactive and adaptable <br> * Proficient in technology and technical support <br> * Knowledge in front-end development <br> * Experienced in software testing <br> * Troubleshooting",
        contact: "You can contact me at... <br><br> Email: Doug_b_souza@hotmail.com <br> Phone: +55 (71) 992882801 <br> Linkedin: Douglas Souza Barbosa (link below) <br> Github: Dum2601 (link below)",
        languages: "I speak the following languages... <br><br> * Portuguese (Native) <br> * English (B2) <br> * Espanish (A2) <br> * German (A1)",
        education: "Education <br> <br> Bachelor in Computer Science"
    };

    const navItems = document.querySelectorAll(".nav__ul__li");
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            const modalKey = this.getAttribute("data-modal");
            modalText.innerHTML = modalContent[modalKey] || "No content available"; // Use innerHTML for HTML tags
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
