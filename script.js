function getAdvice() {
  $.getJSON('https://api.adviceslip.com/advice', (res) => {
    try {
      const { id, advice } = res.slip;
      $('#advice-id').text(`ADVICE #${id}`);
      $('#advice-content').text(`"${advice}"`);
    } catch (error) {}
  });
}
$(() => {
  getAdvice();
  $('.btn').on('click', () => {
    getAdvice();
  });
});
