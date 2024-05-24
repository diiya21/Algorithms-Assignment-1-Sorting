document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {
            "id": 1,
            "name": "Apple",
            "category": "Fruits",
            "price": 0.5,
            "inStock": true,
            "description": "A crisp, sweet red apple.",
            "nutrition": {
                "calories": 52,
                "fat": 0.2,
                "carbohydrates": 14,
                "protein": 0.3
            }
        },
        {
            "id": 2,
            "name": "Banana",
            "category": "Fruits",
            "price": 0.3,
            "inStock": true,
            "description": "A ripe, yellow banana.",
            "nutrition": {
                "calories": 89,
                "fat": 0.3,
                "carbohydrates": 23,
                "protein": 1.1
            }
        },
        {
            "id": 3,
            "name": "Carrot",
            "category": "Vegetables",
            "price": 0.2,
            "inStock": true,
            "description": "A fresh, crunchy carrot.",
            "nutrition": {
                "calories": 41,
                "fat": 0.2,
                "carbohydrates": 10,
                "protein": 0.9
            }
        },
        {
            "id": 4,
            "name": "Bread",
            "category": "Bakery",
            "price": 2.5,
            "inStock": true,
            "description": "A loaf of freshly baked bread.",
            "nutrition": {
                "calories": 265,
                "fat": 3.2,
                "carbohydrates": 49,
                "protein": 9
            }
        }
    ];

    const tableBody = document.querySelector('#itemTable tbody');
    
    const renderTable = (data) => {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.description}</td>
            `;
            tableBody.appendChild(row);
        });
    };

    const bubbleSortByName = (data) => {
        const n = data.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (data[i].name.localeCompare(data[i + 1].name) > 0) {
                    let temp = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return data;
    };

    document.getElementById('sortButton').addEventListener('click', () => {
        const sortedData = bubbleSortByName(data);
        renderTable(sortedData);
    });

    renderTable(data);
});
