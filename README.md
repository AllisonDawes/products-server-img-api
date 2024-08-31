## Products-Server-Img-Api

Guia de Instalação.

1. Criação do projeto:

Crie uma pasta com o nome do projeto

2. Inicie o projeto node:

```
npm init -y
```

3. Insalação de dependências:

express

```
npm i express
npm i @types/express --save-dev
```

ts-node-dev

```
npm i ts-node-dev --save-dev
```

typescript

```
npm i typescript --save-dev
```

4. iniciar configuração typescript:

```
npx tsc --init
```

ou

```
yarn tsc --init
```

5. No arquivo package.json, criar o seguinte trecho:

```
"scripts": {
    "dev": "ts-node-dev --ignore-watch node_modules ./src/server.ts"
  },
```

6. Cria uma pasta src com o arquvo server.ts como o modelo abaixo:

```
import express, { Request, Response } from "express";

const server = express();

server.get("/test", (request: Request, response: Response) => {
  return response.status(200).send("server online.");
});

server.listen(3333, () => {
  console.log("server running.");
});
```

7. No terminal rode o comando abaixo para iniciar o servidor:

```
npm run dev
```

8. Instalação do prismaorm para gerenciamento do banco de dados:

prisma

```
npm i prisma --save-dev
```

@prisma/client

```
npm i @prisma/client
```

9. Iniciar configuração do Prisma com banco Postgres:

```
npx prisma init --datasource-provider postgresql
```

Será criado a pasta prisma com arquivo de configuração schema.prisma e uma pasta migrations.

10. dentro da pasta src, criar uma pasta lib com o arquivo prisma.ts e inserir o código abaixo:

```
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

```

11. Inserir no arquivo .env as informações de autenticação do banco de dados.

12. Criar tabela products (exemplo):

```
model Product {
  id            String   @id @default(uuid())
  name_product  String
  description   String
  price         Decimal
  product_image String?
  created_at    DateTime @default(now())
  updated_at    DateTime @default(now())

  @@map("products")
}
```

Fazer migração das tabelas para o banco de dados:

```
npx prisma migrate dev --name add table productions
```
