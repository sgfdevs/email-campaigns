import { formatInTimeZone } from 'date-fns-tz';
import { EventDetails } from '@/emails/sgfdevs/DevNight';
import {
    CampaignContentType,
    CampaignStatus,
    CampaignType,
    listmonkClient,
} from '@/listmonk';
import { CENTRAL_TIMEZONE, DEV_NIGHT_LIST_ID } from '@/config';

export async function createOrUpdateDraftCampaign(
    eventDetails: EventDetails,
    emailHtml: string,
) {
    const formattedCampaignDate = formatInTimeZone(
        eventDetails.datetime,
        CENTRAL_TIMEZONE,
        'MMMM yyyy',
    );

    const name = `${formattedCampaignDate} - Dev Night`;

    const res = await listmonkClient.getCampaigns({ query: name });

    const [foundCampaign, ...otherFoundCampaigns] = res.data.results.filter(
        (campaign) =>
            campaign.lists.map((list) => list.id).includes(DEV_NIGHT_LIST_ID),
    );

    if (otherFoundCampaigns.length >= 1) {
        console.log('to many campaigns found, skipping update');
        return;
    }

    const campaignArgs = {
        name,
        subject: eventDetails.title,
        lists: [DEV_NIGHT_LIST_ID],
        type: CampaignType.regular,
        content_type: CampaignContentType.html,
        body: removeNullBytes(emailHtml),
    };

    if (foundCampaign) {
        switch (foundCampaign.status) {
            case CampaignStatus.draft:
            case CampaignStatus.scheduled:
            case CampaignStatus.paused:
                console.log('found existing campaign, updating it');
                await listmonkClient.updateCampaign(
                    foundCampaign.id,
                    campaignArgs,
                );
                return;
            case CampaignStatus.finished:
            case CampaignStatus.running:
                console.log(
                    'Campaign already delivered or being delivered, exiting...',
                );
                return;
            case CampaignStatus.cancelled:
                console.log(
                    'found a campaign, but it was cancelled, creating a new one',
                );
                break;
        }
    }

    console.log('creating new campaign');
    try {
        const newCampaign = await listmonkClient.createCampaign(campaignArgs);
        console.log(`created new campaign with id ${newCampaign.data.id}`);
    } catch (e) {
        console.log(`failed to create new campaign`);
        console.log(e);
        throw e;
    }
}

function removeNullBytes(value: string): string {
    // eslint-disable-next-line no-control-regex
    return value.replace(/\u0000/g, '');
}
