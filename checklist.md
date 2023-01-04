1. [CODE KNOWLEDGE] - When you rendering a list, don't forget to add `key` prop

BAD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat cat={cat} />)}
</div>
```

GOOD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat key={cat.id} cat={cat} />)}
</div>
```


2. [CODE KNOWLEDGE] -  There is no need to specify the key in the child component.

BAD EXAMPLE:
```jsx
function ListItem(props) {
    <li key={props.key}>
      {props.value}
    </li>
  );
}

function NumberList(props) {
  const listItems = numbers.map((number) =>
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
```

GOOD EXAMPLE:
```jsx
function ListItem(props) {
    <li>
      {props.value}
    </li>
  );
}

function NumberList(props) {
  const listItems = numbers.map((number) =>
    <ListItem value={number} key={number.toString()}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
```
3. [CODE KNOWLEDGE] - NEVER EVER EVER use array index as a `key` prop

4. [CODE KNOWLEDGE] - Don't use React fragment, if you already have a wrapper

BAD EXAMPLE:
```jsx
  <>
    <div className="cat">
      {cats.map(cat => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </div>
  </>
```

ALSO BAD EXAMPLE:
```jsx
export const Cat: React.FC<Props> = ({ cat }) => (
  <>
    <a className="UserInfo" href={`mailto:${cat.email}`}>
      {cat.name}
    </a>
  </>
);
```

GOOD EXAMPLE:
```jsx
<div className="cat">
  {cats.map(cat => (
    <Cat key={cat.id} cat={cat} />
  ))}
</div>
```

ALSO GOOD EXAMPLE: 

```jsx
  <>
    {cats.map(cat => (
      <Cat key={cat.id} cat={cat} />
    ))}
  </>
```


5. [CODE STYLE] - Use string interpolation inside tag content

BAD EXAMPLE: (it is hard to get the final result)
```jsx
<p>
  Sum of
  {' '}
  {a}
  {' '}
  and
  {' '}
  {b}
  {' '}
  is
  {' '}
  {a + b}
</p>
```

GOOD EXAMPLE:
```jsx
<p>
  {`Sum of ${a} and ${b} is ${a + b}`}
</p>
```

6. [CODE STYLE] - If you are searching some entity by some filter, specify it in function/method name

BAD EXAMPLE:
```jsx
const getCat = (catId: number) => cats.find(cat => cat.id === catId);
```

GOOD EXAMPLE:
```jsx
const getCatById = (catId: number) => cats.find(cat => cat.id === catId);
```
