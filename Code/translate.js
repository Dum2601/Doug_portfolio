document.addEventListener("DOMContentLoaded", function () {
    var translate = false; 
    const btTranslate = document.querySelector(".language-selector");

    if (btTranslate) {
        btTranslate.addEventListener("click", function() {
            translate = !translate; 
            updateLanguage(translate);
            updateContent(); 
        });
    } else {
        console.error("Element with class 'language-selector' not found.");
    }

    function updateLanguage(currentLanguage) {
        if (currentLanguage) {
            infoUi.about = infoPt.sobre;
            infoUi.skills = infoPt.habilidades;
            infoUi.contact = infoPt.contato;
            infoUi.languages = infoPt.idiomas;
            infoUi.education = infoPt.educacao;
            sectionData.name = dadosSecao.nome;
            sectionData.iAm = dadosSecao.euSou;
            sectionData.look = dadosSecao.veja;
            headerData.english = dadosCabecalho.portugues;
        } else {
            infoUi.about = "About me";
            infoUi.skills = "Skills";
            infoUi.contact = "Contact";
            infoUi.languages = "Languages";
            infoUi.education = "Education";
            sectionData.name = "Hi, I’m Douglas.";
            sectionData.iAm = "I’m a front-end developer<br>and I’m improving my skills.";
            sectionData.look = "Feel free to take a look.";
            headerData.english = "English";
        }

        updateNavItems();
        updateModalContent(); // Atualiza o conteúdo do modal quando a língua muda
    }

    function updateNavItems() {
        const navItems = document.querySelectorAll(".nav__ul__li");
        navItems.forEach((item) => {
            const modalKey = item.getAttribute("data-modal");
            if (translate) {
                item.textContent = infoPt[modalKey] || infoUi[modalKey];
            } else {
                item.textContent = infoUi[modalKey];
            }
        });
    }

    function updateContent() {
        const sectionP1 = document.querySelector(".section__p1");
        const sectionP2 = document.querySelector(".section__p2");
        const sectionP3 = document.querySelector(".section__p3");

        sectionP1.innerHTML = sectionData.name;
        sectionP2.innerHTML = sectionData.iAm;
        sectionP3.innerHTML = sectionData.look;

        btTranslate.textContent = translate ? "Mudar para Inglês" : "Mudar para Português";
    }

    function updateModalContent() {
        const modalText = document.getElementById("modal-text");
        const navItems = document.querySelectorAll(".nav__ul__li");
        
        navItems.forEach((item) => {
            item.addEventListener("click", function () {
                const modalKey = this.getAttribute("data-modal");
                const modalContent = {
                    about: translate ? 
                        "Sobre mim <br> <br> Mais de três anos de experiência em suporte de software, teste de sistema e documentação técnica; habilidade em SQL, GraphQL, atendimento ao cliente e suporte a hardware. Experiência em treinamento de funcionários, com foco em resolução de problemas, melhoria contínua e conhecimento em desenvolvimento front-end." : 
                        "About me <br> <br> Over three years of experience in software support, system testing, and technical documentation; skilled in SQL, GraphQL, customer service, and hardware support. Background in training employees, with a focus on problem-solving, continuous improvement, and knowledge in front-end development.",

                    skills: translate ? 
                        "Habilidades <br> <br> * Proativo e adaptável <br> * Proficiente em tecnologia e suporte técnico <br> * Conhecimento em desenvolvimento front-end <br> * Experiência em teste de software <br> * Resolução de problemas" :
                        "Skills <br> <br> * Proactive and adaptable <br> * Proficient in technology and technical support <br> * Knowledge in front-end development <br> * Experienced in software testing <br> * Troubleshooting",

                    contact: translate ? 
                        "Você pode me contatar em... <br><br> Email: Doug_b_souza@hotmail.com <br> Telefone: +55 (71) 992882801 <br> Linkedin: Douglas Souza Barbosa (link abaixo) <br> Github: Dum2601 (link abaixo)" :
                        "You can contact me at... <br><br> Email: Doug_b_souza@hotmail.com <br> Phone: +55 (71) 992882801 <br> Linkedin: Douglas Souza Barbosa (link below) <br> Github: Dum2601 (link below)",

                    languages: translate ? 
                        "Eu falo os seguintes idiomas... <br><br> * Português (Nativo) <br> * Inglês (B2) <br> * Espanhol (A1) <br> * Alemão (A1)" :
                        "I speak the following languages... <br><br> * Portuguese (Native) <br> * English (B2) <br> * Spanish (A1) <br> * German (A1)",

                    education: translate ? 
                        "Educação <br> <br> Bacharel em Ciência da Computação" :
                        "Education <br> <br> Bachelor in Computer Science"
                };

                modalText.innerHTML = modalContent[modalKey] || "No content available";
            });
        });
    }

    updateContent();
    updateNavItems();
    updateModalContent();
});
