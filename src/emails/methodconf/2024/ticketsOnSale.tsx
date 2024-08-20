import { Button, Column, Row, Text } from '@react-email/components';
import * as React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { Layout } from '../../../components/methodconf/Layout';
import { text } from '../../../components/methodconf/text';
import { NewLinesToBr } from '../../../components/NewLinesToBr';
import { button } from '../../../components/methodconf/button';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 3,
        min: 1,
    },
    wordsPerSentence: {
        max: 16,
        min: 8,
    },
});

const ticketUrl = 'https://l.oveit.com/events/embed?id=5b12c452dc';

export const TicketsOnSale = () => (
    <Layout title="Tickets to Method Conference 2024 on Sale!">
        <Text style={text}>
            <NewLinesToBr>{lorem.generateParagraphs(5)}</NewLinesToBr>
        </Text>
        <Row style={{ textAlign: 'center' }}>
            <Column>
                <Button style={button} href={ticketUrl}>
                    Buy Tickets Now
                </Button>
            </Column>
        </Row>
        <br />
        <br />
    </Layout>
);

export default TicketsOnSale;
