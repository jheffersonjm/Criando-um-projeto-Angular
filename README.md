# Projeto Angular - Aplicação de Demonstração

Um projeto Angular 20 desenvolvido para demonstrar conceitos fundamentais do framework, incluindo roteamento, serviços, componentes e injeção de dependência.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Executando a Aplicação](#executando-a-aplicação)
- [Componentes](#componentes)
- [Serviços](#serviços)
- [Roteamento](#roteamento)
- [Testes](#testes)
- [Build e Deploy](#build-e-deploy)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) versão 20.3.5 e serve como uma aplicação de demonstração que implementa conceitos fundamentais do Angular, incluindo:

- Sistema de roteamento entre páginas
- Criação e utilização de serviços
- Comunicação entre componentes
- Exibição dinâmica de dados
- Uso de pipes para formatação

## ✨ Funcionalidades

- **Página de Boas-vindas**: Tela inicial com mensagem personalizada usando serviço de mensagens
- **Home**: Página principal da aplicação
- **Sobre**: Página com informações sobre o projeto
- **Lista de Produtos**: Exibição de produtos com preços formatados em moeda brasileira
- **Navegação**: Sistema de roteamento para navegar entre as diferentes seções

## 🚀 Tecnologias Utilizadas

- **Angular**: 20.3.0
- **TypeScript**: Para tipagem estática
- **RxJS**: ~7.8.0 para programação reativa
- **Angular Router**: Para navegação entre páginas
- **Angular Forms**: Para manipulação de formulários
- **Angular SSR**: Para renderização server-side
- **Express**: ^5.1.0 para servidor
- **Karma + Jasmine**: Para testes unitários

## 📁 Estrutura do Projeto

```
projeto-angular/
├── src/
│   ├── app/
│   │   ├── boas-vindas/          # Componente de boas-vindas
│   │   ├── home/                 # Componente home
│   │   ├── lista-componentes/    # Componente lista de produtos
│   │   ├── sobre/                # Componente sobre
│   │   ├── app.ts                # Componente raiz
│   │   ├── app.html              # Template principal com navegação
│   │   ├── app.routes.ts         # Configuração de rotas
│   │   ├── mensagem-service.ts   # Serviço de mensagens
│   │   └── produtos.ts           # Serviço de produtos
│   ├── index.html                # HTML principal
│   ├── main.ts                   # Ponto de entrada da aplicação
│   └── styles.css                # Estilos globais
├── public/                       # Arquivos públicos
├── angular.json                  # Configuração do Angular
├── package.json                  # Dependências e scripts
└── README.md                     # Documentação
```

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd projeto-angular
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Verifique se o Angular CLI está instalado**
   ```bash
   ng version
   ```

## 🏃‍♂️ Executando a Aplicação

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

ou usando npm:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:4200/`. O servidor irá recarregar automaticamente quando você modificar os arquivos do projeto.

### Servidor SSR

Para executar com Server-Side Rendering:

```bash
npm run serve:ssr:projet
```

## 🧩 Componentes

### App (Componente Raiz)
- **Localização**: `src/app/app.ts`
- **Função**: Componente principal que contém a estrutura de navegação e o router-outlet
- **Recursos**: Sistema de navegação entre páginas

### BoasVindas
- **Localização**: `src/app/boas-vindas/`
- **Função**: Página inicial da aplicação
- **Recursos**: Utiliza o MensagemService para exibir mensagem personalizada
- **Dependências**: MensagemService, FormsModule

### Home
- **Localização**: `src/app/home/`
- **Função**: Página principal da aplicação
- **Recursos**: Página simples sem funcionalidades específicas

### ListaComponentes
- **Localização**: `src/app/lista-componentes/`
- **Função**: Exibe lista de produtos com preços
- **Recursos**: 
  - Utiliza o serviço Produtos para obter dados
  - Formata preços em moeda brasileira usando CurrencyPipe
  - Implementa loop com @for para listagem dinâmica

### Sobre
- **Localização**: `src/app/sobre/`
- **Função**: Página com informações sobre o projeto

## 🔧 Serviços

### MensagemService
- **Localização**: `src/app/mensagem-service.ts`
- **Função**: Fornece mensagens personalizadas para a aplicação
- **Métodos**:
  - `obterMensagem()`: Retorna string "angular e Incrivel!!"

### Produtos
- **Localização**: `src/app/produtos.ts`
- **Função**: Gerencia dados de produtos
- **Métodos**:
  - `listar()`: Retorna array com produtos (PC Gamer, Notebook, Tablet) e preços

## 🛣️ Roteamento

O sistema de rotas está configurado em `src/app/app.routes.ts`:

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | BoasVindas | Página inicial (rota padrão) |
| `/home` | Home | Página principal |
| `/sobre` | Sobre | Página sobre |
| `/lista-componentes` | ListaComponentes | Lista de produtos |

## 🧪 Testes

### Executar Testes Unitários

Para executar os testes unitários com [Karma](https://karma-runner.github.io):

```bash
ng test
```

ou usando npm:

```bash
npm test
```

### Executar Testes em Modo Watch

Para executar testes continuamente durante o desenvolvimento:

```bash
ng test --watch
```

### Cobertura de Testes

Para gerar relatório de cobertura:

```bash
ng test --code-coverage
```

## 🏗️ Build e Deploy

### Build de Desenvolvimento

Para compilar o projeto para desenvolvimento:

```bash
ng build --configuration development
```

### Build de Produção

Para compilar o projeto para produção:

```bash
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/`. A build de produção otimiza a aplicação para performance e velocidade.

### Build com Watch

Para compilar automaticamente quando houver mudanças:

```bash
ng build --watch --configuration development
```

ou usando npm:

```bash
npm run watch
```

## 📚 Scripts Disponíveis

- `npm start`: Inicia servidor de desenvolvimento
- `npm run build`: Build de produção
- `npm run watch`: Build com watch mode
- `npm test`: Executa testes unitários
- `npm run serve:ssr:projet`: Executa servidor SSR

## 🛠️ Code Scaffolding

O Angular CLI inclui ferramentas de scaffolding. Para gerar um novo componente:

```bash
ng generate component nome-do-componente
```

Para ver lista completa de schematics disponíveis:

```bash
ng generate --help
```

## 🎨 Padrões de Código

O projeto utiliza Prettier para formatação de código com as seguintes configurações:

- `printWidth`: 100
- `singleQuote`: true
- Parser específico para arquivos HTML Angular

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado conforme especificado no package.json.

## 🔗 Links Úteis

- [Angular Documentation](https://angular.dev)
- [Angular CLI](https://github.com/angular/angular-cli)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)

---

Desenvolvido com ❤️ usando Angular 20

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
