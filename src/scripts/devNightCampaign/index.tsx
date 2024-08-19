import { getNextEvent } from './getNextEvent';
import { parseEventDetails } from './parseEventDetails';
import { renderAsync } from '@react-email/render';
import { SgfDevNightEmail } from '../../emails/sgfdevs/devNight';
import { createOrUpdateDraftCampaign } from './createOrUpdateDraftCampaign';

async function devNightCampaign(): Promise<void> {
    const event = await getNextEvent();

    if (!event) {
        console.log('no event found, exiting...');
        return;
    }

    const eventDetails = parseEventDetails(event);

    console.log('rendering email template');
    const emailHtml = await renderAsync(
        <SgfDevNightEmail {...eventDetails} />,
        { pretty: true },
    );

    await createOrUpdateDraftCampaign(eventDetails, emailHtml);
}

void devNightCampaign();
