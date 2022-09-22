const ROLE_TEAM_MEMBER = 'Project Team Members';
const ROLE_TEAM_LEAD   = 'Team Leads';
const ROLE_MENTOR      = 'Mentors'
export const defaultRoles = [ROLE_TEAM_MEMBER, ROLE_TEAM_LEAD, ROLE_MENTOR];

const upcomingApplications = [
    {
        from: '2022-09-20T00:00:00Z', 
        to: '2022-09-22T06:59:59Z',
        
        roles: defaultRoles,
        button: {
            text: 'Apply Now',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeEhUgDf7FKz6LH4D9Qhi0JV9rxfk3Fqvl5uQ0KPkARZTGakA/viewform',
        },
    }
]

export default upcomingApplications;
    