class Livro {
    constructor(codigo, titulo, autor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
    }

    imprimir() {
        return `Código: ${this.codigo}, Titulo: ${this.titulo}, Autor: ${this.autor}\n`;
    }
}
