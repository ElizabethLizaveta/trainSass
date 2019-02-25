const blocksGeneration = {
  blocks() {
    const container5 = $('.task-5').find('.container');

    function createBlocks(block) {
      for (let i = 0; i < 40; i += 1) {
        block.append('<div class="inner-block"></div>');
      }
    }

    createBlocks(container5);
  },
};

export default blocksGeneration;
