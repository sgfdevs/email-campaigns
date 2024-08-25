import * as React from 'react';
import {
    Body,
    Head,
    Html,
    Preview,
    Tailwind,
    TailwindConfig,
} from '@react-email/components';
import { defaultTailwindConfig } from '@/components/defaultTailwindConfig';

export interface BaseLayoutProps {
    tailwindConfig: TailwindConfig;
    previewText?: string;
    children: React.ReactNode;
}

export const BaseLayout = ({
    tailwindConfig,
    previewText,
    children,
}: BaseLayoutProps) => {
    const { theme: customTheme = {}, ...customConfig } = tailwindConfig;

    const updatedTailwindConfig = {
        ...customConfig,
        theme: {
            fontFamily: defaultTailwindConfig.theme.fontFamily,
            ...customTheme,
            fontSize: defaultTailwindConfig.theme.fontSize,
            spacing: defaultTailwindConfig.theme.spacing,
        },
    } satisfies TailwindConfig;

    return (
        <Html>
            <Tailwind config={updatedTailwindConfig}>
                <Head />
                {previewText ? <Preview>{previewText}</Preview> : null}
                <Body className="m-0 p-0 font-default">{children}</Body>
            </Tailwind>
        </Html>
    );
};
