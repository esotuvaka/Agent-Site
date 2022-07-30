import { createClient } from 'next-sanity';
import { config } from './config';

export const sanityClient = createClient(config);

export const previewClient = createClient({
	...config,
	useCdn: false,
	token:
		'skwZBZmuOnVUWkMjqxr51am1bvLRwlMNQm0pzyQnApMEas0pTi5UHZMHfkrQJyUmxZi0BNdXv71PJoIBdvxbXmP8URhWHP7W4v5Jo4Y1UKCbsd4gfPdJkmODaYyYXGmcR9bh7sXjYjQ6xu2uxcY6A7ezWZOBHvJc3QRvucPFPu7bWZp8ArCN',
});

export const getClient = (usePreview) =>
	usePreview ? previewClient : sanityClient;
