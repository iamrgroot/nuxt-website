type DuolingoResponse = { streak: number };

export default defineCachedEventHandler(
  async (event) => {
    const { duolingoUserId } = useRuntimeConfig();

    const data = await $fetch<DuolingoResponse>(
      `https://www.duolingo.com/2017-06-30/users/${duolingoUserId}?fields=streak`
    );

    return {
      streak: data.streak,
    };
  },
  { maxAge: 60 * 60 }
);
