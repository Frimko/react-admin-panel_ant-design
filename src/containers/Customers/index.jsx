import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { fetch, editItem, addItem, deleteItem } from 'actions/customers';
import Page from 'components/Page';
import Table from 'components/Table';
import CustomersForm from 'forms/CustomersForm';
import { items, pagesCount, getError, customersItemsSelector } from 'selectors/customers';

/* eslint react/prop-types: 0 */

class Customers extends PureComponent {

  constructor(props) {
    super(props);

    this.columns = [{
      title: 'Ид',
      dataIndex: 'id',
      width: '5%',
    }, {
      title: 'Имя',
      dataIndex: 'name',
      width: '25%',
    }, {
      title: 'Адресс',
      dataIndex: 'address',
      width: '15%',
    }, {
      title: 'Телефон',
      dataIndex: 'phone',
      width: '40%',
    }];
  }


  componentWillMount() {
    const { curPageTable, items } = this.props;
    if (!items.length || curPageTable > 0) {
      this.props.fetch(0);
    }
  }

  getEditPageComponent = (props) => (
    <CustomersForm {...props}/>
  )

  onChangePage = (page) => this.props.fetch(--page)

  render() {
    const { pageCount, items, editItem, addItem, deleteItem, errorText } = this.props;
    return (
      <Page title="Customer">
        {errorText && (<Alert message={errorText} type="error" showIcon closable/>)}
        <Table
          showModal
          items={items}
          pageCount={pageCount}
          columns={this.columns}
          pageName='customers'
          onChangePage={this.onChangePage}
          editPageComponent={this.getEditPageComponent}
          onAdd={addItem}
          onEdit={editItem}
          onDelete={deleteItem}
        />
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: items(state),
    pageCount: pagesCount(state),
    errorText: getError(state),
    curPageTable: customersItemsSelector(state).curPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => dispatch(fetch(page)),
    addItem: (data) => dispatch(addItem(data)),
    editItem: (data) => dispatch(editItem(data.id, data)),
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Customers);
