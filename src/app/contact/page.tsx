import {
  Button,
  Column,
  Heading,
  Icon,
  Row,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, contact, person, social } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" fillWidth gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth gap="m" marginBottom="l">
        <Heading variant="display-strong-xl">Get in Touch</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </Text>
      </Column>

      <Column fillWidth gap="l">
        {/* Email */}
        <Column fillWidth gap="8">
          <Row gap="12" vertical="center">
            <Icon name="email" size="l" onBackground="brand-medium" />
            <Heading as="h2" variant="heading-strong-l">
              Email
            </Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            <a href={`mailto:${person.email}`} style={{ color: "inherit" }}>
              {person.email}
            </a>
          </Text>
        </Column>

        {/* Phone */}
        {contact.phone && (
          <Column fillWidth gap="8">
            <Row gap="12" vertical="center">
              <Icon name="phone" size="l" onBackground="brand-medium" />
              <Heading as="h2" variant="heading-strong-l">
                Phone
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              <a href={`tel:${contact.phone}`} style={{ color: "inherit" }}>
                {contact.phone}
              </a>
            </Text>
          </Column>
        )}

        {/* Location */}
        {contact.location && (
          <Column fillWidth gap="8">
            <Row gap="12" vertical="center">
              <Icon name="globe" size="l" onBackground="brand-medium" />
              <Heading as="h2" variant="heading-strong-l">
                Location
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {contact.location}
            </Text>
          </Column>
        )}

        {/* Website */}
        {contact.website && (
          <Column fillWidth gap="8">
            <Row gap="12" vertical="center">
              <Icon name="link" size="l" onBackground="brand-medium" />
              <Heading as="h2" variant="heading-strong-l">
                Portfolio
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              <a href={contact.website} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                {contact.website}
              </a>
            </Text>
          </Column>
        )}

        {/* Social Links */}
        {social.length > 0 && (
          <Column fillWidth gap="16" marginTop="l">
            <Heading as="h2" variant="heading-strong-l">
              Connect with me
            </Heading>
            <Row gap="12" wrap>
              {social.map(
                (item) =>
                  item.link && (
                    <Button
                      key={item.name}
                      href={item.link}
                      prefixIcon={item.icon}
                      label={item.name}
                      size="m"
                      variant="secondary"
                    />
                  ),
              )}
            </Row>
          </Column>
        )}
      </Column>
    </Column>
  );
}
