1. ADD a `key` to the root tag inside an iteration (the first tag after the `.map` call)
2. DON't add keys to any other tags
3. NEVER use array index as a `key` (it is the default behaviour)

BAD EXAMPLE:
```jsx
const CatCard = ({ cat }) => (
  <div key={cat.id}>
    {cat.name}
  </div>
);

const CatList = ({ cats }) => (
  <div class="CatList">
    {cats.map(cat => (
      <CatCard cat={cat}> />
    ))}
  </div>
);
```

GOOD EXAMPLE:
```jsx
const CatCard = ({ cat }) => (
  <div>
    {cat.name}
  </div>
);

const CatList = ({ cats }) => (
  <div class="CatList">
    {cats.map(cat => (
      <CatCard cat={cat}> key={cat.id} />
    ))}
  </div>
);
```
