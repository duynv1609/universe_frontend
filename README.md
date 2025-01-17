[![Nuxt banner](https://github.com/nuxt/framework/blob/main/.github/assets/banner.png)](https://nuxt.com)

# 👋 Welcome to Nuxt


Nuxt's goal is to make web development intuitive and performant, with a great developer experience.<br>Learn more in the ['What is Nuxt?'](https://nuxt.com/docs/category/introduction) section of our documentation.

Movie original theme: https://github.com/duynv1609/Movie-Theme-FlixGo
## Project setup
### Cach 1
#### install dependencies
```
npm install -g pnpm
pnpm install --shamefully-hoist && pnpm prepare
```
#### serve
```
pnpm dev
```
### Cach 2
```
docker-compose -f docker-compose.dev.yml up -d --build
```

## Coding style
#### Folder name
```
style: snake
```
#### Function name
```
style: camel
```
#### Variable name
```
style: camel | constant (Ex: userName)
variable containing many elements: [key work]List (Ex: driverList)
NOT drivers. There's not much difference when looking at drivers and driver
```
#### Component name
```
style: pascal (Ex: UserModel)
```
#### Model name
```
style: pascal and has postfix Model (Ex: UserModel)
```
#### Interface name
```
style: pascal and has prefix I (Ex: IResource)
```
#### Logical Operators
```
use `===` NOT `==`
use `!==` NOT `!=`
```
#### Don't use default exports
```
use exporting declarations or export list.
except the component that you want to lazy load (Ex: EmployeePage)
```
#### Always use useQuery to call api
```
it reduces the number of duplicate API calls.
https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/
```
# Please Always clean your code
