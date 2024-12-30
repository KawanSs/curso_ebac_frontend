function Musica(titulo, autor, genero){
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;

    this.reproduzir = function(){
        console.log("TAN-TAN-TAN TAAAAAAAAAAAN");
    }
}

function Jingle(titulo, produto){
    this.produto = produto;

    Musica.call(this, titulo);
}

function TrilhaSonora(titulo, autor, producao){
    this.producao = producao;
    let _autor = autor;

    this.getAutor = function(){
        return _autor;
    }
    this.setAutor = function(nome){
        _autor = nome;
    }

    Musica.call(this, titulo);
}


function TrilhaCompartilhada(titulo, autor2) {
    TrilhaSonora.call(this, titulo, "Hans Zimmer", "Batman vs Superman");
    
    this.autor = function() {
        const autores = `${this.getAutor()}, ${autor2}`;
        this.setAutor(autores);
    };

    this.autor(); // Call autor to initialize _autor with both names
}

const JingleNatalino = new Jingle("O Sabor Brasileiro", "Dolly");
const TrilhaRomantica = new TrilhaSonora("Promises to Keep", "Nobuo Uematsu", "Final Fantasy VII: Rebirth");
const TrilhaAcao = new TrilhaCompartilhada("Dawn of Justice", "Junkie XL");

console.log(TrilhaAcao.getAutor());


