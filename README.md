# Desafio Frontend - SkyHub - BIT SP

Para o teste, pedimos que seja entrega em até 5 dias, mas caso precise de mais tempo, nos avise que podemos negociar o prazo.

## Layout

O layout do desafio a ser desenvolvido está em /references/layout

Analogamente, os assets econtram-se em /references/assets

## Desafio
Desenvolver a página do layout, utilizando as seguintes tecnologias:

- HTML 5
- CSS 3
- JavaScript ES6/ES7
- React
- Redux
- Jest

### API
A API a ser consumida pela aplicação está descrita em http://challenge.skyhub.com.br/docs

Para iniciar o desenvolvimento, basta criar uma conta a partir da própria documentação:

- Operação [Nova Conta](http://challenge.skyhub.com.br/docs/#/Contas/accounts_create)
- Clique em "Try it out"
- Preencha seu nome
- E clique em "Execute"
- Use o *token* gerado para realizar as demais operações

#### Obrigatório:
- Código HTML semântico
- Consumir o arquivo os recursos da API disponibilizada
- Design Responsivo
- Testes automatizados

#### Desejável:
- Interações que enriqueçam a navegação pelo layout

Crie um *fork* desse repositório e nos envie um **pull request**.

Não esqueça de ensinar como instalamos e rodamos seu projeto em nosso ambiente. :sunglasses:


#### Considerações - Minhas:

- Demorei em torno de 18h fazendo esse projeto.

- Usei eslint com airbnb por preferencia pessoal.

- Deixei o developer tools aberto pra store do redux, pois assim fica mais facil para entender meu codigo.

- Usei o setup inicial de um outro projeto que fiz com webpack que usava leaflet, alguns detalhes eu reparei que precisava arrumar só um pouco mais para frente.

- Não consegui fazer uma validação para os campos a tempo, então no caso das datas eles devem ser colocadas como DD/MM/YYYY corretamente.

- Não consegui fazer os Unit Tests dentro do tempo estipulado. 

- Por questão de alinhamento das colunas, resolvi fazer uma div para cada coluna na lista de relatorios.

- Resolvi dar o feedback dos erros de requisições por actions, como não foi especificado como o feedback deveria ser dado ao usuario, gosta dessa solução, pois dessa forma é facil de refletir mudanças na sua pagina de maneira assincrona baseada em ações do redux.

- No componente ReportListContainer podia ter feito um componente inves de uma função para cada coluna, mas preferi deixar em funções para não espalhar tanto codigos curtos, ficando mais facil de achar os codigos e de testar eles, considerando que cada função tem uma logica muito simples, retorna pouco conteudo e tem pouco codigo e que eles já pertencem a um componente com pouca logica e que reflete a store.

- Não entendi direito o requisito que representava exatamente o status do relatorio, resolvi usar a propriedade status da API para caso estivesse com a string "Created" seria um Concluído caso contrario seria um Erro.

- Resolvi não usar alguma lib pra componentes no começo do projeto, mas vejo que teria ajudado, principalmente algum sistema de grid.

- Não tinha certeza do que o botão limpar filtros e download iriam fazer, por hora deixei eles sem funções.

- A aplicação acabou abusando em alguns pontos de html/css/javascript puro, por tentar fazer coisas relativamente complexas sem uma biblioteca de componentes.

- Sou acostumado a usar Ant Design como biblioteca de componente, não que não tenha usado outras, vejo que daria pra usar ela tranquilamente nesse projeto.

#### Instalação

- Usar git para clonar o projeto em sua maquina.
- Instalar node.js caso não tenha na sua maquina, recomendo algum console tambem.
- Acessar o projeto de dentro do console e digitar o comando yarn install
- Usar o comando yarn start para iniciar o server(lembrando que no webpack ele está programado pra abrir na porta 8080, então a porta deve estar livre ou a config deve ser mudada no webpack)
- Assim que o server tiver sido iniciado acessar atráves de um browser a html: http://localhost:8080/, apesar que ela tambem deve abrir automaticamente quando o servidor local estiver pronto.

Extras:
- Você pode gerar uma versão de prod com yarn build, que vai gerar um bundle só no /dist
- Eu usei para desenvolver e acho legal de usar caso não esteja habituado a usar o plugin de redux, para ver actions/store rolando em tempo real, sei que tanto o chrome quanto o firefox tem a aplicação.