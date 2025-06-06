import { MeetupEvent } from '@/scripts/devNightCampaign/getNextEvent';
import { EventDetails } from '@/emails/sgfdevs/DevNight';

export function parseEventDetails(event: MeetupEvent): EventDetails {
    console.log('parsing out meetup event details');
    const updatedDescription = event.description.replace(/\\-/g, '-');
    const presentationStrings = updatedDescription
        .split('###')
        .filter((str) => str.trim() !== '');

    const presentations = presentationStrings.map((presentationStr) => {
        const { titleSpeakerSegment, descriptionSegment } =
            presentationStr.match(
                /^(?<titleSpeakerSegment>[^\n]+)\n(?<descriptionSegment>[\s\S]*)/,
            ).groups;

        const [title, speakerSegment] = titleSpeakerSegment
            .trim()
            .replace(/^\**|\**$/g, '')
            .split(' - ')
            .map((str) => str.trim());

        const { speaker } = speakerSegment.match(
            /(?:presentation|presented)\s+by\s+(?<speaker>.+)/i,
        ).groups;

        const description = descriptionSegment
            .split('---')[0]
            .trim()
            .replace(/^\n|\n$/g, '')
            .replace(/\n\n/g, '\n');

        return {
            title: title,
            speaker: speaker,
            description: description,
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
