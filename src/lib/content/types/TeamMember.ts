import { EntryFieldTypes as EFT } from "contentful";
import { ContentTypeEnum } from "./ContentTypeEnum";

export type TeamMemberSkeleton = {
    contentTypeId: ContentTypeEnum.TEAM_MEMBER;
    fields: TeamMember;
};

export type TeamMember = {
    id: EFT.Integer;
    name: EFT.Text;
    position: EFT.Text;
    major: EFT.Text;
    team: EFT.Text;
    socials: EFT.Object;
    image: EFT.Object;
    order: EFT.Integer;
};

export type TeamMemberDTO = {
    id: number;
    name: string;
    position: string;
    major: string;
    team: string;
    socials: object | null;
    image: object | null;
    order: number;
};
