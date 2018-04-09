# Practice: Home Inventory Data
To practice working with data, you are going to build a home inventory program. You will create a database of unique, or cool, items in your home, their location, and why they are special. By the end of this practice exercise, you will be able to store a JSON database in the local storage of your browser so that it can be retrieved, and modified again, at any time in the future.
### Define your Database
A database is a collection of data sets which are often related to each other. Start by defining the collections of data. This is how you will be defining databases in JavaScript until you learn how to use 3rd-party database systems later in the course.

You're going to be using a standard object as the database.
### Defining Data Items
Each item that you want to store in your home inventory database will be defined as a standard object. First, I'm going to define two data items. One will be stored in the crafts tables in my database, and the other will be stored in the furniture table.
### Adding Data Items to the Database
Next, place each object that you have defined into the appropriate database table. I'm going to add the two items I created above into the appropriate tables. Remember, I'm using the term table because we're building a database, but the collections are actually arrays, so I can use the push() method.