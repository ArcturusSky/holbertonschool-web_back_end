# Pagination

## Summary

- [Pagination](#pagination)
  - [Summary](#summary)
  - [Basics](#basics)
    - [Calculations Explained](#calculations-explained)
    - [Example Code](#example-code)
  - [Pagination with APIs](#pagination-with-apis)
    - [Key Points:](#key-points)
    - [Types of pagination](#types-of-pagination)
  - [Filtering in APIs](#filtering-in-apis)
    - [What is filtering?](#what-is-filtering)
    - [Advanced filtering methods](#advanced-filtering-methods)
  - [Conclusion](#conclusion)
- [What is HATEOAS (Hypermedia As The Engine Of Application State)?](#what-is-hateoas-hypermedia-as-the-engine-of-application-state)
  - [Benefits of HATEOAS:](#benefits-of-hateoas)
  - [Comparative example with and without HATEOAS](#comparative-example-with-and-without-hateoas)
    - [Example Without HATEOAS:](#example-without-hateoas)
      - [1. **API Without HATEOAS** (Static response with only the data):](#1-api-without-hateoas-static-response-with-only-the-data)
      - [2. **Client Without HATEOAS**:](#2-client-without-hateoas)
    - [Example With HATEOAS:](#example-with-hateoas)
      - [1. **API With HATEOAS** (Dynamic response with action links):](#1-api-with-hateoas-dynamic-response-with-action-links)
      - [2. **Client With HATEOAS**:](#2-client-with-hateoas)
    - [Key Differences:](#key-differences)
    - [Additional Benefits of HATEOAS:](#additional-benefits-of-hateoas)



## Basics

Pagination divides data into smaller chunks (pages). To paginate a list in Python, calculate:
- **`start`**: The index of the first element in the desired page.
- **`end`**: The index where the page ends (exclusive).

---

### Calculations Explained

1. **`start = (page_number - 1) * page_size`**
   - `page_number - 1`: Adjusts for Python's 0-based indexing. Page 1 starts at index 0, Page 2 starts after skipping Page 1, etc.
   - `* page_size`: Skips the total number of elements in all previous pages. For example:
     - Page 1: `(1 - 1) * page_size = 0` → Start at index 0.
     - Page 2: `(2 - 1) * page_size = page_size` → Start after Page 1.
     - Page 3: `(3 - 1) * page_size = 2 * page_size` → Start after Pages 1 and 2.

2. **`end = start + page_size`**
   - Adds the number of elements per page (`page_size`) to `start` to determine the exclusive end of the page. For example:
     - If `start = 0` and `page_size = 3`, `end = 0 + 3 = 3`.
     - If `start = 3` and `page_size = 3`, `end = 3 + 3 = 6`.

---

### Example Code

```python
def paginate(data, page_number, page_size):
    start = (page_number - 1) * page_size
    end = start + page_size
    return data[start:end]

### Example usage
data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
page = 2
page_size = 3
result = paginate(data, page, page_size)
print(result)  # Output: [4, 5, 6]
```

---

## Pagination with APIs

In APIs, pagination helps split large datasets into smaller, manageable pieces for the client. Most APIs use query parameters like `page` and `page_size` to fetch specific pages.

1. **Client Request Format**:
   - The client sends `page` and `page_size` as query parameters.
   - Example URL: `https://api.example.com/items?page=2&page_size=3`

2. **Server-Side Implementation**:
   The server calculates `start` and `end` based on the `page` and `page_size` provided by the client.

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

### Sample data
data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

@app.route('/items', methods=['GET'])
def get_items():
    # Get page and page_size from query params (default: page=1, page_size=5)
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get('page_size', 5))
    
    # Calculate start and end
    start = (page - 1) * page_size
    end = start + page_size
    
    # Return paginated data
    return jsonify({
        "page": page,
        "page_size": page_size,
        "total_items": len(data),
        "items": data[start:end]
    })

if __name__ == '__main__':
    app.run()
```

3. **Response Example**:
   For `https://api.example.com/items?page=2&page_size=3`, the server responds:
   
```json
{
    "page": 2,
    "page_size": 3,
    "total_items": 9,
    "items": [4, 5, 6]
}
```

---

### Key Points:
- APIs often return metadata like `page`, `page_size`, and `total_items` for easier navigation.
- Adjust the `start` and `end` calculations based on the incoming query parameters.
- Always validate query parameters to avoid errors (e.g., negative or non-integer values).

### Types of pagination
1. **Offset Pagination**  
   Example:  
   `GET /items?limit=20&offset=40`  
   Benefits: Simple to implement and stateless.  
   Downsides: Performance degrades with high offsets; inconsistent results (e.g., page drift).

2. **Keyset Pagination**  
   Example:  
   `GET /items?limit=20&created:lte:2021-01-20T00:00:00`  
   Benefits: Consistent performance and ordering, even with new entries.  
   Downsides: Coupled with filters and sorting, which adds complexity.

3. **Seek Pagination**  
   Example:  
   `GET /items?limit=20&after_id=123`  
   Benefits: Decoupled from filters and sorting, enabling better flexibility.  
   Downsides: Challenging to implement with custom sort orders.

## Filtering in APIs

### What is filtering?
Filtering helps narrow down results based on specific conditions using URL parameters. A basic example:  
`GET /items?state=active`

### Advanced filtering methods

1. **LHS Brackets (`[]`)**  
   Example:  
   `GET /items?price[gte]=10&price[lte]=100`  
   Benefits: Greater flexibility and easier grouping by field/operator.  
   Downsides: Parsing requires custom logic; combining filters (e.g., OR) can be challenging.

2. **RHS Colon (`:`)**  
   Example:  
   `GET /items?price=gte:10&price=lte:100`  
   Benefits: Simple server-side parsing.  
   Downsides: Special handling needed for literal values.

3. **Search Query Param**  
   Example (Lucene syntax):  
   `GET /items?q=title:red chair AND price:[10 TO 100]`  
   Benefits: Extremely flexible and powerful for users familiar with Lucene or Elasticsearch.  
   Downsides: Steeper learning curve; not suited for all data types.

---

## Conclusion
A well-designed REST API improves usability, scalability, and flexibility for developers. By incorporating advanced filtering methods and efficient pagination strategies, you can create APIs that balance performance and user experience. Use techniques like LHS Brackets for flexibility, or Seek Pagination for scalability with unique identifiers, tailoring the approach based on your data and use case.

# What is HATEOAS (Hypermedia As The Engine Of Application State)?

HATEOAS is a constraint in REST APIs that allows the API to provide **links** to the client in the response, which describe the available actions that the client can take. This allows the client to interact with the API dynamically, without needing to hard-code the URLs of these actions.

This means that, instead of the client knowing in advance the exact routes for actions like "update" or "delete," the API will provide these links as part of the response, helping the client to discover the possible next actions.

## Benefits of HATEOAS:

- **No need to hard-code URLs**: The client doesn’t need to know all the available routes at the beginning. It can rely on the API to provide the relevant links for each state change.
- **Memory Efficiency**: The client doesn’t need to store all possible routes in memory or configuration files. It simply follows the provided links, which saves memory.
- **Faster Execution**: Because the client is always given the latest available routes by the API, it eliminates the need for additional back-and-forth communication to update the links (e.g., when routes change). This reduces unnecessary calls and speeds up interactions.

## Comparative example with and without HATEOAS

### Example Without HATEOAS:

In this case, the client has to **hard-code** the action URLs, like the update or delete links.

#### 1. **API Without HATEOAS** (Static response with only the data):

```python
from flask import Flask, jsonify

app = Flask(__name__)

# Example product
product = {
    "id": 1,
    "name": "Laptop",
    "price": 1200
}

@app.route('/product/1', methods=['GET'])
def get_product():
    return jsonify(product)

if __name__ == "__main__":
    app.run(debug=True)
```

In this case, the response from the API would look like this:

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 1200
}
```

#### 2. **Client Without HATEOAS**:

The client needs to **hard-code** the links manually in the code to perform actions like update or delete.

```javascript
fetch('/product/1')
  .then(response => response.json())
  .then(product => {
    console.log(product);
    
    // Manually define the links for update and delete actions
    const updateLink = '/product/1/update';
    const deleteLink = '/product/1/delete';

    console.log("Update URL:", updateLink);
    console.log("Delete URL:", deleteLink);
  });
```

If the API changes the route (e.g., `/product/1/update` becomes `/product/1/modify`), you will need to manually update every instance of that URL in the client.

---

### Example With HATEOAS:

With HATEOAS, the API will return **action links** in the response, so the client doesn't need to know the action URLs beforehand.

#### 1. **API With HATEOAS** (Dynamic response with action links):

```python
from flask import Flask, jsonify, url_for

app = Flask(__name__)

# Example product
product = {
    "id": 1,
    "name": "Laptop",
    "price": 1200
}

@app.route('/product/1', methods=['GET'])
def get_product():
    # Add HATEOAS links for possible actions
    product_with_links = {
        **product,
        "_links": {
            "self": url_for('get_product', _external=True),
            "update": url_for('update_product', product_id=product['id'], _external=True),
            "delete": url_for('delete_product', product_id=product['id'], _external=True)
        }
    }
    return jsonify(product_with_links)

@app.route('/product/1/update', methods=['POST'])
def update_product():
    # Logic for updating the product
    return jsonify({"message": "Product updated!"})

@app.route('/product/1/delete', methods=['DELETE'])
def delete_product():
    # Logic for deleting the product
    return jsonify({"message": "Product deleted!"})

if __name__ == "__main__":
    app.run(debug=True)
```

In this case, the response from the API would look like this:

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 1200,
  "_links": {
    "self": "http://localhost:5000/product/1",
    "update": "http://localhost:5000/product/1/update",
    "delete": "http://localhost:5000/product/1/delete"
  }
}
```

#### 2. **Client With HATEOAS**:

The client can access the action links directly from the response, without needing to hard-code them.

```javascript
fetch('/product/1')
  .then(response => response.json())
  .then(product => {
    console.log(product);
    
    // The links are provided in the response by the API
    const updateLink = product._links.update;
    const deleteLink = product._links.delete;

    console.log("Update URL:", updateLink);
    console.log("Delete URL:", deleteLink);
  });
```

Now, if the API changes the route (e.g., `/product/1/update` becomes `/product/1/modify`), the client **doesn't need to update** its code, because the API will automatically provide the updated links.

---

### Key Differences:

- **Without HATEOAS**: The links for actions like "update" and "delete" are **hard-coded** in the client, meaning the client needs to update these links whenever the API changes.
- **With HATEOAS**: The API provides **dynamic links** in the response, so the client doesn't need to know or hard-code the action URLs. The client can adapt automatically to API changes.

HATEOAS helps clients to **discover available actions** by providing self-descriptive responses, making your system more flexible, reducing the need for manual updates to client-side code, and optimizing the interaction between the client and the server.

---

### Additional Benefits of HATEOAS:
- **Memory Efficiency**: The client doesn't need to store all possible routes in memory or configuration files. It simply follows the provided links, which saves memory.
- **Faster Execution**: By avoiding the need for clients to repeatedly ask for available actions (thus saving on back-and-forth requests), HATEOAS reduces the load on the server and makes interactions faster and more efficient.


**Author:**

Arc