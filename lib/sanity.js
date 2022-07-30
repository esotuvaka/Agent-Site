import {
	createPreviewSubscriptionHook,
	createCurrentUserHook,
} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { config } from './config';

const builder = imageUrlBuilder(config);

export function urlFor(source) {
	return builder.image(source);
}

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const userCurrentUser = createCurrentUserHook(config);
