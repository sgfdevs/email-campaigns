import * as React from 'react';
import { Fragment } from 'react';
import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import { formatInTimeZone } from 'date-fns-tz';
import { LoremIpsum } from 'lorem-ipsum';
import {
    ASSET_BASE_URL,
    CENTRAL_TIMEZONE,
    SGF_DEVS_DISCORD_LINK,
    SGF_DEVS_PROFILE_LINK,
    SGF_DEVS_TWITCH_LINK,
} from '../../config';

export const SgfDevNightEmail = ({
    presentations,
    datetime,
    title,
    link,
}: EventDetails) => {
    return (
        <Html>
            <Head />
            <Preview>{title}</Preview>
            <Body style={main}>
                <Container style={noBorder}>
                    <Section style={{ ...content, ...noBorder }}>
                        <Row style={noBorder}>
                            <Column style={emailHeader}>
                                <Img
                                    style={{ maxWidth: '100%' }}
                                    src={`${ASSET_BASE_URL}/sgfdevs-email-header.png`}
                                />
                                <Heading style={emailHeadingText}>
                                    Dev Night: In-Person + Online
                                </Heading>
                                <Heading style={emailHeadingText}>
                                    {formatInTimeZone(
                                        datetime,
                                        CENTRAL_TIMEZONE,
                                        "EEEE, MMMM do 'at' h:mm aa",
                                    )}
                                </Heading>
                                <div style={centered}>
                                    <Button
                                        style={buttonStyle}
                                        href={`${link}@TrackLink`}
                                    >
                                        RSVP on Meetup
                                    </Button>
                                </div>
                                <div style={centered}>
                                    <Button
                                        style={buttonStyle}
                                        href={`${SGF_DEVS_DISCORD_LINK}@TrackLink`}
                                    >
                                        Join the Discord
                                    </Button>
                                </div>
                            </Column>
                        </Row>

                        <Row
                            style={{
                                ...boxInfos,
                                ...noBorder,
                                paddingBottom: '0',
                            }}
                        >
                            <Column>
                                <Row
                                    style={{
                                        ...noBorder,
                                        marginBottom: '10px',
                                    }}
                                >
                                    <Column style={eventDescription}>
                                        {presentations.map((presentation) => (
                                            <PresentationSection
                                                key={presentation.title}
                                                {...presentation}
                                            />
                                        ))}
                                        <Text style={italics}>
                                            For dev night agenda, parking map,
                                            etc check out the details on the
                                            meetup page by clicking the "Meetup
                                            Details" button below.
                                        </Text>
                                    </Column>
                                </Row>
                                <Row style={noBorder}>
                                    <Column>
                                        <div style={centered}>
                                            <Button
                                                style={buttonStyle}
                                                href={`${SGF_DEVS_TWITCH_LINK}@TrackLink`}
                                            >
                                                Watch on Springfield Devs Twitch
                                            </Button>
                                        </div>
                                        <div style={centered}>
                                            <Button
                                                style={buttonStyle}
                                                href={`${link}@TrackLink`}
                                            >
                                                Meetup Details
                                            </Button>
                                        </div>
                                    </Column>
                                </Row>
                                <Text style={sectionTitle}>Our Sponsors</Text>
                                <Row style={noBorder}>
                                    <Column style={sponsorColumn}>
                                        <Link href={'https://logicforte.com/'}>
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-logic-forte.jpg`}
                                            />
                                        </Link>
                                        <Link
                                            href={
                                                'https://efactory.missouristate.edu/'
                                            }
                                        >
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-efactory.jpg`}
                                            />
                                        </Link>
                                        <Link href={'https://warehqlabs.com/'}>
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-ware-hq.png`}
                                            />
                                        </Link>
                                    </Column>
                                    <Column style={sponsorColumn}>
                                        <Link
                                            href={
                                                'https://www.codefiworks.com/'
                                            }
                                        >
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-codefi.jpg`}
                                            />
                                        </Link>
                                        <Link href={'https://hearo.net/'}>
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-hearo.jpg`}
                                            />
                                        </Link>
                                        <Link href={'https://edwardjrice.com/'}>
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-ej-rice.png`}
                                            />
                                        </Link>
                                        <Link
                                            href={
                                                'https://www.mostlyserious.io/'
                                            }
                                        >
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-mostly-serious.jpg`}
                                            />
                                        </Link>
                                    </Column>
                                    <Column style={sponsorColumn}>
                                        <Link
                                            href={
                                                'https://www.buildmidwestern.com/'
                                            }
                                        >
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-midwestern.jpg`}
                                            />
                                        </Link>
                                        <Link href={'https://www.nlsnow.com/'}>
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-nls.png`}
                                            />
                                        </Link>
                                        <Link
                                            href={'https://sgftechcouncil.com/'}
                                        >
                                            <Img
                                                style={imageStyle}
                                                src={`${ASSET_BASE_URL}/sgfdevs-stc.png`}
                                            />
                                        </Link>
                                    </Column>
                                </Row>
                                <Text style={sectionTitle}>
                                    Do You Have a Springfield Devs Profile Yet?
                                </Text>
                                <Row style={noBorder}>
                                    <Column>
                                        <Img
                                            style={{ maxWidth: '100%' }}
                                            src={`${ASSET_BASE_URL}/sgfdevs-dev-profiles.png`}
                                        />
                                        <Text>
                                            Join over 50 local devs and create a
                                            free profile!
                                        </Text>
                                        <Text>
                                            Profiles on the Springfield Devs
                                            website help show your support for
                                            the group, increases your online
                                            visibility, and gives you the
                                            opportunity to showcase your skills
                                            as a developer.
                                        </Text>
                                        <Text style={italics}>
                                            Profile is not required to attend
                                            SGF Dev events.
                                        </Text>
                                        <div style={centered}>
                                            <Button
                                                style={buttonStyle}
                                                href={`${SGF_DEVS_PROFILE_LINK}@TrackLink`}
                                            >
                                                Create a Profile Here
                                            </Button>
                                        </div>
                                    </Column>
                                </Row>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export const PresentationSection = (presentation: Presentation) => (
    <>
        <Text style={eventTitle}>{presentation.title}</Text>
        <Text style={eventHosts}>Presented by {presentation.speaker}</Text>
        <Text>
            {presentation.description
                .split('\n')
                .map((paragraph, index, arr) => (
                    <Fragment key={paragraph}>
                        {paragraph}
                        {arr.length - 1 !== index ? (
                            <>
                                <br />
                                <br />
                            </>
                        ) : null}
                    </Fragment>
                ))}
        </Text>
    </>
);

export default () => {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 3,
            min: 1,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    });

    return (
        <SgfDevNightEmail
            presentations={[
                {
                    title: 'Presentation 1 title',
                    speaker: 'Speaker 1',
                    description: lorem.generateParagraphs(2),
                },
                {
                    title: 'Presentation 2 title',
                    speaker: 'Speaker 2',
                    description: lorem.generateParagraphs(1),
                },
            ]}
            title="Test Title"
            datetime={new Date()}
            link="https://meetup.com/sgfdevs"
        />
    );
};

const noBorder = {
    border: 'none',
};

const italics = {
    fontStyle: 'italic',
};

const emailHeadingText = {
    textAlign: 'center' as const,
    color: 'white',
};

const emailHeader = {
    backgroundColor: '#153557',
};

const centered = {
    textAlign: 'center' as const,
    marginBottom: '10px',
};

const buttonStyle = {
    padding: '18px',
    borderRadius: '8px',
    backgroundColor: '#4caad8',
    color: 'white',
    cursor: 'pointer',
};

const sponsorColumn = {
    width: '33%',
};

const imageStyle = {
    maxWidth: 'calc(100% - 20px)',
    padding: '15px',
};

const eventTitle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
};

const eventHosts = {
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
};

const eventDescription = {
    color: 'white',
    backgroundColor: '#153557',
    fontSize: '16px',
    padding: '18px',
    borderRadius: '24px',
};

const sectionTitle = {
    color: 'white',
    backgroundColor: '#153557',
    fontSize: '16px',
    padding: '18px',
    textAlign: 'center' as const,
    borderRadius: '24px',
    fontWeight: 'bold',
};

const main = {
    backgroundColor: '#fff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
};

const boxInfos = {
    padding: '20px',
};

export interface EventDetails {
    presentations: Presentation[];
    title: string;
    link: string;
    datetime: Date;
}

export interface Presentation {
    title: string;
    speaker: string;
    description: string;
}
