import { cache } from "react";
import { contentfulClient } from "./contentfulConnector";
import { ContentTypeEnum } from "./types/ContentTypeEnum";
import { EventDTO, EventSkeleton } from "./types/Event";
import {SocialLink, SocialObject, TeamMemberDTO, TeamMemberSkeleton} from "./types/TeamMember";
import {JobListingDTO, JobListingSkeleton} from "./types/JobListing";
import {Image} from "@/lib/content/types/ContentfulImage";

export async function fetchSpace() {
  const data = await contentfulClient.getSpace();
  if (data) {
    return {
      data: data,
    };
  }
}

async function fetchEventCollection(): Promise<EventDTO[]> {
  try {
    const events: EventDTO[] = await contentfulClient
      .getEntries<EventSkeleton>({
        content_type: ContentTypeEnum.EVENT,
      })
      .then((events) => {
        return events.items.map((event) => {
          const {id, title, location, time, about, responsibilities, application_link, commitment, skills, image} = event.fields;

          const imageUrl: string = ("https:"+ (image as Image).fields.file.url) || '';

          const dto: EventDTO = {id, title, location, time, about, responsibilities, application_link, commitment, skills, imageUrl};
          return dto;
        });
      });
    return events;
  } catch (e) {
    console.log(
      e,
      "Event type does not match the requested content. Please check if the content type has been updated"
    );
    return [];
  }
}
export const getEventCollection = cache(fetchEventCollection);

async function fetchJobListingCollection(): Promise<JobListingDTO[]> {
  try {
    const jobListings = await contentfulClient
      .getEntries<JobListingSkeleton>({
        content_type: ContentTypeEnum.JOB_LISTING,
      })
      .then((jobListings) => {
        return jobListings.items.map((jobListing) => {
          const dto: JobListingDTO = { ...jobListing.fields };
          return dto;
        });
      });
    return jobListings;
  } catch (e) {
    console.log(
      e,
      "JobListing type does not match the requested content. Please check if the content type has been updated"
    );
    return [];
  }
}
export const getJobListingsCollection = cache(fetchJobListingCollection);

async function fetchTeamMembersCollection(): Promise<TeamMemberDTO[]> {
  try {
    const TeamMembers = await contentfulClient
        .getEntries<TeamMemberSkeleton>({
          content_type: ContentTypeEnum.TEAM_MEMBER,
        })
        .then((TeamMembers) => {
          return TeamMembers.items.map((TeamMember) => {
            const {id, name, position, major, team, socials, image, order} = TeamMember.fields;

            const imageUrl: string = ("https:"+ (image as Image).fields.file.url) || '';
            const socialLinks: SocialLink[] =  (socials as SocialObject[]).map((x) => x?.fields)

            const dto: TeamMemberDTO = {id, name, position, major, team, socialLinks, imageUrl, order};
            return dto;
          });
        });
    return TeamMembers;
  } catch (e) {
    console.log(
        e,
        "TeamMember type does not match the requested content. Please check if the content type has been updated"
    );
    return [];
  }
}
export const getTeamMembersCollection = cache(fetchTeamMembersCollection);
