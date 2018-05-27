import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetch } from 'actions/customers';
import Page from 'components/Page';
import Table from 'components/Table';
import CustomersForm from 'forms/CustomersForm';
import { items, pagesCount } from 'selectors/customers';

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


  mount = () => this.props.fetch(0)

  getEditPageComponent = (props) => (
    <CustomersForm {...props}/>
  )

  onChangePage = (page) => this.props.fetch(--page)

  render() {
    const { pageCount, items } = this.props;
    return (
      <Page title="Customer">
        <Table
          showModal
          items={items}
          columns={this.columns}
          pageCount={pageCount}
          pageName='customers'
          onMount={this.mount}
          onChangePage={this.onChangePage}
          editPageComponent={this.getEditPageComponent}
          createPage={this.onChangePage}
          onDelete={this.onChangePage}
          onEdit={console.log}
        />
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: items(state),
    pageCount: pagesCount(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  const tableName = 'customers';
  return {
    fetch: (page) => dispatch(fetch(tableName, page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Customers);
