// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.
let nums = [];

for (i = 1; i <= 25; i++){
    nums.push(i)
};

const target = Math.floor(Math.random() * ((nums[nums.length - 1] - nums[0] + 1) + nums[0]) * 2);

function twoSum(array, targetInt) {
    for (let x = 0; x < array.length; x++) 
        for (let z = 1; z < array.length; z++) {
            if (array[x] + array[z] === targetInt) {
                return [`Target Integer = ${target}`, array[x], array[z]];
            }
        
    }
    return null;
};

console.log(twoSum(nums, target))