### Most Common MongoDB Commands (Native Language)

1. Display the current database:
```shell
db
```

2. Switch to a different database:
```shell
use <database_name>
```

3. Show all collections in a database:
```shell
show collections
```

4. Insert a document into a collection:
```shell
db.<collection_name>.insertOne({field1: "value1", field2: "value2"})
```

5. Find all documents in a collection:
```shell
db.<collection_name>.find()
```

6. Find a single document in a collection:
```shell
db.<collection_name>.findOne()
```

7. Update a document:
```shell
db.<collection_name>.updateOne({filter}, {$set: {field: "new_value"}})
```

8. Delete a document:
```shell
db.<collection_name>.deleteOne({filter})
```

9. Count the number of documents in a collection:
```shell
db.<collection_name>.count()
```

10. Create an index:
```shell
db.<collection_name>.createIndex({field: 1})
```

11. Display indexes of a collection:
```shell
db.<collection_name>.getIndexes()
```

12. Perform an aggregation:
```shell
db.<collection_name>.aggregate([{$group: {_id: "$field", total: {$sum: 1}}}])
```

13. Limit the number of results:
```shell
db.<collection_name>.find().limit(5)
```

14. Sort results:
```shell
db.<collection_name>.find().sort({field: 1})
```

15. Display database statistics:
```shell
db.stats()
```

These commands cover the most common operations in MongoDB, including document manipulation, queries, indexes, and aggregations.

## Other Useful MongoDB Commands

### Indexing

1. Create a single-field index:
```shell
db.<collection_name>.createIndex({field: 1})
```

2. Create a compound index:
```shell
db.<collection_name>.createIndex({field1: 1, field2: -1})
```

3. List all indexes on a collection:
```shell
db.<collection_name>.getIndexes()
```

4. Drop a specific index:
```shell
db.<collection_name>.dropIndex({field: 1})
```

### Aggregation

5. Perform a simple aggregation:
```shell
db.<collection_name>.aggregate([
  {$group: {_id: "$field", count: {$sum: 1}}}
])
```

### Data Management

6. Rename a collection:
```shell
db.<old_collection_name>.renameCollection("<new_collection_name>")
```

7. Copy a collection to another database:
```shell
db.<collection_name>.aggregate([{$out: {db: "newDB", coll: "newCollection"}}])
```

8. Get collection statistics:
```shell
db.<collection_name>.stats()
```

### Query Optimization

9. Explain a query plan:
```shell
db.<collection_name>.find({query}).explain("executionStats")
```

### Database Administration

10. View current operations:
```shell
db.currentOp()
```

11. Kill a specific operation:
```shell
db.killOp(<opId>)
```

12. Repair a database:
```shell
db.repairDatabase()
```

### Data Export/Import

13. Export data to JSON:
```shell
mongoexport --db=<database_name> --collection=<collection_name> --out=<output_file.json>
```

14. Import data from JSON:
```shell
mongoimport --db=<database_name> --collection=<collection_name> --file=<input_file.json>
```

These additional commands cover various aspects of MongoDB administration, data management, and performance optimization, providing a more comprehensive toolkit for database operations.
