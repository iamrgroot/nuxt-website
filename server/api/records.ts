type DiscogsReleaseResponse = { count: Number }

export default defineCachedEventHandler(async (event) => {
    const {discogsToken, discogsUser} = useRuntimeConfig();

    const data = await $fetch<DiscogsReleaseResponse>(
        `https://api.discogs.com/users/${discogsUser}/collection/folders/0`,
        {
            headers: {
                Authorization: `Discogs token=${discogsToken}`
            },
        }
    );

    return {
        discogsReleasesCount: data.count,
    };
}, { maxAge: 60 * 60 })