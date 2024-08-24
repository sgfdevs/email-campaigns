import * as React from 'react';
import {
    Body,
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
import { ASSET_BASE_URL } from '@/config';
import { colors } from '@/components/methodconf/colors';

const socialLinks = [
    {
        url: 'https://www.linkedin.com/company/methodconf',
        alt: 'Method Conf Linkedin',
        iconUrl: 'method-2024-linkedin.png',
    },
    {
        url: 'https://www.instagram.com/methodconference/',
        alt: 'Method Conf Instagram',
        iconUrl: 'method-2024-instagram.png',
    },
    {
        url: 'https://twitter.com/methodconf',
        alt: 'Method Conf Twitter',
        iconUrl: 'method-2024-x-twitter.png',
    },
    {
        url: 'https://www.youtube.com/c/sgfdevs/videos',
        alt: 'SGF Devs Youtube',
        iconUrl: 'method-2024-youtube.png',
    },
];

export interface LayoutProps {
    title: string;
    children: React.ReactNode;
    showUnsubscribe?: boolean;
}

export const Layout = ({
    title,
    showUnsubscribe = true,
    children,
}: LayoutProps) => (
    <Html>
        <Head />
        <Preview>{title}</Preview>
        <Body style={main}>
            <Section style={headerBackground}>
                <Container>
                    <Row style={header}>
                        <Column style={logo}>
                            <Img
                                alt="Method Conference Logo"
                                style={{ height: '40px', margin: '0 auto' }}
                                src={`${ASSET_BASE_URL}/methodconf-2024-logo.png`}
                            />
                            <Heading style={{ margin: '20px 0 0 0' }}>
                                {title}
                            </Heading>
                        </Column>
                    </Row>
                </Container>
            </Section>
            <Section style={dateBannerBackground}>
                <Container>
                    <Row>
                        <Column style={dateBanner}>
                            <Text style={dateBannerText}>
                                Saturday October 12th, 2024 @ The efactory
                            </Text>
                        </Column>
                    </Row>
                </Container>
            </Section>
            <Container>
                <Section style={content}>{children}</Section>
            </Container>
            <Section>
                <Row style={{ marginBottom: '20px' }}>
                    <Column style={centerLinks}>
                        {socialLinks.map((socialLink, index, arr) => (
                            <Text
                                style={{
                                    display: 'inline',
                                    marginRight:
                                        arr.length - 1 !== index
                                            ? '60px'
                                            : '0px',
                                }}
                                key={socialLink.url}
                            >
                                <Link href={`${socialLink.url}@TrackLink`}>
                                    <Img
                                        style={socialImage}
                                        src={`${ASSET_BASE_URL}/${socialLink.iconUrl}`}
                                        alt={socialLink.alt}
                                    />
                                </Link>
                            </Text>
                        ))}
                    </Column>
                </Row>
                <Row>
                    <Column style={centerLinks}>
                        {showUnsubscribe ? (
                            <Link
                                style={{
                                    ...footerLink,
                                    marginRight: '20px',
                                }}
                                href="{{ UnsubscribeURL }}"
                            >
                                Unsubscribe
                            </Link>
                        ) : null}
                        <Link style={footerLink} href="{{ MessageURL }}">
                            View in Browser
                        </Link>
                    </Column>
                </Row>
                {'{{ TrackView }}'}
            </Section>
        </Body>
    </Html>
);

const main = {
    margin: 0,
    padding: 0,
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
} as const;

const logo = { height: '40px', margin: '0 auto' } as const;

const headerBackground = {
    backgroundColor: colors.black,
};

const header = {
    padding: '20px 10px 40px 10px',
    textAlign: 'center',
    color: colors.white,
} as const;

const dateBannerBackground = {
    backgroundColor: colors.red,
} as const;

const dateBanner = {
    textAlign: 'center',
    padding: '9px',
    color: colors.white,
} as const;

const dateBannerText = {
    fontSize: '20px',
    margin: '0',
} as const;

const content = {
    padding: '20px 30px',
} as const;

const socialImage = {
    height: '35px',
    display: 'inline',
} as const;

const centerLinks = {
    margin: '0 auto',
    textAlign: 'center',
} as const;

const footerLink = {
    fontWeight: 600,
    color: colors.lightText,
    fontSize: '20px',
} as const;
