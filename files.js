const fs = require("fs");
// const quote = "stay hungry, stay foolish";
// fs.writeFile("cool.txt", quote, (err) => {
//   console.log("completed writing");
// });

// Task-1
const quote2 = "Live more, worry less";
// for (let i = 1; i <= 10; i++)
//   fs.writeFile(`backup/text${i}.html`, quote2, (err) => {
//     console.log("done");
//   });

// Task-2
function createFiles(n) {
  for (let i = 1; i <= n; i++)
    fs.writeFile(`backup/text-${i}.html`, quote2, (err) => {
      console.log("done");
    });
}

const [, , n] = process.argv;
let oldData = "good morning🎊";
// createFiles(n);
//readfing the file:
fs.readFile("fun.html", "utf-8", (err, data) => {
  if (err) {
    console.log("oops", err);
  } else {
    oldData = data;
    console.log(data);
  }
});
oldData = "Hello💜" + "\n" + oldData;
// // Appending to the file
// fs.appendFile("fun.html", "👍", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("completed appending..");
//   }
// });

// fs.writeFile("fun.html", oldData, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.appendFile("fun.html", oldData, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("completed appending..");
//       }
//     });
//   }
// });
fs.writeFile("fun.html", oldData, (err) => {
  console.log(err);
});

fs.readFile("fun.html", "utf-8", (err, data) => {
  if (err) {
    console.log("oops", err);
  } else {
    console.log(data);
  }
});

// fs.appendFile("fun.html");
fs.unlink("cool.txt", () => {
  console.log("deleted successfully..");
});

// read dir
fs.readdir("backup", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});
