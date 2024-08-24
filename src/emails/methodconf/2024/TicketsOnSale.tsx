import {
    Button,
    Column,
    Heading,
    Link,
    Row,
    Text,
} from '@react-email/components';
import * as React from 'react';

import { Layout } from '@/components/methodconf/Layout';
import { heading, link, text } from '@/components/methodconf/text';
import { button } from '@/components/methodconf/button';

const ticketUrl = 'https://www.methodconf.com/tickets';

export interface TicketsOnSalesProps {
    children?: React.ReactNode;
    showUnsubscribe?: boolean;
}

export const TicketsOnSale = ({
    children,
    showUnsubscribe = true,
}: TicketsOnSalesProps) => (
    <Layout
        showUnsubscribe={showUnsubscribe}
        title="Tickets to Method Conference 2024 on Sale!"
    >
        <Text style={text}>
            We are excited to announce that registration is now open for Method
            Conference 2024! Don't miss out on our Early Bird special—secure
            your spot at the best price before{' '}
            <strong>Thursday, September 12th</strong>.
        </Text>
        <Heading as="h2" style={heading}>
            Ticket Info
        </Heading>
        <Text style={text}>
            Whether you’re a professional or just starting out, Method
            Conference 2024 offers something for everyone. Join us to connect
            with like-minded peers, gain insights, and be inspired by other
            experts in the industry.
        </Text>
        <Text style={text}>
            Ticket Options:
            <br />
            <ul>
                <li>
                    <strong>Early Bird Tickets:</strong> $100 (Available until
                    Thursday, September 12th)
                </li>
                <li>
                    <strong>Regular Tickets:</strong> $150
                </li>
                <li>
                    <strong>Student Tickets:</strong> $75
                </li>
            </ul>
        </Text>
        <Text style={text}>
            Stay tuned for the announcement of our workshop tickets. These will
            be available at no additional cost with an Early Bird or Regular
            ticket purchase. These are first-come, first-served basis, so be
            ready to claim yours as soon as they’re released.
        </Text>
        <Row style={{ textAlign: 'center' }}>
            <Column>
                <Button style={button} href={`${ticketUrl}@TrackLink`}>
                    Buy Tickets Now
                </Button>
            </Column>
        </Row>
        <Heading as="h2" style={heading}>
            Speaker & Session Announcements
        </Heading>
        <Text style={text}>
            Speakers and session details will be announced in early September.
            Stay tuned for updates on social media and in your inbox. You won’t
            want to miss it!
        </Text>
        <Heading as="h2" style={heading}>
            More Info
        </Heading>
        <Text style={text}>
            If you need more information on Hotels, Parking, etc. Please visit
            our{' '}
            <Link style={link} href="https://www.methodconf.com@TrackLink">
                website
            </Link>{' '}
            for more information. We look forward to seeing you at Method
            Conference 2024!
        </Text>
        {children ? children : <br />}
    </Layout>
);

export default TicketsOnSale;
