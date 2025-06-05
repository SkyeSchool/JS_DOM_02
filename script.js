var title = document.getElementById("mainTitle");
var subTitle = document.getElementById("subTitle");
var activities = document.getElementsByClassName("activity");
var addActivityBtn = document.getElementById("addActivityBtn");


changeTitleBtn.onclick = function () {
  title.innerText = "Belajar DOM itu Menyenangkan!";
  title.style.color = "red";
}

changeColorBtn.onclick = function () {
  title.style.color = "purple";
}

title.onmouseover = function () {
  title.style.color = "blue";
}

changeSubTitleBtn.onclick = function () {
  subTitle.innerText = "Selamat datang di dunia JavaScript!";
  subTitle.style.color = "green";
}

changeActivityBtn.onclick = function () {
  if (activities.length > 0) {
    activities[0].innerText = "Sudah Mandi dan Siap!";
  }
}

changeActivityBtn2.onclick = function () {
  if (activities.length > 0) {
    activities[1].innerText = "Sudah order Pizza!";
  }
}

    addCommentBtn.onclick = function() {
      var newComment = commentInput.value;
      if (newComment.trim() !== "") {
        var para = document.createElement("p");
        para.innerHTML = newComment;
        commentSection.appendChild(para);
        commentInput.value = "";
      }
    };
