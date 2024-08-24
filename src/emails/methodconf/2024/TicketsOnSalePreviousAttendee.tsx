import * as React from 'react';
import { Button, Column, Heading, Row, Text } from '@react-email/components';
import { TicketsOnSale } from '@/emails/methodconf/2024/TicketsOnSale';
import { heading, text } from '@/components/methodconf/text';
import { button } from '@/components/methodconf/button';

export const TicketsOnSalePreviousAttendee = () => (
    <TicketsOnSale showUnsubscribe={false}>
        <Heading as="h2" style={heading}>
            Interested in More Updates?
        </Heading>
        <Text style={text}>
            We're sending you this email because you attended Method Conference
            2020. If you'd like to continue to receive updates for Method 2024
            and future events, opt-in with the link below, otherwise we won't
            email you again.
        </Text>
        <Row style={{ textAlign: 'center' }}>
            <Column>
                <Button style={button} href="{{ OptinURL }}">
                    Subscribe to Updates
                </Button>
            </Column>
        </Row>
        <br />
    </TicketsOnSale>
);

export default TicketsOnSalePreviousAttendee;
