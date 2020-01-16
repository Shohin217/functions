{
    const purchases = [
        {id: 1, date: '01.01.2020', values: [
            {id: 1, amount: 2000, category: 'auto'},
            {id: 2, amount: 3000, category: 'food'},
            {id: 3, amount: 300, category: 'beauty'},
        ]},
        {id: 2, date: '03.01.2020', values: [
            {id: 4, amount: 3000, category: 'auto'},
            {id: 5, amount: 30000, category: 'travel'},
        ]},
            {id: 6, date: '04.01.2020', values: [
            {id: 6, amount: 3000, category: 'food'},
        ]},
    ];
    //#9.1
    const findMaxDate = purchases
    .reduce((acc, curr) => acc.values.length < curr.values.length ? curr : acc);
    const resultFindMaxDate = `День, когда совершено максимальное количество покупок: ${findMaxDate.date}`;
    console.log(resultFindMaxDate);

    //#9.2
    const findMaxPurchases = purchases
    .map(o =>({
        date: o.date,
        amount: o.values
        .map(i => i.amount)
        .reduce((acc, curr) => acc+curr)
    }))
    .reduce((acc, curr) => acc.amount < curr.amount ? curr : acc);
    const resultFindMaxPurchases =`День, когда совершено больше покупок по суммарной стоимости: ${findMaxPurchases.date}`;
    console.log(resultFindMaxPurchases);

    //#9.3
    const findMaxBay = purchases
    .map(o => ({
        date: o.date,
        amount: o.values
        .map(o => o.amount)
        .reduce((acc, curr) => acc < curr ? curr : acc)
    }))
    .reduce((acc, curr) => acc.amount < curr.amount ? curr : acc);
    const resultFindMaxBay =(`День самой дорогой покупки: ${findMaxBay.date} с суммой ${findMaxBay.amount}`); 
    console.log(resultFindMaxBay);

    // #9.4
    const findMaxBaySumCategory = purchases
    .map(o => o.values)
    .flat()
    .reduce((acc, curr) => {
        const existent = acc
        .find(o => o.category === curr.category)
        if (existent === undefined){
            acc.push({
                category: curr.category,
                amount: curr.amount,
            });
        }else {
            existent.amount += curr.amount;
        }
        return acc;
    },[])
    .reduce((acc, curr) => acc.amount<curr.amount ? curr:acc);
    const resultFindMaxBaySumCategory = `В категрии ${findMaxBaySumCategory.category}, была максимальная сумма покупки: ${findMaxBaySumCategory.amount}`;
    console.log(resultFindMaxBaySumCategory);

    //#9.5
    const findAvgBay = purchases
    .map(o => ({
        date: o.date,
        amount: o.values
        .map(o=> o.amount)
        .map((acc,index,arr) => acc / arr.length)
        .reduce((acc, curr) => acc + curr)
    }));
    const resultFindAvgBay = findAvgBay;
    console.log(resultFindAvgBay);

    //#9.6
    const createStatistic = purchases
    .map(o => ({
        date: o.date,
        amount: o.values
        .map( o => o.amount)
        .reduce((acc,curr)=> acc+curr)
    }));
    const resultCreateStatistic = createStatistic;
    console.log(resultCreateStatistic);
};