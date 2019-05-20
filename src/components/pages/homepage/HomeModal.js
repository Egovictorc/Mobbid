import React from "react";

export const success = (props) => {
    const handleClose = e => {
        if (e.target.id === "modalClose") {
            console.log(e.currentTarget)
          e.currentTarget.style.width = 0;
        }
      };

  return (
    <div id="homeModal" className="modal__container" onClick={handleClose}>
      <div className="modal modal__success">
        <div id="modalClose" className="modal__close" title="close">
          {" "}
          &times;{" "}
        </div>

        <article className="modal__message">
          <p className="modal__paragraph ">
            Yours request was submitted successfully
          </p>
          <p className="modal__paragraph">You will be contacted shortly</p>
        </article>
      </div>
    </div>
  );
};

// export const failure = () => {
//   const handleClose = e => {
//     if (e.currentTarget.className === "modal__close") {
//         console.log(e.currentTarget)
//       e.target.style.width = 0;
//     }
//   };

//   return (
//     <div className="modal__container">
//       <div className="modal modal__failure">
//         <div className="modal__close" title="close" onClick={handleClose}>
//           {" "}
//           &times;{" "}
//         </div>

//         <article className="modal__message">
//           <p className="modal__paragraph">
//             Yours request was submitted successfully
//           </p>
//           <p className="modal__paragraph">You will be contacted shortly</p>
//         </article>
//       </div>
//     </div>
//   );
// };
