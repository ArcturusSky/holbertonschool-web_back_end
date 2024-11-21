# Mastering Promises in JavaScript (Cours en français en dessous)

Learn how to handle asynchronous operations using promises, making your code cleaner, more readable, and easier to maintain.

---

- [Mastering Promises in JavaScript (Cours en français en dessous)](#mastering-promises-in-javascript-cours-en-français-en-dessous)
  - [Promises](#promises)
  - [`.then`, `.catch`, and `.finally`](#then-catch-and-finally)
  - [`Promise.all`](#promiseall)
  - [`await` Operator](#await-operator)
  - [`async` Functions](#async-functions)
- [Maîtriser les Promesses en JavaScript](#maîtriser-les-promesses-en-javascript)
  - [Les Promesses](#les-promesses)
  - [`.then`, `.catch`, et `.finally`](#then-catch-et-finally)
  - [`Promise.all`](#promiseall-1)
  - [L’opérateur `await`](#lopérateur-await)
  - [Les fonctions `async`](#les-fonctions-async)


## Promises

**Definition:**  
A promise is a JavaScript object that represents the eventual result (or failure) of an asynchronous operation. It allows you to handle success (`resolve`) or failure (`reject`) without blocking the execution of the rest of your code.

**Basic syntax:**

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Change this to test resolve/reject

  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});
```

**Breakdown of the syntax:**  
- `new Promise` creates a new promise.  
- The promise constructor takes a function with two parameters: `resolve` (success) and `reject` (failure).  
- Inside the function, you perform the asynchronous task and call either `resolve` or `reject`.

**Concrete and simple example:**

```javascript
const fetchPizza = () => {
  return new Promise((resolve, reject) => {
    const pizzaReady = true;

    if (pizzaReady) {
      resolve("Here is your pizza!");
    } else {
      reject("Sorry, we ran out of pizza.");
    }
  });
};
```

**Breakdown of the example:**  
- `fetchPizza` is a function that returns a promise.  
- If the pizza is ready, the promise resolves with a success message.  
- If not, it rejects with an error message.

---

## `.then`, `.catch`, and `.finally`

**Definition:**  
These are methods used to handle the outcome of a promise:  
- `.then()` handles a resolved promise.  
- `.catch()` handles a rejected promise.  
- `.finally()` runs code after the promise is settled (resolved or rejected).

**Basic syntax:**

```javascript
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation complete.");
  });
```

**Breakdown of the syntax:**  
- `then()` is used to process the result of a successful promise.  
- `catch()` is used to process errors.  
- `finally()` runs regardless of the outcome.

**Concrete and simple example:**

```javascript
fetchPizza()
  .then((message) => console.log(message)) // Logs: "Here is your pizza!"
  .catch((error) => console.error(error)) // Logs if there's an error.
  .finally(() => console.log("Thank you for ordering!"));
```

**Breakdown of the example:**  
- If the promise resolves, the success message is logged.  
- If it rejects, the error is logged.  
- The `finally` block always logs "Thank you for ordering!" regardless of success or failure.

---

## `Promise.all`

**Definition:**  
`Promise.all` waits for all promises in an array to resolve. If any promise rejects, the entire operation fails.

**Basic syntax:**

```javascript
Promise.all([promise1, promise2, promise3])
  .then((results) => console.log("All resolved:", results))
  .catch((error) => console.error("One failed:", error));
```

**Breakdown of the syntax:**  
- Pass an array of promises to `Promise.all`.  
- If all promises resolve, their results are returned in an array.  
- If any promise rejects, the `catch` block handles the error.

**Concrete and simple example:**

```javascript
const pizzaOrder = Promise.resolve("Pizza is ready!");
const drinkOrder = Promise.resolve("Drink is ready!");

Promise.all([pizzaOrder, drinkOrder])
  .then((results) => console.log("All orders completed:", results))
  .catch((error) => console.error("Order failed:", error));
```

**Breakdown of the example:**  
- Both `pizzaOrder` and `drinkOrder` are resolved promises.  
- `Promise.all` waits for both to resolve and logs the results.

---

## `await` Operator

**Definition:**  
`await` pauses the execution of a function until a promise resolves, allowing you to write asynchronous code that looks synchronous.

**Basic syntax:**

```javascript
const result = await somePromise;
console.log(result);
```

**Breakdown of the syntax:**  
- Use `await` to wait for a promise to resolve before proceeding.  
- This can only be used inside an `async` function.

**Concrete and simple example:**

```javascript
const fetchPizza = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Pizza is ready!"), 2000));
};

const getPizza = async () => {
  console.log("Ordering pizza...");
  const message = await fetchPizza();
  console.log(message);
};

getPizza();
```

**Breakdown of the example:**  
- `fetchPizza` simulates a delayed promise.  
- Inside `getPizza`, the function waits for `fetchPizza` to resolve before logging the message.

---

## `async` Functions

**Definition:**  
An `async` function always returns a promise and allows the use of `await` to handle asynchronous code.

**Basic syntax:**

```javascript
async function functionName() {
  const result = await somePromise;
  return result;
}
```

**Breakdown of the syntax:**  
- The `async` keyword makes a function return a promise.  
- Inside the function, `await` pauses execution until the promise resolves.

**Concrete and simple example:**

```javascript
const fetchPizza = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Pizza is ready!"), 2000));
};

const orderPizza = async () => {
  try {
    const message = await fetchPizza();
    console.log(message);
  } catch (error) {
    console.error("Error ordering pizza:", error);
  }
};

orderPizza();
```

**Breakdown of the example:**  
- `orderPizza` is an `async` function that uses `await` to handle the result of `fetchPizza`.  
- The `try/catch` block ensures errors are properly handled.

---

# Maîtriser les Promesses en JavaScript

Apprenez à gérer des opérations asynchrones avec les promesses pour écrire un code plus propre, lisible et facile à maintenir.

---

## Les Promesses

**Définition :**  
Une promesse est un objet JavaScript qui représente le résultat (succès ou échec) d'une opération asynchrone. Elle permet de gérer ces résultats sans bloquer le reste du code.

**Syntaxe de base :**

```javascript
const maPromesse = new Promise((resolve, reject) => {
  const succes = true; // Modifiez pour tester resolve/reject

  if (succes) {
    resolve("L'opération a réussi !");
  } else {
    reject("L'opération a échoué.");
  }
});
```

**Explication de la syntaxe :**  
- `new Promise` crée une nouvelle promesse.  
- La fonction de la promesse reçoit deux paramètres : `resolve` (succès) et `reject` (échec).  
- Vous appelez `resolve` ou `reject` en fonction du résultat de l'opération.

**Exemple concret et simple :**

```javascript
const commanderPizza = () => {
  return new Promise((resolve, reject) => {
    const pizzaDisponible = true;

    if (pizzaDisponible) {
      resolve("Voici votre pizza !");
    } else {
      reject("Désolé, plus de pizza.");
    }
  });
};
```

**Explication de l'exemple :**  
- `commanderPizza` est une fonction qui retourne une promesse.  
- Si la pizza est disponible, la promesse est résolue avec un message de succès.  
- Sinon, elle est rejetée avec un message d'erreur.

---

## `.then`, `.catch`, et `.finally`

**Définition :**  
Ces méthodes permettent de gérer le résultat d'une promesse :  
- `.then()` : traite une promesse résolue.  
- `.catch()` : traite une promesse rejetée.  
- `.finally()` : exécute du code après la résolution ou le rejet.

**Syntaxe de base :**

```javascript
maPromesse
  .then((resultat) => {
    console.log("Succès :", resultat);
  })
  .catch((erreur) => {
    console.error("Erreur :", erreur);
  })
  .finally(() => {
    console.log("Opération terminée.");
  });
```

**Explication de la syntaxe :**  
- `then()` exécute une fonction avec le résultat de la promesse.  
- `catch()` exécute une fonction en cas d'échec.  
- `finally()` exécute toujours du code, qu'il y ait succès ou échec.

**Exemple concret et simple :**

```javascript
commanderPizza()
  .then((message) => console.log(message)) // Affiche : "Voici votre pizza !"
  .catch((erreur) => console.error(erreur)) // Si erreur, affiche le message d'erreur.
  .finally(() => console.log("Merci pour votre commande."));
```

**Explication de l'exemple :**  
- Si la promesse est résolue, le message de succès est affiché.  
- Si elle est rejetée, le message d'erreur est affiché.  
- `finally` affiche toujours "Merci pour votre commande."

---

## `Promise.all`

**Définition :**  
`Promise.all` attend que toutes les promesses dans un tableau soient résolues. Si une promesse échoue, tout échoue.

**Syntaxe de base :**

```javascript
Promise.all([promesse1, promesse2, promesse3])
  .then((resultats) => console.log("Toutes réussies :", resultats))
  .catch((erreur) => console.error("Une a échoué :", erreur));
```

**Explication de la syntaxe :**  
- `Promise.all` prend un tableau de promesses.  
- Si toutes réussissent, leurs résultats sont renvoyés sous forme de tableau.  
- Si une échoue, le `catch` traite l'erreur.

**Exemple concret et simple :**

```javascript
const pizza = Promise.resolve("Pizza prête !");
const boisson = Promise.resolve("Boisson prête !");

Promise.all([pizza, boisson])
  .then((resultats) => console.log("Commandes terminées :", resultats))
  .catch((erreur) => console.error("Une commande a échoué :", erreur));
```

**Explication de l'exemple :**  
- Les promesses `pizza` et `boisson` sont résolues.  
- `Promise.all` retourne un tableau avec les deux résultats.

---

## L’opérateur `await`

**Définition :**  
`await` stoppe temporairement l’exécution d’une fonction jusqu’à ce qu’une promesse soit résolue, rendant le code plus simple et lisible.

**Syntaxe de base :**

```javascript
const resultat = await unePromesse;
console.log(resultat);
```

**Explication de la syntaxe :**  
- Utilisez `await` pour attendre qu'une promesse soit résolue avant de continuer.  
- `await` ne peut être utilisé qu’à l’intérieur d’une fonction `async`.

**Exemple concret et simple :**

```javascript
const attendrePizza = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Pizza prête !"), 2000));
};

const commander = async () => {
  console.log("Commande en cours...");
  const message = await attendrePizza();
  console.log(message);
};

commander();
```

**Explication de l'exemple :**  
- `attendrePizza` retourne une promesse qui se résout après 2 secondes.  
- La fonction `commander` attend cette promesse avant d'afficher le message.

---

## Les fonctions `async`

**Définition :**  
Une fonction `async` retourne toujours une promesse et permet d’utiliser `await` pour gérer les opérations asynchrones.

**Syntaxe de base :**

```javascript
async function nomDeLaFonction() {
  const resultat = await unePromesse;
  return resultat;
}
```

**Explication de la syntaxe :**  
- Le mot-clé `async` fait qu'une fonction retourne une promesse.  
- À l’intérieur, vous pouvez utiliser `await` pour attendre des promesses.

**Exemple concret et simple :**

```javascript
const attendrePizza = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Pizza prête !"), 2000));
};

const commander = async () => {
  try {
    const message = await attendrePizza();
    console.log(message);
  } catch (erreur) {
    console.error("Erreur lors de la commande :", erreur);
  }
};

commander();
```

**Explication de l'exemple :**  
- `commander` est une fonction `async` qui attend la résolution de `attendrePizza`.  
- Le bloc `try/catch` permet de gérer les erreurs.

---