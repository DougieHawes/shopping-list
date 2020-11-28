import React, { Component } from "react";
import { Fade } from "react-reveal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getItems, deleteItem } from "../actions/itemActions";

import "./style.min.css";

import ListItem from "./ListItem";

class ListBody extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    console.log(`item ${id} deleted`);
  };

  render() {
    const { items } = this.props.item;

    return (
      <div className="list-body">
        <Fade delay={1400}>
          <div className="list-add-item">
            ADD ITEM <i className="fas fa-plus"></i>
          </div>
        </Fade>
        <div className="list-container">
          {items.map((item, id) => (
            <ListItem
              key={item.id}
              text={item.name}
              onClick={this.onDeleteClick.bind(this, id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

ListBody.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ListBody);
