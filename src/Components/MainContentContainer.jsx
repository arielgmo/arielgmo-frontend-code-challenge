import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddNewReportContainer from './AddNewReportContainer';
import ReportListContainer from './ReportListContainer';
import { fetchReports } from '../actions/reportActions';
import { fetchPlatforms } from '../actions/platformActions';

class MainContentContainer extends Component {
  static propTypes = {
    onFetchReports: PropTypes.func,
    onFetchPlatforms: PropTypes.func,
  }

  static defaultProps = {
    onFetchReports: () => {},
    onFetchPlatforms: () => {},
  }

  componentDidMount() {
    const {
      onFetchReports,
      onFetchPlatforms,
    } = this.props;
    onFetchReports();
    onFetchPlatforms();
  }

  render() {
    return (
      <div>
        <AddNewReportContainer />
        <ReportListContainer />
      </div>
    );
  }
}

export default connect(
  null,
  { onFetchReports: fetchReports, onFetchPlatforms: fetchPlatforms },
)(MainContentContainer);
