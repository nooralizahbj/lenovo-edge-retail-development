<template>
  <Teleport to="body">
    <div id="e-book-form" class="modal">
      <div class="modal-content">
        <button @click="$emit('close')" class="close_button">x</button>

        <div class="ebbok-detail">
          <div class="desc-side">
            <h2>Download eBook</h2>
            <br />
            <p>
              Before you can download the eBook, we would like a few details
              from you:
            </p>
          </div>
          <div class="image-side">
            <img src="/images/e-guide-mockup2.png" />
          </div>
        </div>

        <div class="form__form">
          <form id="mktoForm_30793"></form>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script>
export default {
  mounted() {
    // Marketo form
    const mkto = document.createElement('script')
    document.body.append(mkto)
    mkto.addEventListener('load', () => {
      MktoForms2.loadForm('//pages.lenovo.com', '183-WCT-620', 30793)
    })
    mkto.src = '//pages.lenovo.com/js/forms2/js/forms2.min.js'
  },
}
</script>
<style lang="scss">
.ebbok-detail {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-content: center;
  justify-content: center;
}

.desc-side {
  grid-area: 1 / 1 / 2 / 3;
}
.image-side {
  grid-area: 1 / 3 / 2 / 5;
  text-align: left;
}
.desc-side,
.image-side {
  display: flex;
  flex-direction: column;
  align-content: left;
  justify-content: center;
}

.desc-side h2 {
  font-size: 2rem;
  margin-bottom: 0.65rem;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
}

/* Modal Content */
.modal-content {
  background-color: var(--pale-blue-2);
  margin: auto;
  padding: 20px;
  width: 40%;
  text-align: center;
  position: relative;
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

@media (max-width: 800px) {
  .modal-content {
    background-color: var(--pale-blue-2);
    margin: auto;
    padding: 20px;
    width: 80%;
    text-align: center;
    position: relative;
  }
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
    background-color: #fff;
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
