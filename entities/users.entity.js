import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbconnection.js";

const Users = new Entity(
  {
    model: {
      entity: "Users",
      version: "1",
      service: "UsersService",
    },
    attributes: {
      userName: {
        type: "string",
        required: true,
      },
      password: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["userName"],
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
  { client, table: "Users" }
);

export { Users };
