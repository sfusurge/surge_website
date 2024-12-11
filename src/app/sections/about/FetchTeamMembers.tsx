'use server';
import {getTeamMembersCollection} from "@/lib/content/contentfulQueries";

export default async function getData() {
    return await getTeamMembersCollection();
}