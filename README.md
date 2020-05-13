# React Autocomplete
A React search bar and hook that utilizes a trie tree for super fast results. 
## Table of Contents


* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation - Demo project](#demo-project)
  * [Installation - Include into an existing project](#existing-project)
* [React Search bar](#react-search-bar)
* [React Hook](#react-hook)

## Built With
* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [styled-components](https://styled-components.com/)
* [react-icon](https://www.npmjs.com/package/react-icons)

## Getting Started
#####  ❗️IMPORTANT❗️
There are two sets of instructions. The first installation is for getting the demo project running on your machine. The second installation is for incoperating the search bar or hook into an existing project.

If you would like to utilize the trie tree features without using the search bar and create your own use case. I highly recommend you just the autocomplete hook.

<a name="demo-project"></a>

### Installation - Demo project
1. Refer to the getting started description first!

2. Clone the repository:

```
git clone https://github.com/alexbarksdale/react-autocomplete.git
```

3. You now need to install all of the necessary packages for the project, type the following in your terminal:

```
npm install
```

4. This project comes with a demo application and you can view it with: 

```
npm start
```
<a name="existing-project"></a>

### Installation - Include into an existing project
1. Refer to the getting started description first!

2. Clone the repository:

```
git clone https://github.com/alexbarksdale/react-autocomplete.git
```

3. Navigate into `src/assets/` and take `trietree.ts`and `trietreenode.ts` into your desired location.

4. **OPTION 1:** If you would like to use the search bar, navigate to `src/components/` and take `SearchBar.tsx` into your desired location. ‼️ This component uses [styled-components](https://styled-components.com/)  and [react-icon](https://www.npmjs.com/package/react-icons). React-icon is only for the 🔍 icon so if you would like to remove it, find it with cmd + f (ctrl + f for windos) and search for `SearchIcon` and remove it. However, you must install styled-components with: 
`npm i styled-components @types/styled-components`
and `npm i react-icons` if you would like to keep the 🔍 icon.

5. **OPTION 2:** If you would like to use the React autocomplete hook, navigate to `src/components/`and take `useAutocomplete.ts` into your desired location.

<a name="react-search-bar"></a>

# Searchbar

## Props

| Prop                                                                   | Type     |                     Required                     | Description                                                                                                                                                                                           |
| :--------------------------------------------------------------------- | :------- | :----------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`placeholder`](#placeholder-prop)                                     | String    |                                                 | Customize the placeholder of the component.                                                                                                              |
| [`type`](#type-prop)                                     | String    |                                                 | Change the input type. Default: type="text"
| [`corpus`](#corpus-prop)                                     | Array[string]    |                                                 | Supply a corpus to initialize the tree with words or phrases.
| [`onChange`](#onchange-prop)                                     | Function    |                                                 | Retrieve the input value from the component back to the parent.
| [`disableTermSubmit`](#disabletermsubmit-prop)                                     | Boolean    |                                                 | Disable adding a new term to the tree on submit.

## Example Usage
```js
import { SearchBar } from './SearchBar';

<SearchBar 
  placeholder="Search menu..." 
  corpus={menuItems} 
  onChange={(searchTerm: string) => setTerm(searchTerm)}
  disableTermSubmit 
/>
```

## Prop Usage
<a name="placeholder-prop"></a>

#### placeholder (optional)
```xml
<SearchBar placeholder="Example" />

```

<a name="type-prop"></a>

#### type (optional)
```xml
<SearchBar type="text" />

```

<a name="corpus-prop"></a>

#### corpus (optional)
```xml
<SearchBar corpus={['Pizza', 'Pasta', 'Potato']} />

```

<a name="onchange-prop"></a>

#### onChange (optional)
```xml
<SearchBar onChange={(s: string) => setState(s)} />

```
<a name="disabletermsubmit-prop"></a>

#### disableTermSubmit (optional)
```xml
<SearchBar disableTermSubmit />

```
<a name="react-hook"></a>

# React Hook - useAutocomplete
## Args
* **Usage:** `const [completions] = useAutocomplete(arg1, arg2)`
* **Returns:** An array of strings containing completions from a given prefix.

| Arg                                                                   | Type     |                     Required                     | Description                                                                                                                                                                                           |
| :--------------------------------------------------------------------- | :------- | :----------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arg1`                                   | String    |      ✓                                           | Used to find a prefix in the tree                                                                                                              |
| `arg2`                                   | Array[string]    |                                                 | Supply a corpus to initialize the tree with words or phrases.

## Example Usage
```js
import React, { useState} from 'react';
import { useAutocomplete } from './useAutocomplete';

const corpus = ['Pizza', 'Pasta', 'Potato'];
const [searchTerm, setSearchTerm] = useState('');

const [completions] = useAutocomplete(searchTerm, corpus);

export function Demo(): JSX.Element {
return (
 {completions.map((item, i) => {
   return (
     <ul>
	  <li key={i}>{item}</li>   
     </ul>;
   );
 })}
);
}
```
