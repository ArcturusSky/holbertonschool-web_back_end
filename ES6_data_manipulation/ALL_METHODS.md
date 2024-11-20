# Data Structures en JavaScript

- [Data Structures en JavaScript](#data-structures-en-javascript)
  - [Arrays](#arrays)
    - [Méthodes Très Faciles](#méthodes-très-faciles)
      - [1. Méthode `push()`](#1-méthode-push)
      - [2. Méthode `pop()`](#2-méthode-pop)
      - [3. Méthode `shift()`](#3-méthode-shift)
      - [4. Méthode `unshift()`](#4-méthode-unshift)
      - [5. Méthode `includes()`](#5-méthode-includes)
      - [6. Méthode `indexOf()`](#6-méthode-indexof)
    - [Méthodes Faciles](#méthodes-faciles)
      - [1. Méthode `join()`](#1-méthode-join)
      - [2. Méthode `slice()`](#2-méthode-slice)
      - [3. Méthode `forEach()`](#3-méthode-foreach)
    - [Méthodes Intermédiaires](#méthodes-intermédiaires)
      - [1. Méthode `map()`](#1-méthode-map)
      - [2. Méthode `filter()`](#2-méthode-filter)
      - [3. Méthode `sort()`](#3-méthode-sort)
    - [Méthodes Avancées](#méthodes-avancées)
      - [1. Méthode `reduce()`](#1-méthode-reduce)
      - [2. Méthode `find()`](#2-méthode-find)
      - [3. Méthode `some()`](#3-méthode-some)
      - [4. Méthode `every()`](#4-méthode-every)
    - [Méthodes Complexes](#méthodes-complexes)
      - [1. Méthode `copyWithin()`](#1-méthode-copywithin)
      - [2. Méthode `findIndex()`](#2-méthode-findindex)
      - [3. Méthode `reverse()`](#3-méthode-reverse)
  - [Sets](#sets)
    - [Méthodes Très Faciles](#méthodes-très-faciles-1)
      - [1. Méthode `add()`](#1-méthode-add)
      - [2. Méthode `has()`](#2-méthode-has)
      - [3. Méthode `delete()`](#3-méthode-delete)
      - [4. Méthode `clear()`](#4-méthode-clear)
      - [5. Méthode `forEach()`](#5-méthode-foreach)
      - [6. Méthode `size`](#6-méthode-size)
  - [Map](#map)
    - [Méthodes Très Faciles](#méthodes-très-faciles-2)
      - [1. Méthode `set()`](#1-méthode-set)
      - [2. Méthode `get()`](#2-méthode-get)
      - [3. Méthode `has()`](#3-méthode-has)
      - [4. Méthode `delete()`](#4-méthode-delete)
    - [Méthodes Faciles](#méthodes-faciles-1)
      - [1. Méthode `clear()`](#1-méthode-clear)
      - [2. Méthode `size()`](#2-méthode-size)
    - [Méthodes Complexes](#méthodes-complexes-1)
      - [1. Méthode `forEach()`](#1-méthode-foreach)
  - [Typed Arrays](#typed-arrays)
    - [Méthodes Très Faciles](#méthodes-très-faciles-3)
      - [1. Méthode `find()`](#1-méthode-find)
    - [Méthodes Faciles](#méthodes-faciles-2)
      - [1. Méthode `copyWithin()`](#1-méthode-copywithin-1)
      - [2. Méthode `subarray()`](#2-méthode-subarray)
    - [Méthodes Complexes](#méthodes-complexes-2)
      - [1. Méthode `set()`](#1-méthode-set-1)
  - [Objects](#objects)
    - [Méthodes Très Faciles](#méthodes-très-faciles-4)
      - [1. Méthode `toString()`](#1-méthode-tostring)
      - [2. Méthode `hasOwnProperty()`](#2-méthode-hasownproperty)
    - [Méthodes Faciles](#méthodes-faciles-3)
      - [1. Méthode `keys()`](#1-méthode-keys)
      - [2. Méthode `values()`](#2-méthode-values)
    - [Méthodes Complexes](#méthodes-complexes-3)
      - [1. Méthode `assign()`](#1-méthode-assign)


## Arrays

### Méthodes Très Faciles

#### 1. Méthode `push()`
- **But** : Ajoute un ou plusieurs éléments à la fin du tableau.
- **Principe** : Modifie le tableau en ajoutant les éléments spécifiés.

**Basic syntax:** 
array.push(element1[, ...[, elementN]])

*Example:*
```javascript
const array = [1, 2];
array.push(3, 4);
console.log(array); // [1, 2, 3, 4]
```

**Explications:**
- Modifie le tableau original
- Retourne la nouvelle longueur du tableau
- Peut ajouter plusieurs éléments à la fois

---

#### 2. Méthode `pop()`
- **But** : Supprime le dernier élément du tableau.
- **Principe** : Modifie le tableau en supprimant son dernier élément.

**Basic syntax:** 
array.pop()

*Example:*
```javascript
const array = [1, 2, 3];
const last = array.pop();
console.log(last); // 3
console.log(array); // [1, 2]
```

**Explications:**
- Retourne l'élément supprimé
- Modifie le tableau original

---

#### 3. Méthode `shift()`
- **But** : Supprime le premier élément du tableau.
- **Principe** : Modifie le tableau en supprimant son premier élément.

**Basic syntax:** 
array.shift()

*Example:*
```javascript
const array = [1, 2, 3];
const first = array.shift();
console.log(first); // 1
console.log(array); // [2, 3]
```

**Explications:**
- Retourne l'élément supprimé
- Modifie le tableau original

---

#### 4. Méthode `unshift()`
- **But** : Ajoute un ou plusieurs éléments au début du tableau.
- **Principe** : Modifie le tableau en ajoutant les éléments au début.

**Basic syntax:** 
array.unshift(element1[, ...[, elementN]])

*Example:*
```javascript
const array = [2, 3];
array.unshift(1);
console.log(array); // [1, 2, 3]
```

**Explications:**
- Modifie le tableau original
- Retourne la nouvelle longueur du tableau

---

#### 5. Méthode `includes()`
- **But** : Vérifie si un élément existe dans le tableau.
- **Principe** : Retourne `true` si l'élément est trouvé, sinon `false`.

**Basic syntax:** 
array.includes(value)

*Example:*
```javascript
let arr = [1, 2, 3];
console.log(arr.includes(2));  // true
console.log(arr.includes(4));  // false
```

**Explications:**
- Vérifie la présence d'un élément spécifique

---

#### 6. Méthode `indexOf()`
- **But** : Retourne l'index du premier élément trouvé dans le tableau.
- **Principe** : Retourne `-1` si l'élément n'est pas trouvé.

**Basic syntax:** 
array.indexOf(value)

*Example:*
```javascript
let arr = [1, 2, 3];
console.log(arr.indexOf(2));  // 1
console.log(arr.indexOf(4));  // -1
```

**Explications:**
- Utile pour trouver la position d'un élément

---

### Méthodes Faciles

#### 1. Méthode `join()`
- **But** : Combine tous les éléments du tableau en une seule chaîne.
- **Principe** : Retourne une chaîne avec les éléments séparés par un délimiteur (par défaut, une virgule).

**Basic syntax:** 
array.join([separator])

*Example:*
```javascript
let arr = [1, 2, 3];
console.log(arr.join('-'));  // '1-2-3'
```

**Explications:**
- Permet de créer une chaîne de caractères à partir d'un tableau

---

#### 2. Méthode `slice()`
- **But** : Extrait une portion du tableau.
- **Principe** : Retourne un nouveau tableau sans modifier l'original.

**Basic syntax:** 
array.slice([begin[, end]])

*Example:*
```javascript
let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3));  // [2, 3]
```

**Explications:**
- Ne modifie pas le tableau d'origine

---

#### 3. Méthode `forEach()`
- **But** : Exécute une fonction pour chaque élément du tableau.
- **Principe** : Utilisé pour itérer sur les éléments du tableau.

**Basic syntax:** 
array.forEach(callback(currentValue[, index[, array]])[, thisArg])

*Example:*
```javascript
const array = [1, 2, 3];
array.forEach(element => {
  console.log(element); // 1, 2, 3
});
```

**Explications:**
- Applique une fonction à chaque élément du tableau

---

### Méthodes Intermédiaires

#### 1. Méthode `map()`
- **But** : Crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément.
- **Principe** : Retourne un nouveau tableau transformé.

**Basic syntax:** 
array.map(callback(currentValue[, index[, array]])[, thisArg])

*Example:*
```javascript
const array = [1, 2, 3];
const doubled = array.map(x => x * 2);
console.log(doubled); // [2, 4, 6]
```

**Explications:**
- Applique une transformation à chaque élément

---

#### 2. Méthode `filter()`
- **But** : Crée un nouveau tableau avec tous les éléments qui passent un test spécifié.
- **Principe** : Retourne un tableau filtré selon une condition.

**Basic syntax:** 
array.filter(callback(element[, index[, array]])[, thisArg])

*Example:*
```javascript
const array = [1, 2, 3, 4, 5];
const evenNumbers = array.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

**Explications:**
- Retourne un tableau ne contenant que les éléments pour lesquels la fonction retourne `true`

---

#### 3. Méthode `sort()`
- **But** : Trie les éléments du tableau.
- **Principe** : Modifie le tableau en place.

**Basic syntax:** 
array.sort([compareFunction])

*Example:*
```javascript
let arr = [3, 1, 2];
arr.sort();  // arr = [1, 2, 3]
```

**Explications:**
- Trie les éléments selon l'ordre lexicographique par défaut

---

### Méthodes Avancées

#### 1. Méthode `reduce()`
- **But** : Applique une fonction à un accumulateur et à chaque élément du tableau (de gauche à droite) pour le réduire à une seule valeur.
- **Principe** : Retourne une valeur calculée à partir de l'ensemble des éléments du tableau.

**Basic syntax:** 
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

*Example:*
```javascript
const array = [1, 2, 3, 4];
const sum = array.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
```

**Explications:**
- Utile pour accumuler des valeurs

---

#### 2. Méthode `find()`
- **But** : Retourne le premier élément qui satisfait une condition.
- **Principe** : Si un élément satisfait la condition, il est retourné, sinon retourne `undefined`.

**Basic syntax:** 
array.find(callback(element[, index[, array]])[, thisArg])

*Example:*
```javascript
const array = [1, 2, 3, 4];
const found = array.find(x => x > 2);
console.log(found); // 3
```

**Explications:**
- Recherche un élément correspondant à la condition

---

#### 3. Méthode `some()`
- **But** : Vérifie si au moins un élément satisfait une condition.
- **Principe** : Retourne `true` si un élément satisfait la condition, sinon `false`.

**Basic syntax:** 
array.some(callback(element[, index[, array]])[, thisArg])

*Example:*
```javascript
const array = [1, 2, 3];
console.log(array.some(x => x > 2)); // true
console.log(array.some(x => x > 4)); // false
```

**Explications:**
- Utile pour vérifier la présence d'au moins un élément correspondant

---

#### 4. Méthode `every()`
- **But** : Vérifie si tous les éléments satisfont une condition.
- **Principe** : Retourne `true` si tous les éléments passent le test, sinon `false`.

**Basic syntax:** 
array.every(callback(element[, index[, array]])[, thisArg])

*Example:*
```javascript
const array = [2, 4, 6];
console.log(array.every(x => x % 2 === 0)); // true
```

**Explications:**
- Utile pour vérifier que tous les éléments correspondent à une condition

---

### Méthodes Complexes

#### 1. Méthode `copyWithin()`
- **But** : Copie une section du tableau dans une autre position.
- **Principe** : Modifie le tableau en place.

**Basic syntax:** 
array.copyWithin(target, start[, end])

*Example:*
```javascript
let arr = [1, 2, 3, 4];
arr.copyWithin(0, 2);  // arr = [3, 4, 3, 4]
```

**Explications:**
- Permet de copier des éléments à l'intérieur du même tableau

---

#### 2. Méthode `findIndex()`
- **But** : Retourne l'index du premier élément qui satisfait une condition.
- **Principe** : Retourne `-1` si aucun élément ne correspond.

**Basic syntax:** 
array.findIndex(callback(element[, index[, array]])[, thisArg])

*Example:*
```javascript
let arr = [1, 2, 3];
console.log(arr.findIndex((el) => el > 1));  // Retourne 1
```

**Explications:**
- Utile pour trouver la position d'un élément qui correspond à une condition

---

#### 3. Méthode `reverse()`
- **But** : Inverse l'ordre des éléments du tableau.
- **Principe** : Modifie le tableau en place.

**Basic syntax:** 
array.reverse()

*Example:*
```javascript
let arr = [1, 2, 3];
arr.reverse();  // arr = [3, 2, 1]
```

**Explications:**
- Change l'ordre des éléments du tableau

---

## Sets

### Méthodes Très Faciles

#### 1. Méthode `add()`
- **But** : Ajoute un élément à l'ensemble.
- **Principe** : Si l'élément est déjà présent, il n'est pas ajouté.

**Basic syntax:** 
set.add(value)

*Example:*
```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Ne fera rien car 1 est déjà dans le Set
console.log(set); // Set { 1, 2 }
```

**Explications:**
- `set.add(value)` ajoute l'élément `value` à l'ensemble si cet élément n'existe pas déjà.

---

#### 2. Méthode `has()`
- **But** : Vérifie si un élément est présent dans l'ensemble.
- **Principe** : Retourne `true` si l'élément existe dans l'ensemble, sinon `false`.

**Basic syntax:** 
set.has(value)

*Example:*
```javascript
const set = new Set([1, 2, 3]);
console.log(set.has(2)); // true
console.log(set.has(4)); // false
```

**Explications:**
- `set.has(value)` retourne un booléen indiquant si l'élément `value` est présent dans l'ensemble.

---

#### 3. Méthode `delete()`
- **But** : Supprime un élément de l'ensemble.
- **Principe** : Retourne `true` si l'élément a été supprimé, sinon `false`.

**Basic syntax:** 
set.delete(value)

*Example:*
```javascript
const set = new Set([1, 2, 3]);
console.log(set.delete(2)); // true
console.log(set.has(2)); // false
```

**Explications:**
- `set.delete(value)` supprime l'élément `value` du Set.

---

#### 4. Méthode `clear()`
- **But** : Supprime tous les éléments de l'ensemble.
- **Principe** : Vide complètement l'ensemble.

**Basic syntax:** 
set.clear()

*Example:*
```javascript
const set = new Set([1, 2, 3]);
set.clear();
console.log(set); // Set {}
```

**Explications:**
- `set.clear()` vide le Set, supprimant tous les éléments.

---

#### 5. Méthode `forEach()`
- **But** : Exécute une fonction pour chaque élément de l'ensemble.
- **Principe** : Utilisé pour itérer sur les éléments du Set.

**Basic syntax:** 
set.forEach(callback(value[, valueAgain[, set]])

*Example:*
```javascript
const set = new Set([1, 2, 3]);
set.forEach(element => {
  console.log(element); // 1, 2, 3
});
```

**Explications:**
- `set.forEach(callback)` applique la fonction `callback` à chaque élément du Set.

---

#### 6. Méthode `size`
- **But** : Retourne le nombre d'éléments dans l'ensemble.
- **Principe** : Propriété qui permet de connaître la taille de l'ensemble.

**Basic syntax:** 
set.size

*Example:*
```javascript
const set = new Set([1, 2, 3]);
console.log(set.size); // 3
```

**Explications:**
- `set.size` renvoie le nombre d'éléments présents dans l'ensemble.

---

## Map

### Méthodes Très Faciles

#### 1. Méthode `set()`
- **But** : Ajoute ou met à jour une paire clé-valeur dans la Map.
- **Principe** : Retourne la Map modifiée.

**Basic syntax:** 
map.set(key, value)

*Example:*
```javascript
let map = new Map();
map.set('a', 1);  // map = Map { 'a' => 1 }
```

**Explications:**
- `map.set(key, value)` crée ou met à jour l'entrée associée à la clé.

---

#### 2. Méthode `get()`
- **But** : Retourne la valeur associée à une clé.
- **Principe** : Retourne `undefined` si la clé n'existe pas.

**Basic syntax:** 
map.get(key)

*Example:*
```javascript
let map = new Map([['a', 1]]);
console.log(map.get('a'));  // Retourne 1
```

**Explications:**
- `map.get(key)` récupère la valeur pour la clé spécifiée.

---

#### 3. Méthode `has()`
- **But** : Vérifie si une clé existe dans la Map.
- **Principe** : Retourne `true` ou `false`.

**Basic syntax:** 
map.has(key)

*Example:*
```javascript
let map = new Map([['a', 1]]);
console.log(map.has('a'));  // Retourne true
```

**Explications:**
- `map.has(key)` vérifie la présence d'une clé dans la Map.

---

#### 4. Méthode `delete()`
- **But** : Supprime une paire clé-valeur de la Map.
- **Principe** : Retourne `true` si la clé a été supprimée, sinon `false`.

**Basic syntax:** 
map.delete(key)

*Example:*
```javascript
let map = new Map([['a', 1]]);
console.log(map.delete('a'));  // true
console.log(map.has('a'));  // false
```

**Explications:**
- `map.delete(key)` supprime l'entrée associée à la clé.

---

### Méthodes Faciles

#### 1. Méthode `clear()`
- **But** : Supprime toutes les paires clé-valeur dans la Map.
- **Principe** : Modifie la Map en place.

**Basic syntax:** 
map.clear()

*Example:*
```javascript
let map = new Map([['a', 1], ['b', 2]]);
map.clear();  // map = Map {}
```

**Explications:**
- `map.clear()` vide la Map, supprimant toutes les entrées.

---

#### 2. Méthode `size()`
- **But** : Retourne le nombre d'éléments dans la Map.
- **Principe** : Retourne un entier représentant la taille de la Map.

**Basic syntax:** 
map.size

*Example:*
```javascript
let map = new Map([['a', 1], ['b', 2]]);
console.log(map.size);  // Retourne 2
```

**Explications:**
- `map.size` renvoie le nombre d'éléments présents dans la Map.

---

### Méthodes Complexes

#### 1. Méthode `forEach()`
- **But** : Exécute une fonction pour chaque élément de la Map.
- **Principe** : Ne retourne rien, sert uniquement à itérer sur les éléments.

**Basic syntax:** 
map.forEach(callback(value, key[, map])

*Example:*
```javascript
let map = new Map([['a', 1], ['b', 2]]);
map.forEach((value, key) => console.log(key, value));  
// Affiche 'a 1' et 'b 2'
```

**Explications:**
- `map.forEach(callback)` applique la fonction à chaque paire clé-valeur de la Map.

---

## Typed Arrays

### Méthodes Très Faciles

#### 1. Méthode `find()`
- **But** : Retourne le premier élément du tableau typé qui satisfait une condition donnée.
- **Principe** : Retourne l'élément trouvé ou `undefined` si aucun élément ne correspond.

**Basic syntax:** 
typedArray.find(callback(element[, index[, array]])[, thisArg])

*Example:*
```javascript
let arr = new Uint8Array([1, 2, 3]);
console.log(arr.find((el) => el > 1));  // Retourne 2
```

**Explications:**
- Recherche d'un élément correspondant à une condition

---

### Méthodes Faciles

#### 1. Méthode `copyWithin()`
- **But** : Copie une section du tableau dans une autre position.
- **Principe** : Modifie le tableau en place.

**Basic syntax:** 
typedArray.copyWithin(target, start[, end])

*Example:*
```javascript
let arr = new Uint8Array([1, 2, 3, 4]);
arr.copyWithin(0, 2);  // arr = [3, 4, 3, 4]
```

**Explications:**
- Permet de copier des éléments à l'intérieur du même tableau typé

---

#### 2. Méthode `subarray()`
- **But** : Retourne une section du tableau sous forme d'un nouveau tableau.
- **Principe** : Ne modifie pas le tableau d'origine.

**Basic syntax:** 
typedArray.subarray(begin[, end])

*Example:*
```javascript
let arr = new Uint8Array([1, 2, 3, 4]);
let sub = arr.subarray(1, 3);  // sub = [2, 3]
```

**Explications:**
- Utilisé pour obtenir une vue d'une portion du tableau

---

### Méthodes Complexes

#### 1. Méthode `set()`
- **But** : Copie les éléments d'un autre tableau typé dans le tableau actuel.
- **Principe** : Modifie le tableau en place.

**Basic syntax:** 
typedArray.set(array[, offset])

*Example:*
```javascript
let arr1 = new Uint8Array([1, 2, 3]);
let arr2 = new Uint8Array([4, 5]);
arr1.set(arr2, 1);  // arr1 = [1, 4, 5]
```

**Explications:**
- Copie les éléments d'un autre tableau typé à partir d'un certain offset

---

## Objects

### Méthodes Très Faciles

#### 1. Méthode `toString()`
- **But** : Retourne une chaîne représentant l'objet.
- **Principe** : Renvoie une chaîne décrivant l'objet (par défaut, le nom de son constructeur).

**Basic syntax:** 
object.toString()

*Example:*
```javascript
let obj = { name: 'Alice', age: 25 };
console.log(obj.toString());  // Retourne '[object Object]'
```

**Explications:**
- Utilisé pour obtenir une représentation textuelle de l'objet

---

#### 2. Méthode `hasOwnProperty()`
- **But** : Vérifie si un objet possède une propriété spécifique.
- **Principe** : Retourne `true` si l'objet possède la propriété, sinon `false`.

**Basic syntax:** 
object.hasOwnProperty(property)

*Example:*
```javascript
let obj = { name: 'Alice' };
console.log(obj.hasOwnProperty('name'));  // true
```

**Explications:**
- Utile pour vérifier la propriété d'un objet sans inclure les propriétés héritées

---

### Méthodes Faciles

#### 1. Méthode `keys()`
- **But** : Retourne un tableau contenant toutes les clés de l'objet.
- **Principe** : Retourne un objet `Array` des clés.

**Basic syntax:** 
Object.keys(object)

*Example:*
```javascript
let obj = { name: 'Alice', age: 25 };
console.log(Object.keys(obj));  // ['name', 'age']
```

**Explications:**
- Utile pour obtenir toutes les clés d'un objet

---

#### 2. Méthode `values()`
- **But** : Retourne un tableau contenant toutes les valeurs de l'objet.
- **Principe** : Retourne un objet `Array` des valeurs.

**Basic syntax:** 
Object.values(object)

*Example:*
```javascript
let obj = { name: 'Alice', age: 25 };
console.log(Object.values(obj));  // ['Alice', 25]
```

**Explications:**
- Utile pour obtenir toutes les valeurs d'un objet

---

### Méthodes Complexes

#### 1. Méthode `assign()`
- **But** : Copie les valeurs des propriétés d'un ou plusieurs objets dans un autre objet.
- **Principe** : Modifie l'objet de destination et retourne cet objet.

**Basic syntax:** 
Object.assign(target, ...sources)

*Example:*
```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };
Object.assign(obj1, obj2);  // obj1 = { a: 1, b: 2 }
```

**Explications:**
- Combine les propriétés de plusieurs objets dans un seul objet