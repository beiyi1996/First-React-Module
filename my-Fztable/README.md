## 使用react製作小週曆

## 心得：
    第一次撰寫Reactjs，發現使用資料渲染畫面很有趣!!! 發現ES6的箭頭函式很好用!!!

> + 箭頭函式：
    functionName = () => {your function or return something}
    其中 = () => 這段就是在綁定this，
    當function只傳入一個參數時，可以省略括號。 EX： functionName = x => {return console.log(x)}
    當沒有傳入參數或傳入2(含)以上的參數時，則要保留括號。 EX：functionName = (x,y) => {return console.log(x * y)}
    
> + map() 將原陣列的每一個元素經由callback function運算過後，回傳一個符合條件的集合。跟foreach有點像!!
    Array.map( args / callback(args) {return element for new array})
    
> + let & const宣告：使用
    const：宣告不可變的常數。
    let： 宣告變數。
    建議一行一行宣告變數。
    EX：const item = getItems();
        const isClick = true;
        const slide = 3;
    
    
> + React小提醒!!
    在react中return的物件都必須用一個tag包起來，如果你不想要增加html的階層，也可以考慮使用<React.Fragment />，
    這樣就可以輕鬆地回傳你想要render的物件囉!!
