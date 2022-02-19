import React from 'react';
import { DivProps } from 'react-html-props';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface FacebookEmbedProps extends DivProps {
    /** The URL to the post. */
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    placeholderImageUrl?: string;
    placeholderProps?: PlaceholderEmbedProps;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    scriptLoadDisabled?: boolean;
    retryDelay?: number;
    retryDisabled?: boolean;
    debug?: boolean;
}
export declare const FacebookEmbed: ({ url, width, height, linkText, placeholderImageUrl, placeholderProps, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, retryDelay, retryDisabled, debug, ...divProps }: FacebookEmbedProps) => JSX.Element;
