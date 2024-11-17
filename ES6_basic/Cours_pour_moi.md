# Concepts nécessaires par tâches (pas forcément tout)

- [Concepts nécessaires par tâches (pas forcément tout)](#concepts-nécessaires-par-tâches-pas-forcément-tout)
  - [Task 1 : Concept à comprendre : Block Scope et `var` vs let/const](#task-1--concept-à-comprendre--block-scope-et-var-vs-letconst)
    - [1. Problème avec `var`](#1-problème-avec-var)
    - [2. Solution avec `let` et `const`](#2-solution-avec-let-et-const)
    - [3. Appliquer le concept au problème](#3-appliquer-le-concept-au-problème)
      - [Avec `var` (problème) :](#avec-var-problème-)
      - [Avec `let` (solution) :](#avec-let-solution-)
      - [Avec `const` (immuables) :](#avec-const-immuables-)
    - [Conclusion](#conclusion)
  - [Task 11: Notation dynamique des clés d'objets en JavaScript](#task-11-notation-dynamique-des-clés-dobjets-en-javascript)
    - [Syntaxe de base](#syntaxe-de-base)
    - [Notation dynamique](#notation-dynamique)
      - [Exemple avec une expression](#exemple-avec-une-expression)
    - [Cas d'utilisation pratique : Créer un objet avec des clés dynamiques](#cas-dutilisation-pratique--créer-un-objet-avec-des-clés-dynamiques)
      - [Explication :](#explication-)
    - [Conclusion](#conclusion-1)


## Task 1 : Concept à comprendre : Block Scope et `var` vs let/const

### 1. Problème avec `var`

Dans ton code, tu utilises `var` pour déclarer les variables `task` et `task2` . Cependant, `var` a des particularités qui peuvent poser problème :

- **Portée fonctionnelle (Function Scope) :** Les variables déclarées avec `var` sont accessibles dans toute la fonction où elles sont définies, même si elles sont déclarées à l'intérieur d'un bloc (comme un `if` ou une boucle).

- **Redéclaration :** Si une variable avec le même nom est déclarée dans un bloc avec `var`, elle écrasera la valeur précédente dans toute la fonction.

- **Hoisting :** Les déclarations `var` sont "levées" (hoisted) au début de la fonction. Cela signifie que la variable existe avant même sa déclaration explicite dans le code, mais sa valeur est initialisée à `undefined` .
Dans ton exemple, la redéclaration des variables `task` et `task2`  à l'intérieur du bloc `if` affecte leurs valeurs dans toute la fonction.

### 2. Solution avec `let` et `const`
Pour éviter ces problèmes, utilise `let` ou `const` :

- **Portée de bloc (Block Scope) :** Contrairement à `var`, les variables déclarées avec `let` ou `const` sont limitées au bloc `{}` où elles sont définies. Elles ne peuvent pas "fuir" dans le reste de la fonction.

- **Sécurité contre les redéclarations :**
`let` permet de modifier la valeur, mais reste dans son bloc.
`const` est immuable (sa valeur ne peut pas être changée après son assignation initiale).

### 3. Appliquer le concept au problème

- En remplaçant `var` par `let` ou `const`, tu ensures que les variables déclarées dans le bloc `if` n'écrasent pas les variables externes à ce bloc.

- La valeur des variables `task` et `task2`  en dehors du `if` restera inchangée, même si elles sont réassignées dans le if.

**Exemple simplifié pour comprendre :**

#### Avec `var` (problème) : 

```javascript
function montrerPorteeVar() {
  var messageGlobal = "Je suis global !";

  if (true) {
    var messageGlobal = "Je suis à l'intérieur du bloc.";
    console.log(messageGlobal); // Affiche : "Je suis à l'intérieur du bloc."
  }

  console.log(messageGlobal); // Affiche aussi : "Je suis à l'intérieur du bloc."
}

montrerPorteeVar();

```

**Explication:**

- La variable `MessageGlobal` déclarée avec `var` à l'intérieur du `if` a écrasé la déclaration externe.
- Cela se produit parce que `var` ignore les blocs comme `{}`. Elle n'est pas limitée au bloc `if`.

---

#### Avec `let` (solution) : 

```javascript
function montrerPorteeLet() {
  let messageHorsBloc = "Je suis hors du bloc !";

  if (true) {
    let messageDansBloc = "Je suis à l'intérieur du bloc.";
    console.log(messageDansBloc); // Affiche : "Je suis à l'intérieur du bloc."
  }

  console.log(messageHorsBloc); // Affiche : "Je suis hors du bloc !"
}

montrerPorteeLet();

```

**Explication:**

- La variable `MessageDansBloc` est déclarée avec `let` dans le bloc `if`. Elle est **limitée au bloc** où elle est définie.
- La variable `MessageHorsBloc` est indépendante et **n'est pas affectée par ce qui se passe dans le bloc**

--- 

#### Avec `const` (immuables) :

```javascript
function montrerPorteeConst() {
  const messageFixe = "Je ne peux pas être modifié.";

  if (true) {
    const messageDansBloc = "Je suis un autre message dans le bloc.";
    console.log(messageDansBloc); // Affiche : "Je suis un autre message dans le bloc."
  }

  console.log(messageFixe); // Affiche : "Je ne peux pas être modifié."
}

montrerPorteeConst();
```

**Explication :**

- Les variables déclarées avec `const` ne peuvent **jamais être réassignées** après leur déclaration.
- Comme `let`, elles sont limitées au bloc dans lequel elles sont définies.

--- 

### Conclusion

1. `var` :

- **Portée fonctionnée**, pas limiée au bloc.
- Peut être redéclarée dans la même fonction, ce qui peut causer des conflits.

2. `let` :

- **Portée de bloc**, limitée au bloc `{}` dans lequel elle est déclarée.
- Peut-être réassignée, mais pas redéclarée dans le même bloc.

3. `const` :

- **Portée de bloc**, comme `let`.
- Ne peut **pas être réassignée** après déclaration.

`const` est idéal pour des variables qui ne changent pas après leur déclaration, et `let` est préférable on prévoit de les modifier.

## Task 11: Notation dynamique des clés d'objets en JavaScript

En JavaScript, il est possible de définir des objets avec des **clés dynamiques**. Cela permet de créer des objets où les clés ne sont pas simplement des chaînes fixes, mais des **valeurs qui peuvent être évaluées** à partir de variables ou d'expressions.

### Syntaxe de base

Habituellement, pour définir une clé dans un objet, vous utilisez la **notation par deux-points** :

```javascript
const obj = {
  key: 'value'
}
```

Cependant, cette méthode ne permet pas d'utiliser des **variables** ou des **expressions** comme clés. Pour cela, on utilise la **notation dynamique** avec des crochets `[ ]`.

### Notation dynamique

La notation dynamique des clés se fait en enveloppant l'expression ou la variable dans des **crochets**. Voici comment cela fonctionne :

```javascript
const key = 'name';
const obj = {
  [key]: 'John Doe'
};
console.log(obj); // { name: 'John Doe' }
```

Dans l'exemple ci-dessus, la valeur de la variable `key` est utilisée comme nom de la clé dans l'objet.

#### Exemple avec une expression

Vous pouvez aussi utiliser des **expressions** à l'intérieur des crochets, et pas seulement des variables.

```javascript
const age = 25;
const obj = {
  [`person-${age}`]: 'John Doe'
};
console.log(obj); // { person-25: 'John Doe' }
```

Ici, la clé de l'objet devient `person-25` car l'expression `${age}` est remplacée par la valeur de la variable `age`.

### Cas d'utilisation pratique : Créer un objet avec des clés dynamiques

Imaginons que vous vouliez créer un objet avec une clé dynamique basée sur un nom de département et une valeur qui est une liste d'employés. Voici comment vous pourriez le faire :

```javascript
export default function createEmployeesObject(departmentName, employees) {
  const obj = { [departmentName]: employees }; // Clé dynamique
  return obj;
}
```

#### Explication :
- **[departmentName]** : Ici, `departmentName` est une **variable** et devient la clé dynamique de l'objet. Cela permet de créer une clé basée sur la valeur contenue dans `departmentName`.
- **employees** : C'est la valeur associée à cette clé.

### Conclusion

La notation dynamique des clés d'objets est très utile lorsque vous souhaitez créer des objets dont les clés ne sont pas connues à l'avance, mais qui dépendent de valeurs de variables ou d'expressions. Cela rend votre code plus flexible et dynamique.

---

Vous pouvez utiliser cette notation dans de nombreux cas pratiques, comme la gestion de configurations, de filtres, ou d'objets dynamiques où les clés changent en fonction des conditions.
