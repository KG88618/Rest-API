

//data.js
const users = [
    {

    

    id: 1,
    name:"Femi ola",
    username:"Femi",
    email: "olluwafemi@sozenetech.com",

    address:{
        street:"Panetella Drive",
        city: "Calgary",
        Zipcode:"TIY 3M2",

   },
    },
];

//Adding Income
const income = [
    {
        id: 1,
        wages:1500,
        SecondaryIncome:700,
        Interest:120,
        SupportPayment:40,
        others:200,
    },
];

module.exports = { users,income};

// Adding expenses
const expenses={
    "PaymentObligations" :{
        "credit card"  :500,
        "loans":600,
        "vehicle lease" :200,
        "line of credit" :100,
        "insurance":{
            "life insurance ": 400,
            "health insurance" :300,
            "others":200
        },
        "Housing" :{
            "rent":600,
            "rent insurance":400,
            "storage and parking" :500,
           "utilities" :300,
            "maintenance" :200,
        },
    },
    "utilities" :{
        "phone": 600,
        "internet": 300,
        "electicity": 300,
        "water": 100,
        "Heat": 100,
        "cable": 200,
        "others" :150,
    },
    "personal":{
        "groceries":400,
        "Transportation" : 60,
        "Clothing" : 80,
        "Gift family" :60,
        "Perosnal Grooming" : 100,
        "Dining out" : 300,
        "Hobbies" : 200,
       "Others" : 60,
    }
}
