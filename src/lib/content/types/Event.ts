import { EntryFieldType, EntryFieldTypes, EntrySkeletonType } from "contentful";
import { ContentTypeEnum } from "./ContentTypeEnum";

export type EventSkeleton = {
  contentTypeId: ContentTypeEnum.EVENT;
  fields: Event;
};

export type Event = {
  title: EntryFieldTypes.Text;
  location: EntryFieldTypes.Text;
  time: EntryFieldTypes.Text;
};

export type EventDTO = {
  title: string;
  location: string;
  time: string;
};
