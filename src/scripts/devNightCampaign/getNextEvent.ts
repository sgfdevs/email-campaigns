import { SGF_MEETUP_API_BASE_URL, SGF_MEETUP_API_TOKEN } from '@/config';

export async function getNextEvent(): Promise<MeetupEvent> {
    console.log('fetching next meetup event');
    const res: MeetupEventResponse = await fetch(
        `${SGF_MEETUP_API_BASE_URL}/events?group=sgfdevs&next=true`,
        {
            headers: {
                Authorization: SGF_MEETUP_API_TOKEN,
            },
        },
    ).then((res) => res.json());

    return res.events[0];
}

export interface MeetupEventResponse {
    success: boolean;
    events: MeetupEvent[];
}

export interface MeetupEvent {
    id: string;
    group: Group;
    title: string;
    eventUrl: string;
    description: string;
    dateTime: Date;
    duration: string;
    venue: Venue;
    host: Host;
    images: string[];
}

export interface Group {
    name: string;
    urlname: string;
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
