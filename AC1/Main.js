class Main {
    constructor() {
        this.usuarios = [];
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    addLivroUsuario(idUsuario, codigo, titulo, autor) {
        const usuario = this.usuarios.find(p => p.getId() === idUsuario);
        if (usuario) {
            const livro = new Livro(codigo, titulo, autor);
            usuario.inserirLivroEmprestado(livro); 
        }
    }

    transferirLivro(idUsuarioOrigem, idUsuarioDestino, codigo) {
        const usuarioOrigem = this.usuarios.find(p => p.getId() === idUsuarioOrigem);
        const usuarioDestino = this.usuarios.find(p => p.getId() === idUsuarioDestino);

        if (usuarioOrigem && usuarioDestino) {
            const livro = usuarioOrigem.getLivro(codigo);
            if (livro) {
                usuarioDestino.inserirLivroEmprestado(livro);
                usuarioOrigem.removerLivroEmprestadoByCodigo(codigo);
            }
        }
    }

    mostrarTodosOsUsuarios() {
        this.usuarios.forEach(usuario => {
            console.log(usuario.imprimirCompleto());
        });
    }
}


const main = new Main();
main.addUsuario(new Usuario(1, "Carlos"));
main.addLivroUsuario(1, 1, "Dom Quixote", "Miguel de Cervantes");
main.addLivroUsuario(1, 2, "Orgulho e Preconceito", "Jane Austen");
main.mostrarTodosOsUsuarios();
main.addUsuario(new Usuario(2, "Ana"));
main.transferirLivro(1, 2, 1);
main.mostrarTodosOsUsuarios();
main.addLivroUsuario(2,3, "Filho do fogo", "Daniel Mastral");
main.mostrarTodosOsUsuarios();
main.transferirLivro(2,1,3);
main.mostrarTodosOsUsuarios();
