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

const CodefiStartupWeekend = () => {
    return (
        <BaseLayout tailwindConfig={config}>
            <Section className="bg-primary-light text-white">
                <Container className="p-6">
                    <div className="sm:float-left w-full sm:w-1/2">
                        <Img
                            className="w-full max-w-[300px] mx-auto"
                            src={`${ASSET_BASE_URL}/sgfdevs-codefi-startup-weekend-2024.png`}
                        />
                    </div>
                    <div className="sm:float-right w-full sm:w-1/2 sm:mt-[37px] mt-6">
                        <Text className="text-center text-xl m-0 mb-4">
                            <strong>Presented By:</strong>
                        </Text>
                        <Img
                            className="w-full max-w-[200px] mx-auto"
                            src={`${ASSET_BASE_URL}/sgfdevs-codefi-startup-weekend-2024-2.png`}
                        />
                    </div>
                    <div className="clear-both"></div>
                </Container>
            </Section>
            <Section>
                <Container className="px-6">
                    <Text>
                        <strong>Ozarks Startup Weekend</strong>
                        is coming to Springfield, MO,{' '}
                        <strong>September 13-15</strong>, and it's your chance
                        to transform your business idea into a viable startup in
                        just one weekend!
                    </Text>
                    <Text>
                        <strong>What to expect:</strong>
                        <ul>
                            <li>
                                54 hours of intense creativity and collaboration
                            </li>
                            <li>
                                Work with talented designers, developers, and
                                business experts
                            </li>
                            <li>
                                Build a working prototype of your idea Pitch to
                                experienced judges for a chance to win big
                            </li>
                        </ul>
                    </Text>
                    <Text>
                        <strong>Why participate:</strong>
                        <ul>
                            <li>$15,000 in cash prizes up for grabs</li>
                            <li>Invaluable networking opportunities</li>
                            <li>
                                Expert mentorship from successful tech founders
                            </li>
                            <li>
                                Potential for capital investment Fast-track
                                eligibility for Codefi's Startup Programs
                            </li>
                        </ul>
                    </Text>

                    <Text>
                        Whether you're a tech whiz, a creative genius, or a
                        business mastermind, there's a place for you at Ozarks
                        Startup Weekend. No startup experience necessary – just
                        bring your enthusiasm and ideas!
                    </Text>
                    <Text>
                        Space is limited! Register now at{' '}
                        <Link href="https://www.codefiworks.com/startupweekend@TrackLink">
                            codefiworks.com/startupweekend
                        </Link>
                        .
                    </Text>
                    <Text>
                        For more information, check out the FAQ on Ozarks
                        Startup Weekend website or contact{' '}
                        <Link href="mailto:crystal@codefiworks.com">
                            crystal@codefiworks.com
                        </Link>
                        .
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

export default CodefiStartupWeekend;
