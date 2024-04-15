class Usuario {
  #id;

  constructor(id, nome) {
      this.#id = id;
      this.nome = nome;
      this.livrosEmprestados = [];
  }

  getId() {
      return this.#id;
  }

  inserirLivroEmprestado(livro) {
      this.livrosEmprestados.push(livro);
  }

  removerLivroEmprestadoByCodigo(codigo) {
      const index = this.livrosEmprestados.findIndex(livro => livro.codigo === codigo);
      if (index !== -1) {
          this.livrosEmprestados.splice(index, 1);
      }
  }

  getLivro(codigo) {
      return this.livrosEmprestados.find(livro => livro.codigo === codigo);
  }

  imprimir() {
      return `ID: ${this.#id} - Nome: ${this.nome}`;
  }

  imprimirCompleto() {
      let str = this.imprimir();
      str += `\nLivros Emprestados:\n`;
      for (const livro of this.livrosEmprestados) {
          str += ` - ${livro.imprimir()}\n`;
      }
      return str;
  }
}
