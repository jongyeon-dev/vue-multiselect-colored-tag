# vue-multiselect-colored-tag
Adding tag coloring for [Vue-multiselect](https://vue-multiselect.js.org/#sub-getting-started)

# Description
**When Options exist (It's not added to the tag list.)**
**When Options do not exist (The tag list is empty and doesn't add to the list.)**
Each tag has no specified color and is used before sending it to the API.
**When Options exist (It's not added to the tag list.)**
Tags delivered from the API have their own color,
and newly added tags are painted from the next color of the last of the tag list.
The new tags will have random colors until they are sent to the API.

# Event
- add Tag
- add Tag List
- change tag color

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
