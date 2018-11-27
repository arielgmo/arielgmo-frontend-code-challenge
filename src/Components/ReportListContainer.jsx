import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import CheckmarkIcon from '../../references/assets/checkmark.svg';
import CrossIcon from '../../references/assets/cross.svg';
import DownloadIcon from '../../references/assets/download.svg';
import TrashIcon from '../../references/assets/trash.svg';
import ToDoIcon from '../../references/assets/to-do.svg';
import './ReportListContainer.css';


const getDataColumn = reports => (
  <div className="data-column-container">
    <div className="column-title">
      DATA
    </div>
    {
      reports.map(report => (
        <div className="cell-container">
          {moment(report.filters.start_date).format('DD/MM/YYYY')}
        </div>
      ))
    }
  </div>
);

const getDetailsColumn = reports => (
  <div className="details-column-container">
    <div className="column-title">
      DETALHES
    </div>
    {
      reports.map(report => (
        <div className="cell-container">
          {report.name}
        </div>
      ))
    }
  </div>
);

const getStatusColumn = reports => (
  <div className="status-column-container">
    <div className="column-title">
      STATUS
    </div>
    {
      reports.map((report) => {
        if (report.status === 'Created') {
          return (
            <div className="cell-container">
              <CheckmarkIcon className="icon-green" width={20} height={20} />
              <p>Concluído</p>
            </div>
          );
        }
        return (
          <div className="cell-container">
            <CrossIcon className="icon-red" width={20} height={20} />
            <p>Erro</p>
          </div>
        );
      })
    }
  </div>
);

const getDownloadButtonColumn = reports => (
  <div className="download-column-container">
    <div className="icon-column-title">
      DOWNLOAD
    </div>
    {
      reports.map((report) => {
        if (report.status === 'Created') {
          return (
            <div className="icon-cell-container">
              <DownloadIcon className="icon-light-blue" width={20} height={20} />
            </div>
          );
        }
        return {};
      })
    }
  </div>
);

const getDeleteButtonColumn = reports => (
  <div className="delete-column-container">
    <div className="icon-column-title">
      EXCLUIR
    </div>
    {
      reports.map(report => (
        <div className="icon-cell-container">
          <button className="delete-button" type="button" onClick={() => console.log(`Remove Action for ${report.name}`)}>
            <TrashIcon className="icon-red" width={20} height={20} />
          </button>
        </div>
      ))
    }
  </div>
);

const ReportListContainer = (props) => {
  const {
    reportReducer,
  } = props;

  return (
    <div>
      <div className="report-list-title-container">
        <ToDoIcon className="icon-light-blue" width={28} height={28} />
        <div className="report-list-title-text">
          Histórico de relatórios
        </div>
      </div>
      <div className="report-list-container">
        {getDataColumn(reportReducer)}
        {getDetailsColumn(reportReducer)}
        {getStatusColumn(reportReducer)}
        {getDownloadButtonColumn(reportReducer)}
        {getDeleteButtonColumn(reportReducer)}
      </div>
    </div>
  );
};

export default connect(
  ({ reportReducer }) => ({
    reportReducer,
  }),
)(ReportListContainer);
