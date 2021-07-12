let list2 = [
  "658101",
  "658102",
  "658103",
  "658104",
  "658105",
  "658201",
  "658202",
  "658203",
  "658204",
  "658301",
  "658302",
  "658303",
  "658401",
  "658402",
  "658403",
  "658404",
  "658501",
];
let list1 = ["658101", "658102", "658103", "658104", "658105"];

// First way! In this solution, time complexity will be O(n) space complexity will be O(1)
function exec1(arr) {
  let output = arr[0].slice(0, 4);
  arr.forEach((element) => {
    output = output.concat(element.slice(-2) + " ");
  });
  return output.trim();
}

function exec2(list) {
  let output = "";
  let tempList = [];
  let firstFour = list[0].slice(0, 4);

  list.forEach((element) => {
    if (element.slice(0, 4) === firstFour) {
      tempList.push(element);
    } else {
      output += exec1(tempList) + "+";
      firstFour = element.slice(0, 4);
      tempList.splice(0, tempList.length);
      tempList.push(element);
    }
  });
  output += exec1(tempList).trim();
  return output;
}

console.log(exec1(list1));
console.log(exec2(list2));

// Regex, this is a another way of implementing but it's logic basically same. The differance is we are using regex to match the right items and displaying the data. Space and time complexity will be the same.
function exec1Regex(list) {
  const regex = /^\d{4}/;
  firstFour = list[0].match(regex)[0];
  lastTwo = list
    .map((item) => item.slice(-2))
    .toString()
    .replace(",", " ");
  return firstFour + lastTwo;
}

function exec2Regex(list) {
  const regex = /^\d{4}/;
  let firstFour = list[0].match(regex)[0];
  let tempList = [];
  let output = "";
  list.forEach((element) => {
    if (element.match(regex)[0] === firstFour) {
      tempList.push(element);
    } else {
      output += exec1Regex(tempList) + "+";
      firstFour = element.match(regex)[0];
      tempList.splice(0, tempList.length);
      tempList.push(element);
    }
  });
  output += exec1(tempList);
  return output;
}

console.log(exec1Regex(list1));
console.log(exec2Regex(list2));
