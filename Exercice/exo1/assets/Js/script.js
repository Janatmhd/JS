
// const message = prompt("Quel est ton nom ?"); // Demande le nom de l'utilisateur
// alert("Bienvenue" + message + " !"); 

// $("#masAff").click(function(){
//     $("#paraMas").toggleClass();
// });

$(document).ready(function() { 
    $('#addTask').click(function() {
      const taskText = $('#taskInput').val();

      if (taskText.trim() !== "") {
        const newTask = $('<li></li>').text(taskText);

        const doneBtn = $('<button>✓</button>').click(function() {
          newTask.toggleClass('completed');
        });

        const deleteBtn = $('<button>🗑</button>').click(function() {
          newTask.remove();
        });

        newTask.append(" ").append(doneBtn).append(" ").append(deleteBtn);
        $('#taskList').append(newTask);
        $('#taskInput').val(""); // Réinitialiser le champ
      }
    });
  });