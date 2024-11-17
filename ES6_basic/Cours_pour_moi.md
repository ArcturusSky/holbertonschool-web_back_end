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