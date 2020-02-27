import {request} from "network/request"

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getCommend() {
  return request({
    url:'/recommend'
  })
}
//获取商品数据并封装
export class  detail{
  constructor(itemInfo,columns,shopInfo){
    this.title = itemInfo.title
    this.columns = columns
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.services = shopInfo.services
    this.nowPrice = itemInfo.highNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.lowPrice = itemInfo.lowNowPrice
  }
}
export  class  shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goods = shopInfo.cGoods
  }
}
export class  goods{
  constructor(info,rule){
    //images有些商品有有些商品没有
    this.images = info.images ? info.images[1] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}