import { getNextEvent } from './getNextEvent';
import { parseEventDetails } from './parseEventDetails';
import { render } from '@react-email/render';
import SgfDevNightEmail from '../../emails/sgfdevs/devNight';
import * as fs from 'fs';

async function devNightCampaign(): Promise<void> {
    const event = await getNextEvent();
    const eventDetails = parseEventDetails(event);
    const emailHtml = render(<SgfDevNightEmail {...eventDetails} />);

    fs.writeFileSync('email.html', emailHtml);
}

void devNightCampaign();
