import { Strava } from "strava";

export default defineCachedEventHandler(
  async () => {
    const { stravaClientId, stravaClientSecret, stravaRefreshToken } =
      useRuntimeConfig();

    const strava = new Strava({
      client_id: stravaClientId,
      client_secret: stravaClientSecret,
      refresh_token: stravaRefreshToken,
    });

    const athlete = await strava.athletes.getLoggedInAthlete();
    const stats = await strava.athletes.getStats({ id: athlete.id });

    return {
      rideTotal: stats.all_ride_totals.distance,
    };
  },
  { maxAge: 60 * 60 }
);
