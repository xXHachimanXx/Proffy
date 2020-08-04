import React from 'react';
import PageHeader from '../../components/PageHeader';



function TeacherForm() {

  const title = "Que incrível que você quer dar aulas.";

  return (

    <div id="page-teacher-form" className="container">
      <PageHeader title={title} />
    </div>
  );
}

export default TeacherForm;