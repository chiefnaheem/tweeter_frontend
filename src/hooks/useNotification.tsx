import Swal from "sweetalert2";

export const notify = (
  status: any,
  title: string,
  reload: any
) => {
  Swal.fire({
    icon: status,
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
  if (reload===true) {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }else if(reload===false) {
    return 
  }
  else{
    if(reload==='login'){
    setTimeout(() => {
      window.location.href='login';
    }, 3000);
    }
  }
};
