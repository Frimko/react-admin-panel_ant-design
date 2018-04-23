import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { fetch } from "actions/customers";
import Page from 'components/Page';
import { items, pagesCount } from 'selectors/customers';
import _ from 'lodash';

class Customers extends PureComponent {
  componentWillMount() {
    this.props.fetch(2);
  }

  onSubmitModal = (event) => {
    event.preventDefault();
  }

  render() {
    const props = this.props;
    console.log('props', props);
    //if (!props.dataList.length) return null;
    return (
      <Page title="Customer">
        Customer
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: items(state),
    pagesCount: pagesCount(state),
  }
};
const mapDispatchToProps = (dispatch) => {
  let defaultFields = [
    {title: 'Name', name: 'name', value: null},
    {title: 'Address', name: 'address', value: null},
    {title: 'Phone', name: 'phone', value: null}
  ];
  const tableName = 'customers';
  return {
    fetch(page) {
      dispatch(fetch(tableName, page));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Customers);
