/**
 * Selling the product owned by the user
 * @param {org.example.biznet.Buy} selling - the selling transaction
 * @transaction
 */

function buy(buy) {
    if(buy.user.email === buy.goods.owner.email){
        throw new Error('You already own the asset');
    }
    if(buy.user.balance < buy.goods.productPrice){
        throw new Error('Sorry you do not have enough balance');
    }
    if(buy.goods.status !== 'FOR_SALE'){
        throw new Error('Sorry the product is not available for sale');
    }
    
    var buyer = buy.user;
    var seller = buy.goods.owner;
   
    buyer.balance -= buy.goods.productPrice;
    seller.balance += buy.goods.productPrice;
    buy.goods.state = 'SOLD';
    buy.goods.owner = buyer;
    
    return getAssetRegistry('org.example.biznet.Goods')
      .then(function(goodsRegistry) {
      // save the updated goods status to good assest instance
        return goodsRegistry.update(buy.goods);
      })
      .then(function(){
        return getParticipantRegistry('org.example.biznet.User')
      })
      .then(function(userRegistry) {
        // save the updated user status to user assest instance
        return userRegistry.updateAll([buyer,seller]);
    });
  }