<template>
  <Teleport to="body">
    <div id="e-book-form" class="modal">
      <div class="modal-content">
        <button @click="$emit('close')" class="close_button">x</button>
        <h3>Thank you for your submission</h3>
        <br />
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 10px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
}

/* The Close Button */

.close_button {
  display: block;
  margin-bottom: 1em;
}

.close_button {
  background-color: var(--pale-blue-1);
  padding: 0.5em;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  left: 0;
  border: 0;
  overflow: hidden;
  padding: 10px;
}

.close_button:hover {
  background-color: var(--deep-blue-2);
  color: #fff;
}

.form {
  background: var(--pale-blue-2);
}

.mktoForm {
  width: unset !important;
  font: inherit !important;

  .mktoFormCol {
    float: none !important;
  }

  .mktoFieldWrap {
    width: 100%;
  }

  .mktoOffset {
    display: none;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  select {
    width: 100% !important;
    border: 0;
    padding: 0.5rem 1rem !important;
  }
  .mktoCheckboxList {
    width: 100% !important;
  }

  .mktoButton {
    background: var(--signature-red) !important;
    border: 0 !important;
    &:hover,
    &:focus {
      background-color: var(--mid-red-1) !important;
    }
    &:active {
      background-color: var(--deep-red-2) !important;
    }
  }
}
</style>
