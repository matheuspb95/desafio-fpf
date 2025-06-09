# desafio-fpf

Este projeto demonstra uma aplicação fullstack para cálculo assincrono de média e mediana de 3 numeros, usando Angular, Django e Celery

## Tecnologias Utilizadas

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Django REST framework
- Angular
- Celery
- Postgres
- RabbitMQ

## Estrutura do Projeto

```
├── backend
├── frontend
├── .env.example
├── docker-compose.yml
└── README.md
```
## Como usar

### Pré-requisitos

- Docker instalado: [Guia de instalação](https://docs.docker.com/get-docker/)
- Docker Compose instalado: [Guia de instalação](https://docs.docker.com/compose/install/)

### Variáveis de Ambiente
As variáveis estão definidas no arquivo .env. Edite conforme necessário para configurar:

```
POSTGRES_DB: postgres
POSTGRES_USER: postgres_user
POSTGRES_PASSWORD: postgres_pass
PGDATA: /data/postgres

RABBITMQ_DEFAULT_USER: rabbit_user
RABBITMQ_DEFAULT_PASS: rabbit_pass

NG_APP_API_URL: http://0.0.0.0:8000/api/

DEBUG=1
```

### Subindo os serviços

```bash
docker-compose up -d
```
ou
```bash
docker compose up -d
```

### Comandos úteis

#### Parar containeres
```bash
docker-compose down
```
ou
```bash
docker compose down
```

#### Parar containeres e remover volumes
```bash
docker-compose down -v
```
ou
```bash
docker-compose down -v
```

#### Mostrar logs dos containeres
```bash
docker-compose logs -f
```
ou
```bash
docker-compose logs -f
```

## Acessando a aplicação

### http://localhost