import React, { useState } from 'react';
import BasicDatePicker from '../Buttons/AddDate';

export default function ModalEvent() {
  return (
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
               <label htmlFor="event-title" className="col-form-label">Add title</label>
               <input type="text" className="form-control" id="event-title" placeholder='Enter the title'/>
             </div>
             <div className="mb-3">
               <label htmlFor="event-description" className="col-form-label">Add description</label>
               <input type="text" className="form-control" id="event-description" placeholder='Enter the description'/>
             </div>
             <div className="mb-3">
               <label htmlFor="event-img" className="col-form-label">Add image</label>
               <input type="file" accept="image/*" className="form-control" id="event-img" placeholder='Enter the image'/>
             </div>
             <div className="mb-3">
               <label htmlFor="event-Date" className="col-form-label">Add Date</label>
                <BasicDatePicker/>   
             </div>
           </form>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           <button type="button" className="btn btn-primary">Add</button>
         </div>
       </div>
     </div>
   </div>
  )
}
