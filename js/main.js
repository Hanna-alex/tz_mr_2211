$(document).ready(function () {
  // добавляем правило для валидации 
  jQuery.validator.addMethod("checkMask", function (value, element) {
    return /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
  });

  jQuery.validator.addMethod("checkallowedchars", function (value) {
    return /^[a-zA-Zа-яёА-ЯЁ ]+$/.test(value);
  });

  $(".phone").mask("+7(999)999-99-99");

  $(".form").each(function () {
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
          checkallowedchars: true
        },
        phone: {
          required: true,
          checkMask: true
        }
      },
      messages: {
        name: {
          required: "Заполните поле!",
          minlength: "Имя не короче 3-х букв",
          checkallowedchars: "Только буквы"
        },
        phone: {
          required: "Заполните поле!",
          checkMask: "+7 (999) 999-99-99"
        }

      },

      submitHandler: function (form) {
        form.reset();
      }
    });

  });



  $('.slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    easing: 'ease',
    infinite: false,
  });


});


///


const dragAndDrop = () => {
  const blockDrop = document.querySelector('.advantage__wrapper');
  const elemDrop = document.querySelectorAll('.advantage__card');
  let draggedItem = null;
  let droppedItem = null;


  const dragStart = function (evt) {
    this.classList.add('hide');
    draggedItem = this;

  }

  const dragEnd = function (evt) {
    this.classList.remove('hide');
    draggedItem = null;
  }

  const dragOver = function (evt) {
    evt.preventDefault()
  }

  const dragEnter = function (evt) {
    evt.preventDefault();
    // this.classList.add('hovered');
  }

  const dragLeave = function (evt) {
    // this.classList.remove('hovered');
  }
  const dragDrop = function (evt) {
    if (droppedItem) {
      if (droppedItem.parentElement === draggedItem.parentElement) {
        const children = Array.from(droppedItem.parentElement.children);
        const draggedIndex = children.indexOf(draggedItem);
        const droppedIndex = children.indexOf(droppedItem);

        if (draggedIndex > droppedIndex) {
          draggedItem.parentElement.insertBefore(draggedItem, droppedItem)
        } else {
          draggedItem.parentElement.insertBefore(draggedItem, droppedItem.nextElementSibling)
        }
      } else {
        this.insertBefore(draggedItem, droppedItem.nextElementSibling)
      }
    } else {
      this.append(draggedItem)
      this.classList.remove('hovered');
    }

  }

  blockDrop.addEventListener('dragover', dragOver)
  blockDrop.addEventListener('dragenter', dragEnter)
  blockDrop.addEventListener('dragleave', dragLeave)
  blockDrop.addEventListener('drop', dragDrop)


  elemDrop.forEach(elem => {
    elem.addEventListener('dragstart', dragStart);
    elem.addEventListener('dragend', dragEnd);
    elem.addEventListener('dragenter', () => {
      if (elem !== droppedItem) {
        droppedItem = elem;
      }

    });
    elem.addEventListener('dragleave', () => {
      droppedItem = null;
    })
  });


}

// const clickHeading = () => {
//   const headingElems = document.querySelectorAll('.advantage__title');

//   headingElems.forEach(elem => {
//     elem.addEventListener('click',)
//   })
// }

dragAndDrop()