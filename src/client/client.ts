import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID as string,
    dataset: import.meta.env.VITE_SANITY_DATASET as string,
    apiVersion: '2023-09-13',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
    token: import.meta.env.VITE_TOKEN as string,
});

const builder = imageBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);