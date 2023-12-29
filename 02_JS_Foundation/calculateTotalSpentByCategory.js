function calculateTotalSpentByCategory(transactions) {
    // Create an object to store total amounts spent per category
    const categoryTotals = {};

    // Iterate through each transaction
    transactions.forEach(transaction => {
        const { category, price } = transaction;

        // If the category is already in the object, update the total
        if (category in categoryTotals) {
            categoryTotals[category] += price;
        }
        // If the category is not in the object, add it with the current price
        else {
            categoryTotals[category] = price;
        }
    });

    // Convert the object to an array of objects
    const result = Object.entries(categoryTotals).map(([category, total]) => ({ [category]: total }));

    return [];

}

// module.exports = calculateTotalSpentByCategory;
// Example usage:
const transactions = [
    { itemName: 'Item1', category: 'Food', price: 10.0, timestamp: '2023-01-01' },
    { itemName: 'Item2', category: 'Clothing', price: 20.0, timestamp: '2023-01-02' },
    { itemName: 'Item3', category: 'Food', price: 15.0, timestamp: '2023-01-03' },
    { itemName: 'Item4', category: 'Electronics', price: 30.0, timestamp: '2023-01-04' },
    { itemName: 'Item5', category: 'Electronics', price: 30.0, timestamp: '2023-01-05' },
    { itemName: 'Item6', category: 'Clothing', price: 25.0, timestamp: '2023-01-05' },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);