# Project Description: Dynamic React Page Generation from JavaScript Object

![generate-animation](https://github.com/Vahan003/page_generation/assets/55839598/3baddab7-d93c-4dec-9058-0f4c71e64df2)

**Note:** Please delete "pages" folder before running the script

```bash
npm run generate
```

This project demonstrates the creation of a React application where the content of the page is dynamically generated based on data from a JavaScript object. The purpose is to showcase how React can be used to build flexible and dynamic user interfaces that adapt to the structure and content defined in a JavaScript object.

## Key Features

- **Dynamic Content Rendering**: The React page renders its content based on the data provided in a JavaScript object, allowing for easy updates and modifications.
- **Component-based Architecture**: Utilizes React's component-based architecture to create reusable and maintainable code.
- **Scalability**: Easily scalable to accommodate more complex data structures and additional components as needed.

## JavaScript Object Structure

The application uses a JavaScript object to define the content of the page. An example structure of this object is as follows:

![generate-animation1](https://github.com/Vahan003/page_generation/assets/55839598/d4f61ef0-e038-46f3-bbb6-e315810582af)

```js
[
  {
    name: "Home",
    ext: "tsx",
    sub: [
      {
        name: "Header",
        ext: "tsx",
        sub: [
          {
            name: "Nav",
            ext: "tsx",
          },
        ],
      },
      {
        name: "Main",
        ext: "tsx",
      },
    ],
  },
  {
    name: "Contacts",
    ext: "tsx",
  },
];
