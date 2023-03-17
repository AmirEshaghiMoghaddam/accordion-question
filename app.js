// tasks:
// 1st solution.using selectors inside the element
// 2nd solution.traversing the dom

// 1.
// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });


// 2.trafversing DOM
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
     btn.addEventListener('click', function (e) {
          const question = e.currentTarget.parentElement.parentElement;
          question.classList.toggle('show-text');
          // finding siblings
          const allQuestions = question.parentElement.children;
          Array.from(allQuestions).forEach(function (q) {
               if (q !== question) {
                    q.classList.remove('show-text')
               }
          })
     })
})