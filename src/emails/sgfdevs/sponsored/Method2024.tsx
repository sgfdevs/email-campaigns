import {
    Container,
    Img,
    Section,
    Text,
    TailwindConfig,
    Link,
} from '@react-email/components';
import { BaseLayout } from '@/components/BaseLayout';
import { ASSET_BASE_URL } from '@/config';

const config = {
    theme: {
        extend: {
            colors: {
                primary: '#153557',
                'primary-light': '#619ECE',
            },
        },
    },
} as TailwindConfig;

const Method2024 = () => {
    return (
        <BaseLayout
            tailwindConfig={config}
            previewText="Method Conference by SGF Devs - Saturday, October 12th, 2024"
        >
            <Section className="bg-primary text-white">
                <Container className="p-6">
                    <Img
                        className="w-full mx-auto"
                        src={`${ASSET_BASE_URL}/sgfdevs-method-2024.png`}
                    />
                </Container>
            </Section>
            <Section>
                <Container className="px-6">
                    <Text>
                        Dev Night is canceled this month as we make way for{' '}
                        <strong>Method Conference</strong> Join us for an
                        immersive day of code, content and design on{' '}
                        <em>Saturday</em>, October 12. Whether you're a seasoned
                        pro or just starting out, our workshop and sessions are
                        an opportunity for you to hone your skills in software,
                        hardware, and project management.
                    </Text>
                    <Text>
                        <strong>What to expect:</strong>
                        <br />
                        <ul>
                            <li className="text-sm">
                                💻 Multiple one-hour sessions of software and
                                project management discussions
                            </li>
                            <li className="text-sm">
                                🗣 Keynote on advancing human and AI
                                collaboration
                            </li>
                            <li className="text-sm">
                                🖲 Hands-on workshop on hardware development
                            </li>
                            <li className="text-sm">
                                👋🏻 Networking opportunities with industry pros
                            </li>
                            <li className="text-sm">
                                🍽 Breakfast and lunch included with your ticket
                            </li>
                        </ul>
                    </Text>
                    <Text>
                        Learn more about the sessions, workshop, keynote and
                        register at{' '}
                        <a href="https://www.methodconf.com/2024/?ref=SgfDevsEmail@TrackLink">
                            methodconf.com
                        </a>
                        .
                    </Text>
                    <Text>
                        If you have any questions, you can contact us at{' '}
                        <a href="mailto:info@methodconf.com">
                            info@methodconf.com
                        </a>
                        .
                    </Text>
                    <Text>See you there!</Text>
                    <Text>
                        <em>
                            P.S. Use code --- for 40% off a regular priced
                            ticket.
                        </em>
                    </Text>
                    <Text>
                        <em>
                            P.S.S. Students - we have a ticket just for you!
                        </em>
                    </Text>
                </Container>
            </Section>
            <Section className="bg-primary text-white">
                <Container className="p-6">
                    <Img
                        className="w-full max-w-[158px] mx-auto"
                        src={`${ASSET_BASE_URL}/sgfdevs-footer-logo.png`}
                    />
                    <Text className="text-white text-center m-0">
                        <Link href="{{ MessageURL }}" className="text-white">
                            View in Browser
                        </Link>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <Link
                            href="{{ UnsubscribeURL }}"
                            className="text-white"
                        >
                            Unsubscribe
                        </Link>
                    </Text>
                </Container>
            </Section>
        </BaseLayout>
    );
};

export default Method2024;
