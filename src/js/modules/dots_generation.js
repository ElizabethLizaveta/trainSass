const dotsGeneration = {
  dots() {
    const container2 = $('.task-2').find('.container');
    const container3 = $('.task-3').find('.container');
    const container4 = $('.task-4').find('.container');
    const container10 = $('.task-10').find('.container');

    function createDots(block, amount) {
      for (let i = 0; i < amount; i += 1) {
        block.append('<div class="dot"></div>');
      }
    }

    createDots(container2, 850);
    createDots(container3, 850);
    createDots(container4, 850);
    createDots(container10, 200);
  },
};

export default dotsGeneration;
