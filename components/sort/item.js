import React from "react";
import { sortable } from 'react-sortable';
import { Container, Textarea, Checkbox, Input,Select, InputGroup, InputRightAddon, Stack, RadioGroup, Radio } from "@chakra-ui/react"

class Item extends React.Component {
    render() {
        return (
        <div style={{width: "100%"}} {...this.props}>
            {this.props.children}
        </div>
      )
    }
  }
   
export default sortable(Item);