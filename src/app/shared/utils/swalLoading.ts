import Swal from 'sweetalert2';

export const showLoading = () => {
  Swal.fire({
    title: 'Cargando...',
    text: 'Por favor, espere.',
    showConfirmButton: false,
    onOpen: () => {
      Swal.showLoading();
    }
  });
};
