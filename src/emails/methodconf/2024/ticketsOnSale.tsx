import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Row,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { Layout } from '../../../components/methodconf/Layout';
import { text } from '../../../components/methodconf/text';
import { NewLinesToBr } from '../../../components/NewLinesToBr';

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

export const TicketsOnSale = () => (
    <Layout title="Some Title">
        <Text style={text}>
            <NewLinesToBr>{lorem.generateParagraphs(5)}</NewLinesToBr>
        </Text>
    </Layout>
);

export default TicketsOnSale;
