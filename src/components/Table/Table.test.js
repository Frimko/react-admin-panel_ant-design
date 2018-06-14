import React from 'react';
import renderer from 'react-test-renderer';

import Table from './table';

const items = [
  {
    id: 12691,
    name: 'catwomen',
    address: 'DS',
    phone: '666',
    createdAt: '2018-06-14T10:07:07.576Z',
    updatedAt: '2018-06-14T10:07:07.576Z',
  },
  {
    id: 12692,
    name: 'catwomen',
    address: 'DS',
    phone: '666',
    createdAt: '2018-06-14T10:07:07.576Z',
    updatedAt: '2018-06-14T10:07:07.576Z',
  },
  {
    id: 12693,
    name: 'catwomen',
    address: 'DS',
    phone: '666',
    createdAt: '2018-06-14T10:07:07.576Z',
    updatedAt: '2018-06-14T10:07:07.576Z',
  },
  {
    id: 12694,
    name: 'catwomen',
    address: 'DS',
    phone: '666',
    createdAt: '2018-06-14T10:07:07.576Z',
    updatedAt: '2018-06-14T10:07:07.576Z',
  },
  {
    id: 12695,
    name: 'catwomen',
    address: 'DS',
    phone: '666',
    createdAt: '2018-06-14T10:07:07.576Z',
    updatedAt: '2018-06-14T10:07:07.576Z',
  },
  {
    id: 12696,
    name: 'catwomen',
    address: 'DS',
    phone: '666',
    createdAt: '2018-06-14T10:07:07.576Z',
    updatedAt: '2018-06-14T10:07:07.576Z',
  },
];

describe('test Table component', () => {
  it('+snapshot Table component', () => {
    const columns = [
      {
        title: 'Ид',
        dataIndex: 'id',
        width: '5%',
      },
      {
        title: 'Имя',
        dataIndex: 'name',
        width: '25%',
      },
      {
        title: 'Адресс',
        dataIndex: 'address',
        width: '15%',
      },
      {
        title: 'Телефон',
        dataIndex: 'phone',
        width: '40%',
      },
    ];

    const renderedValue = renderer.create(
      <Table
        showModal
        items={items}
        pageCount={20}
        columns={columns}
        pageName='customers'
        onChangePage={() => ({})}
        editPageComponent={() => ({})}
        onAdd={() => ({})}
        onEdit={() => ({})}
        onDelete={() => ({})}
        match={{params: {}}}
      />,
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
