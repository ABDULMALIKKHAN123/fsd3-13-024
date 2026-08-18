# FS (file system) Node JS's Module
it direct connect with clients OS rather than browser

## Major task of FS module
--Reading and writing Files 
  --readFile()
  --WriteFile()
  --appendFile()

--Directory Management
  --mkdir()
  --rmdir() --depricated
  --readdir()

--metadata/Information
  --stat()
  --lstat()
  --fstat()

--Watching for Changes
  --watch()
  --watchFile()
  --unwatchedFile()

--Streaming Large File
  --createReadStream()
  --createWriteStream()

--File operations
  --rename()
  --truncate()
  --unlink()
  --link()
  --syslink()






C-- create/add/insert
R--Retrive/view/get
U--Update/edit
D--Delete/Remove
fs--File System
  --1)node library
  --2)node library

  unlink ke throgh file ko delete karte hai



## CRUD Operation
create/Insert, Read/Retrieve, update,Delete
each item(id,name,price,qty)
feature:
1) add to cart
2) slow cart
3) Remove from cart
4) update quantity from cart

Required files
->crud.js
->product.json (Java Script Object Notation)

## Item
id, name, price,qty

## Operation
1) add to cart
2) slow cart
3) Remove from cart
4) update quantity from cart
5) checkout
NOTE: all items will be stored in hdd, so after termination of program we can retrive cart detailes
## Required File
1. crud.js - it contains all the method and entry point
2. 