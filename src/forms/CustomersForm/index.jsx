import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Row, Col, Modal, Spin, Alert } from 'antd';
import Button from 'components/Button';
import TextField from 'components/reduxForm/TextField';
import { getItem } from 'actions/customers';

/* eslint react/prop-types: 0 */
class CustomersForm extends PureComponent {

  componentDidMount() {
    const { fields, load, rowId } = this.props;
    if (this.isEditForm() && !fields.some(item => !!item.value)) {
      load(rowId);
    }
  }

  isEditForm = () => (this.props.type === 'edit')

  getSubmitButton = () => {
    const { handleSubmit, valid, dirty, pristine, submitting, showModal, loading } = this.props;

    return (
      <Button
        key='save'
        keyForm='save'
        inModalFooter={showModal}
        buttonProps={{
          type: 'primary',
          onClick: handleSubmit,
          disabled: ((submitting && !dirty && pristine) || !valid || loading),
        }}
        formItemProps={{
          wrapperCol: { span: 18, offset: 5 },
        }}
        text={this.isEditForm ? 'Обновить' : 'Добавить'}
      />
    );
  }

  getForm = () => {
    const { fields, showModal, errorText, successText, loading } = this.props;
    const items = fields.filter((item) => (item.name !== 'id'));
    return (
      <Spin spinning={loading}>
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
            {
              errorText && (
                <Alert
                  message="Ошибка"
                  description={errorText}
                  type="error"
                  showIcon
                />
              )
            }
            {
              successText && (
                <Alert
                  description={successText}
                  type="success"
                  showIcon
                />
              )
            }
          </Col>
        </Row>
      </Spin>

    );
  }

  hideModal = () => {
    const { loading, curPageTable, history } = this.props;
    if (!loading) {
      if (curPageTable > 1) {
        history.push(`/customers/page${curPageTable + 1}/`);
      } else {
        history.push('/customers/');
      }
    }
  }

  render() {
    const { showModal } = this.props;
    if (showModal) {
      return (
        <Modal
          visible
          title={this.isEditForm() ? 'Форма редактирования' : 'Форма добавления'}
          onOk={this.hideModal}
          onCancel={this.hideModal}
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
  const { form } = state.customers;
  const { table } = state.customers;
  return {
    loading: form.loading,
    errorText: form.errorText,
    successText: form.successText,
    curPageTable: table.curPage,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { fields, type } = ownProps;
  const objectProps = {
    load: (id) => dispatch(getItem(id)),
  };
  if (type === 'edit' && fields.some(item => !!item.value)) {
    let initialValues = {};
    fields.forEach((item) => (initialValues[item.name] = item.value));
    objectProps.initialValues = initialValues;
  }
  return objectProps;
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    validate,
    form: 'customers',
    keepDirtyOnReinitialize: true,
    enableReinitialize: true,
  })
)(CustomersForm);
