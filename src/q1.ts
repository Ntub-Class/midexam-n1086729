// 請完成calcWord function裡面的內容
// 題目說明: 請計算 keyword 出現在 content 中"幾次"
// 參數說明: content: 文章, keyword: 想要計算出現在文章內的字
// 輸出說明: 請回傳出現次數

let calcWord = function (content: string, keyword: string) {
    let ans = 0;
    for (let i = 0; i < content.length; i++) {

        if (content.charAt(i) === keyword) {
            ans += 1
        }
    }
    return ans;
}

console.log(calcWord('Abcdaaeafga', 'a'));
console.log(calcWord('Todat is a good day !', 'o'));
console.log(calcWord('typescript and javascript', 's'));