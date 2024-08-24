import { renderAsync } from '@react-email/render';
import { getNextEvent } from '@/scripts/devNightCampaign/getNextEvent';
import { parseEventDetails } from '@/scripts/devNightCampaign/parseEventDetails';
import { DevNightEmail } from '@/emails/sgfdevs/DevNight';
import { createOrUpdateDraftCampaign } from '@/scripts/devNightCampaign/createOrUpdateDraftCampaign';

async function devNightCampaign(): Promise<void> {
    const event = await getNextEvent();

    if (!event) {
        console.log('no event found, exiting...');
        return;
    }

    const eventDetails = parseEventDetails(event);

    console.log('rendering email template');
    const emailHtml = await renderAsync(<DevNightEmail {...eventDetails} />, {
        pretty: true,
    });

    await createOrUpdateDraftCampaign(eventDetails, emailHtml);
}

void devNightCampaign();
