import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {

  const title = "Estes são os Proffys disponíveis.";

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={title} >
        
      </PageHeader>
    </div>
  );
}

export default TeacherList;