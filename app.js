'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    // memoに保存されている場合memoを参照する
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n-1) + fib(n-2);
    // memoに計算結果を保存し、次回以降の計算を減らす
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}