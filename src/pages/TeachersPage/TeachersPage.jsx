import React from "react";
import Subtitle from "../../components/TeachersComp/Subtitle/Subtitle";
import Teachers from "../../components/TeachersComp/Teachers/Teachers";

function TeachersPage() {
  return (
    <>
      <div className="mx-4 w-100">
        <Subtitle
          title="Science"
          icon={<i className="fa-solid fa-flask"></i>}
        />

      <Teachers />

        <Subtitle
          title="Math"
          icon={<i className="fa-solid fa-plus-minus"></i>}
        />

        <Teachers />
      </div>
    </>
  );
}

export default TeachersPage;
