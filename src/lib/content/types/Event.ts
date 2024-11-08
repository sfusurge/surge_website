import { EntryFieldTypes} from "contentful";
import { ContentTypeEnum } from "./ContentTypeEnum";

export type EventSkeleton = {
  contentTypeId: ContentTypeEnum.EVENT;
  fields: Event;
};

export type Event = {
  id: EntryFieldTypes.Integer;
  title: EntryFieldTypes.Text;
  location: EntryFieldTypes.Text;
  time: EntryFieldTypes.Text;
  about: EntryFieldTypes.Text;
  responsibilities: EntryFieldTypes.Text[];
  application_link: EntryFieldTypes.Text;
  commitment: EntryFieldTypes.Text[];
  skills: EntryFieldTypes.Text[];
  image: EntryFieldTypes.Object;
};

export type EventDTO = {
  id: number;
  title: string;
  location: string;
  time: string;
  about: string;
  responsibilities: string[];
  application_link: string;
  commitment: string[];
  skills: string[];
  image: object;
};
