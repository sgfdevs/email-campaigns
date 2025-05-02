import {
    SGF_MEETUP_API_BASE_URL,
    SGF_MEETUP_API_CLIENT_ID,
    SGF_MEETUP_API_CLIENT_SECRET,
} from '@/config';

export async function getNextEvent(): Promise<MeetupEvent> {
    console.log('getting api token');

    const token = await getToken();

    console.log('fetching next meetup event');

    return await fetch(
        `${SGF_MEETUP_API_BASE_URL}/v1/groups/sgfdevs/events/next`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    ).then((res) => res.json());
}

export interface MeetupEvent {
    id: string;
    groupId: string;
    groupName: string;
    title: string;
    eventUrl: string;
    description: string;
    dateTime: Date;
    duration: string;
    venue: Venue;
    host: Host;
    images: string[];
}

export interface Host {
    name: string;
}

export interface Venue {
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
}

async function getToken(): Promise<string> {
    const res: AuthResponse = await fetch(
        `${SGF_MEETUP_API_BASE_URL}/v1/auth`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clientId: SGF_MEETUP_API_CLIENT_ID,
                clientSecret: SGF_MEETUP_API_CLIENT_SECRET,
            }),
        },
    ).then((res) => res.json());

    return res.accessToken;
}

interface AuthResponse {
    accessToken: string;
    accessTokenExpiresAt: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
}
