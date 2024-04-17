import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface YelpRecentLoginEmailProps {
  userFirstName?: string;
  loginDate?: Date;
  loginDevice?: string;
  loginLocation?: string;
  loginIp?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const YelpRecentLoginEmail = ({
  userFirstName,
  loginDate,
  loginDevice,
  loginLocation,
  loginIp,
}: YelpRecentLoginEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(loginDate);

  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`${baseUrl}/static/yelp-logo.png`} />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/yelp-header.png`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {userFirstName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  We noticed a recent login to your Yelp account.
                </Heading>
                <Row>
                  <Column style={eventDescription}>
                    <Text style={eventTitle}>My Wireless Hacking Toy Box</Text>
                    <Text style={eventHosts}>Presented by Chris Kincaid</Text>
                    <Text style={eventGroup}>Springfield Devs</Text>
                    <Text>
                      Explore the realm of wireless auditing tools! This session explores popular wireless auditing tools, featuring devices like thumb-drive-sized NICs, external wireless adapters, WiFi Pineapples, Flipper Zero, Pwnagotchi, and custom Arduino-type boards designed for ethical WiFi hacking practice or group games.
                    </Text>
                    <Text>
                      Disclaimer: Ethical hacking only! Unauthorized access or malicious actions towards any wireless network without expressed permissions is illegal and not condoned. The topics covered in this session are intended for entertainment, knowledge reinforcement, and emphasizing the importance of strong wireless security.
                    </Text>
                    <Text>
                      Note: Due to the nature of this kind of event, it will have to be in-person only event (no twitch stream); however, we will be posting a recording of the event in the weeks following.
                    </Text>
                  </Column>
                </Row>
                <Text style={sectionTitle}>
                  Our Sponsors
                </Text>
                <Row>
                  <Column style={sponsorColumn}>
                  <Img src={`${baseUrl}/static/1519906478800.jpg`} />
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  </Column>
                  <Column style={sponsorColumn}>
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  </Column>
                  <Column style={sponsorColumn}>
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  <Img src={`${baseUrl}/static/yelp-logo.png`} />
                  </Column>
                </Row>
                <Text style={sectionTitle}>
                  Do You Have a Springfield Devs Profile Yet?
                </Text>
                <Text style={paragraph}>
                  <b>6:00 PM </b>
                  Social and Food (Pizza/Soda/BYOB)
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>6:30 PM </b>
                  Community Announcements (Start Online Stream)
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>6:45 PM </b>
                  Event(s) start
                </Text>
                <Text style={{ ...paragraph, marginTop: -15 }}>
                  <b>8:00 PM </b>
                  Wrap-up & Close up shop
                </Text>


                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Approximate geographic location based on IP address:
                  {loginIp}
                </Text>

                <Text style={paragraph}>
                  If this was you, there's nothing else you need to do.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn't you or if you have additional questions, please
                  see our support page.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button}>Learn More</Button>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`${baseUrl}/static/yelp-footer.png`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

YelpRecentLoginEmail.PreviewProps = {
  userFirstName: "Alan",
  loginDate: new Date("September 7, 2022, 10:58 am"),
  loginDevice: "Chrome on Mac OS X",
  loginLocation: "Upland, California, United States",
  loginIp: "47.149.53.167",
} as YelpRecentLoginEmailProps;

export default YelpRecentLoginEmail;

const sponsorColumn = {
  width: '33%',
}

const eventTitle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
}

const eventHosts = {
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
}

const eventGroup = eventHosts

const eventDescription = {
  color: 'white',
  backgroundColor: "#153557",
  fontSize: '16px',
  padding: '18px',
  borderRadius: '24px',
}

const sectionTitle = {
  color: 'white',
  backgroundColor: "#153557",
  fontSize: '16px',
  padding: '18px',
  textAlign: 'center',
  borderRadius: '24px',
  fontWeight: 'bold',
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
