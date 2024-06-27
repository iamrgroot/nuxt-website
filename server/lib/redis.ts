import { createClient } from "redis";

const clicksKey = "clicks-counter";
export type ClicksStat = { clicks: number };

async function callOnRedis<T>(
  action: (redis: ReturnType<typeof createClient>) => Promise<T>
) {
  const redis = createClient({
    url: "redis://redis:6379",
  });

  await redis.connect();
  const data = await action(redis);
  await redis.disconnect();

  return data;
}

export async function getClicksCounter(): Promise<ClicksStat> {
  const clicks = await callOnRedis((redis) => redis.get(clicksKey));

  return { clicks: Number(clicks ?? 0) };
}

export async function incrementClicksCounter(): Promise<ClicksStat> {
  const clicks = await callOnRedis((redis) => redis.incr(clicksKey));

  return { clicks: clicks };
}
