import React, { PureComponent } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Table as AntTable, Icon, Modal } from 'antd';
import find from 'lodash/find';

class Table extends PureComponent {

  loaded = false;

  editButton = (text, { id }) => {
    const { pageName } = this.props;
    return (
      <Link to={`/${pageName}/edit/${id}/`}><Icon type="edit"/></Link>
    );
  }

  componentWillMount() {
    const { onMount, onChangePage, showModal } = this.props;
    if (!this.isEditPage() || showModal) {
      const curPage = this.getPage();
      this.loaded = true;
      if (curPage > 1) {
        onChangePage(curPage);
      } else {
        onMount();
      }
    }
  }

  componentWillUpdate(nextProps) {
    const { onMount, onChangePage, items } = nextProps;
    if (!this.isEditPage(nextProps) && !items.length && !this.loaded) {
      const curPage = this.getPage();
      if (curPage > 1) {
        onChangePage(curPage);
      } else {
        onMount();
      }
    }
  }

  onChangePage = (page) => {
    const { history, onChangePage, pageName } = this.props;
    history.push(`/${pageName}/page${page}/`);
    onChangePage(page);
  }

  getPage = () => {
    const { match: { params: { page } } } = this.props;
    return +page || 1;
  }

  isEditPage = (props = this.props) => {
    const { match: { params: { id } } } = props;
    return !!id;
  }

  getEditRowId = (props = this.props) => {
    const { match: { params: { id } } } = props;
    return id;
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

  onSubmit = (values) => {
    console.log('propsSubmit', values);
  }

  getItems = () => {
    const { items } = this.props;
    return items.map((item) => ({
      ...item,
      key: item.id
    }));
  }

  getEditPageComponent = () => {
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
        showModal={showModal}
        fields={fields}
        onSubmit={this.onSubmit}
        rowId={id}
      />
    );
  }

  render() {
    const { showModal } = this.props;

    if (this.isEditPage() && !showModal) {
      return this.getEditPageComponent();
    }

    const { pageCount } = this.props;
    const columns = this.getColumns();
    const items = this.getItems();
    return (
      <div>
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
        {
          this.isEditPage() && this.getEditPageComponent()
        }
      </div>
    );
  }
}

const Routes = (routesProps) => {
  const { pageName } = routesProps;
  return (
    <Switch>
      <Route exact path={`/${pageName}/`} render={(props) => (<Table {...routesProps} {...props}/>)}/>
      <Route exact path={`/${pageName}/page:page/`} render={(props) => (<Table {...routesProps} {...props}/>)}/>
      <Route
        exact
        path={`/${pageName}/edit/:id/`}
        render={(props) => {
          return (
            <Table {...routesProps} {...props}/>
          );
        }}
      />
      <Route exact path={`/${pageName}/create/`} render={(props) => (<Table {...routesProps} {...props}/>)}/>
    </Switch>
  );
};

export default Routes;
