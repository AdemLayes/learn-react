import "./Main.css"
import Items from "./items.json"

export default function() {
  return(
    <main>
      <div id="soldContainer">
        <p id="sold">Sold !!</p>
        <div id="soldItems">
          <SoldItems
            itemTitle="Air-pods 623x"
            itemImg={Items.sold[0]}
            itemPrice="1500 DA"
            itemOldPrice="2000 DA"
          />
          <SoldItems
            itemTitle="frezza for coce"
            itemImg={Items.sold[1]}
            soldP="15"
            itemPrice="1900 DA"
            itemOldPrice="3000 DA"
          />
          <SoldItems
            itemTitle="Naruto bandana"
            itemImg={Items.sold[2]}
            soldP=""
            itemPrice="3000 DA"
            itemOldPrice="5000 DA"
          />
          <SoldItems
            itemTitle="Spider-man web shoter"
            itemImg={Items.sold[3]}
            soldP=""
            itemPrice="900 DA"
            itemOldPrice="1200 DA"
          />
          <SoldItems
            itemTitle="Frizzing pot"
            itemImg={Items.sold[4]}
            soldP=""
            itemPrice="3000 DA"
            itemOldPrice="5000 DA"
          />
        </div>
      </div>
      <div id="mainContainer">
      main container
      </div>
      <div id="addsContainer">
      adds container
      </div>
    </main>
  )
}
function SoldItems(props) {
  let calc = () => {
    let result = 100 - (parseInt(props.itemPrice) * 100 / parseInt(props.itemOldPrice))
    return result.toString().slice(0,5)
  }
  return(
    <div id="soldItem">
      <p id="soldItemTitle">{props.itemTitle}</p>
      <img id="soldItemImg" src={props.itemImg}/>
      <p id="soldPercentage">{calc()}%</p>
      <p id="soldItemPrice">{props.itemPrice} <span id="soldItemOldPrice">{props.itemOldPrice}</span></p>
    </div>
  )
}