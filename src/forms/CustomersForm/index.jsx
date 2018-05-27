import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from 'components/Button';
import TextField from 'components/reduxForm/TextField';

import { getOneItem } from 'actions/customers';
import { Form, Row, Col, Modal } from 'antd';

class CustomersForm extends PureComponent {

  componentDidMount() {
    const { fields, load, rowId } = this.props;
    if (!fields.some(item => !!item.value)) {
      load(rowId);
    }
  }

  getSubmitButton = () => {
    const { handleSubmit, valid, dirty, pristine, submitting, showModal } = this.props;

    return (
      <Button
        key='save'
        inModalFooter={showModal}
        buttonProps={{
          type: 'primary',
          onClick: handleSubmit,
          disabled: ((submitting && !dirty && pristine) || !valid),
        }}
        formItemProps={{
          wrapperCol: { span: 18, offset: 5 },
        }}
        loading={false}
        text='Сохранить'
      />
    );
  }

  getForm = () => {
    const { fields, showModal } = this.props;
    const items = fields.filter((item) => (item.name !== 'id'));
    return (
      <Row>
        <Col span={showModal ? 24 : 12}>
          <Form>
            {
              items.map((item) => (
                <Field
                  key={item.name}
                  name={item.name}
                  label={item.label}
                  component={TextField}
                  placeholder={item.label}
                  type='text'
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 18 }}
                />
              ))
            }
            {!showModal && this.getSubmitButton()}
          </Form>
        </Col>
      </Row>
    );
  }

  render() {
    const { showModal } = this.props;
    if (showModal) {
      return (
        <Modal
          visible
          title='Форма редактирования'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            this.getSubmitButton(),
          ]}
        >
          {this.getForm()}
        </Modal>
      );
    }
    return this.getForm();
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Обязательное поле';
  } else if (values.name.length < 4) {
    errors.name = 'Больше 4 символов';
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    initialValues: state.customers.editedRow,
  };
};

const mapDispatchToProps = (dispatch) => {
  const tableName = 'customers';
  return {
    load: (id) => dispatch(getOneItem(tableName, id)),
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log('stateProps, dispatchProps, ownProps', stateProps, dispatchProps, ownProps);
  const { fields } = ownProps;
  let object = {};
  if (fields.some(item => !!item.value)) {
    fields.forEach((item) => (object[item.name] = item.value));
    return {
      ...ownProps,
      ...dispatchProps,
      ...stateProps,
      initialValues: object,
    };
  }
  return {
    ...ownProps,
    ...dispatchProps,
    ...stateProps,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  reduxForm({
    form: 'customers',
    validate,
    keepDirtyOnReinitialize: true,
    enableReinitialize: true,
  })
)(CustomersForm);
