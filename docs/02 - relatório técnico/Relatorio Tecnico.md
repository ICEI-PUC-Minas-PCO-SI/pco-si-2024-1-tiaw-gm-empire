# Informações do Projeto
## Documentação da GM Empire

Aqui está a documentação completa da empresa GM Empire, que por sua vez, visa deixar evidente a parte documental do nosso projeto que iremos seguir durante todo o percurso.

## SI-Sistemas de Informação 

Curso que tem o estudo voltado para a compreensão, desenvolvimento e aplicação de sistemas computacionais em diversos contextos.

## Participantes

### - Bruno Xavier Santos Frota
### - Caio Martins Bicalho da Costa
### - Daniel de Queiroz Fernandes
### - Daniel Heringer Verner Silva
### - Estevão Cunha Roberto
### - João Víctor Fagundes Barbosa
### - Vitor Mendonça Braga

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)

# Contexto

## 1. Introdução

Hoje em dia, o mercado dos jogos digitais vem aumentando cada vez mais, e com isso,
a busca por informações, ligas, torneios e eventos também se encontram no auge.
Todavia, com essa demanda cada vez maior do público dos games desejarem estar
cada vez mais antenados nesse assunto, a busca por sites que oferecem horários de
jogos de competição de E-Sports, de forma intuitiva e acessível para os fãs, se torna um
problema.
Este documento visa fornecer uma visão abrangente do projeto que irá ser criado para
preencher esta lacuna, documentando seus objetivos, requisitos, arquitetura, e todas
as informações necessárias para garantir o entendimento completo e bem-sucedido do
desenvolvimento do site. Desde a concepção até a implementação, este documento
servirá como um guia abrangente para todos os aspectos do desenvolvimento do site
de horários de jogos digitais, campeonatos, eventos e classificações.
Assim, o desejo desse projeto não é apenas criar uma plataforma que seja funcional,
como também, atender todas as expectativas dos fãs de E-Sports em todo o mundo.

## Problema

De acordo com o que foi apresentado na introdução, o principal problema que
necessita de uma solução através desse projeto, é a falta de informações relacionadas
à horários de campeonatos de jogos digitais. Vale lembrar que nesta web, a GM Empire
cita os quatro jogos mais jogados do mundo atualmente. São eles: CS2 (Counter-Strike
2); LOL (League of Legends); Rainbow Six Siege; Valorant;

## Objetivos

O objetivo trivial deste projeto é da criação de uma plataforma que disponibilize da
melhor maneira possível, informações que irão satisfazer as necessidades dos usuários
que gostam de jogar e estão presentes no mundo profissional dos e-sports, seja espectador ou até
mesmo, um atleta.
Dessa forma, o site da empresa visa resolver dificuldades como:
  ● Datas e horários de partidas entre times;
  ● Notícias;
  ● Sobre nós;

## Justificativa

Diante do crescimento exponencial da indústria dos jogos digitais nos últimos anos, é
fundamental reconhecer a necessidade de fornecer aos entusiastas e espectadores
uma plataforma confiável e abrangente para acompanhar os horários dos jogos. De
acordo com a Pesquisa Game Brasil, cerca de 165 milhões de pessoas em todo o
mundo acompanham partidas de esporte eletrônico com frequência. No Brasil, 64,3%
do público tem o hábito de jogar os E-Sports, sendo que 29% assiste partidas por cerca
de três horas por semana.
Com isso, a disponibilidade de plataformas que contenham informações acerca de
eventos e competições deste mercado, se encontra precária.

## Público-Alvo

O público do cenário dos jogos eletrônicos é bastante diversificado e abrange uma
ampla faixa etária, mas é mais focado em jovens adultos e adolescentes (que estão
entre 14 e 34 anos, em média). Porém, o público dos E-Sports continua a evoluir à
medida que o setor cresce e se diversifica.

 
# Especificações do Projeto

Nesta parte do documento, vamos detalhar as especificações do projeto, onde serão descritos os requisitos funcionais e não funcionais, bem como as restrições que orientam o escopo do trabalho. Também serão apresentadas as personas, representando os diferentes tipos de usuários do sistema, juntamente com o mapa de empatia para compreender suas necessidades e expectativas. Por fim, serão discutidas as histórias de usuários, que descrevem situações específicas do sistema do ponto de vista dos usuários. As técnicas e ferramentas utilizadas para realizar estas especificações incluem entrevistas, análise de documentos, discussões em grupo e prototipagem.

## Personas e Mapas de Empatia

Lucas tem 16 anos, mora no bairro Eldorado em Contagem e é Estudante no Ensino Médio do
instituto Maria Montessori, devido a ocupações com a escola, gostaria de algo que pudesse atualizálo rapidamente sobre eventos festivos e competitivos em jogos eletrônicos no dia a dia. Lucas diz
que perde bastante tempo para encontrar cronogramas de eventos em um modelo englobe todos os
jogos que ele consome. Um relato legal de Lucas durante a entrevista foi a história de quando, aos
14 anos, venceu seu primeiro torneio de League of Legends organizados por seus colegas de
diferentes turmas e idades. Por ser um dos mais novos competidores desse torneio amador na
época, seu destaque no time vencedor o inspirou a buscar uma carreira no mundo dos e-sports.

Fernanda tem 21 anos, mora no bairro Água Branca em Contagem e é uma estudante universitária
de Psicologia na cidade de Belo Horizonte. Adora jogar e assistir a competições de e-sports nas horas
vagas para relaxar do estresse dos estudos. Ao mesmo tempo, gostaria de ter mais facilidade para se
atualizar sobre eventos festivos e casuais de jogos, já que não tem tempo para competir. Sua paixão
por jogos começou desde quando ela tinha 12 anos e jogava Minecraft em servidores recheados de
“mods” com seus amigos depois da escola.

Gustavo tem 34 anos, é tutor de Muay Thai e trabalha em uma academia de lutas no bairro Castelo
em Belo Horizonte. Embora não seja um jogador ávido, ele ocasionalmente joga alguns jogos de RPG
em seu Playstation 5, dado que desde sempre foi apaixonado pelas histórias de várias franquias
como: The Elder Scrolls, Diablo, Baldur’s Gate e Dark Souls. Sua história marcante com jogos
eletrônicos aconteceu quando ele tinha 19 anos e conseguiu 100% das conquistas de Demon Soul’s,
jogo que na época era seu favorito. Ele aprecia a habilidade e estratégia envolvidas em jogos
competitivos, mas não costuma consumir tantos conteúdos de jogos de FPS, onde predominam
torneios e coisas do tipo.

Bruno tem 29 anos, mora no bairro Riacho das Pedras em Contagem e é um engenheiro de software
que trabalha em uma empresa de tecnologia em Belo Horizonte. Ele sempre foi apaixonado por
jogos eletrônicos desde criança, quando ganhou seu primeiro console de videogame. Sua história
marcante nos jogos aconteceu quando ele tinha 20 anos e participou de um torneio de Mortal
Kombat em uma feira de jogos. Apesar de não ter vencido, a experiência de competir em um evento
ao vivo foi inesquecível para ele. Embora não tenha mais tanto tempo livre para jogar como antes,
Bruno ainda acompanha de perto o cenário competitivo de e-sports, especialmente os torneios de
jogos de luta.

Ana tem 17 anos, é estudante do Chromos, está no ensino médio e mora no bairro Novo Eldorado
em Contagem. Apaixonada por jogos desde criança, Ana passa grande parte do tempo livre jogando
uma variedade de jogos, desde jogos competitivos como Valorant até jogos casuais como Animal
Crossing. No entanto, ela tem dificuldade em se manter atualizada sobre os eventos e torneios que
acontecem no mundo dos e-sports. Ana muitas vezes encontra obstáculos ao tentar acessar
cronogramas de eventos, pois muitas fontes são confusas ou desatualizadas. Isso dificulta sua
participação em competições locais, pois ela nem sempre sabe quando elas estão ocorrendo. Ana diz
não ter momentos marcantes em jogos eletrônicos, mas que definitivamente não abriria mão de seu
hobby.

João tem apenas 14 anos e é um estudante do Ensino Fundamental do instituto Maria Montessori,
no bairro Eldorado, em Contagem. Ele aficionado por torneios de e-sports, especialmente de
Fortnite e Rocket League. Apesar de sua paixão pelos jogos, João enfrenta dificuldades em se manter
atualizado sobre os eventos e torneios que ocorrem regularmente. Ele muitas vezes encontra
problemas ao tentar acessar informações de eventos e torneios online, pois sente a necessidade de
procurar em diversas fontes e raramente consegue se atualizar sobre vários eventos e torneios em
uma mesma plataforma ou site.

## Mapas de Empatia

Lucas (16 anos, Estudante do Ensino Médio no Instituto Maria Montessori, Contagem):

Razões para usar o site de e-sports:

Atualização rápida sobre eventos festivos e competitivos em jogos eletrônicos no dia a dia.
Facilidade de encontrar cronogramas de eventos em um único lugar.
Inspirado por sua vitória em um torneio amador de League of Legends, busca uma carreira no
mundo dos e-sports.

Conhecimentos e habilidades:

Experiência em competições de e-sports, especialmente em League of Legends.
Conhecimento sobre a cena competitiva de jogos eletrônicos.
Habilidades técnicas em jogos e estratégias de equipe.

Fernanda (21 anos, Estudante Universitária de Psicologia, Contagem/Belo Horizonte):

Razões para usar o site de e-sports:

Atualização sobre eventos festivos e casuais de jogos para relaxar do estresse dos estudos.
Facilidade de acesso a informações relevantes sobre competições de e-sports.
Interesse em jogos desde a infância.

Conhecimentos e habilidades:

Experiência em jogos, especialmente Minecraft com mods.
Conhecimento sobre a cena competitiva de e-sports, mesmo não competindo ativamente.
Interesse em acompanhar competições de e-sports como forma de entretenimento e relaxamento.

Gustavo (34 anos, Tutor de Muay Thai, Belo Horizonte):

Razões para usar o site de e-sports:

Acompanhamento de torneios e eventos de jogos online como forma de entretenimento.
Interesse em jogos de RPG e apreciação pela habilidade e estratégia envolvidas em jogos
competitivos.
Dificuldade em se manter atualizado sobre eventos devido à falta de serviços de notificação.

Conhecimentos e habilidades:

Experiência em jogos de RPG, incluindo conquistas significativas.
Apreciador do aspecto estratégico e desafiador dos jogos eletrônicos.
Habilidades técnicas em jogos, especialmente em jogos de RPG.

Bruno (29 anos, Engenheiro de Software, Belo Horizonte):

Razões para usar o site de e-sports:

Paixão por jogos eletrônicos desde a infância, interesse em acompanhar o cenário competitivo.
Dificuldade em encontrar informações atualizadas e organizadas sobre eventos de e-sports.
Experiência em participar de torneios presenciais, interesse em acompanhar competições online.

Conhecimentos e habilidades:

Experiência em competições de jogos de FPS, como Counter-Strike.
Familiaridade com a cena competitiva de e-sports.
Habilidades técnicas em jogos eletrônicos e interesse em novas tecnologias.

Ana (17 anos, Estudante do Ensino Médio, Contagem):

Razões para usar o site de e-sports:

Apaixonada por jogos desde a infância, desejo de participar de competições locais.
Dificuldade em se manter atualizada sobre eventos devido à falta de fontes confiáveis e organizadas.
Interesse em encontrar um local centralizado para informações sobre eventos e torneios de esports.

Conhecimentos e habilidades:

Experiência em uma variedade de jogos, tanto competitivos quanto casuais.
Dificuldade em acessar informações atualizadas sobre eventos de e-sports.
Interesse em competir e se envolver mais profundamente na cena de e-sports.

João (14 anos, Estudante do Ensino Fundamental, Contagem):

Razões para usar o site de e-sports:
Aficionado por torneios de e-sports, especialmente em jogos como Fortnite e Rocket League.
Dificuldade em acessar informações atualizadas sobre eventos e torneios online devido à dispersão
das fontes de informação.
Interesse em encontrar uma plataforma centralizada para acompanhar eventos e torneios de
múltiplos jogos.

Conhecimentos e habilidades:

Experiência em jogos de e-sports, especialmente em Fortnite e Rocket League.
Dificuldade em se manter atualizado sobre eventos devido à falta de uma fonte centralizada de
informação.
Interesse em competir e participar ativamente da cena de e-sports.


## Histórias de Usuários


|    Persona         |            Quer/Precisa            |                Motivo                  |
|--------------------|------------------------------------|----------------------------------------|
|       Lucas        | Receber atualizações sobre eventos festivos e competitivos em jogos eletrônicos. | Se atualizar sem perder tempo.       |
|       Fernanda     | Facilidade para se atualizar sobre eventos casuais de jogos. | Se informar sobre seu hobby de maneira confiável e rápida. |
|       Gustavo      | Rapidez para se informar sobre eventos de jogos mais nichados. | Diminuir a perda de eventos online importantes. |
|       Bruno        | Melhorar a facilidade de entendimento em relação às datas de torneios em jogos de fps. | Não se confundir com informações mal distribuídas na maioria das fontes. |
|       Ana          | Acessar cronogramas que estejam sempre atualizados. | Aumentar sua participação em competições locais. |
|       João         | Otimizar a quantidade de fontes necessárias para se informar sobre torneios. | Facilitar sua participação em eventos competitivos a partir de fontes informativas de qualidade. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve ser intuitivo e fácil de usar, com uma interface limpa e organizada que permita aos usuários encontrar rapidamente as informações que procuram. | ALTA | 
|RF-002| o site deve exibir um calendário de eventos importantes, como torneios, campeonatos e eventos especiais. | ALTA |
|RF-003| Os usuários devem poder pesquisar e visualizar informações sobre os times. | MÉDIA | 
|RF-004| Permitir aos usuários interagir por meio de comentário nas notícias e no feedback do site. | BAIXA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser intuitivo e fácil de usar, com uma interface limpa e organizada que permita aos usuários encontrar rapidamente as informações que procuram. | ALTA | 
|RNF-002| O site deve oferecer suporte a diferentes fusos horários e regiões geográficas. | MÉDIA | 
|RNF-003| Oferecer suporte a múltiplos idiomas para alcançar uma audiência global e garantir que os usuários possam acessar as informações no idioma de sua preferência. | BAIXA |
|RNF-004| Garantir que o site seja acessível em navegadores mais antigos, mas sem priorizar extensivamente a otimização para eles | BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Não devem ser feitos aportes financeiros no projeto |
|02| O projeto deverá ser entregue até o final do semestre |
|03| Não pode-se utilizar  banco de dados |
|04| O desenvolvimento do site não pode ser delegado/terceirizado |



# Projeto de Interface

Uma das principais necessidades do projeto é de que a interface seja intuitiva ao usuário. Principalmente por conta de trabalhar com várias informações de vários cenários. Com isso mente, foi desenhada uma interface simples e clean para atender esse requisito.


## User Flow

![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/148807690/27d5c9db-952f-496f-b2b9-227d7b3f464e)


## Wireframes

## Home
![home nao logado](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/ba9a0863-4818-420f-a6f4-a915a62654f7)

## Tela de Login
![login](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/24f3a915-aba1-44cd-a91f-16115b016258)

## Tela de Cadastro
![cadastro](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/bef2eff2-32e7-47bb-b8c0-8fc8c799d41d)

## Home Logado
![WhatsApp Image 2024-04-12 at 20 00 46](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/ce4bcd3c-a641-4a6f-aa83-cc0eece0363b)


## Tela de Calendário
![calendario geral](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/10c35f33-9de8-4e3f-923a-25c1729e0f30)

## Tabela Valorant
![tabela valorant](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/3be36b67-3844-4c92-bb45-e0b6c4aeb483)

## Tabela LoL
![tabela lol](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/150f62a7-685a-4f3c-8cf7-fb79eec570ad)

## Tabela R6
![tabela r6](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/0e4ae213-2d48-4000-be1d-9e715dfa77c7)

## Tabela CS
![tabela csgo](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/9029cb3a-6622-4d1e-8035-05e773b34eac)

## Tabela Fortnite
![tabela fornite](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/5cac1236-6e37-41aa-aa01-906679f8f7fe)

## Tela de Notícia 1
![noticia 1](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/03d817e8-4d84-4cbd-9ce5-87322b2b94bc)

## Tela de Notícia 2
![noticia 2](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/7c5c6e26-9fa7-43da-914c-7593a8bcb8fa)

## Tela de Notícia 3
![noticia 3](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/86ed3853-240d-479b-b9a2-9b8773680953)

## Sobre Nós
![sobre nos](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/0433f9cd-8cb6-4933-abdd-0f7086a14193)




# Metodologia

No processo de design thinking tivemos um brainstorm de ideias para resolver o problema, organizamos os pensamentos e estamos criando o projeto para fim de resolvê-lo. O processo de trabalho foi dividido igualmente para todos os integrantes do grupo, entre introdução, especificação do projeto, metodologia e projeto de  interface. Utilizamos ferramentas como, o miro, canva, trello e figma. A gestão de configuração foi utilizado o gitHub.

## Divisão de Papéis

Daniel Heringer para fazer a parte introdutória, e design thinking.
Especificação do projeto foi dividido entre Estevão e Caio.  Estevão ficou responsável por fazer as entrevistas, histórias dos usuários e personas, e Caio com requisitos funcionais e não funcionais e restrições.
A parte de metodologia mostrando como foi a divisão do trabalho, quais ferramentas foram utilizadas. Sendo divido entre Daniel de Queiroz e Bruno para fazê-lo
O projeto de interface e fluxos de usuário foi esculpido por João Victor e o Vitor.


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin - Matriz CSD  | Miro |  https://miro.com/ | 
|Processo de Design Thinkgin - Mapa Stakeholders  | Canva |  https://canva.com/design/DAGCCqy2VME/U9NNqkrMT1QLavvXyKqOyA/edit | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/ | 
|Organização | Trello |  https://trello.com/b/U665ykp9/gm-empire | 
|Protótipo Interativo | Figma | https://www.figma.com/file/vMUPufYH29XmLujtcQIGUb/Prototipo-GM-Empire?type=design&node-id=0%3A1&mode=design&t=tsy9LYglOh3vafTX-1 | 

## Controle de Versão
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> - `dev`: branch para versão de desenvolvimento do software
> - `master`: branch utilizada para a documentação geral do projeto, e, no futuro, para o código final da implementação

# Projeto da Solução

## Tecnologias Utilizadas

| TIPO | NOME |
|------|------|
| Linguagem de marcação | HTML |
| Linguagem de estilo | CSS |
| Linguagem de programação | JavaScript |
| Framework | Bootstrap |
| Biblioteca | jQuery |
| API | Não Utilizado |
| IDE | Visual Studio Code |
| Versionamento de código | Git |
| Controle de versão compartilhado | GitHub |
| Hospedagem | 000webhost |

## Arquitetura da solução
A nossa solução visa criar uma plataforma que disponibilize da melhor maneira possível, informações que irão satisfazer as necessidades dos usuários que gostam de jogar e estão presentes no mundo profissional dos e-sports, seja espectador ou até mesmo, um atleta. Dessa forma, a solução visa resolver dificuldades como: ● Datas e horários de partidas entre times; ● Notícias.

![arquitetura da solucao](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/44eb58a3-f70e-4c77-a196-eed808ac3c18)

As imagens ilustram o fluxo do usuário em nossa solução. Assim que o usuário entra na plataforma, ele é apresentado à tela inicial (Home) onde ele é confrontado com as opões de fazer login/cadastro ou então visualizar superficialmente os jogos mostrados na tela e as noticias recentes(Quando logado, consegue fazer comentários e interagir com outros usuários).

![arquitetura 2](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-gm-empire/assets/165699187/01707da6-b055-4a56-9167-40bfc3277661)




# Avaliação da Aplicação
## Plano de Testes

| ID | CENÁRIO | REQUISITO RELACIONADO |
|----|---------|-----------------------|
| 1 | `Acessar o Site` <br><br> Passo a passo: <br> `1.` Abrir página inicial <br> `2.` Navegar pela página visualizando noticias e resumo dos resultados recentes <br><br> Após acessar, o site mostrará um resumo dos resultados dos principais campeonatos de jogos como Valorant, Rainbow Six e League of Legends além de notícias relacionadas ao cenário. | RF-001 |
| 2 | `Ver o Calendário e Jogos` <br><br> Passo a passo: <br> `1.` Selecionar o ícone do jogo desejado na página inicial <br> `2.` Visualizar informações dos próximos e últimos jogos. <br> `3.` Navegar pelo calendário visualizando toda a agenda de jogos marcados em todos os meses.  <br><br> Após selecionar o jogo, o usuário poderá ver um pequeno resumo dos resultados dos jogos mais recentes. Verá também um calendário interativo com as datas de todas as partidas disponíveis de cada jogo. | RF-002 |
| 3 | `Pesquisar por times específicos` <br><br> Passo a passo: <br> `1.` Abrir a página inicial <br> `2.` Clicar no campo de busca no topo da página <br> `3.` Digitar o nome de uma equipe e apertar *enter* <br><br> Durante a busca, o sistema retornará todas as equipes à medida que o usuário inserir cada caractere e após selecionado, o usuário será redirecionado para a página da equipe | RF-003 |
| 4 | `Cadastrar/Logar e visualização e interação de noticias` <br><br> Passo a passo: <br> `1.` Abrir a página inicial <br> `2.` Clicar em uma das notícias em destaque <br> `3.` Fazer Login(Opcional) <br><br> Ao Navegar pela notícia, o usuário poderá visualizar a notícia completa e caso ele queira interagir, uma barra de comentários fica disponível ao final da notícia e na tela de feedback possibilitando a interação do usuário que estiver logado. | RF-004 |




## Registros de Testes

Os testes foram fundamentais para identificar falhas no desenvolvimento e na experiência do usuário e promover uma experiências mais intuitiva e prática.

# Referências

Fontes utilizadas para a idealização do projeto

> **https://liquipedia.net** ★ Uma enciclopédia de e-sports que oferece informações detalhadas sobre torneios e jogadores. Serve como um excelente exemplo de como organizar dados de e-sports.

> **https://escharts.com/pt** ★ Proporciona estatísticas detalhadas e dados de e-sports que podem ser integrados a sites para mostrar informações sobre torneios e partidas.

> **https://rapidapi.com** ★  Um hub de APIs que oferece acesso a dados de vários e-sports, que podem ser utilizados para desenvolver funcionalidades de calendários e estatísticas.

> **https://www.toornament.com** ★  Ferramenta robusta para gerenciamento de torneios, que inclui calendário, inscrições e estatísticas em tempo real.

> **https://www.esportstalk.com** ★  Fórum onde é possível encontrar discussões e tendências sobre e-sports que ajudaram na criação de conteúdo relevante para o site.

> **brasilescola**. E-Sports e  suas tendências no mercado brasileiro ★ https://monografias.brasilescola.uol.com.br/computacao/esports-suas-tendencias-no-mercado-brasileiro.htm


