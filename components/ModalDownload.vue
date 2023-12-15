<template>
  <Teleport to="body">
    <div id="e-book-download" class="modal">
      <div class="modal-content">
        <button @click="$emit('close')" class="close_button">x</button>
        <h3>Thank you for your submission</h3>
        <br />
        <Button
          @click="$emit('close')"
          title="Download eBook"
          url="/pdfs/Lenovo_NVIDIA_Retail_Restaurant_Ebook.pdf"
          color="red"
          id="button_modal_download_ebook"
        >
          Download eBook
        </Button>
      </div>
    </div>
  </Teleport>
</template>
