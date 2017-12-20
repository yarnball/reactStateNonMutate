import React from 'react';

class App extends React.Component {
  state = {
      items: [{
        name: 'hello',
        id: 20,
        genre: [{ name: 'baz', id: 2 }, { name: 'foo', id: 200 }],
      },
      { name: 'hi', id: 12, genre: [] },]
    }

  onChange = (e, clickedItem) => {
    const { items } = this.state
    const { value } = e.target
    const index = items.findIndex(item => item.name === clickedItem.name)
    const nestedIndex = items[index].genre.findIndex(genre => genre.id === 2)
    
    this.setState(prevState => ({
      items: prevState.items.map((item, itemIndex) => {
        if (index !== itemIndex) {
          return item
        }
        return {
          ...item,
          // name: 'any value here',
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

// Updating just 1 field? - Non nested
  // onChange(e, x) {
  //   this.setState({
  //     items: this.state.items.map(item => {
  //       return item.name === x.name ? { ...item, name: e.target.value } : item
  //       // That return finds the item with teh
  //     })
  //   });
  // }
  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map((x) => {
          return (
            <div key={x.id}>
              {" "}
              {x.name}
              {x.genre.map((itm) => {
                return <i key={itm.id}> {itm.name}</i>;
              })}
              <input onChange={e => this.onChange(e, x)} type="text" />
            </div>
          );
        })}
      </div>
    );
  }
}


export default App;
