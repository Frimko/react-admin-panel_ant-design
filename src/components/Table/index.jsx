import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from './table';
import AddForm from './Forms/add';
import EditForm from './Forms/edit';

class RoutesTable extends PureComponent {
  render() {
    const { pageName, showModal } = this.props;
    return (
      <Switch>
        <Route exact path={`/${pageName}/`} render={(props) => (<Table {...this.props} {...props}/>)}/>
        <Route exact path={`/${pageName}/page:page/`} render={(props) => (<Table {...this.props} {...props}/>)}/>
        <Route
          exact
          path={`/${pageName}/edit/:id/`}
          render={(props) => {
            const mergeProps = { ...this.props, ...props };

            if (showModal) {
              return (<Table {...mergeProps}><EditForm {...mergeProps}/></Table>);
            } else {
              return (<EditForm {...mergeProps}/>);
            }
          }}
        />
        <Route
          exact
          path={`/${pageName}/add/`}
          render={(props) => {
            const mergeProps = { ...this.props, ...props };
            if (showModal) {
              return (<Table {...mergeProps}><AddForm {...mergeProps}/></Table>);
            } else {
              return (<AddForm {...mergeProps}/>);
            }
          }}
        />
      </Switch>
    );
  }
}
export const propTypes = {
  columns: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageName: PropTypes.string.isRequired,
  editPageComponent: PropTypes.func.isRequired,
  showModal: PropTypes.bool,
};

RoutesTable.propTypes = propTypes;

export default RoutesTable;
