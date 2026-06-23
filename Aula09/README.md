# TechFlow Soluções

Projeto que desenvolvemos em sala de aulça com o professor André, um site simples para apresentar os serviços da empresa fictícia TechFlow Soluções.

## Funcionalidades

- Página inicial com apresentação da empresa.
- Carrossel com os serviços oferecidos.
- Botões para avançar e voltar no carrossel.
- Troca automática dos slides a cada 3 segundos.
- Página de cadastro.
- Página de lista de usuários.
- Página de contato.
- Layout respansivo
- Rodapé no final da página.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto


techflow/
│
├── index.html
├── cadastro.html
├── usuario.html
├── contato.html
├── estilo.css
└── estilo_carrosel.css


## Como executar

1. Baixe os arquivos do projeto.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo index.html no navegador.

Também é possível clicar duas vezes no arquivo index.html para abrir o projeto.

## Páginas do site

### Página inicial

Apresenta a empresa, seus serviços e um carrossel com as áreas de atuação:

- Plataforma de e-commerce
- Aplicativos mobile
- Soluções em nuvem
- Automação inteligente

### Cadastro

Possui um formulário para preencher nome, data de nascimento, e-mail, senha e plano.

### Usuários

Mostra uma tabela simples com exemplos de usuários cadastrados.

### Contato

Possui um formulário para o visitante enviar nome, e-mail, assunto e mensagem.

## Carrossel

O carrossel foi feito com JavaScript simples.

- proximoSlide() avança para o próximo slide.
- voltarSlide() retorna para o slide anterior.
- mostrarSlide() esconde todos os slides e mostra somente o slide atual.
- setInterval(proximoSlide, 3000) troca o slide automaticamente a cada 3 segundos.

## Observação

Este projeto é apenas visual. Os formulários ainda não salvam informações, pois não possuem banco de dados ou back-end.

## Autor

Danrley Correia Ramos
