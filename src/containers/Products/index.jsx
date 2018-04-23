import React, { Component } from 'react';
import { connect } from "react-redux";
/*import {
    getAllItems,
    deleteItem,
    showUpdateModal,
    hideModal,
    showAddModal,
    addProduct,
    updateProduct
} from "redux/actions";*/
import Page from 'components/Page';

class Products extends Component {


    render() {
        const props = this.props;
        return (
          <Page title="Products">
            Products
          </Page>
        )
    }
}

export default Products
/*export default connect(
    ({products}) => ({
        ...products
    }),
    (dispatch) => {
        const type = 'products';
        let defaultFields = [
            {title: 'Name', name: 'name', value: null},
            {title: 'Price', name: 'price', value: null},
        ];
        return {
            getAllProducts() {
                dispatch(getAllItems(type));
            },
            deleteProduct(id) {
                dispatch(deleteItem(type, id));
            },
            showUpdateModal(field) {
                let fieldForForm = []
                _.forEach(field, (value, key) => {
                    if (['name', 'price'].indexOf(key) >= 0) {
                        fieldForForm.push({title: key[0].toUpperCase() + key.slice(1), name: key, value: value})
                    }
                })
                dispatch(showUpdateModal(type, fieldForForm, field.id));
            },
            showAddModal() {
                dispatch(showAddModal(type, defaultFields));
            },
            hideModal() {
                dispatch(hideModal(type));
            },
            addProduct(data) {
                console.log('data',data);
                dispatch(addProduct(data));
            },
            updateProduct(id, data) {
                dispatch(updateProduct(id, data));
            }
        }
    }
)(Products);*/
