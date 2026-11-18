class Student {
  submitAssignment() {
    console.log("Student can submit the assignments");
  }

  attendLiveTest() {
    console.log("Student can submit live test");
  }

  leaveReview() {
    console.log("Student can submit feedback");
  }
}

const s1 = new Student();
s1.leaveReview();
s1.attendLiveTest();
s1.submitAssignment();
