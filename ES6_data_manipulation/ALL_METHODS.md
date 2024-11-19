- [Set](#set)
  - [Méthodes les plus courantes](#méthodes-les-plus-courantes)
    - [1. Méthode `add()`](#1-méthode-add)
    - [2. Méthode `has()`](#2-méthode-has)
    - [3. Méthode `delete()`](#3-méthode-delete)
  - [Méthodes communes](#méthodes-communes)
    - [1. Méthode `clear()`](#1-méthode-clear)
    - [2. Méthode `forEach()`](#2-méthode-foreach)
  - [Méthodes complexes](#méthodes-complexes)
    - [1. Méthode `size`](#1-méthode-size)
- [Array](#array)
  - [Méthodes les plus courantes](#méthodes-les-plus-courantes-1)
    - [1. Méthode `push()`](#1-méthode-push)
    - [2. Méthode `pop()`](#2-méthode-pop)
    - [3. Méthode `shift()`](#3-méthode-shift)
    - [4. Méthode `unshift()`](#4-méthode-unshift)
  - [Méthodes communes](#méthodes-communes-1)
    - [1. Méthode `forEach()`](#1-méthode-foreach)
    - [2. Méthode `map()`](#2-méthode-map)
    - [3. Méthode `filter()`](#3-méthode-filter)
    - [4. Méthode `reduce()`](#4-méthode-reduce)
  - [Méthodes complexes](#méthodes-complexes-1)
    - [1. Méthode `find()`](#1-méthode-find)
    - [2. Méthode `some()`](#2-méthode-some)
    - [3. Méthode `every()`](#3-méthode-every)


# Set

## Méthodes les plus courantes

### 1. Méthode `add()`
- **But** : Ajoute un élément à l'ensemble.
- **Principe** : Si l'élément est déjà présent, il n'est pas ajouté.

**Exemple avec `add()`**
```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Ne fera rien car 1 est déjà dans le Set
console.log(set); // Set { 1, 2 }
```

**Comment ça marche :**
- `set.add(value)` ajoute l'élément `value` à l'ensemble si cet élément n'existe pas déjà.
- Si l'élément est déjà dans l'ensemble, il n'est pas ajouté, et l'ensemble reste inchangé.

---

### 2. Méthode `has()`
- **But** : Vérifie si un élément est présent dans l'ensemble.
- **Principe** : Retourne `true` si l'élément existe dans l'ensemble, sinon `false`.

**Exemple avec `has()`**
```javascript
const set = new Set([1, 2, 3]);
console.log(set.has(2)); // true
console.log(set.has(4)); // false
```

**Comment ça marche :**
- `set.has(value)` retourne un booléen indiquant si l'élément `value` est présent dans l'ensemble.

---

### 3. Méthode `delete()`
- **But** : Supprime un élément de l'ensemble.
- **Principe** : Retourne `true` si l'élément a été supprimé, sinon `false`.

**Exemple avec `delete()`**
```javascript
const set = new Set([1, 2, 3]);
console.log(set.delete(2)); // true
console.log(set.has(2)); // false
```

**Comment ça marche :**
- `set.delete(value)` supprime l'élément `value` du Set.
- Si l'élément est trouvé et supprimé, il retourne `true`; sinon, `false`.

---

## Méthodes communes
### 1. Méthode `clear()`
- **But** : Supprime tous les éléments de l'ensemble.
- **Principe** : Vide complètement l'ensemble.

**Exemple avec `clear()`**
```javascript
const set = new Set([1, 2, 3]);
set.clear();
console.log(set); // Set {}
```

**Comment ça marche :**
- `set.clear()` vide le Set, supprimant tous les éléments.

---

### 2. Méthode `forEach()`
- **But** : Exécute une fonction pour chaque élément de l'ensemble.
- **Principe** : Utilisé pour itérer sur les éléments du Set.

**Exemple avec `forEach()`**
```javascript
const set = new Set([1, 2, 3]);
set.forEach(element => {
  console.log(element); // 1, 2, 3
});
```

**Comment ça marche :**
- `set.forEach(callback)` applique la fonction `callback` à chaque élément du Set.

---

## Méthodes complexes
### 1. Méthode `size`
- **But** : Retourne le nombre d'éléments dans l'ensemble.
- **Principe** : Propriété qui permet de connaître la taille de l'ensemble.

**Exemple avec `size`**
```javascript
const set = new Set([1, 2, 3]);
console.log(set.size); // 3
```

**Comment ça marche :**
- `set.size` renvoie le nombre d'éléments présents dans l'ensemble.

---

# Array

## Méthodes les plus courantes
### 1. Méthode `push()`
- **But** : Ajoute un ou plusieurs éléments à la fin du tableau.
- **Principe** : Modifie le tableau en ajoutant les éléments spécifiés.

**Exemple avec `push()`**
```javascript
const array = [1, 2];
array.push(3, 4);
console.log(array); // [1, 2, 3, 4]
```

**Comment ça marche :**
- `array.push(element1, element2, ...)` ajoute les éléments à la fin du tableau et retourne la nouvelle longueur du tableau.

---

### 2. Méthode `pop()`
- **But** : Supprime le dernier élément du tableau.
- **Principe** : Modifie le tableau en supprimant son dernier élément.

**Exemple avec `pop()`**
```javascript
const array = [1, 2, 3];
const last = array.pop();
console.log(last); // 3
console.log(array); // [1, 2]
```

**Comment ça marche :**
- `array.pop()` supprime et retourne le dernier élément du tableau.

---

### 3. Méthode `shift()`
- **But** : Supprime le premier élément du tableau.
- **Principe** : Modifie le tableau en supprimant son premier élément.

**Exemple avec `shift()`**
```javascript
const array = [1, 2, 3];
const first = array.shift();
console.log(first); // 1
console.log(array); // [2, 3]
```

**Comment ça marche :**
- `array.shift()` supprime et retourne le premier élément du tableau.

---

### 4. Méthode `unshift()`
- **But** : Ajoute un ou plusieurs éléments au début du tableau.
- **Principe** : Modifie le tableau en ajoutant les éléments au début.

**Exemple avec `unshift()`**
```javascript
const array = [2, 3];
array.unshift(1);
console.log(array); // [1, 2, 3]
```

**Comment ça marche :**
- `array.unshift(element1, element2, ...)` ajoute les éléments au début du tableau et retourne la nouvelle longueur du tableau.

---

## Méthodes communes
### 1. Méthode `forEach()`
- **But** : Exécute une fonction pour chaque élément du tableau.
- **Principe** : Utilisé pour itérer sur les éléments du tableau.

**Exemple avec `forEach()`**
```javascript
const array = [1, 2, 3];
array.forEach(element => {
  console.log(element); // 1, 2, 3
});
```

**Comment ça marche :**
- `array.forEach(callback)` applique la fonction `callback` à chaque élément du tableau.

---

### 2. Méthode `map()`
- **But** : Crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément.
- **Principe** : Retourne un nouveau tableau transformé.

**Exemple avec `map()`**
```javascript
const array = [1, 2, 3];
const doubled = array.map(x => x * 2);
console.log(doubled); // [2, 4, 6]
```

**Comment ça marche :**
- `array.map(callback)` applique la fonction `callback` à chaque élément et retourne un tableau des résultats.

---

### 3. Méthode `filter()`
- **But** : Crée un nouveau tableau avec tous les éléments qui passent un test spécifié.
- **Principe** : Retourne un tableau filtré selon une condition.

**Exemple avec `filter()`**
```javascript
const array = [1, 2, 3, 4, 5];
const evenNumbers = array.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

**Comment ça marche :**
- `array.filter(callback)` retourne un tableau ne contenant que les éléments pour lesquels la fonction `callback` retourne `true`.

---

### 4. Méthode `reduce()`
- **But** : Applique une fonction à un accumulateur et à chaque élément du tableau (de gauche à droite) pour le réduire à une seule valeur.
- **Principe** : Retourne une valeur calculée à partir de l'ensemble des éléments du tableau.

**Exemple avec `reduce()`**
```javascript
const array = [1, 2, 3, 4];
const sum = array.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
```

**Comment ça marche :**
- `array.reduce(callback, initialValue)` accumule les résultats en appliquant la fonction `callback` à chaque élément du tableau.

---

## Méthodes complexes
### 1. Méthode `find()`
- **But** : Retourne le premier élément qui satisfait une condition.
- **Principe** : Si un élément satisfait la condition, il est retourné, sinon retourne `undefined`.

**Exemple avec `find()`**
```javascript
const array = [1, 2, 3, 4];
const found = array.find(x => x > 2);
console.log(found); // 3
```

**Comment ça marche :**
- `array.find(callback)` retourne le premier élément qui passe le test dans `callback`.

---

### 2. Méthode `some()`
- **But** : Vérifie si au moins un élément satisfait une condition.
- **Principe** : Retourne `true` si un élément satisfait la condition, sinon `false`.

**Exemple avec `some()`**
```javascript
const array = [1, 2, 3];
console.log(array.some(x => x > 2)); // true
console.log(array.some(x => x > 4)); // false
```

**Comment ça marche :**
- `array.some(callback)` vérifie si au moins un élément satisfait la condition définie dans `callback`.

---

### 3. Méthode `every()`
- **But** : Vérifie si tous les éléments satisfont une condition.
- **Principe** : Retourne `true` si tous les éléments passent le test, sinon `false`.

**Exemple avec `every()`**
```javascript
const array = [2, 4, 6];
console.log(array.every(x => x % 2 === 0)); // true
```

**Comment ça marche :**
- `array.every(callback)` vérifie si tous les éléments satisfont la condition spécifiée dans `callback`.
