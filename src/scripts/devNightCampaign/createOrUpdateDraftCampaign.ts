import { EventDetails } from '../../emails/sgfdevs/devNight';
import {
    CampaignContentType,
    CampaignStatus,
    CampaignType,
    listmonkClient,
} from '../../listmonk';
import { formatInTimeZone } from 'date-fns-tz';
import { CENTRAL_TIMEZONE, DEV_NIGHT_LIST_ID } from '../../config';

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

    const [foundCampaign, ...otherFoundCampaigns] = res.data.results
        .filter((campaign) => campaign.status === CampaignStatus.draft)
        .filter((campaign) =>
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
        body: emailHtml,
    };

    if (foundCampaign) {
        console.log('found existing campaign, updating it');
        await listmonkClient.updateCampaign(foundCampaign.id, campaignArgs);

        return;
    }

    console.log('creating new campaign');
    await listmonkClient.createCampaign(campaignArgs);
}
