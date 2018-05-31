import React, { Component } from 'react';
import { propTypes } from '../';

class AddForm extends Component {
  onAddRow = (values) => this.props.onAdd(values)

  render() {
    const { editPageComponent, columns, showModal } = this.props;
    const AddPageComponent = editPageComponent;
    const fields = columns.map((item) => {
      return {
        label: item.title,
        name: item.dataIndex,
      };
    });

    return (
      <AddPageComponent
        {...this.props}
        type='add'
        showModal={showModal}
        fields={fields}
        onSubmit={this.onAddRow}
      />
    );
  }

}

AddForm.propTypes = propTypes;

export default AddForm;
