import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table as AntTable, Icon, Modal, Button as AntButton, Row, Col } from 'antd';
import DropOption from 'components/DropOption';
import { propTypes } from './';
import { TableHeaderForm } from './styled';

const DELETE = 'delete';
const UPDATE = 'update';

class Table extends PureComponent {

  static propTypes = {
    ...propTypes,
    children: PropTypes.any,
    history: PropTypes.any, // routes prop
  }

  editButton = (text, { id }) => {
    return (
      <DropOption
        onMenuClick={e => this.handleMenuClick(e, id)}
        menuOptions={[
          { key: UPDATE, name: (<span><Icon type="edit"/> Обновить</span>) },
          { key: DELETE, name: (<span><Icon type="delete"/> Удалить</span>) },
        ]}
      />
    );
  }

  handleMenuClick = (e, id) => {
    const { onDelete } = this.props;
    if (e.key === UPDATE) {
      this.showEditForm(id);
    } else if (e.key === DELETE) {
      Modal.confirm({
        title: 'Вы точно хотите удалить запись?',
        okText: 'Да',
        okType: 'danger',
        cancelText: 'Нет',
        onOk() {
          onDelete(id);
        },
      });
    }
  }

  showEditForm = (id) => {
    const { history, pageName } = this.props;
    history.push(`/${pageName}/edit/${id}/`);
  }

  showAddForm = () => {
    const { pageName, history } = this.props;
    history.push(`/${pageName}/add/`);
  }

  onChangePage = (page) => {
    const { history, onChangePage, pageName } = this.props;
    history.push(`/${pageName}/page${page}/`);
    onChangePage(page);
  }

  componentWillMount() {
    const { onChangePage, showModal } = this.props;
    if (!this.isEditPage() || showModal) {
      const curPage = this.getPage();
      if (curPage > 1) {
        onChangePage(curPage);
      }
    }
  }

  componentWillUpdate(nextProps) {
    const { onChangePage, items } = nextProps;
    if (!this.isEditPage(nextProps) && !items.length) {
      const curPage = this.getPage();
      if (curPage > 1) {
        onChangePage(curPage);
      }
    }
  }

  getPage = () => {
    const { match: { params: { page } } } = this.props;
    return +page || 1;
  }

  isEditPage = (props = this.props) => {
    const { match: { params: { id } } } = props;
    return !!id;
  }

  getColumns = () => {
    const { columns } = this.props;
    const newColumns = [...columns];
    newColumns.push({
      title: 'operation',
      dataIndex: 'operation',
      width: '5%',
      render: this.editButton,
    });
    return newColumns;
  }

  getItems = () => {
    const { items } = this.props;
    return items.map((item) => ({
      ...item,
      key: item.id,
    }));
  }

  render() {
    const { pageCount, children } = this.props;
    const columns = this.getColumns();
    const items = this.getItems();

    return (
      <Row>
        <TableHeaderForm>
          <AntButton
            type='default'
            icon='plus'
            onClick={this.showAddForm}
          >
            Добавить
          </AntButton>
        </TableHeaderForm>
        <Col span={24}>
          <AntTable
            bordered
            dataSource={items}
            columns={columns}
            size="small"
            pagination={{
              defaultCurrent: this.getPage(),
              showQuickJumper: true,
              defaultPageSize: 30,
              total: pageCount * 30,
              onChange: this.onChangePage,
            }}
          />
        </Col>
        {children}
      </Row>
    );
  }
}

export default Table;
