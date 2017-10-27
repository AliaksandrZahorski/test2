import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserList } from 'actions';
import Spinner, { BOUNCE_SPINNER } from 'components/Common/Spinner';
import CustomTable from 'components/Common/Table';

const mapStateToProps = ({ user, locales }) => ({
  isFetching: user.isFetching,
  captions: locales.currentLocale,
  userList: user.users,
});

class UserTable extends Component {

  static propTypes = {
    getUserList: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    userList: PropTypes.array.isRequired,
    captions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    if (this.props.isFetching) {
      return <Spinner type={BOUNCE_SPINNER} />;
    }

    const columns = [
      {
        dataKey: 'deviceType',
        label: 'Device Type',
      }, {
        dataKey: 'deviceID',
        label: 'Device ID',
        sortable: true,
        // cellRenderer: ({item, dataKey}) =>
        //          <Button >Default</Button>,
      }, {
        dataKey: 'name',
        label: 'Name',
        sortable: true,
      }, {
        dataKey: 'action',
        label: 'Actions',
        // cellRenderer: () => <MoreVertIcon />,
      }];

    const data = [
      { deviceType: 'Tag', deviceID: 1, name: 'Tag For sending an ' },
      { deviceType: 'Tag', deviceID: 1, name: 'Tag For sending an ' },
      { deviceType: 'Tag', deviceID: 1, name: 'Tag For sending an ' },
      { deviceType: 'Tag', deviceID: 1, name: 'Tag For sending an ' },
      { deviceType: 'Tag', deviceID: 1, name: 'Tag For sending an ' },
    ];


    return (
      <div>
        <div className="row opacityShow">
          <div className="column twelve">
            <div className="pnl">
              <div className="pnlBody">
                <CustomTable data={data} columns={columns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    getUserList,
  }
)(UserTable);
