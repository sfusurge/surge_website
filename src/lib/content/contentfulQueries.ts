import { contentfulClient } from "./contentfulConnector";
import { ContentTypeEnum } from "./types/ContentTypeEnum";
import { Event } from "./types/Event";

export async function fetchSpace() {
  const data = await contentfulClient.getSpace();
  if (data) {
    return {
      data: data,
    };
  }
}

export async function fetchEventCollection() {
  let data: Event[] = [];

  try {
    const events = await contentfulClient.withoutLinkResolution
      .getEntries({
        content_type: ContentTypeEnum.EVENT,
      })
      .then((data) => {
        return data.items.map((e) => e.fields as unknown as Event);
      });

    data = events;
  } catch (e) {}

  return data;
}

export async function fetchJobListingCollection() {
  const jobListings = await contentfulClient.getEntries({
    content_type: ContentTypeEnum.JOB_LISTING,
  });

  if (jobListings.items) {
    return {
      items: jobListings.items,
    };
  }
}
