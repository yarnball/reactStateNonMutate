import React from 'react';

class App extends React.Component {
  state = {
    search: "",
    items: [{ foo: "hello", bar: [{baz:12}, {baz:200}] }, { foo: "hi", bar: [] }]
  };

  onChange(e, x) {
    const index = this.state.items.findIndex(itm=>itm.foo === x.foo)
    const nestedIndex = [this.state.items[index]].map(e => e.bar).pop().findIndex(itm => itm.baz === 200)
    this.setState({
      items: this.state.items.map(item => {
        // console.log('itm in state', item, x)
        return item === x ? { ...item, foo: e.target.value } : item;
      })
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map((x) => {
          return (
            <div>
              {" "}
              {x.foo}
              {x.bar.map((itm) => {
                return <i> {itm.baz}</i>;
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
