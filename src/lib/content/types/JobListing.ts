import { EntryFieldTypes as EFT, EntrySkeletonType } from "contentful";
import { ContentTypeEnum } from "./ContentTypeEnum";

export type JobListingSkeleton = {
  contentTypeId: ContentTypeEnum.JOB_LISTING;
  fields: JobListing;
};

export type JobListing = {
  id: EFT.Integer;
  team: EFT.Text;
  title: EFT.Text;
  expected_time: EFT.Text;
  director: EFT.Text;
  about: EFT.Text;
  responsibilities: EFT.Text[];
  skills: EFT.Text[];
  commitment: EFT.Text[];
  application_link: EFT.Text;
};

export type JobListingDTO = {
  id: number;
  team: string;
  title: string;
  expected_time: string;
  director: string;
  about: string;
  responsibilities: string[];
  skills: string[];
  commitment: string[];
  application_link: string;
};
