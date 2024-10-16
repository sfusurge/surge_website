import { contentfulClient } from "./contentfulConnector";
import { ContentTypeEnum } from "./types/ContentTypeEnum";

export async function fetchSpace() {
  const data = await contentfulClient.getSpace();
  if (data) {
    return {
      data: data,
    };
  }
}

export async function fetchEventCollection() {
  const events = await contentfulClient.getEntries({
    content_type: ContentTypeEnum.EVENT,
  });

  if (events.items) {
    return {
      items: events.items,
    };
  }
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
