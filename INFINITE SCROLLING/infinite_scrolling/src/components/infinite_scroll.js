import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const Scroll = ()=>{
    const style = {
        height: 30,
        border: "1px solid green",
        margin: 6,
        padding: 8
      };

      const [items,setItems] = useState(new Array(25).fill(0))

      const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          setItems(new Array(items.length+25).fill(0))
        //   console.log(items.length)
        }, 1500);
      };

      return (
        <div>
        <h1>react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((i, index) => (
            <div style={style} key={index}>
              Masai Student - #{index+1}
            </div>
          ))}
        </InfiniteScroll>
      </div>
      )
}