/_ Variable _/

- if you init variable with const keyword then no change allowed. if still you will try to change you will get an error - TypeError: Assignment to constant variable

- different between let and var? perer not to use var keyword because of scope. always use let instead.

- if you intialized variable with let and not assign any value in that. variable is called undefied.

/_ DataTypes _/

- 1. Primitive datatypes

- number: 2 to power 53
- string: = "pawan"
- bigin: - very large number
- boolean: true/false
- null: - stand alone value
- undefiend: - when you not assigned any value to the variable then in java scripts it initialized as undefiend
- symbol: - unique

/_ Convertion _/

- Number convertion

  1. "33" => 33,
  1. "33abc" => Nan,
  1. null => 0 , because null is a object,
  1. undefined => NaN,
  1. true => 1,
  1. false => 0

- Boolean convertion

  1. 1 => true
  2. 0 => false
  3. -1 => true
  4. "" => false
  5. "abc" => true
  6. null => false
  7. undefined => false

// Return type of variables in JavaScript

- Primitive Datatypes

  1. Number => number
  1. String => string
  1. Boolean => boolean
  1. null => object
  1. undefined => undefined
  1. Symbol => symbol
  1. BigInt => bigint

- Non-primitive Datatypes
  1.  Arrays => object
  1.  Function => function
  1.  Object => object

\*. Memory management - Javascript use Stack and Heap to store data.

    1. Stack store all primitive data types.

    2. Heap store all non primitive data types.
