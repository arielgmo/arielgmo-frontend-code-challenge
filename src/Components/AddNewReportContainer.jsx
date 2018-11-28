import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { addReport } from '../actions/reportActions';
import ArticleIcon from '../../references/assets/article.svg';
import TrashIcon from '../../references/assets/trash.svg';
import './AddNewReportContainer.css';

class AddNewReportContainer extends Component {
  static propTypes = {
    platformReducer: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
    onAddReport: PropTypes.func,
  }

  static defaultProps = {
    platformReducer: [],
    onAddReport: () => {},
  }

  state = {
    platform: '',
    startDate: '',
    endDate: '',
  };

  getTitle = () => (
    <div className="add-report-title-container">
      <ArticleIcon className="icon-light-blue" width={28} height={28} />
      <div className="add-report-title-text">
        Solicite novos relatórios
      </div>
    </div>
  );

  getFormComponent = () => (
    <div className="add-report-form-component">
      {this.getPlatformsSelect()}
      {this.getStartDate()}
      {this.getEndDate()}
      {this.getButtons()}
    </div>
  );

  getPlatformsSelect = () => {
    const {
      platformReducer,
    } = this.props;
    return (
      <div className="form-field-container">
        <div className="form-field-title">PLATAFORMAS</div>
        <select
          defaultValue="Select a platform"
          className="platforms-select"
          onChange={event => this.changeState('platform', event.target.value)}
        >
          {
            platformReducer.map(platform => (
              <option key={`platform-option-${platform.id}`} value={platform.id}>
                {platform.name}
              </option>
            ))
          }
        </select>
      </div>
    );
  }

  getStartDate = () => (
    <div className="form-field-container">
      <div className="form-field-title">DATA INICIAL</div>
      <input
        className="date-input"
        type="text"
        placeholder="00/00/0000"
        onChange={event => this.changeState('startDate', moment(event.target.value, 'DD/MM/YYYY').toJSON())}
      />
    </div>
  )

  getEndDate = () => (
    <div className="form-field-container">
      <div className="form-field-title">DATA FINAL</div>
      <input
        className="date-input"
        type="text"
        placeholder="00/00/0000"
        onChange={event => this.changeState('endDate', moment(event.target.value, 'DD/MM/YYYY').toJSON())}
      />
    </div>
  )

  getButtons = () => (
    <div className="buttons-container">
      <button className="clean-filter-button" type="button" onClick={() => console.log('Limpar Filtros')}>
        <TrashIcon className="icon-red" width={16} height={16} />
        <div className="clean-filter-text">Limpar filtros</div>
      </button>
      <button className="add-report-button" type="button" onClick={() => this.sendNewReport()}>
        Solicitar relatório
      </button>
    </div>
  )

  sendNewReport = () => {
    const {
      platform,
      startDate,
      endDate,
    } = this.state;
    const {
      onAddReport,
    } = this.props;
    // could do a final validation here if got time
    onAddReport({
      platform_id: platform,
      start_date: startDate,
      end_date: endDate,
    });
  }

  changeState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <div className="add-report-container">
        {this.getTitle()}
        {this.getFormComponent()}
      </div>
    );
  }
}

export default connect(
  ({ platformReducer }) => ({
    platformReducer,
  }),
  {
    onAddReport: addReport,
  },
)(AddNewReportContainer);
