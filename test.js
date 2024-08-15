import { client } from "./util/dbconnection.js";
import { Entity } from "electrodb"; // import bcrypt from "bcrypt";
// const passward = "password@123";
// const NO_OF_ROUNDS = 10;
// const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
// const hashedPassword = await bcrypt.hash(passward, salt);
// console.log(salt);
// console.log(hashedPassword);

// Define the Author entity
const Author = new Entity(
  {
    model: {
      service: "BlogService",
      entity: "Author",
      version: "1",
    },
    attributes: {
      authorId: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      email: {
        type: "string",
        required: true,
      },
      bio: {
        type: "string",
      },
    },
    indexes: {
      authorIndex: {
        pk: {
          field: "pk",
          composite: ["authorId"],
        },
        sk: {
          field: "sk",
          composite: [],
        },
      },
    },
  },
  { table: "author", client }
);

// Define the BlogPost entity
const BlogPost = new Entity(
  {
    model: {
      service: "BlogService",
      entity: "BlogPost",
      version: "1",
    },
    attributes: {
      authorId: {
        type: "string",
        required: true,
      },
      postId: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      content: {
        type: "string",
        required: true,
      },
      postDate: {
        type: "string",
        required: true,
      },
      tags: {
        type: "list",
        items: "string",
      },
    },
    indexes: {
      postIndex: {
        pk: {
          field: "pk",
          composite: ["authorId"],
        },
        sk: {
          field: "sk",
          composite: ["postDate", "postId"],
        },
      },
    },
  },
  { table: "blog", client }
);

const insertData = async () => {
  const sampleAuthors = [
    {
      authorId: "A001",
      name: "John Doe",
      email: "john@example.com",
      bio: "Tech enthusiast and blogger",
    },
    {
      authorId: "A002",
      name: "Jane Smith",
      email: "jane@example.com",
      bio: "Writes about tech and science",
    },
  ];

  const samplePosts = [
    {
      authorId: "A001",
      postId: "P001",
      title: "Introduction to DynamoDB",
      content: "DynamoDB is a NoSQL database...",
      postDate: "2024-08-01",
      tags: ["DynamoDB", "NoSQL"],
    },
    {
      authorId: "A001",
      postId: "P002",
      title: "Advanced DynamoDB Queries",
      content: "Explore advanced queries in DynamoDB...",
      postDate: "2024-08-02",
      tags: ["DynamoDB", "Advanced"],
    },
    {
      authorId: "A002",
      postId: "P003",
      title: "DynamoDB Best Practices",
      content: "Learn best practices for DynamoDB...",
      postDate: "2024-08-01",
      tags: ["DynamoDB", "BestPractices"],
    },
    {
      authorId: "A002",
      postId: "P004",
      title: "Understanding NoSQL Databases",
      content: "An overview of NoSQL databases...",
      postDate: "2024-08-03",
      tags: ["NoSQL", "Database"],
    },
  ];

  // Insert authors
  for (const author of sampleAuthors) {
    await Author.put(author).go();
  }

  // Insert posts
  for (const post of samplePosts) {
    await BlogPost.put(post).go();
  }

  console.log("Sample data inserted successfully!");
};

// Scan
// const allblogs = await BlogPost.scan
//   .where(
//     ({ authorId }, { eq }) => `
//           ${eq(authorId, "A002")}
//       `
//   )
//   .go();

// console.log(allblogs);

//query
// const allBlogsquery = await BlogPost.query.postIndex({authorId : "A002"}).go();

// console.log(allBlogsquery);

// Task 2 : Blog which contains tht word "NoSQl"


const blogWithWord = await BlogPost.scan({
    filter: ({ content }, { contains }) => contains(content, 'NoSQL'),
  }).go();
  
  console.log(blogWithWord);
