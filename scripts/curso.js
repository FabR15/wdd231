const cursos = [
    {
        assunto: 'CSE',
        numero: 110,
        titulo: 'Introduction to Programming',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        tecnologia: [
            'Python'
        ],
        concluido: true
    },
    {
        assunto: 'WDD',
        numero: 130,
        titulo: 'Web Fundamentals',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        tecnologia: [
            'HTML',
            'CSS'
        ],
        concluido: true
    },
    {
        assunto: 'CSE',
        numero: 111,
        titulo: 'Programming with Functions',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        tecnologia: [
            'Python'
        ],
        concluido: true
    },
    {
        assunto: 'CSE',
        numero: 210,
        titulo: 'Programming with Classes',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        tecnologia: [
            'C#'
        ],
        concluido: false
    },
    {
        assunto: 'WDD',
        numero: 131,
        titulo: 'Dynamic Web Fundamentals',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        tecnologia: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        concluido: false
    },
    {
        assunto: 'WDD',
        numero: 231,
        titulo: 'Frontend Web Development I',
        creditos: 2,
        certificado: 'Web and Computer Programming',
        descricao: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        tecnologia: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        concluido: false
    }
]

const listaCursos = document.querySelector("#listaCursos");
const totalCreditos = document.querySelector("#totalCreditos");

function mostrarCursos(lista) {
    listaCursos.innerHTML = "";

    lista.forEach((curso) => {
        const cartao = document.createElement("article");
        cartao.classList.add("curso");

        if (curso.concluido) {
            cartao.classList.add("concluido");
        }

        cartao.innerHTML = `
            <h3>${curso.assunto} ${curso.numero}</h3>
            <p>${curso.titulo}</p>
            <p>${curso.creditos} créditos</p>
            <p>${curso.concluido ? "Concluído ✓" : "Em andamento"}</p>
        `;

        listaCursos.appendChild(cartao);
    });

    const somaCreditos = lista.reduce(
        (total, curso) => total + curso.creditos,
        0
    );

    totalCreditos.textContent =
        `Total de créditos: ${somaCreditos}`;
}

mostrarCursos(cursos);

document.querySelector("#todos").addEventListener("click", () => {
    mostrarCursos(cursos);
});

document.querySelector("#cse").addEventListener("click", () => {
    const cursosCSE = cursos.filter(
        (curso) => curso.assunto === "CSE"
    );

    mostrarCursos(cursosCSE);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const cursosWDD = cursos.filter(
        (curso) => curso.assunto === "WDD"
    );

    mostrarCursos(cursosWDD);
});