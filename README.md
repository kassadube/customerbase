
query

{
  customer(id: "1")
  {
    id,name,email
  }
}

------------------------------

{
  Customers
  {
  id,name,email
  }
}

---

mutation{
  addCustomer(name: "treest", email: "bib@gmail.com", age: 33){
    id,
    name,
    email,
    age
  }
}

----
## delete

mutation{
  deleteCustomer(id: "oqvoqQu") {
    id
  }
}
---
### edit

mutation{
 editCustomer(id: "3", age: 99)
  {
    id,
    name,
    age
  }
}