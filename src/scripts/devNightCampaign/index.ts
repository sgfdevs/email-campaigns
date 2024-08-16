import { getNextEvent } from './getNextEvent';
import { parseEventDetails } from './parseEventDetails';

async function devNightCampaign(): Promise<void> {
    const event = await getNextEvent();
    const eventDetails = parseEventDetails(event);

    console.log(eventDetails);
}

void devNightCampaign();
