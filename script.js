const questionEls = document.querySelectorAll('.accordion__btn');

questionEls.forEach(item => {
  item.addEventListener('click', e => {
    // Check each questions to see if its answer is expanded or collapsed
    for (const questionEl of questionEls) {
      const answerEl = questionEl.parentElement.nextElementSibling;
      // If this is the question being clicked...
      if (questionEl === e.target) {
        // ...and if the answer to this question is currently expanded...
        if (answerEl.classList.contains('accordion__grid-container--expanded')) {
          // ...then collapse the answer
          questionEl.setAttribute('aria-expanded', 'false');
          answerEl.setAttribute('aria-hidden', 'true');
          answerEl.classList.remove('accordion__grid-container--expanded');
        }
        // But if the answer to this question is not currently expanded...
        else {
          // ...then expand the answer
          questionEl.setAttribute('aria-expanded', 'true');
          answerEl.setAttribute('aria-hidden', 'false');
          answerEl.classList.add('accordion__grid-container--expanded');
        }
      }
      // Else if this is not the question being clicked and its answer is currently expanded...
      else if (answerEl.classList.contains('accordion__grid-container--expanded')) {
        // ...then collapse the answer
        questionEl.setAttribute('aria-expanded', 'false');
        answerEl.setAttribute('aria-hidden', 'true');
        answerEl.classList.remove('accordion__grid-container--expanded');
      }
    }
  });
});