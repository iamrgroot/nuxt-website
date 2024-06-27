# Nuxt website

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
    labels:
      traefik.enable: true
      traefik.http.routers.bun.rule: Host(`bun.localhost`)
      traefik.http.routers.bun.entrypoints: web,websecure
      traefik.http.services.bun.loadbalancer.server.port: 3000
```

## Production

Just use the `Dockerfile` :)

### Non-docker

Build the application for production:

```bash
bun run build
```

Run production build:

```bash
bun .output/server/index.mjs
```
