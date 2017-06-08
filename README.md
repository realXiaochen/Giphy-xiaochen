# Gif searching

## Tools

- Angular 2
- Angular-cli
- Bootstrap
- Font-awesome

## Key parts

#### Component/gif:
  main html and angular logic

#### Services/gif
  dependency

## How to use

 ```
 npm install
 
 ```

  ```
  ng serve
  ```
  
  ```
 Go to  http://localhost:4200/
 
    ```

- You will see a spinner icons when gif is loading

- The rate limit of the api will be triggered if a same keyword is used repeatedly.


## Thoughts on autocomplete

- Angular material actually has this feature.

- For large scale application, a possible solution could be building a hashtable from a trie whose nodes are ordered dictionary/hashtable.


