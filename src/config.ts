import 'dotenv/config';
import { _throw, parseNumber } from './util';

export const SGF_DEVS_DISCORD_LINK = 'https://discord.com/invite/VNNJwJk';
export const SGF_DEVS_PROFILE_LINK = 'https://sgf.dev/register';
export const SGF_DEVS_TWITCH_LINK = 'https://www.twitch.tv/sgfdevs';
export const CENTRAL_TIMEZONE = 'America/Chicago';

export const ASSET_BASE_URL =
    process.env.ASSET_BASE_URL ?? _throw('ASSET_BASE_URL env var not set');

export const SGF_MEETUP_API_BASE_URL =
    process.env.SGF_MEETUP_API_BASE_URL ??
    _throw('SGF_MEETUP_API_BASE_URL env var not set');

export const SGF_MEETUP_API_TOKEN =
    process.env.SGF_MEETUP_API_TOKEN ??
    _throw('SGF_MEETUP_API_TOKEN env var not set');

export const LISTMONK_URL =
    process.env.LISTMONK_URL ?? _throw('LISTMONK_URL env var not set');

export const LISTMONK_USERNAME =
    process.env.LISTMONK_USERNAME ??
    _throw('LISTMONK_USERNAME env var not set');

export const LISTMONK_PASSWORD =
    process.env.LISTMONK_PASSWORD ??
    _throw('LISTMONK_PASSWORD env var not set');

export const DEV_NIGHT_LIST_ID =
    parseNumber(process.env.DEV_NIGHT_LIST_ID) ??
    _throw('DEV_NIGHT_LIST_ID env var not set or not a number');
