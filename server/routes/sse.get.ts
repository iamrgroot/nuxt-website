import { incrementClicksCounter } from "~/lib/redis";

const clients: ReturnType<typeof createEventStream>[] = [];

async function increment() {
  const clickStat = await incrementClicksCounter();

  for (const client of clients) {
    client.push(JSON.stringify(clickStat));
  }
}

export default defineEventHandler(async (event) => {
  const eventStream = createEventStream(event);

  clients.push(eventStream);

  void increment();

  return eventStream.send();
});
