# Teste Interno - React Vite + Jest

Mini aplicação frontend simulando uma área logada de banco digital, focada na listagem e detalhamento de produtos financeiros (ex: cartões).

Projeto desenvolvido como case técnico utilizando **React + TypeScript + Vite**.

---

## 🎯 Objetivo

Criar uma interface que permita:

- Listar produtos financeiros vindos de uma API mockada  
- Filtrar produtos por nome  
- Visualizar detalhes do produto em um painel lateral  
- Alterar o status do produto (ativo/inativo)  
- Tratar loading e erros de API  
- Garantir responsividade básica  
- Implementar testes unitários  

---

## ⚙️ Tecnologias utilizadas

- **React** – construção da UI  
- **TypeScript** – tipagem e segurança de código  
- **Vite** – bundler e ambiente de desenvolvimento rápido  
- **Ant Design** – design system e componentes visuais  
- **Jest + Testing Library** – testes unitários de comportamento  

---

## 🚀 Como rodar o projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Rodar a aplicação

```bash
npm run dev
```

A aplicação ficará disponível em:
http://localhost:5173

## 🧪 Como rodar os testes

O projeto possui testes unitários focados em comportamento do usuário, utilizando **Jest** e **React Testing Library**.

### Executar os testes

```bash
npm test
```

### O que está sendo validado

- Renderização da lista de produtos  
- Filtro de produtos via campo de busca (com debounce)  
- Exibição dos detalhes do produto  
- Interação com o switch de status  

Os testes utilizam **mocks para componentes do Ant Design**, garantindo isolamento da lógica da aplicação.

## 📁 Estrutura de pastas

src/
│
├── ProductListPage/ # Página principal da aplicação
│ ├── ProductList/ # Grid de produtos
│ │ ├── ProductCard/ # Card individual de produto
│ │   ├── ProductCardSkeleton/ # Skeleton exibido durante loading
│ ├── ProductDetails/ # Drawer lateral com detalhes do produto
│ └── SearchBar/ # Campo de busca com debounce
│
├── hooks/ # Hooks customizados
│ ├── ProductState.ts # Gerencia produtos e regras da lista
│ └── SearchState.ts # Responsável pelo debounce da busca
│
├── types/ # Tipagens TypeScript
│ └── Product.ts # Modelo de produto
│
├── utils/ # Funções utilitárias
│ └── Currency.ts # Formatação de valores monetários
│
├── tests/ # Testes unitários
│ ├── ProductListPage.test.tsx # Testes da página principal
│ └── ProductDetails.test.tsx # Testes do Drawer de detalhes
│
├── setupTests.ts # Configuração do Testing Library
└── main.tsx # Ponto de entrada da aplicação

## 🧩 Componentes principais

| Componente | Responsabilidade |
|------------|------------------|
| **ProductListPage** | Orquestra a tela, busca, loading e estado global |
| **SearchBar** | Campo de busca com debounce |
| **ProductList** | Exibe os produtos em grid responsivo |
| **ProductCard** | Mostra resumo do produto |
| **ProductCardSkeleton** | Loading visual enquanto a busca ocorre |
| **ProductDetails** | Drawer lateral com informações completas |


## 🔄 Fluxo da aplicação

1. Produtos são carregados via hook **useProducts**  
2. A lista é exibida em um grid responsivo  
3. A busca aplica **debounce** antes de filtrar os resultados  
4. Ao clicar em um produto → o **Drawer de detalhes** é aberto  
5. O **Switch** permite alterar o status do produto  
6. A interface reflete as mudanças **imediatamente na UI**


## 🧠 Decisões técnicas

- **Separação por responsabilidade** → componentes pequenos, organizados e reutilizáveis  
- **Estado derivado por ID** → evita inconsistência entre lista e painel de detalhes  
- **Debounce na busca** → melhora a experiência do usuário e simula chamadas de API reais  
- **Mocks no Jest** → isolamento das dependências do Ant Design durante os testes  
- **Testes de comportamento** → foco na experiência do usuário, não na implementação interna
