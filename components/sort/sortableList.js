import React from "react";
import SortableItem from "./item";

class SortableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    onSortItems = (items) => {
      this.setState({
        items: items
      });
    }
   
    render() {
      const { items } = this.state;
      var listItems = items.map((item, i) => {
        return (
          <SortableItem
            key={i}
            onSortItems={this.onSortItems}
            items={items}
            sortId={i}>{item}</SortableItem>
        );
      });
   
      return (
        <div style={{width: "100%"}}>
          {listItems}
        </div>
      )
    }
  };

  export default SortableList;