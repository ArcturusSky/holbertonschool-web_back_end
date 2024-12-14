# Introduction to MongoDB and NoSQL

## What is NoSQL?

NoSQL databases (Not Only SQL) are a category of databases that do not use the traditional relational model. These databases are designed to handle large volumes of unstructured or semi-structured data. Unlike relational databases, which use tables and rows to store data, NoSQL databases store data in a variety of formats such as key-value pairs, documents, wide-column stores, or graphs.

### Types of NoSQL Databases:
- **Document Stores**: Data is stored in documents (e.g., MongoDB, CouchDB).
- **Key-Value Stores**: Data is stored as key-value pairs (e.g., Redis, DynamoDB).
- **Column-Family Stores**: Data is stored in columns (e.g., Cassandra, HBase).
- **Graph Databases**: Data is stored in nodes and edges (e.g., Neo4j).

## ACID Properties

ACID stands for the **four key properties** of database transactions, ensuring data integrity and reliability.

### 1. **Atomicity (A)**

Atomicity ensures that a transaction is treated as a single unit, meaning it is either completely executed or not executed at all. If one part of the transaction fails, the entire transaction fails and the database is rolled back to its previous state.

**Example:**
Imagine transferring money between two accounts. If the debit operation from one account succeeds but the credit operation to the second account fails, the entire transaction should be rolled back to avoid inconsistencies.

### 2. **Consistency (C)**

Consistency ensures that a transaction brings the database from one valid state to another. After a transaction, the database must always follow its predefined rules and constraints.

**Example:**
If there’s a rule that an account balance cannot be negative, the database ensures that no transaction can violate that rule (e.g., by attempting to withdraw more money than is available).

### 3. **Isolation (I)**

Isolation ensures that concurrent transactions do not interfere with each other. Each transaction is isolated from others, and intermediate results are not visible to other transactions until they are committed.

**Example:**
If two users are trying to withdraw money from the same account at the same time, isolation ensures that one transaction sees the account balance before the other, preventing double withdrawals.

### 4. **Durability (D)**

Durability guarantees that once a transaction is committed, it is permanently recorded, even in the event of a system crash or failure.

**Example:**
After transferring money, if the system crashes, the transaction should still be recorded when the system restarts, ensuring no data loss.

---

## MongoDB Basics

MongoDB is a document-based NoSQL database. It stores data in BSON (Binary JSON) format, which is similar to JSON but includes additional data types.

MongoDB is a **document store** and is particularly good at handling large, unstructured, or semi-structured data.

### Key MongoDB Commands

#### 1. List All Databases

In MongoDB shell:

```shell
show dbs
```

In Python (using `pymongo`):

```pyhon
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
databases = client.list_database_names()
print(databases)
```

#### 2. Create a Database

In MongoDB shell:

```shell
use myNewDatabase
```

In Python:

```python
db = client["myNewDatabase"]
```

#### 3. Show All Collections in a Database

In MongoDB shell:

```shell
show collections
```

In Python:

```python
collections = db.list_collection_names()
print(collections)
```

#### 4. Create a Collection

In MongoDB shell:

```shell
db.createCollection("myCollection")
```

In Python:

```python
collection = db["myCollection"]
```

#### 5. Insert a Document

In MongoDB shell:

```shell
db.myCollection.insertOne({"name": "Alice", "age": 30})
```

In Python:

```python
collection.insert_one({"name": "Alice", "age": 30})
```

#### 6. Find Documents

In MongoDB shell:

```shell
db.myCollection.find()
```

In Python:

```python
documents = collection.find()
for doc in documents:
    print(doc)
```

#### 7. Update a Document

In MongoDB shell:

```shell
db.myCollection.updateOne({"name": "Alice"}, {"$set": {"age": 31}})
```

In Python:

```python
collection.update_one({"name": "Alice"}, {"$set": {"age": 31}})
```

#### 8. Delete a Document

In MongoDB shell:

```shell
db.myCollection.deleteOne({"name": "Alice"})
```

In Python:

```python
collection.delete_one({"name": "Alice"})
```

---

## Summary of MongoDB Commands

Here is a quick list of common MongoDB commands in both shell and Python:

- **List Databases**:
  - Shell: `show dbs`
  - Python: `client.list_database_names()`
  
- **Create Database**:
  - Shell: `use myNewDatabase`
  - Python: `client["myNewDatabase"]`

- **Show Collections**:
  - Shell: `show collections`
  - Python: `db.list_collection_names()`

- **Create Collection**:
  - Shell: `db.createCollection("myCollection")`
  - Python: `db["myCollection"]`

- **Insert Document**:
  - Shell: `db.myCollection.insertOne({"name": "Alice", "age": 30})`
  - Python: `collection.insert_one({"name": "Alice", "age": 30})`

- **Find Document(s)**:
  - Shell: `db.myCollection.find()`
  - Python: `collection.find()`

- **Update Document**:
  - Shell: `db.myCollection.updateOne({"name": "Alice"}, {"$set": {"age": 31}})`
  - Python: `collection.update_one({"name": "Alice"}, {"$set": {"age": 31}})`

- **Delete Document**:
  - Shell: `db.myCollection.deleteOne({"name": "Alice"})`
  - Python: `collection.delete_one({"name": "Alice"})`
