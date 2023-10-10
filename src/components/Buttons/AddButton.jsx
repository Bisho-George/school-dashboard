import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AddButton.css';

const AddEventButton = ({ btnName }) => {
  return (
    <div>
      <Button className="btnAdd" data-bs-toggle="modal" data-bs-target="#Add-event-model">
        <i className="fas fa-plus pe-2"></i>
        Add {btnName}
      </Button>

      <div className="modal fade" id="Add-event-model" tabIndex="-1" aria-labelledby="Add-event" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="Add-postModalLabel">Add Event</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="event-title" className="col-form-label">Title:</label>
                  <input type="text" className="form-control" id="event-title"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="event-body" className="col-form-label">Body:</label>
                  <textarea className="form-control" id="event-body" rows="5"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="event-img" className="col-form-label">Image:</label>
                  <input type="file" accept="image/*" className="form-control" id="event-img"/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventButton;
