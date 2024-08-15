import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbconnection.js";

const Session = new Entity(
  {
    model: {
      entity: "session",
      version: "2",
      service: "sessionService",
    },
    attributes: {
      userName: {
        type: "string",
        required: true,
      },
      token: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["token"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "session" }
);

export { Session };
