import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import type { EventInfo } from '../../src/utils/upcomingEvents';
import Airtable from "airtable";

// Variables for accessing airtable.
const AIRTABLE_ID = 'appZ5zIAdext4BYtm'
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

// Constants for table/field IDs.
// See: https://airtable.com/appZ5zIAdext4BYtm/api/docs
const ID = {
  TABLE_EVENTS: "tblWw5FFrXebKgnxQ",

  NAME: "fldIfyKLIyKuMeaOJ",
  CATEGORY: "fldW4k16yYjLtVi5q",
  DURATION: "fldfqieuq1TIouhL5",
  PUBLISH: "fldRuYI6VQzDvNw0X",
  START_DATE: "fldyeSgr2irSMbNzL",
  END_DATE: "fldgnu4CKhHN0PGCU",
  LOCATION: "fldpScmpbZeS1SGyL",
  LOCATION_LINK: "fldXWtDorMM6LNGZm",
  REGISTER_LINK: "fld3iVKiqsu0ynSlk",
  FACEBOOK_LINK: "fldbAHkz9QtDb02Dh",
  DISCORD_LINK: "fldlAnAKTBZb6ldJP",
  CUSTOM_LINK_TEXT: "fldeYcQYMaNO6SMUu",
  CUSTOM_LINK_URL: "fldSn3KEicsfghVnO",
};

const FORMULA = {
  IS_PUBLISHED: `{Publish}="Published"`,
  IS_UPCOMING: `{End Date}>=TODAY()`,
  NO_PROBLEMS: `{Problems}=""`,
}

// Lookup tables.
const CATEGORY_TO_EVENT_TYPE:{[key: string]: EventInfo['type']} = {
  'Social': "Socials",
  'Workshop': "Workshops",
  'TechTalk': "TechTalks",
}

// Setup.
const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY });
const base = airtable.base(AIRTABLE_ID);

// Functions.

/**
 * Fetch events from airtable.
 *
 * @see https://airtable.com/appZ5zIAdext4BYtm/tblWw5FFrXebKgnxQ/viwE8qlxohmet37Ps
 * @returns Airtable events.
 */
async function getEvents(): Promise<EventInfo<string>[]> {
  const events = await base(ID.TABLE_EVENTS).select({
    "timeZone": "GMT",
    "filterByFormula": `AND(${FORMULA.IS_PUBLISHED}, ${FORMULA.NO_PROBLEMS}, ${FORMULA.IS_UPCOMING})`,
    "cellFormat": "json",
    "returnFieldsByFieldId": true,
  }).all();
  function emptyToUndefined(value: string): string | undefined {
    return value === '' ? undefined : value;
  }

  return events.map(({fields}) => {
    return {
      title: fields[ID.NAME] as string,
      location: fields[ID.LOCATION] as string,
      type: CATEGORY_TO_EVENT_TYPE[fields[ID.CATEGORY] as string],

      start: fields[ID.START_DATE] as string,
      end: fields[ID.END_DATE] as string,

      links: {
        register: emptyToUndefined(fields[ID.REGISTER_LINK] as string),
        facebook: emptyToUndefined(fields[ID.FACEBOOK_LINK] as string),
        discord: emptyToUndefined(fields[ID.DISCORD_LINK] as string),
        location: emptyToUndefined(fields[ID.LOCATION_LINK] as string),
        other: ((fields[ID.CUSTOM_LINK_URL] === '' || fields[ID.CUSTOM_LINK_URL] == null) ? undefined : {
            text: fields[ID.CUSTOM_LINK_TEXT] as string,
            href: fields[ID.CUSTOM_LINK_URL] as string,
        })
      }
    }
  })
}


// Handler.
export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    const events = await getEvents();

    return {
      statusCode: 200,
      body: JSON.stringify(events),
    }
  } catch (ex) {
    console.error(ex);

    return {
      statusCode: 500,
      body: 'Hi'
    }
  }
}
