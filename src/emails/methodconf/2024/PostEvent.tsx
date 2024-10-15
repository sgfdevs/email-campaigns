import { Button, Column, Heading, Row, Text } from '@react-email/components';
import * as React from 'react';

import { Layout } from '@/components/methodconf/Layout';
import { heading, text } from '@/components/methodconf/text';
import { button } from '@/components/methodconf/button';

export const PostEvent = () => (
    <Layout
        showUnsubscribe={true}
        showDateBanner={false}
        title="Thank You for Making Method Conference a Success!"
    >
        <Text style={text}>
            We hope you had a great time at the conference with us. Your
            presence was a major part of the success of the event, and we
            couldn't be more grateful.
        </Text>
        <Heading as="h2" style={heading}>
            Keynote Speaker Follow-up
        </Heading>
        <Text style={text}>
            We got a lot of great feedback from you all about how much you
            enjoyed the keynote session with Bryan. He reached out afterwards
            and expressed how much he loved the conversations he had with
            everyone after the keynote and that if anyone was interested he'd be
            willing to share his email for any additional followup.
        </Text>
        <Text style={text}>
            If you'd like his contact info, reply to this email and we'll pass
            it along
        </Text>
        <Heading as="h2" style={heading}>
            We Value Your Feedback
        </Heading>
        <Text style={text}>
            Your feedback ensures that we can make our next event even better.
            If you haven't already, please take a few minutes to fill out our
            post event survey.
        </Text>
        <Row style={{ textAlign: 'center' }}>
            <Column>
                <Button
                    style={button}
                    href="https://forms.gle/uzyME2Qrf75i3GAr6@TrackLink"
                >
                    Take Survey
                </Button>
            </Column>
        </Row>
        <Heading as="h2" style={heading}>
            Stay Connected
        </Heading>
        <Text style={text}>
            We're already making plans for our next event and although we don't
            have anything to share just yet, we will soon. Follow us on social
            media to stay up to date on future announcements
        </Text>
    </Layout>
);

export default PostEvent;
