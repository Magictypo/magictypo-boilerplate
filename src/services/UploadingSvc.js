export default {
  onUpload(formId) {
    const formUpload = document.getElementById(formId);
    formUpload.disabled = true;
    formUpload.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
  },
  onFinish(formId) {
    const formUpload = document.getElementById(formId);
    formUpload.disabled = false;
  },
};
