document.addEventListener("DOMContentLoaded", () => {
    function Pessoa() {
        let nome;
        let email;
        let data;
        let telfixo;
        let telcel;
        let matricula;

        //tratamento nome
        this.setNome = function (vNome) {
            this.nome = vNome;
        }
        this.getNome = function () {
            return this.nome;
        }
        //tratamento email
        this.setEmail = function (vEmail) {
            this.email = vEmail;
        }
        this.getEmail = function () {
            return this.email;
        }
        //tratamento matricula
        this.setMatricula = function (vMatricula) {
            this.matricula = vMatricula;
        }
        this.getMatricula = function () {
            return this.matricula;
        }
    }

    function Aluno() {
        Pessoa.call(this);
        let curso;

        this.setCurso = function (vCurso) {
            this.curso = vCurso;
        }
        this.getCurso = function () {
            return this.curso;
        }
    }

    function Professor() {
        Pessoa.call(this);
        let area;
        let lattes;

        this.setArea = function (vArea) {
            this.area = vArea;
        }

        this.getArea = function () {
            return area;
        }

        this.setLattes = function (vLattes) {
            this.lattes = vLattes;
        }

        this.getLattes = function () {
            return lattes;
        }
    }

    const radios = document.querySelectorAll('input[type="radio"]');
    const form = document.querySelector('form');
    const camposDiv = document.querySelector('#campos');


    const aluno = new Aluno();

    const labelCurso = document.createElement('label');
    labelCurso.for = 'curso';
    labelCurso.textContent = 'Curso:';
    camposDiv.appendChild(labelCurso);

    const curso = document.createElement('input');
    curso.type = 'text';
    curso.addEventListener('blur', () => {
        aluno.setCurso(curso.value);
    });
    camposDiv.appendChild(curso);
    radios.forEach(radio => {
        radio.addEventListener('change', () => {

            const camposDiv = document.querySelector('#campos');

            camposDiv.innerHTML = '';

            if (radio.value === 'aluno') {

                const aluno = new Aluno();

                const labelCurso = document.createElement('label');
                labelCurso.for = 'curso';
                labelCurso.textContent = 'Curso:';
                camposDiv.appendChild(labelCurso);

                const curso = document.createElement('input');
                curso.type = 'text';
                curso.addEventListener('blur', () => {
                    aluno.setCurso(curso.value);
                });
                camposDiv.appendChild(curso);

            } else if (radio.value === 'professor') {

                const professor = new Professor();

                const labelArea = document.createElement('label');
                labelArea.for = 'area';
                labelArea.textContent = 'Area:';
                camposDiv.appendChild(labelArea);

                const area = document.createElement('input');
                area.type = 'text';
                area.addEventListener('blur', () => {
                    professor.setArea(area.value);
                });
                camposDiv.appendChild(area);

                const labelLattes = document.createElement('label');
                labelLattes.for = 'lattes';
                labelLattes.textContent = 'Lattes:';
                camposDiv.appendChild(labelLattes);

                const lattes = document.createElement('input');
                lattes.type = 'text';
                lattes.placeholder = 'Lattes';
                lattes.addEventListener('blur', () => {
                    professor.setLattes(lattes.value);
                });
                camposDiv.appendChild(lattes);
            }
        });
    });
    //pegando os valores 
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let telfixo = document.getElementById("telfixo").value;
    let telcel = document.getElementById("telcel").value; 
    let matricula = document.getElementById("nome").value;
}); 