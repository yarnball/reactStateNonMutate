import React from 'react';

import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
      items: [{
        name: 'hello',
        id: 20,
        genre: [{ name: 'baz', id: 2 }, { name: 'foo', id: 200 }],
      },
      { name: 'hi', id: 12, genre: [] },]
    }

  onChange(event, clickedItem) {
    const { items } = this.state
    const index = items.findIndex(item => item.name === clickedItem.name)
    const nestedIndex = items[index].genre.findIndex(genre => genre.id === 2)
    
    const { value } = event.target
    this.setState(prevState => ({
      items: prevState.items.map((item, itemIndex) => {
        if (index !== itemIndex) {
          return item
        }
    
        return {
          ...item,
          name: 20,
          genre: item.genre.map((genre, gIndex) => {
            if (gIndex !== nestedIndex) {
              return genre  
            }
    
            return {
              ...genre,
              name: value,
            }
          })
        }
      })
    }))
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map((x) => {
          return (
            <div>
              {" "}
              {x.name}
              {x.genre.map((itm) => {
                return <i> {itm.name}</i>;
              })}
              <input onChange={e => this.onChange(e, x)} type="text" />
            </div>
          );
        })}
      </div>
    );
  }
}


render(<App />, document.getElementById("root"));


export default App;
