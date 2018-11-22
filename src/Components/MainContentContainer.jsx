import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchReports } from '../actions/reportActions';

class MainContentContainer extends Component {
  static propTypes = {
    onFetchReports: PropTypes.func,
  }

  static defaultProps = {
    onFetchReports: () => {},
  }

  componentDidMount() {
    const {
      onFetchReports,
    } = this.props;
    onFetchReports();
  }

  render() {
    return (
      <div>
        MainContentContainer
      </div>
    );
  }
}

export default connect(null, { onFetchReports: fetchReports })(MainContentContainer);
