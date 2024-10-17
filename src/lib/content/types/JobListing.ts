import { EntryFieldTypes as EFT, EntrySkeletonType } from "contentful";
import { ContentTypeEnum } from "./ContentTypeEnum";

export type JobListingSkeleton = {
  contentTypeId: ContentTypeEnum.JOB_LISTING;
  fields: JobListing;
};

export type JobListing = {
  id: EFT.Integer;
  url: EFT.Text;
  team: EFT.Text;
  title: EFT.Text;
  description: EFT.Text;
  director: EFT.Text;
  about: EFT.Text;
  responsibilities: EFT.Text[];
  skills: EFT.Text[];
  commitment: EFT.Text[];
  listing: EFT.Text;
};

export type JobListingDTO = {
  id: number;
  url: string;
  team: string;
  title: string;
  description: string;
  director: string;
  about: string;
  responsibilities: string[];
  skills: string[];
  commitment: string[];
  listing: string;
};
