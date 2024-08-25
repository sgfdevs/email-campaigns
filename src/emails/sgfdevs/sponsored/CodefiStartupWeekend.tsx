import {
    Container,
    Img,
    Section,
    Text,
    TailwindConfig,
    Row,
    Column,
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
} satisfies TailwindConfig;

const CodefiStartupWeekend = () => {
    return (
        <BaseLayout tailwindConfig={config}>
            <Section className="bg-primary-light text-white">
                <Container className="p-6">
                    <div style={{ float: 'left' }} className="float-left w-1/2">
                        <Img
                            className="w-full max-w-[300px] mx-auto"
                            src={`${ASSET_BASE_URL}/sgfdevs-codefi-startup-weekend-2024.png`}
                        />
                    </div>
                    <div
                        style={{ float: 'right' }}
                        className="float-right w-1/2"
                    >
                        <Text className="text-center text-xl">
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
        </BaseLayout>
    );
};

export default CodefiStartupWeekend;
