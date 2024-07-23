"use strict";
function productExceptSelf(nums) {
    const prefix = [];
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            prefix[i] = nums[i];
        }
        else {
            prefix[i] = prefix[i - 1] * nums[i];
        }
    }
    const postfix = [];
    for (let j = nums.length - 1; j >= 0; j--) {
        if (j == nums.length - 1) {
            postfix[j] = nums[j];
        }
        else {
            postfix[j] = nums[j] * postfix[j + 1];
        }
    }
    const res = [];
    for (let k = 0; k < nums.length; k++) {
        if (k == 0) {
            res[k] = postfix[k + 1];
        }
        else if (k == nums.length - 1) {
            res[k] = prefix[k - 1];
        }
        else {
            res[k] = prefix[k - 1] * postfix[k + 1];
        }
    }
    return res;
}
