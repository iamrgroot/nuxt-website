# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

### Docker compose

Example `docker-compose.override.yml` with traefik:

```yml
services:
  bun:
    build:
      target: local
    labels:
      traefik.enable: true
      traefik.http.routers.rgroot-bun.rule: Host(`rgroot.paqt.dev`)
      traefik.http.routers.rgroot-bun.entrypoints: web,websecure
      traefik.http.services.rgroot-bun.loadbalancer.server.port: 3000
    networks:
      - application
    volumes:
      - ./:/app

networks:
  application:
```

## Production

Just use the `Dockerfile` :)

### Non-docker

Build the application for production:

```bash
bun run -b build --preset=bun
```

Locally preview production build:

```bash
bun run -b preview
```

Run production build:

```bash
bun .output/server/index.mjs
```
