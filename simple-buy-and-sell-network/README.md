# org.example.biznet
# Simple buy and sell business Network

> This is a simple Hyperledger Composer network that allows the users to create and sell an asset

This business network defines:

**Participant**
`User`

**Asset**
`Goods`

**Transaction**
`Buy`

Goods are owned by the Users and the `User` can buy a `Good` by submitting a `Buy` transaction with the id of the product and exchange of amount take place.

To test this Business Network Definition in the **Test** tab of the composer-playground:

In the `User` participant registry, create two Users.

```
{
  "$class": "org.example.biznet.User",
  "email": "memberA@gmail.com",
  "firstName": "Jenny",
  "lastName": "Jones",
  "balance": 3000
}
```

```
{
  "$class": "org.example.biznet.User",
  "email": "memberB@gmail.com",
  "firstName": "Amy",
  "lastName": "Williams",
  "balance": 5000
}
```

Create a good in the `Goods` asset registry.

```
{
  "$class": "org.example.biznet.Goods",
  "goodsId": "goodsId:1",
  "state": "FOR_SALE",
  "description": "car",
  "productPrice": "3000",
  "owner": "resource:org.example.biznet.User#memberA@gmail.com"
}
```

Submit a `Buy` transaction:

```
{
  "$class": "org.example.biznet.Buy",
  "user": "resource:org.example.biznet.User#memberB@gmail.com",
  "goods": "resource:org.example.biznet.Goods#goodsId:1"
}
```
You will find that the asset involved changes it's state to `SOLD` and the owner becomes the buyer.
You can also notice the exchange of amount between the users reflected by the change in their balance amount.

Submitting a `Buy` transaction again with the same data will greet you with a error message reading "you already own the asset".

```
{
  "$class": "org.example.biznet.Buy",
  "user": "resource:org.example.biznet.User#memberB@gmail.com",
  "goods": "resource:org.example.biznet.Goods#goodsId:1"
}

You should also see appropriate error messages when you don't have enough balance to buy the goods and when the goods are already sold.

And that's you see the working of this simple blockchain network.


