import { MeetupEvent } from '@/scripts/devNightCampaign/getNextEvent';
import { EventDetails, Presentation } from '@/emails/sgfdevs/DevNight';

export function parseEventDetails(event: MeetupEvent): EventDetails {
    console.log('parsing out meetup event details');

    const updatedDescription = event.description
        .replace(/\\-/g, '-')
        .replace(/\\#/g, '#')
        .trim();

    const presentationStrings = updatedDescription
        .split('###')
        .filter((str) => str.trim() !== '');

    const presentations = presentationStrings.map((presentationStr) => {
        const { titleSpeakerSegment, descriptionSegment } =
            presentationStr.match(
                /^(?<titleSpeakerSegment>[^\n]+)\n(?<descriptionSegment>[\s\S]*)/,
            ).groups;

        const { title, speaker, byType } =
            getTitleAndSpeaker(titleSpeakerSegment);

        const description = descriptionSegment
            .split('---')[0]
            .trim()
            .replace(/^\n|\n$/g, '')
            .replace(/\n\n/g, '\n');

        return {
            title: title,
            speaker: speaker,
            description: description,
            byType: byType,
        };
    });

    console.log(
        `found ${presentations.length} presentation(s) from Meetup description`,
    );

    return {
        presentations,
        title: event.title,
        link: event.eventUrl,
        datetime: new Date(event.dateTime),
    };
}

function getTitleAndSpeaker(segment: string): {
    title: string;
    speaker: string;
    byType: string;
} {
    const rawSegment = segment.trim().replace(/^\**|\**$/g, '');

    const byRegex =
        /^(?<title>.+?)\s*-\s*(?<byType>.+?)\s+by\s+(?<speaker>.+)$/i;
    const presentsRegex = /^(?<speaker>.+?)\s+presents?\s*-\s*(?<title>.+)$/i;

    const byMatch = rawSegment.match(byRegex);
    if (byMatch?.groups) {
        return {
            title: byMatch.groups.title.trim(),
            speaker: byMatch.groups.speaker.trim(),
            byType: capitalizeFirst(byMatch.groups.byType.trim()),
        };
    }

    const presMatch = rawSegment.match(presentsRegex);
    if (presMatch?.groups) {
        return {
            title: presMatch.groups.title.trim(),
            speaker: presMatch.groups.speaker.trim(),
            byType: 'Presented',
        };
    }

    throw new Error(
        `Unable to parse title/speaker from segment: "${rawSegment}"`,
    );
}

function capitalizeFirst(str: string): string {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
