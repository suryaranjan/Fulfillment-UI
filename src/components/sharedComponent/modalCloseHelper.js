import { useEffect } from "react";

const ModalCloseHelper = ( wrapperRef, modalRef, callBack) => {

    useEffect(() => {
      /*Alert if clicked on outside of element*/
      function handleClickOutside(event) {
        if ( wrapperRef && wrapperRef.current && wrapperRef.current.contains(event.target) && !modalRef.current.contains(event.target)) {
            callBack();
        }
        else if(modalRef.current && !modalRef.current.contains(event.target)){
          callBack();
        }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef, modalRef, callBack]);
  } 

  export default ModalCloseHelper;