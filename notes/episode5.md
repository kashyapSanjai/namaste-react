React Hooks - normal javascript function which is utility functon which gives some utility
Rendering-  whenever a state variable update react re-render our component
Reconciliation aka react fiber - came in react 16 this algo new algo come up its a new way to find diff and updating a dom 
note - follow this link for deep knowledge of this concept https://github.com/acdlite/react-fiber-architecture

Virtual DOM - representation of actual dom and its a normal javascript object so whenever state change then then using react fiber algo it will find diff between  old dom obj and new dom obj then update the dom 

diff alo - find the differnece between old virtual dom and new virtual dom and update the UI

why react show fast?
beacuse react efficient in dom manipulation because it has virtual dom 