
- [Arrays](#arrays)
  - [Méthodes très courantes](#méthodes-très-courantes)
    - [1. Méthode `concat()`](#1-méthode-concat)
    - [2. Méthode `includes()`](#2-méthode-includes)
    - [3. Méthode `indexOf()`](#3-méthode-indexof)
    - [4. Méthode `join()`](#4-méthode-join)
    - [5. Méthode `reverse()`](#5-méthode-reverse)
  - [Méthodes simples](#méthodes-simples)
    - [1. Méthode `fill()`](#1-méthode-fill)
    - [2. Méthode `find()`](#2-méthode-find)
    - [3. Méthode `slice()`](#3-méthode-slice)
  - [Méthodes complexes/avancées](#méthodes-complexesavancées)
    - [1. Méthode `copyWithin()`](#1-méthode-copywithin)
    - [2. Méthode `findIndex()`](#2-méthode-findindex)
    - [3. Méthode `sort()`](#3-méthode-sort)
- [Map](#map)
  - [Méthodes très courantes](#méthodes-très-courantes-1)
    - [1. Méthode `set()`](#1-méthode-set)
    - [2. Méthode `get()`](#2-méthode-get)
    - [3. Méthode `has()`](#3-méthode-has)
    - [4. Méthode `delete()`](#4-méthode-delete)
  - [Méthodes simples](#méthodes-simples-1)
    - [1. Méthode `clear()`](#1-méthode-clear)
    - [2. Méthode `size()`](#2-méthode-size)
  - [Méthodes complexes/avancées](#méthodes-complexesavancées-1)
    - [1. Méthode `forEach()`](#1-méthode-foreach)
- [Typed Arrays](#typed-arrays)
  - [Méthodes très courantes](#méthodes-très-courantes-2)
    - [1. Méthode `find()`](#1-méthode-find)
  - [Méthodes simples](#méthodes-simples-2)
    - [1. Méthode `copyWithin()`](#1-méthode-copywithin-1)
    - [2. Méthode `subarray()`](#2-méthode-subarray)
  - [Méthodes complexes/avancées](#méthodes-complexesavancées-2)
    - [1. Méthode `set()`](#1-méthode-set-1)
- [Objects](#objects)
  - [Méthodes très courantes](#méthodes-très-courantes-3)
    - [1. Méthode `toString()`](#1-méthode-tostring)
    - [2. Méthode `hasOwnProperty()`](#2-méthode-hasownproperty)
  - [Méthodes simples](#méthodes-simples-3)
    - [1. Méthode `keys()`](#1-méthode-keys)
    - [2. Méthode `values()`](#2-méthode-values)
  - [Méthodes complexes/avancées](#méthodes-complexesavancées-3)
    - [1. Méthode `assign()`](#1-méthode-assign)


# Arrays

## Méthodes très courantes

### 1. Méthode `concat()`
   - **But** : Combine deux ou plusieurs tableaux.
   - **Principe** : Retourne un nouveau tableau contenant les éléments combinés.

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);  // result = [1, 2, 3, 4]
```

### 2. Méthode `includes()`
   - **But** : Vérifie si un élément existe dans le tableau.
   - **Principe** : Retourne `true` si l'élément est trouvé, sinon `false`.

```javascript
let arr = [1, 2, 3];
arr.includes(2);  // Retourne true
```

### 3. Méthode `indexOf()`
   - **But** : Retourne l'index du premier élément trouvé dans le tableau.
   - **Principe** : Retourne `-1` si l'élément n'est pas trouvé.

```javascript
let arr = [1, 2, 3];
arr.indexOf(2);  // Retourne 1
```

### 4. Méthode `join()`
   - **But** : Combine tous les éléments du tableau en une seule chaîne.
   - **Principe** : Retourne une chaîne avec les éléments séparés par un délimiteur (par défaut une virgule).

```javascript
let arr = [1, 2, 3];
arr.join('-');  // Retourne '1-2-3'
```

### 5. Méthode `reverse()`
   - **But** : Inverse l'ordre des éléments du tableau.
   - **Principe** : Modifie le tableau en place.

```javascript
let arr = [1, 2, 3];
arr.reverse();  // arr = [3, 2, 1]
```

## Méthodes simples

### 1. Méthode `fill()`
   - **But** : Remplir une portion du tableau avec une valeur donnée.
   - **Principe** : Modifie le tableau en place.

```javascript
let arr = [1, 2, 3];
arr.fill(0, 1, 3);  // arr = [1, 0, 0]
```

### 2. Méthode `find()`
   - **But** : Retourne le premier élément du tableau qui satisfait une condition.
   - **Principe** : Retourne l'élément trouvé ou `undefined` si aucune correspondance n'est trouvée.

```javascript
let arr = [1, 2, 3];
arr.find((el) => el > 1);  // Retourne 2
```

### 3. Méthode `slice()`
   - **But** : Extrait une portion du tableau.
   - **Principe** : Retourne un nouveau tableau sans modifier l'original.

```javascript
let arr = [1, 2, 3, 4];
arr.slice(1, 3);  // Retourne [2, 3]
```

## Méthodes complexes/avancées

### 1. Méthode `copyWithin()`
   - **But** : Copie une section du tableau dans une autre position.
   - **Principe** : Modifie le tableau en place.

```javascript
let arr = [1, 2, 3, 4];
arr.copyWithin(0, 2);  // arr = [3, 4, 3, 4]
```

### 2. Méthode `findIndex()`
   - **But** : Retourne l'index du premier élément qui satisfait une condition.
   - **Principe** : Retourne `-1` si aucun élément ne correspond.

```javascript
let arr = [1, 2, 3];
arr.findIndex((el) => el > 1);  // Retourne 1
```

### 3. Méthode `sort()`
   - **But** : Trie les éléments du tableau.
   - **Principe** : Modifie le tableau en place.

```javascript
let arr = [3, 1, 2];
arr.sort();  // arr = [1, 2, 3]
```

---

# Map

## Méthodes très courantes

### 1. Méthode `set()`
   - **But** : Ajoute ou met à jour une paire clé-valeur dans la Map.
   - **Principe** : Retourne la Map modifiée.

```javascript
let map = new Map();
map.set('a', 1);  // map = Map { 'a' => 1 }
```

### 2. Méthode `get()`
   - **But** : Retourne la valeur associée à une clé.
   - **Principe** : Retourne `undefined` si la clé n'existe pas.

```javascript
let map = new Map([['a', 1]]);
map.get('a');  // Retourne 1
```

### 3. Méthode `has()`
   - **But** : Vérifie si une clé existe dans la Map.
   - **Principe** : Retourne `true` ou `false`.

```javascript
let map = new Map([['a', 1]]);
map.has('a');  // Retourne true
```

### 4. Méthode `delete()`
   - **But** : Supprime une paire clé-valeur de la Map.
   - **Principe** : Retourne `true` si la clé a été supprimée, sinon `false`.

```javascript
let map = new Map([['a', 1]]);
map.delete('a');  // map = Map {}, retourne true
```

## Méthodes simples

### 1. Méthode `clear()`
   - **But** : Supprime toutes les paires clé-valeur dans la Map.
   - **Principe** : Modifie la Map en place.

```javascript
let map = new Map([['a', 1], ['b', 2]]);
map.clear();  // map = Map {}
```

### 2. Méthode `size()`
   - **But** : Retourne le nombre d'éléments dans la Map.
   - **Principe** : Retourne un entier représentant la taille de la Map.

```javascript
let map = new Map([['a', 1], ['b', 2]]);
map.size;  // Retourne 2
```

## Méthodes complexes/avancées

### 1. Méthode `forEach()`
   - **But** : Exécute une fonction pour chaque élément de la Map.
   - **Principe** : Ne retourne rien, sert uniquement à itérer sur les éléments.

```javascript
let map = new Map([['a', 1], ['b', 2]]);
map.forEach((value, key) => console.log(key, value));  
// Affiche 'a 1' et 'b 2'
```

---

# Typed Arrays

## Méthodes très courantes

### 1. Méthode `find()`
   - **But** : Retourne le premier élément du tableau typé qui satisfait une condition donnée.
   - **Principe** : Retourne l'élément trouvé ou `undefined` si aucun élément ne correspond.

```javascript
let arr = new Uint8Array([1, 2, 3]);
arr.find((el) => el > 1);  // Retourne 2
```

## Méthodes simples

### 1. Méthode `copyWithin()`
   - **But** : Copie une section du tableau dans une autre position.
   - **Principe** : Modifie le tableau en place.

```javascript
let arr = new Uint8Array([1, 2, 3, 4]);
arr.copyWithin(0, 2);  // arr = [3, 4, 3, 4]
```

### 2. Méthode `subarray()`
   - **But** : Retourne une section du tableau sous forme d'un nouveau tableau.
   - **Principe** : Ne modifie pas le tableau d'origine.

```javascript
let arr = new Uint8Array([1, 2, 3, 4]);
let sub = arr.subarray(1, 3);  // sub = [2, 3]
```

## Méthodes complexes/avancées

### 1. Méthode `set()`
   - **But** : Copie les éléments d'un autre tableau typé dans le tableau actuel.
   - **Principe** : Modifie le tableau en place.

```javascript
let arr1 = new Uint8Array([1, 2, 3]);
let arr2 = new Uint8Array([4, 5]);
arr1.set(arr2, 1);  // arr1 = [1, 4, 5]
```

---

# Objects

## Méthodes très courantes

### 1. Méthode `toString()`
   - **But** : Retourne une chaîne représentant l'objet.
   - **Principe** : Renvoie une chaîne décrivant l'objet (par défaut, le nom de son constructeur).

```javascript
let obj = { name: 'Alice', age: 25 };
obj.toString();  // Retourne '[object Object]'
```

### 2. Méthode `hasOwnProperty()`
   - **But** : Vérifie si un objet possède une propriété spécifique.
   - **Principe** : Retourne `true` si l'objet possède la propriété, sinon `false`.

```javascript
let obj = { name: 'Alice' };
obj.hasOwnProperty('name');  // Retourne true
```

---

## Méthodes simples

### 1. Méthode `keys()`
   - **But** : Retourne un tableau contenant toutes les clés de l'objet.
   - **Principe** : Retourne un objet `Array` des clés.

```javascript
let obj = { name: 'Alice', age: 25 };
Object.keys(obj);  // Retourne ['name', 'age']
```

### 2. Méthode `values()`
   - **But** : Retourne un tableau contenant toutes les valeurs de l'objet.
   - **Principe** : Retourne un objet `Array` des valeurs.

```javascript
let obj = { name: 'Alice', age: 25 };
Object.values(obj);  // Retourne ['Alice', 25]
```

---

## Méthodes complexes/avancées

### 1. Méthode `assign()`
   - **But** : Copie les valeurs des propriétés d'un ou plusieurs objets dans un autre objet.
   - **Principe** : Modifie l'objet de destination et retourne cet objet.

```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };
Object.assign(obj1, obj2);  // obj1 = { a: 1, b: 2 }
```
