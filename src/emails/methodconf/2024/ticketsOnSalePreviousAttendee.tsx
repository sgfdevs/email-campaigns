import * as React from 'react';
import { TicketsOnSale } from './ticketsOnSale';
import { Button, Column, Heading, Row, Text } from '@react-email/components';
import { heading, text } from '../../../components/methodconf/text';
import { button } from '../../../components/methodconf/button';

export const TicketsOnSalePreviousAttendee = () => (
    <TicketsOnSale>
        <Heading as="h2" style={heading}>
            Why Are You Emailing Me?
        </Heading>
        <Text style={text}>
            We sent you this email because you attended Method Conference 2020.
            If you'd like continue to receive updates for Method 2024, opt-in
            with the link below, otherwise we won't email you again.
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
