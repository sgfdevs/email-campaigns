import {
	Body,
	Button,
	Column,
	Container,
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
								<Heading>Dev Night: In-Person + Online</Heading>
								<Heading>Wednesday, May 1st at 6:00 PM</Heading>
								<Text>RSVP on Meetup</Text>
								<Text>Join the Discord</Text>
								<Row>
									<Column style={eventDescription}>
										<Text style={eventTitle}>My Wireless Hacking Toy Box</Text>
										<Text style={eventHosts}>Presented by Chris Kincaid</Text>
										<Text style={eventGroup}>Springfield Devs</Text>
										<Text>
											Explore the realm of wireless auditing tools! This session
											explores popular wireless auditing tools, featuring
											devices like thumb-drive-sized NICs, external wireless
											adapters, WiFi Pineapples, Flipper Zero, Pwnagotchi, and
											custom Arduino-type boards designed for ethical WiFi
											hacking practice or group games.
										</Text>
										<Text>
											Disclaimer: Ethical hacking only! Unauthorized access or
											malicious actions towards any wireless network without
											expressed permissions is illegal and not condoned. The
											topics covered in this session are intended for
											entertainment, knowledge reinforcement, and emphasizing
											the importance of strong wireless security.
										</Text>
										<Text>
											Note: Due to the nature of this kind of event, it will
											have to be in-person only event (no twitch stream);
											however, we will be posting a recording of the event in
											the weeks following.
										</Text>
									</Column>
								</Row>
								<Row>
									<Column>
										<Text>Watch on Springfield Devs Twitch</Text>
										<Text>Meetup Details</Text>
									</Column>
								</Row>
								<Text style={sectionTitle}>Our Sponsors</Text>
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
								<Row>
									<Column>
										<Img src={`${baseUrl}/static/yelp-logo.png`} />
										<Text>
											Join over 50 local devs and create a free profile!
										</Text>
										<Text>
											Profiles on the Springfield Devs website help show your
											support for the group, increases your online visibility,
											and gives you the opportunity to showcase your skills as a
											developer.
										</Text>
										<Text>Membership is not required.</Text>
										<Text>Create a Profile Here</Text>
									</Column>
								</Row>
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
	width: "33%",
};

const eventTitle = {
	color: "white",
	fontSize: "24px",
	fontWeight: "bold",
};

const eventHosts = {
	color: "white",
	fontSize: "16px",
	fontWeight: "bold",
};

const eventGroup = eventHosts;

const eventDescription = {
	color: "white",
	backgroundColor: "#153557",
	fontSize: "16px",
	padding: "18px",
	borderRadius: "24px",
};

const sectionTitle = {
	color: "white",
	backgroundColor: "#153557",
	fontSize: "16px",
	padding: "18px",
	textAlign: "center",
	borderRadius: "24px",
	fontWeight: "bold",
};

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
