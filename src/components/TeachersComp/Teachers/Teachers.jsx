import React, { useState } from 'react';
import styles from './Teachers.module.css';
import TeacherImg1 from '../../../assets/teacher1.jpg';
import TeacherImg2 from '../../../assets/teacher2.jpg';

function Teachers() {

  const [teachers, setTeachers] = useState([
    { image: TeacherImg1, name: 'Mazen', subject: 'science', grade: 'A+', classNum: '2-3', userName: 'mazen', pass: 'mazen11' },
    { image: TeacherImg2, name: 'Abderhman', subject: 'math', grade: 'B+', classNum: '1-5', userName: 'momtaz', pass: 'momtaz22' },
  ])

  return (
    <>
      <div className="my-4">
        <div className="row">
          {teachers.map((teacher) => (
            <div key={teacher.userName} className="col-lg-2 col-md-4">
              <div className={`${styles.teacher} p-3 rounded-2 text-center`}>
                <img
                  src={teacher.image}
                  className="w-100"
                  alt={`${teacher.name} teacher`}
                />
                <h3 className="fs-4 my-3">{teacher.name}</h3>
                <p className="fs-5">class: {teacher.classNum}</p>
              </div>
            </div>
          ))}
          <div className={`col-lg-2 rounded-2 col-md-4`}>
            <div className={`${styles.add} p-3 rounded-2`}>
              <a className="add p-2 btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-plus fs-3"></i>
                <p className="mt-3">Add Teacher</p>
              </a>
            </div>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form id="add-form">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="my-2">
                                  <label htmlFor="image">Add teacher picture</label>
                                  <input placeholder="Upload picture" name="image" id='image' className="form-control mt-1 py-2" type="file" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="name">Teacher name</label>
                                  <input placeholder="Enter teacher full name" name="name" id='name' className="form-control mt-1 py-2" type="text" />
                                </div>
                                <div className="my-2">
                                  <label htmlFor="subject">Subject</label>
                                  <input placeholder="subject" name="subject" id='subject' className="form-control mt-1 py-2" type="text" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button data-bs-dismiss="modal" type="submit" className="btn btn-info"><i className="fas fa-plus-circle"></i> Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
      </div>
    </>
  );
}

export default Teachers
