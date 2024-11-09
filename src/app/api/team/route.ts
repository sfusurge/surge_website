import { NextRequest, NextResponse } from 'next/server';
import { getTeamMembersCollection } from "@/lib/content/contentfulQueries";
import { TeamMemberDTO } from "@/lib/content/types/TeamMember";

export async function GET() {
    try {
        const teamData: TeamMemberDTO[] = await getTeamMembersCollection();
        return NextResponse.json(teamData);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch team members" }, { status: 500 });
    }
}