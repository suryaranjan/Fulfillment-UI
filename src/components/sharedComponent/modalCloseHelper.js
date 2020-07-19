import { useEffect } from "react";

const ModalCloseHelper = ( wrapperRef, modalRef, callBack, childRef) => {
  console.log("coming", childRef) 
    useEffect(() => {
      /*Alert if clicked on outside of element*/
      const handleClickOutside = (event) => {
        if(childRef){
          return;
        }
        if ( wrapperRef && wrapperRef.current && wrapperRef.current.contains(event.target) && !modalRef.current.contains(event.target)) { 
          callBack();
        }   
        // else if(modalRef.current && !modalRef.current.contains(event.target)){
        //   console.log("coming2")
        //   callBack();
        // }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef, modalRef, childRef, callBack]);
  } 

  export default ModalCloseHelper;