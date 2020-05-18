<h1 align="center">
  Deno
</h1>

<h4 align="center">
  Uma alternativa nova ao NodeJS
</h4>

<p align="center">
  <a href="https://github.com/jeffersoncbd/what-is-deno/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jeffersoncbd/what-is-deno.svg">
  </a>
  
  <a href="https://github.com/jeffersoncbd/what-is-deno/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jeffersoncbd/what-is-deno.svg">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/jeffersoncbd/what-is-deno.svg">   
</p>

Conheci o [deno](https://deno.land/) atravéz deste [vídeo](https://www.youtube.com/watch?v=wQ93SqugjTw) do [Programador BR](https://www.youtube.com/channel/UCrdgeUeCll2QKmqmihIgKBQ), se tivesse sido click bait eu teria caido, então resolvi testar e após um longo dia brincando com ele finalmente consegui fazer um CRUD completo usando como inspiração este [repositório](https://github.com/diogosouza/logrocket_deno_api).

### :sunglasses: Minha opinião
- Criei um ambiente no [gitpod](https://www.gitpod.io/) e usei o `cargo` para instalar o `deno` como diz na página inicial, a instalação levou vários minutos o que me deixou preocupado.
- Logo de cara minha maior alegria: usar TypeScript sem precisar configurar nada! basicamente criei um arquivo .ts e saí codando!
- Poder usar `await` logo no primeiro bloco de código foi bem esquisito, meu cérebro não queria aceitar, mas o editor já estava preparado para isso e não retornou erro (para vários editores e IDE será necessário o plugin do deno, no VSCode já está [disponível](https://marketplace.visualstudio.com/items?itemName=justjavac.vscode-deno)).
- Não sei como ele faz, mas ele não gera uma pasta com os pacotes, então um arquivo .gitignore foi dispensado.
Enfim, fiquei bem hypado com o Deno, ele realmente tem capacidade de tomar grande fatia de usuários do NodeJS e ficarei de olho nele (nem entrei na questão de segurança pois acho que dispensa comentários).

### :computer: Como testar este repositório
1. Instale o Deno como mostra na página inicial dele.
2. Execute `deno run index.ts`, ele irá baixar todos os pacotes e depois tentará iniciar o servidor.
3. Vai dar erro de permissões então basta adicionar a flag `--allow-.....` depois de run e executar novamente por exemplo: `deno run --allow-net --allow-env index.ts`.
4. Você pode alterar a porta do servidor no arquivo `config.ts`.

### :memo: License
Este projeto está sob a licença MIT. Consulte [LICENÇA](https://github.com/jeffersoncbd/digital-pappers/blob/master/LICENSE) para obter mais informações.
