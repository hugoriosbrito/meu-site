// ====================================
// CONFIGURAÇÃO DO PORTFÓLIO
// ====================================
// Altere apenas os valores abaixo para personalizar seu portfólio

const portfolioData = {
    // INFORMAÇÕES PESSOAIS
    personal: {
        name: "Hugo Rios Brito",
        title: "Desenvolvedor Python & Analista de Dados",
        description: "Especialista em desenvolvimento de soluções para análise de dados e automação, com foco em projetos para o setor público e controle de fraudes.",
        location: "Bahia, Brasil",
        email: "hugoba532@gmail.com", 
        github: "https://github.com/hugoriosbrito",
        linkedin: "https://linkedin.com/in/hugoriosbrito" 
    },

    // SEÇÃO SOBRE MIM
    about: [
        "Sou um desenvolvedor Python apaixonado por análise de dados e automação, com experiência em criar soluções inovadoras para o setor público. Meu trabalho se concentra no desenvolvimento de sistemas para detecção de fraudes, análise de riscos e automação de processos.",
        
        "Tenho experiência sólida em desenvolvimento web, machine learning e criação de APIs. Meus projetos incluem sistemas de matriz de seletividade para análise de municípios, ferramentas de coleta automatizada de dados e aplicações 3D interativas.",
        
        "Atualmente, trabalho desenvolvendo soluções tecnológicas que contribuem para a transparência e eficiência no setor público, especialmente em projetos relacionados ao Tribunal de Contas dos Municípios da Bahia (TCM-BA)."
    ],

    // EXPERIÊNCIA PROFISSIONAL
    experience: [
        {
            title: "Estagiário em Análise de Dados - TCM-BA",
            period: "2024 - Presente",
            description: "Desenvolvimento de sistemas para análise de indicadores de risco em municípios baianos. Criação de matriz de seletividade para identificação de potenciais fraudes e irregularidades.",
            achievements: [
                "Desenvolvimento do Sistema de Matriz de Seletividade (SMS-TCM)",
                "Automação de coleta de notícias sobre corrupção municipal",
                "Análise de dados para suporte à auditoria"
            ]
        },
        {
            title: "Desenvolvedor Python Freelancer",
            period: "2022 - Presente",
            description: "Desenvolvimento de soluções personalizadas em Python, incluindo APIs, aplicações web com Streamlit e ferramentas de automação.",
            achievements: [
                "Desenvolvimento de APIs REST",
                "Aplicações interativas com Streamlit",
                "Automação de processos e web scraping"
            ]
        }
    ],

    // PROJETOS EM DESTAQUE
    projects: [
        {
            name: "Sistema de Matriz de Seletividade (SMS-TCM)",
            description: "Sistema para gerenciar indicadores em uma matriz de seletividade, habilitando ou desabilitando-os para recalcular e formar um ranking de municípios com riscos de fraudes.",
            github: "https://github.com/hugoriosbrito/Sistema-de-Matriz-de-Seletividade-SMS-TCM",
            demo: "", 
            demo: "", 
            technologies: ["HTML", "Python", "Jupyter Notebook"]
        },
        {
            name: "Math Function to STL",
            description: "Aplicação interativa desenvolvida com Streamlit que permite criar modelos 3D sólidos no formato .stl a partir de funções matemáticas para impressão 3D.",
            github: "https://github.com/hugoriosbrito/Math-Function-To-STL",
            demo: "math-to-stl.streamlit.app", 
            technologies: ["Python", "Streamlit", "3D Modeling"]
        },
        {
            name: "Crawler de Notícias - Municípios Baianos",
            description: "Script para coletar notícias relacionadas a corrupção, fraudes e operações policiais em municípios da Bahia usando o Google News para análise posterior pelo TCM-BA.",
            github: "https://github.com/hugoriosbrito/Crawler-Noticias-de-Municipios-Baianos",
            demo: "",
            technologies: ["Python", "Web Scraping", "Google News API"]
        },
        {
            name: "Machine Learning com TensorFlow",
            description: "Estudos e implementações de algoritmos de machine learning utilizando TensorFlow, com notebooks Jupyter para análise e experimentação.",
            github: "https://github.com/hugoriosbrito/machine-learningTF-study",
            demo: "",
            technologies: ["Python", "TensorFlow", "Jupyter", "Machine Learning"]
        }
    ],

    // HABILIDADES TÉCNICAS
    skills: {
        programming: [
            { name: "Python", level: 95 },
            { name: "Java", level: 85 },
            { name: "JavaScript", level: 70 },
            { name: "HTML/CSS", level: 90 }
        ],
        frameworks: [
            { name: "Streamlit", level: 90 },
            { name: "FastAPI", level: 85 },
            { name: "TensorFlow", level: 75 },
            { name: "Pandas", level: 80 }
        ],
        tools: [
            { name: "Docker", level: 80 },
            { name: "Git/GitHub", level: 90 },
            { name: "Jupyter Notebooks", level: 95 },
            { name: "PostgreSQL", level: 85 }
        ],
        specializations: [
            "Análise de Dados",
            "Machine Learning",
            "Web Scraping",
            "APIs REST",
            "Automação",
            "Visualização 3D",
            "Sistemas de Auditoria"
        ]
    },

    // CERTIFICAÇÕES 
    certifications: [
         {
             name: "Manual Prático do Deep Learning - Redes Neurais Profundas",
             issuer: "Udemy",
             date: "2025",
             link: "https://www.udemy.com/certificate/UC-4ef80a0a-2625-4734-9170-894eb4d747f6/"
         },
         {
             name: "IT Essentials",
             issuer: "Cisco",
             date: "2024",
             link: "https://www.credly.com/badges/76311095-9f23-48ba-a021-ac4c48e0c564/linked_in?t=smlv99"
         }
    ],

    // TEXTOS DA INTERFACE
    ui: {
        nav: {
            home: "Início",
            about: "Sobre",
            experience: "Experiência",
            projects: "Projetos",
            skills: "Habilidades",
            certifications: "Certificações",
            contact: "Contato"
        },
        buttons: {
            viewProjects: "Ver Projetos",
            contact: "Contato",
            sendMessage: "Enviar Mensagem"
        },
        sections: {
            about: "Sobre Mim",
            experience: "Experiência Profissional",
            projects: "Projetos em Destaque",
            skills: "Habilidades Técnicas",
            certifications: "Certificações",
            contact: "Entre em Contato"
        },
        skillCategories: {
            programming: "Linguagens de Programação",
            frameworks: "Frameworks & Bibliotecas",
            tools: "Ferramentas & Tecnologias",
            specializations: "Áreas de Especialização"
        },
        contact: {
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn",
            location: "Localização"
        },
        form: {
            name: "Seu Nome",
            email: "Seu Email",
            subject: "Assunto",
            message: "Sua Mensagem"
        },
        footer: "Todos os direitos reservados.",
        messages: {
            formSuccess: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
            fillAllFields: "Por favor, preencha todos os campos.",
            invalidEmail: "Por favor, insira um email válido."
        }
    }
};
