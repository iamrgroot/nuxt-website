FROM oven/bun:latest as base

WORKDIR /app

RUN apt update && \
    apt install -y zip && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

RUN bun upgrade

# 
# Local dev image
# 
FROM base as local

RUN apt update && \
    apt install -y gnupg git bash && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

CMD bun install && bun run dev

# 
# Production image
# 
FROM base as production

COPY . /app

RUN bun install
RUN bun run build

CMD bun .output/server/index.mjs