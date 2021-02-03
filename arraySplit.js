const nums = [1,2,3,4,5,6,7,8];
const part=nums.slice(2,5);//index 2 theke 5 porjonto dekhabe
console.log(part);
console.log(nums); // original array te kono poriporton korbe na.

const removed = nums.splice(2,5);//index 2 theke start kore porer 5 ta index dekhabe. baki gulo remove korbe.ekhane new value inject o kora jabe
console.log(removed);
console.log(nums);//splice original array te poriborton hobe, original array ta kete felbe.

const together = nums.join(",");// , diye diye join hobe.
console.log(together);