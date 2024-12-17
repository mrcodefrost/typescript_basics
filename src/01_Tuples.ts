// Tuple is a typed array with predefined length and types of each index

let ourTuple: [number, boolean, string];

ourTuple = [1, false, "hi"];

// Tuples with function 

let functionTuple: [number, Function];
functionTuple = [1, () => {}];

// Read only tuple, can be reassigned

let readOnlyTuple: readonly [number, boolean];
readOnlyTuple = [10, true];

// Named Tuples 

const graph: [x: number, y: number] = [100, 200];

// Destructuring tuples

const [a,b] = graph;


