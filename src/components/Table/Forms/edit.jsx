import React, { Component } from 'react';
import find from 'lodash/find';
import { propTypes } from '../';

class EditForm extends Component {
  getEditRowId = () => {
    const { match: { params: { id } } } = this.props;
    return id;
  }
  onEditRow = (values) => this.props.onEdit(values)

  render() {
    const { editPageComponent, columns, items, showModal } = this.props;
    const EditPageComponent = editPageComponent;
    const id = this.getEditRowId();
    const row = find(items, ['id', +id]);
    const fields = columns.map((item) => {
      return {
        label: item.title,
        name: item.dataIndex,
        value: row ? row[item.dataIndex] : '',
      };
    });

    return (
      <EditPageComponent
        {...this.props}
        showModal={showModal}
        type='edit'
        fields={fields}
        onSubmit={this.onEditRow}
        rowId={id}
      />
    );
  }
}

EditForm.propTypes = propTypes;

export default EditForm;
