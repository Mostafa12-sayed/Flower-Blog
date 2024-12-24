$(document).ready(function () {
  $("#submitComment").on("click", addComment);

  function addComment() {
    var message = document.getElementById("message");
    message.innerHTML = "";
    var comments = $("#comments");
    var comment = $("#inputComment").val();
    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var website = $("#inputWebsite").val();
    if (comment && name && email) {
      console.log(comment, name, email, website);
      comments.append(
        `<div class="comment">
          <p>
           ${comment}
          </p>
          <div class="comment-author">
            <span class="author">${name}</span>
            <span>on${new Date().toLocaleDateString()} </span>
          </div>
        </div>`
      );
      $("#inputComment").val("");
      $("#inputName").val("");
      $("#inputEmail").val("");
      $("#inputWebsite").val("");
      message.innerHTML = `  
      <div class="alert alert-success alert-dismissible">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Sucsse!</strong> Commmented Added Successfully.
      </div>`;
    } else {
      message.innerHTML = `  
      <div class="alert alert-danger alert-dismissible">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Error!</strong> Please fill all fields.
      </div>`;
    }
  }
});
