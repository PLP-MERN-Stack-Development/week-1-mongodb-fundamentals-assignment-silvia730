//retrieving data
db.books.find().pretty()
[
  
  { _id: ObjectId('683f47857ae8877af86c4bd0') },
  { _id: ObjectId('683f47ba7ae8877af86c4bd1') },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b2'),
    Title: 'Blossoms of savannah',
    Author: 'Silvia Njeri',
    Genre: 'Fiction',
    Published_Year: 2020,
    In_store: false,
    pages: 200,
    price: 1000,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b3'),
    Title: 'Bembea',
    Author: 'Hillary',
    Genre: 'Fiction',
    Published_Year: 2023,
    In_store: 'false',
    pages: 100,
    price: 1300,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b4'),
    Title: 'Hobbit',
    Author: 'Alex',
    Genre: 'Fiction',
    Published_Year: 2040,
    In_store: false,
    pages: 400,
    price: 800,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b5'),
    Title: 'chozi',
    Author: 'Milkah',
    Genre: 'Fiction',
    Published_Year: 2010,
    In_store: 'false',
    pages: 130,
    price: 300,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b6'),
    Title: 'inheritance',
    Author: 'Phillip',
    Genre: 'Fiction',
    Published_Year: 2022,
    In_store: 'false',
    pages: 230,
    price: 1460,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b7'),
    Title: 'Tumbo Lisiloshiba',
    Author: 'Margaret',
    Genre: 'Fiction',
    Published_Year: 2025,
    In_store: false,
    pages: 400,
    price: 750,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b8'),
    Title: "Father's of Nation",
    Author: 'Silvia Njeri',
    Genre: 'Fiction',
    Published_Year: 2000,
    In_store: false,
    pages: 120,
    price: 600,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b9'),
    Title: 'My life in crime',
    Author: 'Maxwell',
    Genre: 'Fiction',
    Published_Year: 2030,
    In_store: false,
    pages: 120,
    price: 1050,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8ba'),
    Title: 'Mindset',
    Author: ' Njeri',
    Genre: 'Fiction',
    Published_Year: 2019,
    In_store: false,
    pages: 210,
    price: 700,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8bb'),
    Title: 'successors',
    Author: 'Sofi',
    Genre: 'Fiction',
    Published_Year: 2010,
    In_store: false,
    pages: 100,
    price: 700,
    Publisher: 'longman'
  },
  { _id: ObjectId('683f57139e68ea1cf56fd8b1') }
]
//updating data
plp_bookstore> db.books.updateMany({In_store:false},{$set:{In_store:true});
Uncaught:
SyntaxError: Unexpected token, expected "," (1:58)

> 1 | db.books.updateMany({In_store:false},{$set:{In_store:true});
    |                                                           ^
  2 |

plp_bookstore> db.books.updateMany({In_store:false},{$set:{In_store:true}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 7,
  modifiedCount: 7,
  upsertedCount: 0
}

//deleting data
plp_bookstore> db.books.deleteOne({price:1050});
{ acknowledged: true, deletedCount: 1 }
plp_bookstore> db.books.find({price:$gt 1000});
Uncaught:
SyntaxError: Unexpected token, expected "," (1:25)

> 1 | db.books.find({price:$gt 1000});
    |                          ^
  2 |

plp_bookstore> db.books.find({price:{$gt 1000}});
Uncaught:
SyntaxError: Unexpected token, expected "," (1:26)

> 1 | db.books.find({price:{$gt 1000}});
    |                           ^
  2 |

plp_bookstore> db.books.find({ price: { $gt: 1000 } });
[
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b3'),
    Title: 'Bembea',
    Author: 'Hillary',
    Genre: 'Fiction',
    Published_Year: 2023,
    In_store: 'false',
    pages: 100,
    price: 1300,
    Publisher: 'longman'
  },
  {
    _id: ObjectId('683f5bba9e68ea1cf56fd8b6'),
    Title: 'inheritance',
    Author: 'Phillip',
    Genre: 'Fiction',
    Published_Year: 2022,
    In_store: 'false',
    pages: 230,
    price: 1460,
    Publisher: 'longman'
  }
]
plp_bookstore>
