import {
    Button,
    Column,
    Heading,
    Img,
    Link,
    Row,
    Text,
} from '@react-email/components';
import * as React from 'react';

import { Layout } from '@/components/methodconf/Layout';
import { heading, link, text } from '@/components/methodconf/text';
import { button } from '@/components/methodconf/button';
import { ASSET_BASE_URL } from '@/config';

const ticketUrl = 'https://www.methodconf.com/tickets';

export const AttendeeInfo = () => (
    <Layout
        showUnsubscribe={true}
        title="We hope you're excited for Method Conference tomorrow!"
    >
        <Text style={text}>
            We hope you're excited for Method Conference tomorrow! All of us on
            the organizing committee are looking forward to a day of learning
            and networking with all of you.
        </Text>
        <Heading as="h2" style={heading}>
            Location and Parking
        </Heading>
        <Text style={text}>
            The event is being hosted at{' '}
            <Link
                style={link}
                href="https://efactory.missouristate.edu@TrackLink"
            >
                efactory
            </Link>
            . Their address is{' '}
            <Link
                style={link}
                href="https://maps.app.goo.gl/ZHNKbCreeTA3spxR9@TrackLink"
            >
                405 N Jefferson Ave, Springfield, MO 65806
            </Link>
            . Parking is free and we have a{' '}
            <Link
                style={link}
                href="https://cms.methodconf.com/media/pw1lyaa4/parking-map.pdf@TrackLink"
            >
                parking map on our website
            </Link>
        </Text>
        <Heading as="h2" style={heading}>
            Check-in
        </Heading>
        <Text style={text}>
            Check-in begins at 7:30am. Our check-in booth will be at the top of
            the stairs to your left when you are headed into the IDEA Loft. We
            also have a{' '}
            <Link
                style={link}
                href="https://cms.methodconf.com/media/wixhir55/building-map.pdf@TrackLink"
            >
                map of the building
            </Link>{' '}
            on our website as well.
        </Text>
        <Heading as="h2" style={heading}>
            Mobile App
        </Heading>
        <Text style={text}>
            We have an attendee mobile app we've built. In this app you can:
            <br />
            <ul>
                <li>
                    View the schedule including all of the session and speaker
                    details
                </li>
                <li>
                    Submit feedback for sessions (which enters you into a
                    drawing for our door prizes)
                </li>
                <li>Report any potential issues</li>
            </ul>
        </Text>
        <Row style={{ textAlign: 'center' }}>
            <Column>
                <Link href="https://apps.apple.com/us/app/method-conf/id1498359521@TrackLink">
                    <Img
                        alt="Download on the App Store"
                        style={{ height: '60px', margin: '0 auto' }}
                        src={`${ASSET_BASE_URL}/app-store.png`}
                    />
                </Link>
            </Column>
            <Column>
                <Link href="https://play.google.com/store/apps/details?id=com.sgfdevs.methodConfApp@TrackLink">
                    <Img
                        alt="Get it on Google Play"
                        style={{ height: '60px', margin: '0 auto' }}
                        src={`${ASSET_BASE_URL}/play-store.png`}
                    />
                </Link>
            </Column>
        </Row>
        <Heading as="h2" style={heading}>
            Code of Conduct
        </Heading>
        <Text style={text}>
            Last but certainly not least, we want to bring attention to our{' '}
            <Link href="https://www.methodconf.com/2024/code-of-conduct@TrackLink">
                Code of Conduct
            </Link>
            . Please read and review this document as you are agreeing to follow
            its guidelines by attending our event.
        </Text>
    </Layout>
);

export default AttendeeInfo;
