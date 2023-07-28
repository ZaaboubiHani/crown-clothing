import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview, { CollectionPreviewProps } from "../../components/collection-preview/collection-preview.component"; 


interface ShopPageState {
    collections: CollectionPreviewProps[];
}


class ShopPage extends React.Component<{},ShopPageState> {
    constructor(){
        super({});

        this.state = {
            collections: SHOP_DATA
        }
    }
    render(): React.ReactNode {
      const {collections} = this.state;
      return (
        <div className="shop-page">
          {
            collections.map(({id,...otherProps})=>{
              return (
                <CollectionPreview  key={id} id={id} {...otherProps} />
              );
            })
          }
        </div>
      );
    }
}

export default ShopPage;