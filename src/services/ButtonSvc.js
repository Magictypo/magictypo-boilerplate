export default {
  onClicked(buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Memuat...';
  },
  onFinish(buttonId, done) {
    const button = document.getElementById(buttonId);
    button.disabled = false;
    button.innerHTML = done;
  },
};
