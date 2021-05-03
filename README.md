
Frontend: https://60902ddb7c441e00d2f70763--quizzical-keller-1e892a.netlify.app

Frontend node hosted on Netlify.

Backend node hosted on Jelastic (if you can't sign up/in that's because jelastic server is sleeping).

Database hosten on AWS.


Login/Register system uses jwt authentication and is connected to a node backend that accepts both REST api and GRAPHQL api. The data gets stored in a MongoDB database.


Backend testable via postman: https://chargemaptom.jelastic.metropolia.fi/graphql

**Read all:**

    {
      stocks{
    	 id
        Symbol
        Stockname
        Price
    
      }
    }

**Read single by id:**

    {
      stock(id: "60900a86062cb6212471105b"){
        Symbol
        Stockname
        Price
    
      }
    }

**Add a stock:**

    mutation {
      addStock(
        Symbol: "TST",
        Stockname: "Test",
        Price: "3.14",
      )
      {
     	Symbol,   
      }
    }
**Edit stock:**

    mutation {
    modifyStock(
                id: "60900a86062cb6212471105b"
                Price: "12.19"
                Symbol: "AMZN"
    )
      {
          Symbol
      }
    }


Delete stock:

    mutation
    {
        deleteStock(id: "609036bc5ebe042886adae46")
    }
